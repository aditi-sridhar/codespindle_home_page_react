import './second_page_course.css';
import React from 'react';
import { Typography } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
const Secondpagecourse = () => {
    return (<React.Fragment>
        <div className='secondpage'>
            <div className='partitiondiv'>
                <div className='courses'>
                    <Typography id='popularcourse'>
                        Our Most Popular Courses...
                    </Typography>
                    <div className='coursebox'>
                        <Typography className='coursetext' sx={{
                            fontSize: '16px',
                            fontWeight: 'bolder'
                        }}>Java-Explore over 45 videos</Typography>
                        <ArrowForwardIos sx={{ color: 'white', width: '20px', height: '20px', padding: '20px' }} />
                    </div>
                    <div className='coursebox'>
                        <Typography className='coursetext' sx={{
                            fontSize: '16px',
                            fontWeight: 'bolder'
                        }}>CyberSecurity-Explore over 50 videos</Typography>
                        <ArrowForwardIos sx={{ color: 'white', width: '20px', height: '20px', padding: '20px' }} />
                    </div>
                    <div className='coursebox'>
                        <Typography className='coursetext' sx={{
                            fontSize: '18px',
                            fontWeight: 'bolder'
                        }}>
                            CSS- explore over 20 videos
                        </Typography>
                        <ArrowForwardIos sx={{ color: 'white', width: '20px', height: '20px', padding: '20px' }} />
                    </div>
                </div>
                <div className='info'>
                    <div className='infodetail'>
                        <Typography id='listpoint'>
                            <ul>
                                <li>Learn concepts through detailed videos</li>
                            </ul>
                        </Typography>
                        <div className='videoplay'></div>
                    </div>
                    <div className='infodetail'>
                        <Typography id='listpoint'>
                            <ul>
                                <li>Practice your code with exercises!</li>
                            </ul>
                        </Typography>
                        <div className='practice'></div>
                    </div>
                    <div className='infodetail'>
                        <Typography id='listpoint'>
                            <ul>
                                <li>Use our online executor to practice codes!</li>
                            </ul>
                        </Typography>
                        <div className='compiler'>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </React.Fragment >)
}
export default Secondpagecourse;