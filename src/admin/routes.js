import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/dashboard', exact: true, name: 'Home' },
  
]

export default routes
