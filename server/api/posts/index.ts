import { PostRequest, PostResponse } from '$/types'

export type Methods = {
  get: {
    resBody: { posts: PostResponse[] }
  }
  post: {
    reqFormat: FormData
    reqBody: PostRequest
    resBody: PostResponse
  }
}
