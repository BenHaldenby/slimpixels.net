import React from 'react'
import { useEffect, useState } from 'react'

export default function HeroVideo() {
  const [num, setNum] = useState(0)

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {
    setNum(randomNumberInRange(1, 2))
  }, [num])

  return (
    <div className="video-container">
      <div
        className={`banner banner--video banner--video-mono anim anim--fadein anim--delay js-banner ${
          num == 1 ? 'show' : 'hide'
        }`}
        id="banner-1"
      >
        <div className="banner-inner">
          <div className="container banner__container">
            <div className="page-titles">
              <h1 className="page-titles__item page-titles__item--video">
                I build
                <span className="page-titles__emphasis">exceptional</span>
                web experiences for
                <span className="page-titles__emphasis">agencies</span>
                and <span className="page-titles__emphasis">enterprises</span>
                like yours
              </h1>
            </div>
          </div>
          <div className="video-player video-player--fullscreen video-player--cropped">
            <video
              className="video-player__media js-video"
              id="video"
              preload="metadata"
              playsInline=""
              loop
              autoPlay
              muted
              type="video/mp4"
              poster="/assets/video/ink_banner_poster.jpg"
              src="/assets/video/ink_2.mp4"
            >
              <source
                src="/assets/video/ink.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        className={`banner banner--video banner--video-mono anim anim--fadein anim--delay js-banner ${
          num == 2 ? 'show' : 'hide'
        }`}
        id="banner-1"
      >
        <div className="banner-inner">
          <div className="container banner__container">
            <div className="page-titles">
              <h1 className="page-titles__item page-titles__item--video">
                I build
                <span className="page-titles__emphasis">exceptional</span>
                web experiences for
                <span className="page-titles__emphasis">agencies</span>
                and <span className="page-titles__emphasis">enterprises</span>
                like yours
              </h1>
            </div>
          </div>
          <div className="video-player video-player--fullscreen video-player--cropped">
            <video
              className="video-player__media js-video"
              id="video"
              preload="metadata"
              playsInline=""
              loop
              autoPlay
              muted
              type="video/mp4"
              poster="/assets/video/ink_banner_poster.jpg"
            >
              <source
                src="/assets/video/bokeh.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div
        className={`banner banner--video banner--video-mono anim anim--fadein anim--delay js-banner ${
          num == 3 ? 'show' : 'hide'
        }`}
        id="banner-2"
      >
        <div className="banner-inner">
          <div className="video-player video-player--fullscreen video-player--cropped">
            <video
              className="video-player__media js-video"
              id="video"
              preload="metadata"
              playsInline=""
              loop
              autoPlay
              muted
              type="video/mp4"
              poster="/assets/video/holi_banner_1920_poster.jpg"
              src="/assets/video/holi_banner_1200.mp4"
            >
              <source
                src="/assets/video/holi_banner_1200.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="container banner__container">
            <div className="page-titles">
              <h1 className="page-titles__item page-titles__item--video">
                I build
                <span className="page-titles__emphasis">exceptional</span>
                web experiences for
                <span className="page-titles__emphasis">agencies</span>
                and <span className="page-titles__emphasis">enterprises</span>
                like yours
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`banner banner--video banner--video-mono anim anim--fadein anim--delay js-banner ${
          num == 4 ? 'show' : 'hide'
        }`}
        id="banner-3"
      >
        <div className="banner-inner">
          <div className="video-player video-player--fullscreen video-player--cropped">
            <video
              className="video-player__media js-video"
              id="video"
              preload="metadata"
              playsInline=""
              loop
              autoPlay
              muted
              type="video/mp4"
              poster="/assets/video/liquid_banner_poster.jpg"
              src="/assets/video/liquid_banner.mp4"
            >
              <source
                src="/assets/video/liquid_banner.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="container banner__container">
            <div className="page-titles">
              <h1 className="page-titles__item page-titles__item--video">
                I build
                <span className="page-titles__emphasis">exceptional</span>
                web experiences for
                <span className="page-titles__emphasis">agencies</span>
                and <span className="page-titles__emphasis">enterprises</span>
                like yours
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
