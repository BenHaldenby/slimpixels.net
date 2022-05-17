import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FavouriteProjects(props) {
  return (
    <div className={`${props.className}`}>
      <div class="container container--project-grid">
        <h3 class="section-title section-title--lined">Featured work</h3>
        <ul class="project-grid js-project-grid">
          <li class="project-grid__sizer js-project-grid-sizer"></li>
          <li class="project-grid__item js-project-grid-item">
            <a
              href="/britishmuseum/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/fcdae4398ea62f573ae8b94e72d286043ef098bb/26111/assets/images/projects/britishmuseum/britishmuseum_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">The British Museum</h3>
                <p class="project-grid__type">Front-end</p>
              </div>
            </a>
          </li>
          <li class="project-grid__item js-project-grid-item">
            <a
              href="/storm/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/43532ec65956e1957e509899dd2bdec28c5dce9d/04589/assets/images/projects/storm/storm_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">Storm Models</h3>
                <p class="project-grid__type">Front-end</p>
              </div>
            </a>
          </li>
          <li class="project-grid__item js-project-grid-item">
            {' '}
            <a
              href="/nhs/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/324ee278266d8385c42daa507675adadce5d9673/58fa0/assets/images/projects/nhs/nhs_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">NHS Silent Receptionist</h3>
                <p class="project-grid__type">
                  Flash <span class="project-grid__type-separator"></span>{' '}
                  Front-end
                </p>
              </div>
            </a>
          </li>
          <li class="project-grid__item js-project-grid-item">
            {' '}
            <a
              href="/estee/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/e22f462af1612e6e60bda65e7efc23c86a4db2a8/582e5/assets/images/projects/esteelalonde/estee_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">Estée Lalonde</h3>
                <p class="project-grid__type">
                  Wordpress <span class="project-grid__type-separator"></span>{' '}
                  Front-end
                </p>
              </div>
            </a>
          </li>
          <li class="project-grid__item js-project-grid-item">
            {' '}
            <a
              href="/missesdressy/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/076cbed51fedd0fc33202094b40e5f9d7f7ad951/68952/assets/images/projects/missesdressy/missesdressy_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">MissesDressy</h3>
                <p class="project-grid__type">
                  Front-end <span class="project-grid__type-separator"></span>{' '}
                  e-commerce <span class="project-grid__type-separator"></span>{' '}
                  Design
                </p>
              </div>
            </a>
          </li>
          <li class="project-grid__item js-project-grid-item">
            {' '}
            <a
              href="/rindle/"
              class="project-grid__link js-project-link"
            >
              <div class="project-grid__image-crop">
                <img
                  class="project-grid__image"
                  src="https://d33wubrfki0l68.cloudfront.net/9f149dde91bcf9c27aca0c58c2be029b90edb62b/59b6e/assets/images/projects/rindle/rindle_grid_item.jpg"
                  alt=""
                />
              </div>
              <div class="project-grid__text">
                <h3 class="project-grid__name">Rindle</h3>
                <p class="project-grid__type">Front-end</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
