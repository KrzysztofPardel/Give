import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./Errors/Loading";
import App from "./App";
import "./SCSS/main.scss";
import store from "./Redux/store";
import ErrorBoundary from "./ErrorBoundary";

const NavigationLazy = lazy(() => import("./components/Navigation"));
const AppLazy = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <NavigationLazy />
            <AppLazy />
          </Suspense>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
