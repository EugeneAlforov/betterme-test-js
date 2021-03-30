import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlockX from './components/BlockX/BlockX';
import BlockB from './components/blockB/BlockB';
import BlockA from "./components/BlockA/BlockA";
import BlockC from "./components/BlockC/BlockC";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockX />
        <BlockA />
        <BlockB />
        <BlockC />
      </div>
    </Provider>
  );
}

export default App;
