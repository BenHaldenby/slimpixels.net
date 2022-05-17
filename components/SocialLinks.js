import React from 'react'

export default function SocialLinks() {
  return (
    <ul className="social-links social-links--footer">
      <li className="social-links__item">
        <a
          href="http://www.twitter.com/slimpixels"
          className="social-links__link social-links__link--twitter"
          title="View my Twitter profile"
          target="sp_blank"
        >
          <svg
            className="social-links__icon"
            viewBox="0 0 22 19"
            enable-background="new 0 0 22 19"
          >
            <g id="Twitter">
              <path
                className="svg__element"
                d="M22,2.631c-0.81,0.361-1.679,0.606-2.592,0.716c0.931-0.563,1.647-1.453,1.985-2.514 c-0.874,0.521-1.84,0.899-2.867,1.104C17.703,1.053,16.529,0.5,15.231,0.5c-2.492,0-4.514,2.035-4.514,4.544 c0,0.356,0.04,0.704,0.117,1.036C7.084,5.891,3.758,4.082,1.532,1.332C1.143,2.003,0.92,2.784,0.92,3.617 c0,1.576,0.797,2.967,2.008,3.782C2.189,7.375,1.492,7.17,0.884,6.83c0,0.02-0.001,0.039-0.001,0.058 c0,2.202,1.556,4.038,3.621,4.456c-0.378,0.104-0.778,0.159-1.189,0.159c-0.291,0-0.574-0.029-0.85-0.082 c0.576,1.807,2.242,3.119,4.217,3.156c-1.544,1.219-3.491,1.945-5.606,1.945c-0.365,0-0.723-0.021-1.076-0.063 C1.998,17.748,4.369,18.5,6.918,18.5c8.302,0,12.843-6.925,12.843-12.928c0-0.197-0.006-0.393-0.014-0.587 C20.63,4.343,21.396,3.542,22,2.631z"
              ></path>
            </g>
          </svg>
          <span className="social-links__label sr-only">Twitter</span>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://www.linkedin.com/in/ben-haldenby/"
          className="social-links__link social-links__link--linkedin"
          title="View my LinkedIn profile"
          target="sp_blank"
        >
          <svg
            className="social-links__icon"
            viewBox="0 0 22 19"
            enable-background="new 0 0 22 19"
          >
            <g id="LinkedIn">
              <g>
                <circle
                  className="svg__element"
                  cx="3.782"
                  cy="2.287"
                  r="2.287"
                ></circle>
                <rect
                  className="svg__element"
                  x="1.812"
                  y="6.309"
                  width="3.938"
                  height="12.69"
                ></rect>
                <path
                  className="svg__element"
                  d="M12.157,12.721c0-1.655,0.313-3.258,2.362-3.258c2.018,0,2.046,1.893,2.046,3.365V19H20.5v-6.961 c0-3.418-0.736-6.046-4.721-6.046c-1.916,0-3.2,1.053-3.727,2.05h-0.054V6.309H8.221V19h3.937V12.721z"
                ></path>
              </g>
            </g>
          </svg>
          <span className="social-links__label sr-only">LinkedIn</span>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://github.com/benhaldenby"
          className="social-links__link social-links__link--github"
          title="View my GitHub profile"
          target="sp_blank"
        >
          <svg
            className="social-links__icon"
            viewBox="0 0 22 19"
            enable-background="new 0 0 22 19"
          >
            <g id="GitHub">
              <path
                className="svg__element"
                d="M19,6.397c0-1.305-0.45-2.372-1.196-3.207c0.12-0.302,0.52-1.517-0.115-3.163c0,0-0.977-0.321-3.201,1.225 c-0.931-0.264-1.927-0.397-2.916-0.401c-0.991,0.004-1.987,0.137-2.917,0.401C6.429-0.293,5.451,0.027,5.451,0.027 C4.818,1.673,5.217,2.888,5.336,3.19C4.592,4.025,4.138,5.092,4.138,6.397c0,4.579,2.72,5.604,5.306,5.905 c-0.333,0.298-0.634,0.825-0.74,1.599c-0.664,0.305-2.35,0.832-3.39-0.993c0,0-0.615-1.148-1.784-1.231 c0,0-1.137-0.016-0.081,0.725c0,0,0.764,0.369,1.293,1.748c0,0,0.684,2.324,3.924,1.602c0.006,0.997,0.016,1.75,0.016,2.033 c0,0.005,0,0.009,0,0.014v0.84C9.596,18.875,10.553,19,11.538,19c1.01,0,1.987-0.135,2.92-0.386v-0.861l0,0 c0.002-0.425,0.015-1.688,0.015-3.248c0-1.114-0.373-1.844-0.79-2.214C16.277,11.998,19,10.986,19,6.397z"
              ></path>
            </g>
          </svg>
          <span className="social-links__label sr-only">GitHub</span>
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://dribbble.com/benhaldenby"
          className="social-links__link social-links__link--dribbble"
          title="View my Dribbble profile"
          target="sp_blank"
        >
          <svg
            className="social-links__icon"
            viewBox="0 0 22 19"
            enable-background="new 0 0 22 19"
          >
            <g id="Dribbble">
              <path
                className="svg__element"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11,19c-5.239,0-9.5-4.262-9.5-9.5C1.5,4.262,5.762,0,11,0 c5.238,0,9.5,4.262,9.5,9.5C20.5,14.738,16.238,19,11,19z M19.013,10.8c-0.277-0.088-2.513-0.754-5.055-0.347 c1.062,2.916,1.493,5.291,1.576,5.785C17.355,15.007,18.65,13.056,19.013,10.8z M14.171,16.982 c-0.121-0.713-0.593-3.194-1.731-6.153c-0.018,0.006-0.036,0.012-0.054,0.017c-4.577,1.596-6.22,4.77-6.366,5.067 c1.376,1.073,3.105,1.713,4.981,1.713C12.125,17.625,13.195,17.396,14.171,16.982z M4.972,14.937 c0.184-0.314,2.411-4.001,6.596-5.354c0.106-0.034,0.213-0.066,0.32-0.096c-0.204-0.461-0.426-0.922-0.658-1.377 C7.177,9.321,3.245,9.271,2.89,9.264C2.887,9.347,2.886,9.43,2.886,9.512C2.886,11.595,3.676,13.5,4.972,14.937z M3.057,7.85 c0.363,0.005,3.706,0.02,7.501-0.988c-1.344-2.391-2.794-4.4-3.008-4.693C5.28,3.239,3.584,5.333,3.057,7.85z M9.099,1.623 c0.224,0.301,1.698,2.308,3.028,4.75c2.886-1.082,4.106-2.724,4.253-2.932C14.946,2.171,13.062,1.398,11,1.398 C10.346,1.398,9.708,1.476,9.099,1.623z M17.281,4.381c-0.171,0.231-1.53,1.974-4.53,3.2c0.188,0.386,0.369,0.779,0.538,1.175 c0.06,0.14,0.117,0.28,0.175,0.419c2.699-0.34,5.383,0.204,5.65,0.261C19.096,7.52,18.411,5.762,17.281,4.381z"
              ></path>
            </g>
          </svg>
          <span className="social-links__label sr-only">Dribbble</span>
        </a>
      </li>
    </ul>
  )
}
