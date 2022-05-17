import React from 'react'
import Link from 'next/link'

const CloseToggle = () => {}

const Menu = ({ handleNavToggle }) => {
  return (
    <div>
      <ul className="nav header__nav js-nav">
        <li className="nav__item">
          <Link
            className="nav__link nav--link-services js-nav-link"
            href="/services/"
            onClick={handleNavToggle}
          >
            Services
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link nav--link-projects js-nav-link"
            href="/projects/"
            onClick={handleNavToggle}
          >
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link nav--link-about js-nav-link"
            href="/about/"
            onClick={handleNavToggle}
          >
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link nav--link-journal js-nav-link"
            href="#"
            onClick={handleNavToggle}
          >
            Journal
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link nav--link-contact js-nav-link"
            href="/contact/"
            onClick={handleNavToggle}
          >
            Contact
          </Link>
        </li>
      </ul>

      <CloseToggle
        className="animate__animated animate__fadeInRight"
        onClick={handleNavToggle}
      >
        CLOSE
      </CloseToggle>
    </div>
  )
}

export default Menu
