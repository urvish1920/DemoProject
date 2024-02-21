import React from 'react';
import './SideBar.css';
import SidebarContent from './SidebarContent'
// import { Drawer } from '@mui/material'

const SideBar = ({ openDrawer }) => {
    return (
        <div className={openDrawer ? 'sidenav active' : 'sidenav'} >
            <SidebarContent />
        </div>
    )
}

export default SideBar
