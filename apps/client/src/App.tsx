import { QueryClientProvider } from "@tanstack/react-query";
import { Form as WeightForm } from './components/weight/Form.js';
import { queryClient } from "./utils/trpc.js";
import { Log as WeightLog } from "./components/weight/Log.js";
import { WeightChart } from "./components/weight/Chart.js";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeightForm/>
      <WeightChart/>
      <WeightLog/>
    </QueryClientProvider>
  )
}