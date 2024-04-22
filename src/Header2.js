import './Header2.css'
import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Menu, MenuItem, Typography} from '@mui/material';



const Header2 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabOptions = [
        ["Java", "HTML", "CSS", "JavaScipt", "JQuery", "Ajax", "PHP", "Node.js", "Python", "C programming"],
        ["Oracle", "MySQL", "MongoDB", "Neo4j", "Redis", "Cassandra"],
        ["Cyber Security", "Ethical Hacking", "Database Management Systems", "Advanced Database management systens", "Software Engineering"]
    ];

    const handleTabClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
        handleClose();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderMenuItems = () => {
        if (tabOptions[selectedIndex]) {
            return tabOptions[selectedIndex].map((option, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(index)} className='menuoption'
                    sw={{ background: '#070F21' }}>
                    {option}
                </MenuItem>
            ));
        }
        else {
            return null;
        }
    };

    return (<React.Fragment>
        <AppBar sx={{ position: 'static', background: '#070F21', flex: '1' }}>
            <div className='appbar'>
                <div className='tabs'>
                    <Tabs value={selectedIndex} aria-label="tabs" className="tab"
                        sx={{
                            borderRadius: 3,
                            border: 0,
                            color: 'white',
                            height: 48,
                        }}>
                        <Tab label="Programming" onClick={(event) => handleTabClick(event, 0)} sx={{
                            borderRadius: 3,
                            border: 0,
                            color: 'white',
                            fontWeight: 'bolder',
                            fontSize: '12px',
                            height: 48,
                            textTransform: 'none',
                            '&.Mui-selected': {
                                textDecoration: 'none',
                                color: 'white',
                            },
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                            '&.Mui-focusVisible': {
                                outline: 'none', // Remove focus outline
                            },
                        }} />
                        <Tab label="Databases" onClick={(event) => handleTabClick(event, 1)}
                            sx={{
                                borderRadius: 3,
                                border: 0,
                                color: 'white',
                                fontSize: '12px',
                                fontWeight: 'bolder',
                                height: 48,
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    textDecoration: 'none',
                                    color: 'white',
                                },
                                '&.Mui-focusVisible': {
                                    outline: 'none', // Remove focus outline
                                },
                                '&:hover': {
                                    textDecoration: 'underline',
                                }
                            }} />
                        <Tab label="Subjects" onClick={(event) => handleTabClick(event, 2)}
                            sx={{
                                borderRadius: 3,
                                border: 0,
                                color: 'white',
                                fontWeight: 'bolder',
                                fontSize: '12px',
                                height: 48,
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    textDecoration: 'none',
                                    color: 'white',
                                },
                                '&.Mui-focusVisible': {
                                    outline: 'none', // Remove focus outline
                                },
                                '&:hover': {
                                    textDecoration: 'underline',
                                }
                            }} />
                    </Tabs>
                    <Menu
                        id="dropdown-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className="menu"
                    >
                        {renderMenuItems()}
                    </Menu>
                </div>

                <div className='message'>
                    <Typography sx={{ fontFamily:'sans-serif', fontWeight:'bolder', fontSize:'15px'}}>
                        Learn to code with videos! Get spindling!
                    </Typography>
                </div>
                <div className='social-media'>

                </div>
            </div>
        </AppBar>
    </React.Fragment>)
}

export default Header2