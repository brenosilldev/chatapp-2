import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversations from '../store/useConversations'
import {useGetConversations} from '../hooks/useGetConversations'
import toast from 'react-hot-toast'


const SearchInput = () => {

	const [search, setSearch] = useState('')
	const {setSelectedConversation} = useConversations()
	const {conversations} = useGetConversations()


	const handleSubmit = (e) => {
		e.preventDefault()
		if(search.length > 0) {
			const conversation = conversations.find(conversation => conversation.nome.toLowerCase().includes(search.toLowerCase()))
			if(conversation) {
				setSearch('')
				setSelectedConversation(conversation)
			}else{
				toast.error('Conversation not found')
			}
		}
	}

	return (
		<div className='flex items-center gap-2'>
			<form  onSubmit={handleSubmit}>
				<div className='flex items-center gap-2'>
				
					<input type="text" placeholder='Search' className='w-full border-2 border-gray-300 rounded-md p-2 bg-white text-gray-900' value={search} onChange={(e) => setSearch(e.target.value)}  />
					<button className='btn btn-circle bg-sky-500 text-white' type='submit'><CiSearch /></button>
				</div>
			</form>
		</div>
	)
}

export default SearchInput