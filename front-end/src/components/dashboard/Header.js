import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (  <div>
<ul>

<li>

    <Link to='/todos'>TO Do</Link>
</li>
<li>

    <Link to='/users'>Users</Link>
</li>
</ul>

    </div>);
}
 
export default Header;