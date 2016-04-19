module.exports = {
  path: 'status',
  component: require('./Status').default,
  childRoutes: [
         require('./pages/Detail'),
         require('./pages/Env')  
  ]
}