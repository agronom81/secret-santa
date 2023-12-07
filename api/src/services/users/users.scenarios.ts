import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String9651738',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-07T13:10:36.612Z',
      },
    },
    two: {
      data: {
        email: 'String2072818',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-07T13:10:36.612Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
