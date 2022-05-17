import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import useData from '../constants/data'
import NavMenu from '../components/NavMenu'

export default function Navbar(props) {
  const router = useRouter()

  function handleChange(newValue) {
    props.onChange(newValue)
  }

  return (
    <header
      className={`
        ${props.filled ? 'filled' : ''}
        ${props.scrollFilled ? 'scroll-filled' : ''}
        header header--main header--gradient
      `}
    >
      <div className="header__inner container">
        <span className="brand header__brand">
          <Link
            href="/"
            className="brand__link"
          >
            slimpixels
          </Link>
        </span>
        <div className="header__nav">
          <NavMenu onChange={handleChange} />
        </div>
      </div>
    </header>
  )
}
