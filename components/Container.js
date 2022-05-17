import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Document from './Document'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

export default function Container({ children }, ...CustomMeta) {
  const router = useRouter()

  const [scrollFilled, setScrollFilled] = useState(false)
  const [filled, setFilled] = useState(false)

  function handleChange(newValue) {
    console.log('setFilled', newValue)
    setFilled(newValue)
  }
  function handleScrollChange(newValue) {
    console.log('setScrollFilled', newValue)
    setScrollFilled(newValue)
  }

  const meta = {
    title: "Ben Haldenby's Portfolio",
    description: "Description of Ben Haldenby's Portfolio",
    image: '/avatar.png',
    type: 'website',
    ...CustomMeta,
  }

  return (
    <>
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
          href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One&display=optional"
          type="text/css"
          media="all"
        />
      </Head>
      <main>
        <Navbar
          onChange={handleChange}
          filled={filled}
          scrollFilled={scrollFilled}
        />
        <Document
          onScrollChange={handleScrollChange}
          onChange={handleChange}
        >
          {children}
          <Footer />
        </Document>
      </main>
    </>
  )
}
