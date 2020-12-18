import React from 'react';

import '../../styles/header/header.css'

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar--list--item navbar--icon">iM</li>
          <li className="navbar--list--item">Category</li>
          <li className="navbar--list--item">Info</li>
        </ul>

        <ul className="navbar__icons">
          <li className="navbar--icons--item"><ion-icon name="search-outline"></ion-icon></li>
          <li className="navbar--icons--item"><ion-icon name="menu-sharp"></ion-icon></li>
        </ul>
      </nav>
    </header>
  )
}
