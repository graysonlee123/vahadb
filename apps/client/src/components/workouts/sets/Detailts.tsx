import type { inferOutput } from "@trpc/tanstack-react-query"
import type { trpc } from "../../../utils/trpc.js"

type Props = {
  set: inferOutput<typeof trpc.workout.list>[0]['sets'][0]
}

export function Details({set}: Props) {
  return (
    <div style={{backgroundColor: '#eeeeee'}}>
      <dl>
        <dt>
          Type
        </dt>
        <dd>
          {set.type}
        </dd>
        <dt>
          Created at:
        </dt>
        <dd>
          {set.createdAt}
        </dd>
        <dt>
          Updated at:
        </dt>
        <dd>
          {set.updatedAt}
        </dd>
        <dt>
          Count:
        </dt>
        <dd>
          {set.count}
        </dd>
        {set.weight && (
          <>
            <dt>
              Weight
            </dt>
            <dd>
              {set.weight}
            </dd>
          </>
        )}
      </dl>
    </div>
  )
}