import { DateField, Form, Label, TextField } from '@redwoodjs/forms'

import { formatDateFromDbForInput } from 'src/helpers/dateHelpers'

import Checkbox from '../Checkbox/Checkbox'

interface EventFormProps {
  loading: boolean
  handleSubmit: (data) => void
  defaultValues?: {
    eventName?: string
    eventDate?: string
    eventReminder?: boolean
  }
  buttonLabel?: string
}

const EventForm = ({
  loading,
  handleSubmit,
  defaultValues = {},
  buttonLabel = 'Save',
}: EventFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
        <div className="field">
          <Label name={'eventName'}>Event Name</Label>
          <TextField
            name={'eventName'}
            placeholder=""
            defaultValue={defaultValues?.eventName}
          />
        </div>
        <div className="field">
          <Label name={'eventDate'}>Event Date</Label>
          <DateField
            name={'eventDate'}
            placeholder=""
            defaultValue={formatDateFromDbForInput(defaultValues?.eventDate)}
          />
        </div>
        <div className="field">
          <Checkbox
            defaultChecked={defaultValues?.eventReminder}
            name="eventReminder"
            label="Send out a reminder for an event"
          />
        </div>
        <button type="submit">{buttonLabel}</button>
      </fieldset>
    </Form>
  )
}

export default EventForm
