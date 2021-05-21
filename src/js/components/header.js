import React from 'react';
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Header=(props)=> {

    const title = useSelector(state => state.name)

    return (
        <header style={{ backgroundColor:'grey', color:'white',display: 'flex', alignItems:'center' }}>
            <div>
                {title}
            </div>
            <nav style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li >
                    <Link to="/register">register</Link>
                </li>
            </nav>
        </header>
    );
}

export default Header;