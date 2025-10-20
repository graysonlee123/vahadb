import type { inferOutput } from "@trpc/tanstack-react-query"
import type { trpc } from "../../utils/trpc.js"
import { Details as SetDetails } from "./sets/Detailts.js"

type Props = {
  workout: inferOutput<typeof trpc.workout.list>[0]
}

export function Details({workout}: Props) {
  return (
    <div data-id={workout.id}>
      <h3>Workout details</h3>
      <dl>
        <dt>
          Created at:
        </dt>
        <dd>
          {workout.createdAt}
        </dd>
        <dt>
          Updated at:
        </dt>
        <dd>
          {workout.updatedAt}
        </dd>
        <dt>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
            {workout.sets.map((set) => <SetDetails set={set} key={set.id}/>)}
          </div>
        </dt>
      </dl>
    </div>
  )
}