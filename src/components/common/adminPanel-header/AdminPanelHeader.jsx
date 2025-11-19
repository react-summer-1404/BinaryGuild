import React from 'react'
import AdminProfile from '../adminPanel-sideBar/AdminProfile'
import PanelHeaderButton from '../panel-header/panel-button/PanelHeaderButton'
import HeaderIcons from '../landing-header/header-icons/HeaderIcons'

const AdminPanelHeader = () => {
  return (
    <div className='rounded-2xl  shadow-small shadow-amber-50  h-full m-auto bg-[#222] justify-center  flex  items-center pr-2'>
        <AdminProfile/>
        <PanelHeaderButton/>
        <HeaderIcons />
    </div>
  )
}

export default AdminPanelHeader