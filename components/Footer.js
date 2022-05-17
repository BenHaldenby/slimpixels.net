import React from 'react'
import userData from '../constants/data'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer footer--main ">
      <div className="container tc">
        <p className="copyright">
          &copy; 2020 Slimpixels Ltd.
          <br />
          This website uses cookies. By continuing, you agree to accept cookies
          on your browsing device.
          <br />
          Registered Office: Exchange House, St Cross Lane, Newport, Isle of
          Wight, PO30 5BZ. Registered Company No: 10820167
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
