import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav flex">
        <div className="logo">
          <a href="#"></a>
          <h1>Konsole night</h1>
        </div>
        <div className="nav-items flex">
          <a className='nav-link' href="#features">Features</a>
          <a className='nav-link' href="#support">support</a>
          <a href="#installation">
            <button className="btn-primary">use theme</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
