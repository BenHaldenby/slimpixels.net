import React from 'react'

const Toggle = ({ children, handleNavToggle }) => {
  return (
    <div
      className="toggle"
      onClick={handleNavToggle}
    >
      {children}
    </div>
  )
}

export default Toggle
