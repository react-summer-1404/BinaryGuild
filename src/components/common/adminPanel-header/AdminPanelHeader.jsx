import React from 'react'
import AdminProfile from '../adminPanel-sideBar/AdminProfile'
import PanelHeaderButton from '../panel-header/panel-button/PanelHeaderButton'
import HeaderIcons from '../landing-header/header-icons/HeaderIcons'

const AdminPanelHeader = () => {
  return (
    <div className='rounded-2xl  h-full m-auto border bg-[#222]  flex justify-between items-center pr-2'>
        <AdminProfile/>
        <PanelHeaderButton/>
        <HeaderIcons className="ml-3" />
    </div>
  )
}

export default AdminPanelHeader