import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Test from './components/test';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
    </Provider>
  );
}

export default App;
