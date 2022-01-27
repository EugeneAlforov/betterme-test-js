import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContainerReserved from "./containers/ContainerReserved.jsx"
import ContainerReserved from "./containers/ContainerReserved.jsx"
import PersonalizedPlanContainer from './containers/PersonalizedPlanContainer/PersonalizedPlanContainer'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersonalizedPlanContainer />
      </div>
      <ContainerReserved />
    </Provider>
  );
}

export default App;
