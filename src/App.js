import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlockB from './blocks/b/index';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        {/* <h1>info</h1> */}
        <BlockB />
      </div>
    </Provider>
  );
}

export default App;
