import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Test from './components/test'
import Discount from './components/Discount/Discount';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Discount />
      </div>
    </Provider>
  );
}

export default App;
