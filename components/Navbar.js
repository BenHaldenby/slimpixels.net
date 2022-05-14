import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import useData from '../constants/data'

export default function Navbar() {
  const router = useRouter()
  console.log(router.asPath)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="header header--main header--gradient js-site-header">
      <div className="container">
        <span className="brand header__brand">
          <Link
            href="/"
            className="brand__link"
          >
            slimpixels
          </Link>
        </span>
        <div className="morph-button morph-button-overlay morph-button-fixed morph-button--mobile-nav btn--mobile-nav js-mobile-nav">
          <button
            type="button"
            className="btn btn--menu btn--morph"
          >
            <span className="sr-only">Expand menu</span>
            <svg
              className="icon icon--menu"
              viewBox="0 0 28 19"
            >
              <rect
                className="icon__shape"
                id="Rectangle-1"
                x="0"
                y="0"
                width="28"
                height="3"
              ></rect>
              <rect
                className="icon__shape"
                id="Rectangle-1-Copy"
                x="0"
                y="8"
                width="28"
                height="3"
              ></rect>
              <rect
                className="icon__shape"
                id="Rectangle-1-Copy-2"
                x="0"
                y="16"
                width="28"
                height="3"
              ></rect>
            </svg>
          </button>
          <div className="morph-content">
            <div>
              <div className="content-style-overlay">
                <span className="icon icon-close">
                  <svg
                    className="svg"
                    viewBox="0 0 40 40"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Desktop-HD"
                        transform="translate(-301.000000, -98.000000)"
                        fill="#FFFFFF"
                      >
                        <g
                          className="svg__shape"
                          id="close"
                          transform="translate(301.000000, 98.000000)"
                        >
                          <rect
                            id="Rectangle-2"
                            transform="translate(20.000000, 20.000000) rotate(-315.000000) translate(-20.000000, -20.000000)"
                            x="18"
                            y="-5"
                            width="4"
                            height="50"
                          ></rect>
                          <rect
                            id="Rectangle-2-Copy"
                            transform="translate(20.000000, 20.000000) rotate(-225.000000) translate(-20.000000, -20.000000)"
                            x="18"
                            y="-5"
                            width="4"
                            height="50"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <div className="nav-wrapper">
                  <ul className="nav header__nav js-nav">
                    <li className="nav__item">
                      <Link
                        href="/services/"
                        className="nav__link nav--link-services js-nav-link"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link
                        href="/projects/"
                        className="nav__link nav--link-projects js-nav-link"
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link
                        href="/about/"
                        className="nav__link nav--link-about js-nav-link"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav__item hide">
                      <Link
                        href="#"
                        className="nav__link nav--link-journal js-nav-link"
                      >
                        Journal
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link
                        href="/contact/"
                        className="nav__link nav--link-contact js-nav-link"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
