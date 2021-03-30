import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BlockC from "./components/BlockC/BlockC";
import BlockB from "./components/blockB/BlockB";
import { BlockA } from "./components/BlockA/BlockA";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockA />
        <BlockB />
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
