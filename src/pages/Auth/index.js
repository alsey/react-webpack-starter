module.exports = {
  path: 'auth',
  component: require('./Auth').default,
  childRoutes: [
         require('./pages/Overview'),
         require('./pages/Status')  
  ]
}