import groq from 'groq'
import Container from '../../components/Container'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import sanityClient from '@sanity/client'
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-04-16', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_API_TOKEN, // 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})
import ProjectHero from 'components/ProjectHero'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function trimUrl(url) {
  let newUrl = url.replace(/^https?\:\/\//i, '').replace(/\/$/, '')
  //url = url.replace(/\/$/, '')
  return newUrl
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          alt={value.alt || ' '}
          width={500}
          height={500}
          loading="lazy"
        />
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={value.href}
          target="_blank"
          rel={rel}
        >
          {children}
        </a>
      )
    },
  },
}

const Project = ({ project }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    slug,
    heroImage,
    websiteUrl,
    introText,
    projectTags,
    pageBuilder,
    categories,
    authorImage,
    body = [],
  } = project
  return (
    <Container
      title="Projects"
      description="This is the Projects page"
    >
      <div className="document document--project">
        <div className="section project-hero-image">
          <Image
            src={urlFor(heroImage).width(1900).url()}
            alt={heroImage.alt || ' '}
            // layout="fill"
            width={1900}
            height={800}
            loading="lazy"
          />
        </div>

        <section className="section section--pt section--pb section--pb">
          <div className="container container--centered">
            <div className="project-header">
              {projectTags && (
                <ul className="project-tags">
                  {projectTags.map((tag) => (
                    <li
                      className="project-tags__item"
                      key={tag.value}
                    >
                      {tag.label}
                    </li>
                  ))}
                </ul>
              )}
              <h1 className="project-title project-title--centered">{title}</h1>
              <p className="project-url">
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {trimUrl(websiteUrl)}
                </a>
              </p>
            </div>
            <div className="project-intro">
              <PortableText
                value={introText}
                components={ptComponents}
              />
            </div>
          </div>
        </section>

        <section className="section section--half-screen section--pt section--pb section--blue section--crop section--cropped js-section-crop">
          <div className="container">
            <figure className="device browser device--shadow is-expandable js-expand-container will-load js-not-loaded loaded">
              <div className="browser__toolbar">
                <span className="browser__controls">
                  <span className="browser__dot"></span>
                  <span className="browser__dot"></span>
                  <span className="browser__dot"></span>
                </span>
                <span className="browser__search"></span>
              </div>
              <div className="browser__screenshot device__screenshot">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/62dbc630e1a07eaa516fe01c39e3f90bf6b76be4/07c74/assets/images/projects/britishmuseum/100objects/britishmuseum_100objects_sm.jpg"
                  srcset="https://d33wubrfki0l68.cloudfront.net/07c580d2da95b682435bd44034c0a1de83906a96/dd918/assets/images/projects/britishmuseum/100objects/britishmuseum_100objects_md.jpg 640w, https://d33wubrfki0l68.cloudfront.net/64c4e5b3e0406cb600928e1a89906f4bb6eaceb2/29722/assets/images/projects/britishmuseum/100objects/britishmuseum_100objects_xl.jpg 1070w"
                  className="browser__image"
                  alt="British Museum homepage"
                />
              </div>
              <div className="browser__zoom browser__zoom--blue js-browser-zoom">
                ×
              </div>
            </figure>
          </div>
        </section>

        <section className="section section--full-screen section--vertically-centered">
          <div className="container container--flex">
            <div className="row row--flex row--padded u-align-center">
              <div className="col col--md-3">
                <h2>Moctezuma</h2>
                <p className="p p--light">
                  One of many special exhibitions for which I built the
                  promotional site. Each one featured a bespoke design, showing
                  off eye-popping visuals from the exhibition.
                </p>
              </div>
              <div className="col col--md-7">
                <figure className="device browser device--shadow will-load js-not-loaded loaded">
                  <div className="browser__toolbar">
                    <span className="browser__controls">
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                    </span>
                    <span className="browser__search"></span>
                  </div>
                  <div className="browser__screenshot browser__screenshot--bg-black browser__screenshot--fullwidth device__screenshot">
                    <img
                      className="browser__image"
                      src="https://d33wubrfki0l68.cloudfront.net/cf7b265e9a80965f7bf5c0aaa5c99db03ee50884/fd129/assets/images/projects/britishmuseum/projects/bm_moctezuma.jpg"
                      alt="Moctezuma exhibtion page"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--full-screen section--vertically-centered section--grey">
          <div className="container container--flex">
            <div className="row row--flex row--padded u-align-center">
              <div className="col">
                <figure className="device browser device--shadow will-load js-not-loaded loaded">
                  <div className="browser__toolbar">
                    <span className="browser__controls">
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                    </span>
                    <span className="browser__search"></span>
                  </div>
                  <div className="browser__screenshot device__screenshot">
                    <img
                      className="browser__image"
                      src="https://d33wubrfki0l68.cloudfront.net/48c65395ca1c16f775270591f2495b2287db084e/f0434/assets/images/projects/britishmuseum/projects/bm_statue.jpg"
                      alt="Moctezuma exhibtion page"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--full-screen section--vertically-centered">
          <div className="container container--flex">
            <div className="row row--flex row--padded u-align-center">
              <div className="col col--md-3">
                <h2>Young Explorers</h2>
                <p className="p p--light">
                  A special section of the site for youngsters all about world
                  histories and cultures. It featured activities and games,
                  including the isometric puzzler Time Explorer. Feedback on
                  this project was great with reports of kids staying on the
                  site for much longer than other visitor sessions.
                </p>
              </div>
              <div className="col col--md-7">
                <figure className="device browser device--shadow will-load js-not-loaded loaded">
                  <div className="browser__toolbar">
                    <span className="browser__controls">
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                      <span className="browser__dot"></span>
                    </span>
                    <span className="browser__search"></span>
                  </div>
                  <div className="browser__screenshot device__screenshot">
                    <img
                      className="browser__image"
                      src="https://d33wubrfki0l68.cloudfront.net/0d8fca690a9d235415ebe55b4a4e8555f0b9f507/3e38d/assets/images/projects/britishmuseum/projects/bm_ye_game.jpg"
                      alt="Moctezuma exhibtion page"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--full-screen section--vertically-centered section--grey">
          <div className="container tc">
            <blockquote className="project__testimonial testimonial testimonial--indent">
              <q className="testimonial__quote">
                <p>
                  Congratulations on this achievement, it is admirable how
                  simply and lucidly it works. <br /> You have created something
                  really new and exciting.
                </p>
              </q>
              <cite className="testimonial__citation">
                <span className="testimonial__person">Andrew Burnett</span>
                <span className="testimonial__org">
                  Deputy Director, The British Museum
                </span>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="section section--half-screen section--vertically-centered section--cta">
          <div className="container">
            <div className="text text--narrow text--centered">
              <h2 className="h2">Ready to talk?</h2>
              <p className="p p--lg u-mb-1">
                I've helped hundreds of companies to implement their ideas on
                the web and I'd love to help you do the same.
              </p>
            </div>
            <div className="morph-button morph-button-overlay morph-button-fixed morph-button--cta js-cta-button">
              <a
                className="btn btn--primary btn--lg btn--morph"
                href="/contact/"
              >
                Get in touch
              </a>
              <div className="morph-content">
                <div className="content-style-overlay content-style-overlay--contact">
                  <span className="icon icon-close js-overlay-close">
                    Close menu
                  </span>
                  <div className="block block--centered">
                    <div className="text-block tc">
                      <h2 className="h2">Get in touch</h2>
                    </div>
                    <form
                      action="thank-you"
                      className="form form--contact js-form-contact"
                      id="ajax-contact"
                      method="post"
                      name="slimpixels_contact_form"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="slimpixels_contact_form"
                      />
                      <fieldset>
                        <div className="row row--flex">
                          <div className="col">
                            <h4 className="h4 h4--contact">How can I help?</h4>
                            <textarea
                              rows="1"
                              id="project_about"
                              name="project_about"
                              className="input input--textarea js-input-textarea js-input-about"
                              placeholder="Tell me a bit about your project"
                            ></textarea>
                          </div>
                          <div className="col">
                            <h4 className="h4 h4--contact">
                              Tell me about your timeline and budget.
                            </h4>
                            <textarea
                              rows="1"
                              id="project_details"
                              name="project_details"
                              className="input input--textarea js-input-textarea js-input-details"
                              placeholder="The more I know the more I can help"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                        <h4 className="h4 h4--contact">
                          How can I contact you?
                        </h4>
                        <div className="row row--flex">
                          <div className="col col--half">
                            <input
                              className="input input--text js-input-name"
                              type="text"
                              id="name"
                              name="name"
                              placeholder="First and Last name"
                              required=""
                            />
                          </div>
                          <div className="col col--half">
                            <input
                              className="input input--text js-input-telephone"
                              type="text"
                              id="telephone"
                              name="telephone"
                              placeholder="Telephone number"
                            />
                          </div>
                        </div>
                        <div className="row row--flex">
                          <div className="col col--half">
                            <input
                              className="input input--text js-input-email"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Email address"
                              required=""
                            />
                          </div>
                          <div className="col col--half">
                            <input
                              className="input input--text js-input-company"
                              type="text"
                              id="company"
                              name="company"
                              placeholder="Company or organisation"
                            />
                          </div>
                        </div>
                        <div
                          className="form__messages js-form-messages"
                          id="form-messages"
                        ></div>
                        <div className="row row--flex">
                          <div className="col u-tr">
                            <button
                              className="btn btn--primary btn--block btn--lg btn--send js-btn-send-popup"
                              type="submit"
                            >
                              Send message
                            </button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="next-project next-project--storm js-next-project">
          {' '}
          <a
            href="/storm/"
            className="next-project__link js-next-project-link"
          >
            <div className="container next-project__container">
              <p className="next-project__nav-label">Next</p>
              <h3 className="next-project__name">Storm Models</h3>
            </div>
          </a>
        </div>

        {categories && (
          <ul>
            Posted in
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div>
            <Image
              src={urlFor(authorImage).width(50).url()}
              alt={authorImage.alt || ' '}
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </Container>
  )
}

const query = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  slug,
  heroImage,
  websiteUrl,
  introText,
  projectTags,
  pageBuilder,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const project = await client.fetch(query, { slug })
  return {
    props: {
      project,
    },
  }
}
export default Project
