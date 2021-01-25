import { Post } from '@prisma/client'

export type Methods = {
  get: {
    resBody: { posts: Post[] }
  }
  post: {
    reqBody: { post: Pick<Post, 'title'> }
    resBody: Post
  }
}
