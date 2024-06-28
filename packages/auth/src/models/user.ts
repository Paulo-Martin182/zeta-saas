import { z } from 'zod'

import { roleSchema } from '../schemas/roles'

export const userModel = z.object({
  id: z.string(),
  role: roleSchema,
})

export type UserModels = z.infer<typeof userModel>
