import { Post } from '@prisma/client'

export type PostResponse = Post & {
  image_url: string
}

export type CreatePostRequest = {
  title: string
  image: Blob
}
