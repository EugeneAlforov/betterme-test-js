import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BlockA} from "./components/BlockA/BlockA"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockA />
      </div>
    </Provider>
  );
}

export default App;
