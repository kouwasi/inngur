import React, { useCallback } from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import Layout from '~/components/Layout'
import PostCard from '~/components/PostCard'
import { useRouter } from 'next/dist/client/router'

const Home = () => {
  const { data: data, error } = useAspidaSWR(apiClient.posts)
  const router = useRouter()

  // なんかLinkが使えないからonClickで実装してる
  const handleClick = useCallback((id: number) => {
    router.push(`/posts/${id}`)
  }, [])

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
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
        {data.posts.map((post, index) => (
          <div key={index}>
            <PostCard post={post} onClick={handleClick}></PostCard>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
