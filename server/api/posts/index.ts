import { PostResponse } from '$/types'

export type Methods = {
  get: {
    resBody: { posts: PostResponse[] }
  }
  post: {
    reqFormat: FormData
    reqBody: { title: string; image: Blob }
    resBody: PostResponse
  }
}
