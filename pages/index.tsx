import React from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import Layout from '~/components/Layout'
import PostCard from '~/components/PostCard'

const Home = () => {
  const { data: data, error } = useAspidaSWR(apiClient.posts)

  if (error)
    return (
      <Layout title="Inngur">
        <div>failed to load</div>
      </Layout>
    )
  if (!data)
    return (
      <Layout title="Inngur">
        <div>loading...</div>
      </Layout>
    )

  return (
    <Layout title="Inngur">
      <div className="flex flex-col lg:flex-row lg:flex-wrap flex-initial">
        {data.posts.map((post, index) => (
          <div className="flex-auto m-2" key={index}>
            <PostCard post={post}></PostCard>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
