import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

export default function Container({ children }, ...CustomMeta) {
  const router = useRouter()

  const meta = {
    title: "Ben Haldenby's Portfolio",
    description: "Description of Ben Haldenby's Portfolio",
    image: '/avatar.png',
    type: 'website',
    ...CustomMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
        <meta
          name="image"
          content={meta.image}
        />
        <meta
          name="type"
          content={meta.type}
        />
        <meta
          name="og:title"
          content={meta.title}
        />
        <meta
          name="og:description"
          content={meta.description}
        />
        <meta
          name="og:image"
          content={meta.image}
        />
        <meta
          name="og:type"
          content={meta.type}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@mannupaaji"
        />
        <meta
          name="twitter:title"
          content={meta.title}
        />
        <meta
          name="twitter:description"
          content={meta.description}
        />
        <meta
          name="twitter:image"
          content={meta.image}
        />
        <meta
          name="twitter:creator"
          content="@slimpixels"
        />
        {meta.date && (
          <meta
            name="article:published_time"
            content={meta.date}
          />
        )}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One"
          type="text/css"
          media="all"
        />
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <header className="header-blend">
          <Navbar />
          {router.asPath === '/' ? <Hero /> : ''}
        </header>
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
