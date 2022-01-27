import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Test from './components/test';

function App() {
  return (
    <Provider store={store}>
      <div className="Appp">
        <Test />
      </div>
    </Provider>
  );
}

export default App;
