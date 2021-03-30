import React from 'react';
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "./style.css";
import Timer from "../../components/Timer";

const BlockC = () => {
    return (
        <div className="block-c">
            <Container>
                <section className="block-c__header-section">
                    <h3 className="block-c__header">
                        Reserved <span className="block-c__header_blue">75% discount</span> for:
                    </h3>
                    <div className="block-c__timer-section">
                        <Timer />
                        <div className="block-c__timer-labels">
                            <p>minutes</p>
                            <p>seconds</p>
                        </div>
                    </div>
                    <div className="block-c__button" id="button-bottom">
                        <Button/>
                    </div>
                </section>
                <section className="block-c__card-section">
                    <div className="block-c__card-labels">
                        <h4>Users love our plans</h4>
                        <p>Here's what people are saying about BetterMe</p>
                    </div>
                    <div className="block-c__cards">
                        <Card>
                            <p className="card__author">
                                Josh
                            </p>
                            <p className="card__text">
                                Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I think if I do it for the while month or maybe even just this whole week I will most definitely lose some pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises then it will tire you and you will be tired afterwards.
                            </p>
                        </Card>
                        <Card>
                            <p className="card__author">
                                Arthur
                            </p>
                            <p className="card__text">
                                The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot” counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count those calories and WIN the battle.
                            </p>
                        </Card>
                        <Card>
                            <p className="card__author">
                                Kate
                            </p>
                            <p className="card__text">
                                Love the food plan - takes the planning out of it and there is a lot if variety of proteins and vegetables - love that I’m in the kitchen - eating healthy! Some of the menus call for our of season fruits though and there are some typos but the main thing is the meals and ingredient lists- !!!
                                The workouts are hard but brief cause I’m at zero, but little by little I’ll be a Better Me
                            </p>
                        </Card>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default BlockC;