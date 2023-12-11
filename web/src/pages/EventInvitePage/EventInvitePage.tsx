import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import EditEventCell from 'src/components/EditEventCell'
import EventHeaderCell from 'src/components/EventHeaderCell'
import InviteGroup from 'src/components/InviteGroup/InviteGroup'

const EventInvitePage = ({ id }) => {
  const [isEditEvent, setIsEditEvent] = useState(false)

  const toggleEditEvent = () => {
    setIsEditEvent((prevValue) => !prevValue)
  }

  return (
    <>
      <MetaTags title="Event Invite" />
      <EventHeaderCell id={id} showEditForm={toggleEditEvent} />
      <InviteGroup id={id} />
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-3/4 transition-transform ${
          isEditEvent ? 'translate-x-0' : 'translate-x-[120%]'
        }`}
      >
        <EditEventCell id={id} handleClose={toggleEditEvent} />
      </div>
    </>
  )
}

export default EventInvitePage
