export const schema = gql`
  type UserStatus {
    id: Int!
    userId: Int!
    user: User!
    status: Status!
    eventId: String!
    event: Event!
  }

  enum Status {
    INVITED
    DESCLINED
    ACCEPTED
  }

  type Query {
    userStatuses: [UserStatus!]! @requireAuth
    userStatus(id: Int!): UserStatus @requireAuth
  }

  input CreateUserStatusInput {
    userId: Int!
    status: Status!
    eventId: String!
  }

  input UpdateUserStatusInput {
    userId: Int
    status: Status
    eventId: String
  }

  type Mutation {
    createUserStatus(input: CreateUserStatusInput!): UserStatus! @requireAuth
    updateUserStatus(id: Int!, input: UpdateUserStatusInput!): UserStatus!
      @requireAuth
    deleteUserStatus(id: Int!): UserStatus! @requireAuth
  }
`
