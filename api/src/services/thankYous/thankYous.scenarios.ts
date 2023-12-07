import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:14:01.324Z',
            updatedAt: '2023-12-07T13:14:01.324Z',
            sendReminder: true,
          },
        },
        user: {
          create: {
            email: 'String1757033',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:14:01.324Z',
          },
        },
        toUser: {
          create: {
            email: 'String6092519',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:14:01.324Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:14:01.324Z',
            updatedAt: '2023-12-07T13:14:01.324Z',
            sendReminder: true,
          },
        },
        user: {
          create: {
            email: 'String2505924',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:14:01.324Z',
          },
        },
        toUser: {
          create: {
            email: 'String782558',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:14:01.324Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
