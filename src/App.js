import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { SecondBlock } from './components/SecondBlock';
import { ThirdBlock } from './components/ThirdBlock';
import { CustomButton } from './components/CustomButton/CustomButton';


function App() {
    const [testState,setTestState] = React.useState('')
    const element = React.useRef(null);
    React.useEffect(() => {
     
      setTestState(element)
    }, []);
    
  return (
    <Provider store={store}>
      <div className="App">
          <div ref={element}>
            <SecondBlock />
          </div>
    <ThirdBlock>
      <CustomButton onSecondBlockRef={testState}/>
      </ThirdBlock>
      </div>
    </Provider>
  );
}

export default App;
