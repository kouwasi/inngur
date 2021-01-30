import { defineController } from './$relay'
import { createPost, createPostImageUrl, getPosts } from '$/service/posts'
import { PostResponse } from '$/types'
import { Post } from '@prisma/client'

const createPostResponse = (post: Post): PostResponse => ({
  image_url: createPostImageUrl(post.image_name),
  ...post
})

export default defineController(() => ({
  get: async () => {
    const posts: PostResponse[] = await (await getPosts()).map(
      createPostResponse
    )

    return {
      status: 200,
      body: { posts: posts }
    }
  },
  post: async ({ body: { title, image } }) => ({
    status: 201,
    body: createPostResponse(await createPost(title, image))
  })
}))
