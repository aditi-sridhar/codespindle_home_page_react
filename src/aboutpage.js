import React from "react";
import './aboutpage.css'
import { Typography } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn } from '@mui/icons-material';

const AboutPage = () => {
    return (<React.Fragment>
        <div className="info1">
            <div className="social">
                <Typography id='socialid'> <u>follow us:</u></Typography>
                <div className="eachsocial"><Typography id='socialid'>Instagram</Typography>
                    <Instagram sx={{ color: 'white' }} /></div>
                <div className="eachsocial"><Typography id='socialid'>Facebook</Typography>
                    <Facebook sx={{ color: 'white' }} /></div>
                <div className="eachsocial"><Typography id='socialid'>Youtube</Typography>
                    <YouTube sx={{ color: 'white' }} /></div>
                <div className="eachsocial"><Typography id='socialid'>LinkedIn</Typography>
                    <LinkedIn sx={{ color: 'white' }} /></div>
            </div>

            <div className="quicklinks">
            <Typography id='socialid'> Quick Links:</Typography>
            <Typography id='socialid'> <u>About</u></Typography>
            <Typography id='socialid'> <u>Contact</u></Typography>
            <Typography id='socialid'> <u>Register</u></Typography>
            <Typography id='socialid'> <u>Privacy Policy</u></Typography>
            </div>
            <div className="paragraph">
            <Typography id='socialid'> <b>CodeSpindle:</b></Typography>
            <Typography id='socialid'> All concepts, exercises, examples given should be utilized only for educational purposes. The materials provided on the website should not be used for profitable or commercial use. All Rights Reserved.
copyright@CodeSpindle</Typography>
            </div>
        </div>
    </React.Fragment>)
}

export default AboutPage;