import { useMutation } from "@tanstack/react-query"
import { useEffect, useId, useState, type FormEvent } from "react"
import { usePoundsToGrams } from "../../hooks/conversions.js"
import { formatDate } from "../../utils/formatDate.js"
import { invalidateWeight, trpc } from "../../utils/trpc.js"
import Label from "../forms/Label.js"

export function Form() {
  const mutation = useMutation(trpc.weight.create.mutationOptions({
    onSuccess: () => {
      setDate(formatDate(new Date()))
      setWeight('')
      setNote('')
    },
    onSettled: () => invalidateWeight(),
  }))

  const [date, setDate] = useState(formatDate(new Date()))
  const dateId = useId()

  const [weight, setWeight] = useState('')
  const weightId = useId()
  const weightAsGrams = usePoundsToGrams(parseFloat(weight))

  const [note, setNote] = useState('')
  const noteId = useId()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutation.mutate({
      weight: weightAsGrams,
      note: note,
      date: date,
    })
  }

  useEffect(() => {
    if (mutation.isError) {
      console.error(mutation.error)
    }
  }, [mutation.isError, mutation.error])

  return (
    <div>
      <h2>
        Log weight
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Label htmlFor={dateId}>
            Date
          </Label>
          <input
            id={dateId}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <Label htmlFor={weightId}>
            Weight (lbs)
          </Label>
          <input
            id={weightId}
            type="number"
            step="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 180"
            required
          />
        </fieldset>
        <fieldset>
          <Label htmlFor={noteId}>
            Note
          </Label>
          <input
            id={noteId}
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. After vacation"
          />
        </fieldset>
        <fieldset>
          <button
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Pending' : 'Submit'}
          </button>
        </fieldset>
        {mutation.isError && (
          <div>
            Error, see console for details.
          </div>
        )}
      </form>
    </div>
  )
}