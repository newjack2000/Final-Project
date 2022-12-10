import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className = "restaurant__header">
        <div className = "restaurant__header-links">
            <div className = "restaurant__header-links_logo">
                {/* logo is just text */}
                <h1>Restaurant</h1>
            </div>
        </div>
    </div>
  )
}


export default Header