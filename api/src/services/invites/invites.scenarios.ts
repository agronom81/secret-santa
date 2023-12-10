import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-10T08:30:01.183Z',
            updatedAt: '2023-12-10T08:30:01.183Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-10T08:30:01.183Z',
            updatedAt: '2023-12-10T08:30:01.183Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
