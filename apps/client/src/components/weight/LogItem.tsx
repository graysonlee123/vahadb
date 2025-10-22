import type { MouseEvent } from "react"
import { useGramsToPounds } from "../../hooks/conversions.js"

type Props = {
  date: string
  weight: number
  note: string | null
  onDelete: (e: MouseEvent) => void
}

export default function LogItem({date, weight, note, onDelete}: Props) {
  const weightAsPounds = useGramsToPounds(weight)

  return (
    <div>
      <div>
        {date}
      </div>
      <div>
        {weightAsPounds}lbs {note && `(${note})`}
      </div>
      <div>
        <button onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
