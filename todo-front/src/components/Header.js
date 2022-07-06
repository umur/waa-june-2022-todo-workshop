import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav me-auto">
                <li className="nav-item">
                    {/* <Link to="/todos" className='nav-link'>Todos</Link> */}
                    <NavLink to='/todos' className="nav-link">
                        Todo List
                    </NavLink>
                </li>
            </div>
        </nav>
    )
}