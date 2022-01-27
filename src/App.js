import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import DiscountsExpiration from './containers/DiscountsExpiration';
import Timer from './components/Timer/Timer'

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
