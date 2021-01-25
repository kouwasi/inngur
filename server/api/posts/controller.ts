import { defineController } from './$relay'
import { createPost, getPosts } from '$/service/posts'

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: { posts: await getPosts() }
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await createPost(body.post)
  })
}))
