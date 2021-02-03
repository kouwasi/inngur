import { PrismaClient } from '@prisma/client'
import { Multipart } from 'fastify-multipart'
import path from 'path'
import fs from 'fs'
import { API_ORIGIN, BASE_PATH } from './envValues'

const prisma = new PrismaClient()
const postsDirecotry = 'public/posts'

export const createPostImageUrl = (name: string) =>
  `${API_ORIGIN}${BASE_PATH}/posts/${name}`

export const getPosts = () =>
  prisma.post.findMany({ orderBy: [{ createdAt: 'desc' }] })

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
