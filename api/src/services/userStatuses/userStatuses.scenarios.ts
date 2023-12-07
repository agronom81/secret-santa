import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        user: {
          create: {
            email: 'String25633',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:11:59.532Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:11:59.532Z',
            updatedAt: '2023-12-07T13:11:59.532Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String4437522',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:11:59.532Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:11:59.532Z',
            updatedAt: '2023-12-07T13:11:59.532Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
