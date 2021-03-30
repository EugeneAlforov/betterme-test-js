import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlockA from './blocks/a';
import BlockB from './blocks/b/index';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        {/* <h1>info</h1> */}
        <BlockA />
        <BlockB />
      </div>
    </Provider>
  );
}

export default App;
