import { useQuery } from "@tanstack/react-query"
import { trpc } from "../../utils/trpc.js"
import { Details as WorkoutDetails } from "./Details.js"

export function List() {
  const query = useQuery(trpc.workout.list.queryOptions())

  return (
    <div>
      <h2>
        Workouts
      </h2>

      {query.isPending && (
        <p>
          Loading...
        </p>
      )}

      {query.isError && (
        <p>
          Error loading workouts.
        </p>
      )}

      {query.isSuccess && (
        <div>
          {query.data.length === 0 ? (
              <p>No workouts found.</p>
            ) : (
              query.data.map((workout) => <WorkoutDetails workout={workout} key={workout.id}/>)
            )}
        </div>
      )}
    </div>
  )
}