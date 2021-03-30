import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Test from "./components/test";
import BlockC from "./components/BlockC/BlockC";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
