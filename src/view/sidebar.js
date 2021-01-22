import React from 'react'
import "../base.css"
import { Link } from 'react-router-dom'
import { SidebarElements } from './sidebarElements';
import { withRouter } from 'react-router-dom'

const color = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "black", backgroundColor: "white",borderRadius:"25px" }
    }
}

const Sidebar = ({ history }) => {
    return (
        <div>
            <div className="sidenavbar">
                <h2> sidebar </h2>
                <ul>
                    {SidebarElements.map((value, id) => {
                        return <li key={id}>
                            <div> {value.icon} </div>
                            <Link style={color(history, value.url)} className="links" to={value.url}>  {value.title} </Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Sidebar)