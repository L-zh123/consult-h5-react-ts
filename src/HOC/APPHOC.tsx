import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import type { ComponentType } from 'react'
import store from '@/store'
function APPHOC(OriginComponent: ComponentType) {
  return () => {
    return (
      <Provider store={store}>
        <HashRouter>
          <OriginComponent />
        </HashRouter>
      </Provider>
    )
  }
}

export default APPHOC
