import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import BlockC from "./components/BlockC/BlockC";
import BlockX from "./components/BlockX/BlockX";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockX />
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
