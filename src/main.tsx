import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { RouterProvider } from "react-router-dom";
// import router from "./routers/routes.tsx";
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import {
  RecoilRoot,
} from 'recoil';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <RecoilRoot>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router><App /></Router>
    </QueryClientProvider>
    </Provider>
    </RecoilRoot>
  </React.StrictMode>
);
