import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "../core/redux/store";

=======
import { store } from "../store";
import { Provider } from "react-redux";
>>>>>>> feature/adminPanel
const ProviderApp = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
<<<<<<< HEAD
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
=======
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

>>>>>>> feature/adminPanel
    </Provider>
  );
};

export default ProviderApp;
