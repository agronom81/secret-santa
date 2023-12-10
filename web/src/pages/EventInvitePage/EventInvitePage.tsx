import { MetaTags } from '@redwoodjs/web'

import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Event Invite" />
      <EventHeaderCell id={id} />
      <InviteGroup id={id} />
    </>
  )
}

export default EventInvitePage
