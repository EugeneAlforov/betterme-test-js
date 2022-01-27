import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
//import Test from './components/test';
import ContainerReserved from "./containers/ContainerReserved.jsx"
import PersonalizedPlanContainer from './containers/PersonalizedPlanContainer/PersonalizedPlanContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Test /> */}
        <PersonalizedPlanContainer />
      </div>
      <ContainerReserved />
    </Provider>
  );
}

export default App;
