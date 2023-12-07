import { DateField, Form, Label, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      id
      name
      date
      createdAt
    }
  }
`

const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event was successfully created')
      navigate(routes.eventInvite())
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })

  const handleSubmit = (data) => {
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder,
      },
    })
  }

  return (
    <>
      <MetaTags title="Set up your event" />
      <HeaderWithRulers
        className="mb-8 text-white"
        heading="Set up your event"
      />
      <div className="auth-form">
        <Form onSubmit={handleSubmit}>
          <fieldset disabled={loading}>
            <div className="field">
              <Label name={'eventName'}>Event Name</Label>
              <TextField name={'eventName'} placeholder="" />
            </div>
            <div className="field">
              <Label name={'eventDate'}>Event Date</Label>
              <DateField name={'eventDate'} placeholder="" />
            </div>
            <div className="field">
              <Checkbox
                name="eventReminder"
                label="Send out a reminder for an event"
              />
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
