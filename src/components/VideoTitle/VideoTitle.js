import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='flex justify-start py-32 px-10 flex-col z-10 relative text-white w-1/3'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-sm'>{description}</p>
        <div className='flex flex-start'>
            <button className='bg-white text-black text-lg p-2 m-2 rounded-lg flex-1 flex-grow'>Play</button>
            <button className='bg-gray-500 text-white text-lg p-2 opacity-8 rounded-lg  flex-1 flex-grow'>More Details</button>
        </div>
    </div>
  )
}

export default VideoTitle