import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/country/:name" element={<Country />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
