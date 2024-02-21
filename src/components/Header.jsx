import React from 'react'
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import GmailLogo from '../assets/gmail.png';
import './Header.css';

const Header = ({ toggleDrawer }) => {
    return (
        <div>
            <header className='AppBar'>
                <div className='tool-bar'>
                    <MenuIcon color='action' onClick={toggleDrawer} style={{ marginLeft: 10 }} />
                    <img src={GmailLogo} alt='gmail logo' className='Header-logo' />
                    <h3 className='Header-title'>Smart Inbox</h3>
                    <div className='SearchWrapper'>
                        <Search color='action' />
                        <input type="text" placeholder="Search mail" />
                        <Tune color='action' />
                    </div>
                    <div className='OptionsWrapper'>
                        <HelpOutlineOutlined color='action' />
                        <SettingsOutlined color='action' />
                        <AppsOutlined color='action' />
                        <AccountCircleOutlined color='action' />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
