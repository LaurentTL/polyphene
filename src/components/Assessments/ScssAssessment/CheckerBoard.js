import React from 'react'

function CheckerBoard() {
  return (
    <div className='w-[270px] h-[260px] flex flex-col'>
        <div className='w-full flex h-1/3 border-b border-solid border-pink-400'>
            <div className='bg-pink-400 flex items-center justify-center w-1/4 hover:bg-pink-500'>
                <p className='text-green-300'>john</p>
            </div>
            <div className='bg-green-300 flex-1 flex justify-end items-end p-1 hover:bg-green-400'>
                <p className='text-pink-400'>doe</p>
            </div>
            <div className='bg-pink-400 w-1/4 flex justify-center items-center  hover:bg-pink-500'>
                <p className='text-green-300'>john</p>
            </div>
        </div>
        <div className='flex h-2/3'>
            <div className='bg-green-300 flex items-end justify-end flex-1 p-1 hover:bg-green-400'>
                <p className='text-pink-400'>doe</p>
            </div>
            <div className='w-1/3'>
                <div className='bg-green-300 flex items-end justify-end h-1/2 border-l border-solid border-pink-400 p-1 hover:bg-green-400'>
                    <p className='text-pink-400'>doe</p>
                </div>
                <div className='h-1/2 bg-pink-400 flex items-center justify-center hover:bg-pink-500'>
                    <p className='text-green-300'>john</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckerBoard