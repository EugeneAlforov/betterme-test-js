import s from "./BlockC.module.css";
import Button from "../common/Button/Button";
import Message from "./Message/Message";
import { handleScroll } from "../../helpers/smoothScroll";
import Timer from "../common/Timer/Timer";

const Footer = ({ time }) => {
  return (
    <div className={s.container} id="blockC">
      <h1 className={s.title}>
        Reserved <span>75% discount</span> for:
      </h1>
      <Timer dates={time} />
      <Button handleClick={() => handleScroll("blockB")} />
      <h2 className={s.subtitle}>Users love our plans</h2>
      <p className={s.subtext}>Here's what people are saying about BetterMe</p>
      <div className={s.messageList}>
        <Message
          title={"Thank You"}
          text={
            "Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it for the while month or maybe even just this whole week I will most definitely lose some pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises then it will tire you and you will be tired afterwards. "
          }
          date={"24 Jun"}
          name={"Onya Jones"}
        />
        <Message
          title={"How the program helps me"}
          date={"7 Jul"}
          name={"IAmMoorer"}
          text={
            "The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot” counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count those calories and WIN the battle."
          }
        />
        <Message
          title={"Food plan and Exercise"}
          date={"17 Feb"}
          name={"peaceout2mayae"}
          text={
            "Love the food plan - takes the planning out of it and there is a lot if variety of proteins and vegetables - love that I’m in the kitchen - eating healthy! Some of the menus call for our of season fruits though and there are some typos but the main thing is the meals and ingredient lists- !!!The workouts are hard but brief cause Im at zero, but little by little I'll be a Better Me"
          }
        />
      </div>
    </div>
  );
};

export default Footer;
