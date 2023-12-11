import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from '../EventForm/EventForm'
import SlideInPanel from '../SlideInPanel/SlideInPanel'

export const QUERY = gql`
  query FindEditEventQuery($id: String!) {
    event(id: $id) {
      id
      date
      name
      sendReminder
    }
  }
`

const UPDATE_EVENT_MUTATION = gql`
  mutation updateEventMutation(
    $id: String!
    $input: UpdateEventInput! # $name: String! # $date: DateTime! # $sendReminder: Boolean!
  ) {
    updateEvent(id: $id, input: $input) {
      date
      name
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  handleClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  handleClose: () => void
}) => {
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event updated')
      handleClose()
    },
    onError: (error) => {
      toast.error(error.message)
      console.error(error.message)
    },
  })

  const handleSubmit = (data) => {
    updateEvent({
      variables: {
        id: event.id,
        input: {
          date: data.eventDate,
          name: data.eventName,
          sendReminder: data.eventReminder,
        },
      },
    })
  }

  return (
    <div>
      <SlideInPanel handleClose={handleClose}>
        <h1 className="m-0 p-0 font-condensed text-[116px] uppercase leading-[0.8]">
          Edit Details
        </h1>
        <h2 className="mb-10 font-handwriting text-3xl uppercase text-white">
          Edit the current event
        </h2>
        <EventForm
          buttonLabel="Update"
          loading={loading}
          handleSubmit={handleSubmit}
          defaultValues={{
            eventName: event?.name,
            eventDate: event?.date,
            eventReminder: event?.sendReminder,
          }}
        />
      </SlideInPanel>
    </div>
  )
}
