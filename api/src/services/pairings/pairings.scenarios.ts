import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-07T13:12:49.593Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:12:49.593Z',
            updatedAt: '2023-12-07T13:12:49.593Z',
            sendReminder: true,
          },
        },
        santa: {
          create: {
            email: 'String6481340',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:12:49.593Z',
          },
        },
        person: {
          create: {
            email: 'String1479580',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:12:49.593Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-07T13:12:49.593Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:12:49.593Z',
            updatedAt: '2023-12-07T13:12:49.593Z',
            sendReminder: true,
          },
        },
        santa: {
          create: {
            email: 'String6787207',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:12:49.593Z',
          },
        },
        person: {
          create: {
            email: 'String7073992',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:12:49.593Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
