import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {



return (
<div id='topNavBar'>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/About'>About</Link>
        </li>
    </ul>
</div>
)
}

export default NavBar