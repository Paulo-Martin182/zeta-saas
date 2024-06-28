import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import {
  /* jsonSchemaTransform, */
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import * as Auth from './routes/auth'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(Auth.CreateAccount)

app.listen({ port: 3333 }).then(() => {
  console.log('Server Running')
})
