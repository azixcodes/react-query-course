import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./components/Root";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
};

export default App;
