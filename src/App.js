import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import CBlock from './components/CBlock.jsx';
import BlockB from './components/BlockB/BlockB';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrapper">
          <CBlock />
          <BlockB />
        </div>
        
      </div>
    </Provider>
  );
}

export default App;
