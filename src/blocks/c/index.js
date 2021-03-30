import React from 'react';
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";
import "./style.css";

const BlockC = () => {
    return (
        <div className="block-c">
            <Container>
                <section className="block-c__header-section">
                    <h3 className="block-c__header">
                        Reserved <span className="block-c__header_blue">75% discount</span> for:
                    </h3>
                    <div className="block-c__timer-section">
                        The Counter
                        <div>
                            <span>Minutes</span>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className="block-c__button" id="button-bottom">
                        <Button/>
                    </div>
                </section>
                <section className="block-c__card-section">
                    {/*<div className="block-c__card-labels">*/}
                    {/*    <h4>Users love our plan</h4>*/}
                    {/*    <p>Here's what people are saying about BetterMe</p>*/}
                    {/*</div>*/}
                    {/*<div className="block_c__cards">*/}
                    {/*    <Card>Card 1</Card>*/}
                    {/*    <Card>Card 2</Card>*/}
                    {/*    <Card>Card 3</Card>*/}
                    {/*</div>*/}
                </section>
            </Container>
        </div>
    );
};

export default BlockC;