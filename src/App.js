import './App.scss';
import react, {useState} from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import CBlock from './components/CBlock.jsx';

function App() {
  const [counter, setCounter] = useState(600);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrapper">
          <CBlock counter={counter} setCounter={setCounter} />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
