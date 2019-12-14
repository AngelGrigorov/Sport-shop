const authRoutes = require('../routes/auth')
const powerRoutes = require('../routes/power')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/power', powerRoutes)
  app.use('/stats', statsRoutes)
  app.use('/orders', ordersRoutes)
}
