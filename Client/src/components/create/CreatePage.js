import React, {Component} from 'react'
import Input from '../auth/Input'
import toastr from 'toastr'
import createProductValidator from '../../utils/createProductValidator'
import {createProductValidationFunc} from '../../utils/formValidator'
import {createProductAction} from '../../actions/productsActions'
import {redirectAction} from '../../actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class CreatePage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      ingredients: '-----',
      description: '',
      weight: '1',
      price: '',
      image: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.createProductError.hasError) {
      toastr.error(nextProps.createProductError.message)
    } else if (nextProps.createProductSuccess) {
      this.props.redirect();
      toastr.success('product created successfully');
      this.props.history.push('/products')
    }
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault();
    if (!createProductValidator(this.state.name, this.state.ingredients,
      this.state.description, this.state.image, this.state.weight, this.state.price)) {
      return
    }
    this.props.createProduct(this.state.name, this.state.ingredients,
      this.state.description, this.state.image, this.state.weight, this.state.price)
  }

  render () {
    let validObj = createProductValidationFunc(
      this.state.name,
      this.state.ingredients,
      this.state.description,
      this.state.image,
      this.state.weight,
      this.state.price
    );

    return (
      <div className='container'>
        <div className='row space-top'>
          <div className='col-md-12'>
            <h1>Create New Product</h1>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className='row space-top'>
            <div className='col-md-4'>
              <Input
                type='text'
                name='name'
                label='Name'
                placeholder='Enter product name'
                value={this.state.name}
                onChange={this.onChange}
                valid={validObj.validName} />
            
              <Input
                type='text'
                name='description'
                label='Description'
                placeholder='Enter product description'
                value={this.state.description}
                onChange={this.onChange}
                valid={validObj.validDescription} />
              <Input
                type='text'
                name='image'
                label='Image URL'
                placeholder='Enter product image URL'
                value={this.state.image}
                onChange={this.onChange}
                valid={validObj.validImage} />
              <Input
                type='number'
                name='price'
                label='Price'
                placeholder='Enter product price'
                value={this.state.price}
                onChange={this.onChange}
                valid={validObj.validPrice} />
              <input type='submit' className='btn btn-primary' value='Create' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    createProductSuccess: state.createProduct.success,
    createProductError: state.createProductError
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createProduct: (name, ingredients, description, image, weight, price) => {
      dispatch(createProductAction({name, ingredients, description, image, weight, price}))
    },
    redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePage))
