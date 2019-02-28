import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <nav className="van-wrapper red darken-3">
            <div className="container">
                <NavLink to={"/"}>
                    <div className="brand-logo">Poke'Times</div>
                </NavLink>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)