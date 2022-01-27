import React from "react";
import { CtaCard } from "../CtaCard/CtaCard";
import { Timer } from "../Timer/Timer";
import { Title } from "../Title/Title";
import './styles.css'


export const ThirdBlock = (props) => {
    const {children} = props;
    const initialData = [
        {
            text:'Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it for the while month or maybe even just this whole week I will most definitely lose some pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises then it will tire you and you will be tired afterwards.',
            title:'Thank You',
            eventDate:'24 Jun',
            nickName:'Onya Jones'
        },
        {
            text:'The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot” counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count those calories and WIN the battle.',
            title:'How the program helps me',
            eventDate:'7 Jul',
            nickName:'IAmMoorer'
        },
        {
            text:'Love the food plan - takes the planning out of it and there is a lot if variety of proteins and vegetables - love that I’m in the kitchen - eating healthy! Some of the menus call for our of season fruits though and there are some typos but the main thing is the meals and ingredient lists- !!! The workouts are hard but brief cause I’m at zero, but little by little I’ll be a Better Me',
            title:'Food plan and Exercise',
            eventDate:'17 Feb',
            nickName:'peaceout2mayae'
        },

    ];
        
    
    const [cardData, setCardData] = React.useState(initialData);
    return (
        <div className='thirdBlockWrapper'>
            <Title>Reserved 75% discount for:</Title>
            <Timer/>
          <span className='timer-label'>Minutes</span>  
          <span className='timer-label'>seconds</span>
                {children}
        <h2 className='subtitle-1'>Users love our plans</h2>
        <span>Here's what people are saying about BetterMe</span>
        <div className='cta-cards-wrapper'>
            {cardData.map((item,key)=>{
                return(
              <CtaCard text={item.text}
              title={item.title}
              eventDate={item.eventDate}
              nickName={item.nickName}
              key={key}/>
                )
            })}
    

        </div>
        </div>
    )
}