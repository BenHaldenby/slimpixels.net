import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import getLatestRepos from '../lib/getLatestRepos'
import userData from '../constants/data'

export default function LatestCode(props) {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    // let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(props.repositories)
  }, [props.repositories])
  return (
    <section className={`${props.className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard
              latestRepo={latestRepo}
              key={idx}
            />
          ))}
      </div>
    </section>
  )
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h2 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {latestRepo.name}
      </h2>
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="repo-link font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  )
}
