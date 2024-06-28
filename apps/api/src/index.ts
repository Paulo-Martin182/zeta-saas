import { DefAbilityFor, projectModel } from '@zeta/auth'

const ability = DefAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectModel.parse({ id: 'project-id', ownerId: 'user-id2' })

console.log(ability.can('delete', project))
