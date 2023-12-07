import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-07T13:14:51.424Z',
        updatedAt: '2023-12-07T13:14:51.424Z',
        sendReminder: true,
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-07T13:14:51.424Z',
        updatedAt: '2023-12-07T13:14:51.424Z',
        sendReminder: true,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
