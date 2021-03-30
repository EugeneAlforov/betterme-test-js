import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import React, { useEffect } from "react";
import BlockA from './blocks/a/index';
import BlockB from './blocks/b/index';
import BlockC from './blocks/c/index';

function App() {
    useEffect(() => {
        const centerBlock = document.querySelector('#center-block');

        const firstButton = document.querySelector('#button-first');
        const bottomButton = document.querySelector('#button-bottom');

        firstButton.addEventListener('click', () => {
            centerBlock.scrollIntoView({behavior: 'smooth'});
        })
        bottomButton.addEventListener('click', () => {
            centerBlock.scrollIntoView({behavior: 'smooth'});
        })
    })

    return (
    <Provider store={store}>
        <div>
            <BlockA />
            <BlockB />
            <BlockC />
        </div>
    </Provider>
    );
}

export default App;
