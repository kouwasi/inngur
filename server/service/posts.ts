import { Post, PrismaClient } from '@prisma/client'
import { Multipart } from 'fastify-multipart'
import path from 'path'
import fs from 'fs'
import { API_ORIGIN, BASE_PATH } from './envValues'
import { PostResponse } from '$/types'

const prisma = new PrismaClient()
const postsDirecotry = 'public/post_images'

export const createPostImageUrl = (name: string) =>
  `${API_ORIGIN}${BASE_PATH}/post_images/${name}`

export const getPosts = () =>
  prisma.post.findMany({ orderBy: [{ createdAt: 'desc' }] })

export const getPost = (id: number) =>
  prisma.post.findFirst({ where: { id: id } })

export const createPost = async (title: string, imageFile: Multipart) => {
  const imageName = `${Date.now()}${path.extname(imageFile.filename)}`

  await fs.promises.writeFile(
    path.resolve(postsDirecotry, imageName),
    await imageFile.toBuffer()
  )

  return prisma.post.create({
    data: { title, image_name: imageName }
  })
}

export const createPostResponse = (post: Post): PostResponse => ({
  image_url: createPostImageUrl(post.image_name),
  ...post
})
