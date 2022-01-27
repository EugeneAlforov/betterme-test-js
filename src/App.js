import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Block2 from './components/Block2';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Block2 />
      </div>
    </Provider>
  );
}

export default App;
