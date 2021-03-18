import recat, {useState, useEffect} from 'react';
import Timer from './Timer';

const CBlock = ({counter, setCounter}) => {


  return(
    <div className="cblock">
      <h1 className="cblock__title">Reserved<span className="cblock__title-blue"> 75% discount</span> for:</h1>
      <div className="cblock__timer">
        <Timer counter={counter} setCounter={setCounter} />
      </div>
      <div className="cblock__button">

      </div>
      <div className="cblock__subtitle subtitle">
        <h1 className="subtitle__heading">Users love our plans</h1>
        <p className="subtitle__text">Here's what people are saying about BetterMe</p>
      </div>
      <div className="cblock__cards cards">
        <div className="cards-1">
          <div className="cards-1__top">
            <h2 className="cards-1__title">Thank you</h2>
            <span>24 Jun <br />Onya Jones</span>
          </div>
          <div className="cards-1__text">
            Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it for the while month or maybe even just this whole week I will most definitely lose some pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises then it will tire you and you will be tired afterwards. 
          </div>
        </div>
        <div className="cards-2">
          <div className="cards-2__top">
            <h2 className="cards-2__title">How the program helps me</h2>
            <span>7 Jun <br />IAmMoorer</span>
          </div>
          <div className="cards-2__text">
          The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot” counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count those calories and WIN the battle.
          </div>
        </div>
        <div className="cards-3">
          <div className="cards-3__top">
            <h2 className="cards-3__title">Food plan and Exercise</h2>
            <span>17 Feb <br />peaceout2mayae</span>
          </div>
          <div className="cards-3__text">
          Love the food plan - takes the planning out of it and there is a lot if variety of proteins and vegetables - love that I’m in the kitchen - eating healthy! Some of the menus call for our of season fruits though and there are some typos but the main thing is the meals and ingredient lists- !!!
The workouts are hard but brief cause I’m at zero, but little by little I’ll be a Better Me
          </div>
        </div>
      </div>
    </div>
  )
};

export default CBlock;