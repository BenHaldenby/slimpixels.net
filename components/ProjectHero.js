import React from 'react'

export default function ProjectHero(props) {
  return (
    <div className="banner banner--shade banner--britishmuseum anim anim--fadein js-banner">
      <div className="banner__inner anim anim--fadein anim--delay js-parallax-image">
        <img
          className="banner__image"
          src={props.heroImage}
          alt=""
        />
        <div className="container"></div>
      </div>
    </div>
  )
}
