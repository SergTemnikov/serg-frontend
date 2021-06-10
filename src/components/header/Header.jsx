import React from 'react'
import '../../scss/header.scss'

const Header = () => {
  return (
    <div className='header'>
      <ul className="header__items">
        <li className="header__item">
          <a href="#">ГЛАВНАЯ</a>
        </li>
        <li className="header__item">
          <a href="#">О СЕБЕ</a>
        </li>
        <li className="header__item">
          <a href="#">ГАЛЕРЕЯ</a>
        </li>
        <li className="header__item">
          <a href="#">ВИДЕО</a>
        </li>
        <li className="header__item">
          <a href="#">ССЫЛКИ</a>
        </li>
      </ul>
    </div>
  )
}

export default Header