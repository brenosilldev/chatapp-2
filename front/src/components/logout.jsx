import React from 'react'
import { CiLogout } from 'react-icons/ci'

const LogoutButton = () => {
  return (
    <div className='flex items-center justify-center'>
        <button className="btn btn-square">
            <CiLogout className='text-2xl' />
        </button>
    </div>
  )
}

export default LogoutButton