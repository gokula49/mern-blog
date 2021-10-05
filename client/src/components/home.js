import React from 'react'
import { Link } from "react-router-dom"
import "./home.css"

function home() {
    return (
        <>
            <div className="heading">
                <h2>Codingmart Task</h2>
            </div>
            <div className="home">
                <Link to="/login" className="log">Login</Link>
                <Link to="/register" className="reg">Register</Link>
            </div>
        </>
    )
}

export default home
