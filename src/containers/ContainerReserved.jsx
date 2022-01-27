import React, { useEffect, useState } from "react";
import PeopleSays from "../components/people_says/PeopleSays"
import Timer from "../components/Timer";
import Button from "../components/Button/Button"
import "./containerReserved.css";

//import axios from "axios";


const ContainerReserved = () => {
    const [review, setReview] = useState([
        {
            "id": "1",
            "title": "Thank You",
            "data": "24 Jun",
            "name": "Onya Jones",
            "subtitle": "Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it for the while month or maybe even just this whole week I will most definitely lose some pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises then it will tire you and you will be tired afterwards. "
           
        },
        {
            "id": "2",
            "title": "How the program helps me",
            "data": "7 Jul",
            "name": "IAmMoorer",
            "subtitle": "The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot” counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count those calories and WIN the battle."
           
        },
        {
            "id": "3",
            "title": "Food plan and Exercise",
            "data": "17 Feb",
            "name": "peaceout2mayae",
            "subtitle": "Love the food plan - takes the planning out of it and there is a lot if variety of proteins and vegetables - love that I’m in the kitchen - eating healthy! Some of the menus call for our of season fruits though and there are some typos but the main thing is the meals and ingredient lists- !!! The workouts are hard but brief cause I’m at zero, but little by little I’ll be a Better Me"
           
        }  
         
    ]);
    
    
    // useEffect(() => {
    //     axios("/people_says.json").then((res) => {
    //       setReview(res.data);
    //     });
    //     console.log(review);
    //   }, []);
    
    const cardsReview = review.map((e) => (
        <PeopleSays
          id={e.id}
          title={e.title}  
          data={e.data}
          subtitle={e.subtitle}
          name={e.name}
        />
      ));
    const onClick = () => {

    }


    return (
        <div className="container-reserved">
            <h2 className="container-reserved__title">
            Reserved <span className="container-reserved__title--secondary">75% discount</span>  for:
            </h2>
            <Timer />
            <Button onClick={onClick} />
            <h3 className="container-reserved__subtitle">
            Users love our plans
            </h3>
            <p className="container-reserved__review">
            Here's what people are saying about BetterMe
            </p>
            <div className="wrapper-review">
            {cardsReview}
            </div>
            
        </div>
    )
}

export default ContainerReserved