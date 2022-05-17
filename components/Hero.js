import React from 'react'
import HeroVideo from './HeroVideo'

export default function Hero(props) {
  return (
    <div className={`${props.className} hero`}>
      <HeroVideo />
    </div>
  )
}
