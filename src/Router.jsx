import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { getApp } from './utils/helpers'
import routes, { adminRoutes } from './utils/routes'

const Router = () => {
  const [subdomain] = useState(getApp())
  if (subdomain === 'admin') return <RouterProvider router={adminRoutes} />
  return <RouterProvider router={routes} />
}

export default Router
