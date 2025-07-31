import React from 'react'

const messageSkeleton = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-full'>
            <div className="flex w-full h-full p-4 flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-48"></div>
                    <div className="skeleton h-4 w-48"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default messageSkeleton