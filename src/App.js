import "./App.css";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BlockC from "./components/BlockC/BlockC";
import BlockB from "./components/blockB/BlockB";
import { BlockA } from "./components/BlockA/BlockA";
import "./App.css";
import BlockX from "./components/BlockX/BlockX";

function App() {
  const [futureDate, setFutureDate] = useState(null);
  useEffect(() => {
    const minutesToAdd = 10;
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);
    setFutureDate(futureDate);
  }, []);

  const calculateTimeLeft = () => {
    let difference = +new Date(futureDate) - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [calculateTimeLeft, futureDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const dates = Object.values(timeLeft);

  return (
    <Provider store={store}>
      <div className="App">
        <BlockX />
        <BlockA />
        <BlockB />
        <BlockC time={dates} />
      </div>
    </Provider>
  );
}

export default App;
