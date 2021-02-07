import path from 'path'
import Fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import { SERVER_PORT, BASE_PATH } from './service/envValues'
import server from './$server'

const fastify = Fastify({ logger: true })

fastify.register(helmet)
fastify.register(cors)
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: BASE_PATH
})

server(fastify, { basePath: BASE_PATH })

fastify.listen(SERVER_PORT)
