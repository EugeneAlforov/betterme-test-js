import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import DiscountsExpiration from './containers/DiscountExpiration/DiscountsExpiration';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DiscountsExpiration />
      </div>
    </Provider>
  );
}

export default App;
