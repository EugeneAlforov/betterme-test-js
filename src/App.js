import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SecondBlock } from './components/SecondBLock';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

          <SecondBlock/>

      </div>
    </Provider>
  );
}

export default App;
