import { Post, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getPosts = () => prisma.post.findMany()

export const createPost = (post: Pick<Post, 'title'>) =>
  prisma.post.create({ data: post })
