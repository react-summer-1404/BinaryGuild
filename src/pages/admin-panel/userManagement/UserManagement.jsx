import React from 'react'
import UserManagementHeader from './UserManagementHeader'
import UserManageFilter from './UserManageFilter'
import UsersInfo from './UsersInfo'

const UserManagement = () => {
  return (
    <div className='flex flex-col gap-8 mt-4'>
      <UserManagementHeader/>
      <UserManageFilter/>
      <UsersInfo/>
    </div>
  )
}

export default UserManagement