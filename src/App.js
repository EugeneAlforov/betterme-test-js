import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
