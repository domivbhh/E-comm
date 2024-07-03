import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {
    const routeError=useRouteError()
    // console.log(routeError.message)
    return (
    <div>
        <h1 className='text-red-500 text-2xl text-center'>{routeError.statusText}</h1>
        <h1 className='text-3xl text-center text-blue-500'>{routeError.data}</h1>

      
    </div>
  )
}

export default Error
