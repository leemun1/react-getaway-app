import React from "react";

const Header = () => (
  <header className="header">
    <div className="brand">Getaway</div>
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
        </svg>
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="img/sprite.svg#icon-bookmark" />
        </svg>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="img/sprite.svg#icon-chat" />
        </svg>
        <span className="user-nav__notification">13</span>
      </div>
      <label for="user-nav__toggle" className="user-nav__user">
        <img
          src="img/avatars/elyse.png"
          alt="User"
          className="user-nav__user-photo"
        />
        <span className="user-nav__user-name">Mike</span>
        <input
          type="checkbox"
          id="user-nav__toggle"
          className="user-nav__toggle"
        />
        <ul className="user-nav__options">
          <li>Profile</li>
          <li>Help</li>
          <li>Sign out</li>
        </ul>
      </label>
    </nav>
  </header>
);

export default Header;
