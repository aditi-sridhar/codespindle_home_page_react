import {IconButton } from '@mui/material'; // Import Typography separately
import React from 'react';
import c from './assets/c.jpg'
import "./Header.css"
const Header = () => {
    
    return (
        <React.Fragment>
            <div className='appbar-custom'>
                <div Toolbar className='toolbar-custom'>
                    <div>
                    <img className="codespindle-orange" src={c} alt="Logo"></img>
                    </div>
                    <div className='buttons'>
                    
                    <IconButton
                    variant="contained"
                    className="right-button"
                    sx={{
                        borderRadius:'0px',
                        backgroundColor: 'white', 
                        color: 'black',
                        fontSize: '14px'
                    }}
                >
                    sign in
                </IconButton>
                <div>
                    <IconButton
                    variant="contained"
                    className="right-button"
                    sx={{
                        borderRadius:'0px',
                        backgroundColor: '#540E92', 
                        color: 'white',
                        fontSize: '14px',
                    }}
                >
                    sign up
                </IconButton>
                </div>
                </div>

               
                </div>
            </div>
        </React.Fragment>)
}

export default Header;