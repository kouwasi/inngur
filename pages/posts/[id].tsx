import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Layout from '~/components/Layout'
import PostCard from '~/components/PostCard'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { NextPageContext } from 'next'

const validatePostIdSlug = (postId: string | string[] | undefined): boolean =>
  (postId != undefined || typeof postId == 'string') &&
  Number.isInteger(parseInt(postId as string))

const Post = () => {
  const router = useRouter()
  const postId = router.query.id

  if (!validatePostIdSlug(postId)) {
    router.push('/')
  }

  const { data: data, error } = useAspidaSWR(
    apiClient.posts._id(parseInt(postId as string))
  )

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
      <div className="m-2">
        <PostCard post={data} />
      </div>
    </Layout>
  )
}

Post.getInitialProps = (ctx: NextPageContext) => {
  if (ctx.res && !validatePostIdSlug(ctx.query.id)) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
  }

  return {}
}

export default Post
