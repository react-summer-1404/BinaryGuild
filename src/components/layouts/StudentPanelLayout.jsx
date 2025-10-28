import React from 'react'
import PanelHeader from '../common/panel-header/PanelHeader'
import { Outlet } from 'react-router-dom'

const StudentPanelLayout = () => {
  return (
    <div>
      <PanelHeader/>
      <Outlet/>
    </div>
  )
}

export default StudentPanelLayout
