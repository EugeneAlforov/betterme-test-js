import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlockA from './blocks/a';

function App() {
  return (
    <Provider store={store}>
      <BlockA />
    </Provider>
  );
}

export default App;
