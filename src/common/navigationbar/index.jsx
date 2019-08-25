import React from 'react';
import Link from '@material-ui/core/Link';
import './style.scss'
const Navigationbar = () => {
    return (
        <div className="toolbar">
            <span className="spacer" />
            <Link color="inherit" className="navlink" >Home</Link>
            <Link color="inherit" className="navlink">Portfolio</Link>
            <Link color="inherit" className="navlink">About Me</Link>
            <Link color="inherit" className="navlink">Contact Me</Link>
        </div>

    );
}

export default Navigationbar;