import React from "react";
import { Provider } from "react-redux";

import Main from "./components/Main.jsx";
import store from "./redux/store.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main/>
      </Provider>
    </div>
  );
}

export default App;
