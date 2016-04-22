module.exports = {
  path: 'cont-mgnt',
  component: require('./ContMgnt').default,
  indexRoute: { onEnter: (nextState, replace) => replace('cont-mgnt/overview') },
  childRoutes: [
         require('./pages/Overview'),
         require('./pages/API'),
         require('./pages/Status'),
         require('./pages/Management'),
         require('./pages/Logs')
  ]
}