import "bulmaswatch/superhero/bulmaswatch.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CellList from "./components/cell-list";
import { store } from "./redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CellList />
      </Provider>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
