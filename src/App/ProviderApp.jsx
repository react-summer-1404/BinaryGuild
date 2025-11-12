import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "../store";
import { Provider } from "react-redux";
const ProviderApp = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

    </Provider>
  );
};

export default ProviderApp;
