import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="card-header text-white bg-dark text-center p-1">
            {/* <h1>Weather App</h1> */}
            <nav className="nav nav-pills flex-column flex-sm-row">
                <Link className="flex-sm-fill text-sm-center nav-link active" to="/">Weather App</Link>
                <Link className="flex-sm-fill text-sm-center nav-link" to="/contact">Contact</Link>
                <Link className="flex-sm-fill text-sm-center nav-link" to="/settings">Settings</Link>
            </nav>
        </div>
    )
}
