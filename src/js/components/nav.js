import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <nav style={{backgroundColor:'red',padding:'10px'}}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/books">books</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;