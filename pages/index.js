import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import FavouriteProjects from '../components/FavouriteProjects'
import LatestCode from '../components/LatestCode'
import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'

export default function Home({ repositories }) {
  return (
    <Container
      title="Homepage"
      description="This is the homepage"
    >
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
      <div>test</div>
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
