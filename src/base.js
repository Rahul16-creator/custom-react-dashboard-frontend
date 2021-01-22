import React from 'react'
import "./base.css"
import Sidebar from './view/sidebar';

const Base = ({ children }) => {
    return (
        <div className="wrapper">
            <Sidebar />
            <br />
            <div className="mainContent">
                {children}
            </div>

        </div>
    )
}


export default Base