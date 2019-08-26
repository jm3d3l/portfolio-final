import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import './style.scss'
const Navigationbar = () => {
    let links = [
        { path: '/', label: 'Home' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about-me', label: 'About Me' },
        { path: '/contact-me', label: 'Contact Me' },
    ]
    return (
        <div className="toolbar">
            <span className="spacer" />
            {
                links.map(({ path, label }, i) => (
                    <RouterLink component={Link} to={path} key={i} className="navlink" >{label}</RouterLink>
                ))
            }

        </div>

    );
}

export default Navigationbar;