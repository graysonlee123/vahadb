import { useMutation, useQueryClient } from "@tanstack/react-query"
import { trpc } from "../../utils/trpc.js"

export function Create() {
  const queryClient = useQueryClient()

  const options = trpc.workout.create.mutationOptions({
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: [['workout', 'list']]}) // TODO: Couple these
    },
  })

  const mutation = useMutation(options)

  return (
    <div>
      <h2>
        Log workout
      </h2>

      <button onClick={() => mutation.mutate({
        reps: [
          {
            type: 'PUSHUP',
            count: 10,
          },
          {
            type: 'PUSHUP',
            count: 7,
          },
          {
            type: 'PUSHUP',
            count: 6,
          },
        ],
      })}>Log Workout</button>

      {mutation.isPending && (
        <div>
          Loading...
        </div>
      )}

      {mutation.isError && (
        <div>
          Error logging workout.
        </div>
      )}

      {mutation.isSuccess && (
        <div>
          Logged workout succesfully.
        </div>
      )}
    </div>
  )
}