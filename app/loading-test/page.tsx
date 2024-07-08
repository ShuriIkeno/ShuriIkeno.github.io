import { Suspense } from 'react'
import Loading from './loading'
import WaitComponent from './wait'
import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        <WaitComponent />
      </Suspense>
    </div>
  )
}