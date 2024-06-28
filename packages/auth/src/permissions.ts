import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { UserModels } from './models/user'
import { Role } from './schemas/roles'

export type PermissionsTypes = (
  user: UserModels,
  builder: AbilityBuilder<AppAbility>,
) => void

const permissions: Record<Role, PermissionsTypes> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all')
    cannot('transfer_ownership', 'Organization')
    can('transfer_ownership', 'Organization', { ownerId: { $eq: user.id } })
  },
  MEMBER: (user, { can }) => {
    can('get', 'User')
    can(['create', 'get'], 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  BILLING: (user, { can }) => {
    can('manage', 'Billing')
  },
}

export default permissions
