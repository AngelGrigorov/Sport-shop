const express = require('express')
const authCheck = require('../config/auth-check')
const power = require('../models/power')

const router = new express.Router()

function validatepowerCreateForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.weight = parseInt(payload.weight)
  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'product name must be at least 3 symbols.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 200) {
    isFormValid = false
    errors.description = 'Description must be at least 10 symbols and less than 120 symbols.'
  }

  if (!payload || !payload.weight || payload.weight < 0 || payload.weight >= 15000) {
    isFormValid = false
    errors.year = 'Size must be between valid.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
    isFormValid = false
    errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const powerObj = req.body
  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validatepowerCreateForm(powerObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    powerObj.ingredients = powerObj.ingredients.split(',').filter(i => i !== '')

    power
      .create(powerObj)
      .then((createdpower) => {
        res.status(200).json({
          success: true,
          message: 'product added successfully.',
          data: createdpower
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong :( Check the form for errors.'
        if (err.code === 11000) {
          message = 'product with the given name already exists.'
        }
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.post('/edit/:id', authCheck, (req, res) => {
  if (req.user.roles.indexOf('Admin') > -1) {
    const powerId = req.params.id
    const powerObj = req.body
    const validationResult = validatepowerCreateForm(powerObj)
    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    powerObj.ingredients = powerObj.ingredients.split(',').filter(i => i !== '')

    power
      .findById(powerId)
      .then(existingpower => {
        existingpower.name = powerObj.name
        existingpower.ingredients = powerObj.ingredients
        existingpower.weight = powerObj.weight
        existingpower.description = powerObj.description
        existingpower.price = powerObj.price
        existingpower.image = powerObj.image

        existingpower
          .save()
          .then(editedpower => {
            res.status(200).json({
              success: true,
              message: 'product edited successfully.',
              data: editedpower
            })
          })
          .catch((err) => {
            console.log(err)
            let message = 'Something went wrong :( Check the form for errors.'
            if (err.code === 11000) {
              message = 'product with the given name already exists.'
            }
            return res.status(200).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong :( Check the form for errors.'
        return res.status(200).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.get('/all', (req, res) => {
  power
    .find()
    .then(powers => {
      res.status(200).json(powers)
    })
})

router.post('/review/:id', authCheck, (req, res) => {
  const id = req.params.id
  const review = req.body.review
  const username = req.user.username

  if (review.length < 4) {
    const message = 'Review must be at least 4 characters long.'
    return res.status(200).json({
      success: false,
      message: message
    })
  }

  power
    .findById(id)
    .then(power => {
      if (!power) {
        return res.status(200).json({
          success: false,
          message: 'Product not found.'
        })
      }

      let reviewObj = {
        review,
        createdBy: username
      }

      let reviews = power.reviews
      reviews.push(reviewObj)
      power.reviews = reviews
      power
        .save()
        .then((power) => {
          res.status(200).json({
            success: true,
            message: 'Review added successfully.',
            data: power
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :( Check the form for errors.'
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :( Check the form for errors.'
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/like/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  power
    .findById(id)
    .then(power => {
      if (!power) {
        const message = 'Product not found.'
        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = power.likes
      if (!likes.includes(username)) {
        likes.push(username)
      }
      power.likes = likes
      power
        .save()
        .then((power) => {
          res.status(200).json({
            success: true,
            message: 'Product liked successfully.',
            data: power
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.post('/unlike/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  power
    .findById(id)
    .then(power => {
      if (!power) {
        let message = 'Product not found.'
        return res.status(200).json({
          success: false,
          message: message
        })
      }

      let likes = power.likes
      if (likes.includes(username)) {
        const index = likes.indexOf(username)
        likes.splice(index, 1)
      }

      power.likes = likes
      power
        .save()
        .then((power) => {
          res.status(200).json({
            success: true,
            message: 'Product unliked successfully.',
            data: power
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(200).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(200).json({
        success: false,
        message: message
      })
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  if (req.user.roles.indexOf('Admin') > -1) {
    power
      .findById(id)
      .then((power) => {
        power
          .remove()
          .then(() => {
            return res.status(200).json({
              success: true,
              message: 'product deleted successfully!'
            })
          })
      })
      .catch(() => {
        return res.status(200).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(200).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

module.exports = router
