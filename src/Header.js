import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img className='header__logo' src="/image/log.png" alt="" />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type="text"
          placeholder='Search Books Here' />
      </div>

      <div className='header__nav'>
        <Link to="/login">
          <div className="header__option">
            <span className='header__line1'>hello Guest</span>
            <span className='header__line2'>Sign In</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className='header__line2 header__BasketCount'>{" "}</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header
