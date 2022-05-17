import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'
import Hero from '../components/Hero'
import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'
import ProjectHero from 'components/ProjectHero'

import { useRouter } from 'next/router'
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from '@lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

import { groq } from 'next-sanity'

const builder = imageUrlBuilder(client)

export default function Projects(props) {
  const { postdata, preview } = props

  const router = useRouter()

  const { data: projects } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  })

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <Container
      title="Projects"
      description="This is the Projects page"
    >
      <>
        {projects &&
          projects.map(
            (project) => (
              (
                <ProjectHero
                  coverImage={urlFor(project.heroImage).width(1900).url()}
                />
              ),
              (
                <section class="section">
                  <img src={urlFor(project.heroImage).width(1900).url()} />
                  <h3 className="text-lg">
                    <Link
                      href="/projects/[slug]"
                      as={`/projects/${project.slug.current}`}
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3">{project.excerpt}</p>
                </section>
              )
            )
          )}
      </>
    </Container>
  )
}

const query = groq`
*[_type == "project"] | order(_createdAt asc) {
  ..., 
  author->,
  categories[]->
}
`

export async function getStaticProps({ params, preview = false }) {
  const project = await getClient(preview).fetch(query)

  return {
    props: {
      postdata: project,
      preview,
    },
    revalidate: 10,
  }
}
