export const schema = gql`
  type Invite {
    id: String!
    userId: Int
    user: User
    status: Status!
    eventId: String!
    event: Event!
    email: String!
    name: String!
  }

  enum Status {
    INVITED
    DESCLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @skipAuth
    invite(id: String!): Invite @skipAuth
  }

  input CreateInviteInput {
    userId: Int
    status: Status!
    eventId: String!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    userId: Int
    status: Status
    eventId: String
    email: String
    name: String
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @skipAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @skipAuth
    deleteInvite(id: String!): Invite! @skipAuth
  }
`
