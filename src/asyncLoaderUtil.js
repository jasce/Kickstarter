/* eslint-disable react/display-name */
import Loadable from 'react-loadable'
import React from 'react'

export default function asyncLoader(opts) {
  return Loadable(
    Object.assign(
      {
        loading: () => <div>Loading...</div>,
        delay: 200,
        timeout: 10
      },
      opts
    )
  )
}

asyncLoader.displayName = 'Async Loader'
