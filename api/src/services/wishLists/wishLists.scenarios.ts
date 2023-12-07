import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-07T13:15:06.757Z',
        user: {
          create: {
            email: 'String6139304',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:15:06.757Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:15:06.757Z',
            updatedAt: '2023-12-07T13:15:06.757Z',
            sendReminder: true,
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-07T13:15:06.757Z',
        user: {
          create: {
            email: 'String7777804',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T13:15:06.757Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-07T13:15:06.757Z',
            updatedAt: '2023-12-07T13:15:06.757Z',
            sendReminder: true,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
