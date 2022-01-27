import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import PersonalizedPlanContainer from './containers/PersonalizedPlanContainer/PersonalizedPlanContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersonalizedPlanContainer />
      </div>
    </Provider>
  );
}

export default App;
