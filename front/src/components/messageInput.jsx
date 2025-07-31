import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { useSendMessage } from '../hooks/useSendMessage'

const MessageInput = () => {

  const {sendMessage, loading} = useSendMessage()
  const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		if(!message) return
		
		sendMessage(message)
		setMessage('')
	}
    return (
    	<div className='px-4 my-3'>
			<div className='w-full relative'>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Type your message here' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' value={message} onChange={(e) => setMessage(e.target.value)} />
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' disabled={loading}>
					{loading ? <div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white'></div> : <BsSend />}
				</button>
			</form>
			</div>
		</div>
	)
}

export default MessageInput