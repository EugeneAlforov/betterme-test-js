import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
//import Test from './components/test';
import BlockB from './components/blockB/BlockB'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BlockB />
      </div>
    </Provider>
  );
}

export default App;
