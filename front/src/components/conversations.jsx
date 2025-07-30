import React from 'react'

const conversations = () => {


    const user = true

    return (
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer '>
           {user ? (
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                    </div>
                 
 
                ) : (
                <div className="avatar avatar-offline">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
                    </div>
                </div>
            )}

            <div className='flex flex-col flex-1'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='text-gray-900 font-bold'>John Doe</span>
                        <span className='text-gray-500 text-sm'>Last message</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-900 font-bold'>12:00</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default conversations