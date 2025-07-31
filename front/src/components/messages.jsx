import React, { useEffect, useRef } from 'react'
import Message from './message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './messageSkeleton'
import { useListenMessages } from '../hooks/useListenMessages'

const Messages = () => {

    const {loading, messages} = useGetMessages()
	useListenMessages()

	const lastMessageRef= useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
        }, 100)
    }, [messages])


	return (
		<div className='px-4 flex-1 overflow-auto'>

			{!loading && messages.length > 0 && 
				messages.map((message, index) => (
					<Message key={message?._id || `message-${index}`} message={message} ref={lastMessageRef} />
				))
		
			}


			{loading && Array.from({length: 10}).map((_, index) => (
				<MessageSkeleton key={index} />
			))}

			{!loading && messages.length === 0 && (
				<div className='flex justify-center items-center h-full'>
					<p className='text-gray-500'>No messages found</p>
				</div>
			)}

		</div>
	)
}

export default Messages