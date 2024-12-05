import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./MainLayout.css"

function MainLayout() {
  return (
    <div>
      <h2>Welcome to Main Layout</h2>
      <nav>
        <ul className='aa'> 
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/registration">REGISTRATION</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout