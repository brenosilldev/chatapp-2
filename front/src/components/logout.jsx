import React from 'react'
import { CiLogout } from 'react-icons/ci'
import useLogout from '../hooks/useLogout'

const LogoutButton = () => {

    const {signOut, loading} = useLogout()

    const handleLogout = async () => {
        await signOut()
    }
  return (
    <div className='flex items-center justify-center'>
        <button className="btn btn-square" onClick={handleLogout} disabled={loading}>
            <CiLogout className='text-2xl' />
        </button>
    </div>
  )
}

export default LogoutButton