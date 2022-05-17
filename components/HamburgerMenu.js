import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ToggleButton from '../components/ToggleButton'

const HamburgerMenu = (props) => {
  const [navToggled, setNavToggled] = useState(false)

  const handleNavToggle = () => {
    setNavToggled(!navToggled)
    props.onChange(!navToggled)
  }

  return (
    <div>
      <ToggleButton handleNavToggle={handleNavToggle}>MENU</ToggleButton>
      {navToggled ? (
        <div className="hamburger-menu">
          <ToggleButton handleNavToggle={handleNavToggle}>CLOSE</ToggleButton>
          <ul className="nav header__nav js-nav">
            <li className="nav__item">
              <Link
                className="nav__link nav--link-services js-nav-link"
                href="/services/"
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link nav--link-projects js-nav-link"
                href="/projects/"
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link nav--link-about js-nav-link"
                href="/about/"
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link nav--link-journal js-nav-link"
                href="#"
              >
                Journal
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link nav--link-contact js-nav-link"
                href="/contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default HamburgerMenu
