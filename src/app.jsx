import React from 'react'
import { Route } from 'react-router-dom'

import asyncLoader from './asyncLoaderUtil'

const AsyncHomeContainer = asyncLoader({
  loader: () => import('Components/Home')
})

const App = props => (
  <React.Fragment>
    <Route path="/" component={AsyncHomeContainer} />
  </React.Fragment>
)

export default App
