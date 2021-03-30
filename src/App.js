import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BlockC from "./components/BlockC/BlockC";
import BlockB from "./components/blockB/BlockB";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockB />
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
