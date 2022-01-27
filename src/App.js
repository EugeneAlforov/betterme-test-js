import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SecondBlock } from './components/SecondBLock';
import UpperBlock from './components/UpperBlock/UpperBlock';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <UpperBlock />
          <SecondBlock/>
      </div>
    </Provider>
  );
}

export default App;
