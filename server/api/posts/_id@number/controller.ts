import { defineController } from './$relay'
import { createPostResponse, getPost } from '../../../service/posts'

export default defineController(() => ({
  get: async ({ params }) => {
    const post = await getPost(params.id)

    return post
      ? { status: 200, body: createPostResponse(post) }
      : { status: 404 }
  }
}))
