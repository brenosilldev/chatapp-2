import React from 'react'
import Message from './message'

const Messages = () => {
  return (
    <div className='px-4py-2 overflow-y-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages