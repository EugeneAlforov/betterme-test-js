import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Test from './components/test';
import ContainerReserved from "./containers/ContainerReserved.jsx"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
      <ContainerReserved />
    </Provider>
  );
}

export default App;
