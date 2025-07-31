import React from 'react'
import SearchInput from './searchinput'
import Conversations from './conversations'
import LogoutButton from './logout';

const Sidebar = () => {

	


	return (
		<div className='border-r border-gray-200 flex flex-col p-2 h-full'>
			<SearchInput />		
			<div className='overflow-y-auto'>
				<Conversations />
				
			</div>
			<div className='divider py-1' />
			<div className='flex absolute bottom-0 pb-2'>
				<LogoutButton /> 
			</div>

		</div>
	)
}

export default Sidebar