import React from 'react'
import { useEffect, useState } from 'react'

export default function Document(props) {
  const [scroll, setScroll] = useState(0)

  function handleScroll(event) {
    const scrollCheck = event.target.scrollTop > 100
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck)
      props.onScrollChange(scrollCheck)
    }
  }

  useEffect(() => {
    setScroll(false)
  }, [])

  return (
    <div
      onScroll={handleScroll}
      className="document"
    >
      {props.children}
    </div>
  )
}
