import { useQuery } from "@tanstack/react-query";
import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react";
import { trpc } from "../../utils/trpc.js";

export function WeightChart() {
  const query = useQuery(trpc.weight.list.queryOptions())
  const mount = useRef(null)

  useEffect(() => {
    if (!mount.current || query.status !== 'success') {
      return
    }

    const chart = new Chart(
      mount.current,
      {
        type: 'line',
        options: {
          scales: {}
        },
        data: {
          datasets: [
            {
              label: 'Weight',
              data: query.data.map((item) => ({
                x: item.date,
                y: item.weight,
              })).sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime()),
              tension: 0.1
            },
          ],
        },
      }
    )

    return () => {
      chart.destroy()
    }
  }, [mount.current, query.status, query.data])

  if (query.isPending) {
    return (
      <p>
        Loading...
      </p>
    )
  }

  if (query.isError) {
    return (
      <p>
        Error loading weight graph.
      </p>
    )
  }

  return (
    <div>
      <h2>
        Weight Graph
      </h2>
      <canvas ref={mount}></canvas>
    </div>
  )
}