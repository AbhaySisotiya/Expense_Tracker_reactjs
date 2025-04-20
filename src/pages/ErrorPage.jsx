import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError()
  
    
  return (
    <div className='flex text-xl flex-col justify-center align-middle p-4 max-w-4xl m-auto mt-10 text-center'>
      <p className='text-error mt-4 mb-4'>Error Message</p>
    <p>{error.status}</p>
    <p>{error.statusText}</p>
    <p>{error.data}</p>
    </div>
  )
}

export default ErrorPage
