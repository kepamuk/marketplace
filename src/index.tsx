import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import TestMain from "./pages/TestMain/TestMain";
import Main from "./pages/Main/Main";
import store from "./app/store";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<TestMain />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
