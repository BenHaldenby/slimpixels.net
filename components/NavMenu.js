import { useState, useCallback, useEffect } from 'react'
import FullMenu from './FullMenu'
import HamburgerMenu from './HamburgerMenu'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

const Navbar = (props) => {
  const isBreakpoint = useMediaQuery(768)

  function handleChange(newValue) {
    props.onChange(newValue)
  }

  return (
    <>
      {isBreakpoint ? <HamburgerMenu onChange={handleChange} /> : <FullMenu />}
    </>
  )
}

export default Navbar
