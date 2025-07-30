import React from 'react'
import Sidebar from '../../components/sidebar'
import MessagesContainer from '../../components/messagescontainer'


const home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550x] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 '>
        <Sidebar />
        <MessagesContainer />
    </div>
  )
}

export default home