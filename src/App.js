import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BlockC from "./components/BlockC/BlockC";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
