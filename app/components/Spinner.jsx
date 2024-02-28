import React from 'react'

const  Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
          <div className="animate-ping w-16 h-16 m-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"></div>
    </div>
  )
}

export default Spinner