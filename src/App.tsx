import React, { memo, Suspense, useEffect, useState } from 'react'
import withBeforeRouter from './router/auth'
import routes from './router'
import APPHOC from './HOC/APPHOC'
const App = memo(() => {
  return (
    <div className="app">
      <Suspense fallback="">{withBeforeRouter(routes)}</Suspense>
    </div>
  )
})

export default APPHOC(App)
