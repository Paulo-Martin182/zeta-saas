import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'
import { z } from 'zod'

import { UserModels } from './models/user'
import permissions from './permissions'
import { appAbilitiesSchema } from './schemas/appAbilities'

export * from './models/user'
export * from './models/organization'
export * from './models/project'

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function DefAbilityFor(user: UserModels) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions not found for role ${user?.role}`)
  }

  permissions[user.role](user, builder)

  const ability = builder.build({
    detectSubjectType: (object) => object.__typename,
  })

  return ability
}
