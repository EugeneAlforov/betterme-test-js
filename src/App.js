import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import { SecondBlock } from './components/SecondBlock';
import { ThirdBlock } from './components/ThirdBlock/ThirdBlock';
import { CustomButton } from './components/CustomButton/CustomButton';

import UpperBlock from './components/UpperBlock/UpperBlock';


function App() {

    const element = React.useRef(null);
    
  return (
    <Provider store={store}>
      <div className="App">
      <UpperBlock />
          <div ref={element}>
            <SecondBlock />
          </div>
    <ThirdBlock>
      <CustomButton onSecondBlockRef={element}/>
      </ThirdBlock>
       
      </div>
    </Provider>
  );
}

export default App;
