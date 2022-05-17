import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'
import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'
import Hero from '../components/Hero'

export default function Home({ repositories }) {
  return (
    <Container
      title="Homepage"
      description="This is the homepage"
    >
      <Hero className="section section--full-screen" />
      <section className="section section--half-screen section--vertically-centered section--centered section--pt section--pb">
        <div className="container">
          <div className="text">
            <p className="p p--xl">
              Hi, I'm Ben Haldenby, a Front End Developer and UX Engineer with
              23 years of commercial experience.
            </p>
            <p className="p p--xl">
              I design and build web sites and apps for startups, large
              enterprises, and agencies. I've helped clients across all sectors
              to realise their ideas online, including
              <a href="ancasta/">Etch UK</a>,{' '}
              <Link
                href="http://www.crewstudio.co"
                target="_blank"
              >
                Crew Studio
              </Link>
              , <Link href="nhs/">NHS</Link> and{' '}
              <Link href="britishmuseum/">The British Museum</Link>.
            </p>
            <p className="p p--xl">
              Even when an engagement is short or a project is conducted
              remotely, my skill and attention to detail mean these clients find
              that it's like having another member on their team.
            </p>
          </div>
        </div>
      </section>
      <FavouriteProjects className="section section--full-screen section--vertically-centered section--pt section--pb" />
      <LatestCode
        className="section section--full-screen section--vertically-centered section--pt section--pb"
        repositories={repositories}
      />
    </Container>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN)
  let token = process.env.GITHUB_AUTH_TOKEN

  const repositories = await getLatestRepos(userData, token)
  console.log('REPOSITORIES', repositories)

  return {
    props: {
      repositories,
    },
  }
}
