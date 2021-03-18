import recat, {useState, useEffect} from 'react';
import Timer from './Timer';

const CBlock = ({counter, setCounter}) => {


  return(
    <div className="cblock">
      <h1 className="cblock__title">Reserved<span className="cblock__subtitle"> 75% discount</span>for:</h1>
      <div className="cblock__timer">
        <Timer counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
};

export default CBlock;