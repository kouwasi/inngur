import { Post } from '@prisma/client'

export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export type PostResponse = Post & {
  image_url: string
}
