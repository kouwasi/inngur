import { CreatePostRequest, PostResponse } from '$/types'

export type Methods = {
  get: {
    resBody: { posts: PostResponse[] }
  }
  post: {
    reqFormat: FormData
    reqBody: CreatePostRequest
    resBody: PostResponse
  }
}
