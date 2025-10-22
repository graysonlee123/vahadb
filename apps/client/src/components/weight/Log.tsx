import { useMutation, useQuery } from "@tanstack/react-query"
import { invalidateWeight, trpc } from "../../utils/trpc.js"
import LogItem from "./LogItem.js"

export function Log() {
  const query = useQuery(trpc.weight.list.queryOptions())
  const mutation = useMutation(trpc.weight.delete.mutationOptions({
    onSettled: () => invalidateWeight(),
  }))

  const handleClick = (id: number) => {
    mutation.mutate({id})
  }

  return (
    <div>
      <h2>
        Weight log
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
        query.data.length === 0 ? (
          <div>
            No logs found.
          </div>
        ) : (
          <ul>
            {query.data.map((item) => (
              <li key={item.id}>
                <LogItem
                  date={item.date}
                  weight={item.weight}
                  note={item.note}
                  onDelete={() => handleClick(item.id)}
                />
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  )
}