import React from 'react'
import Container from '../../components/Container'
import Links from '../../images/Frame 2708.svg';

import './style.css';

const BlockA = () => {
  return (
    <div className="blockA">
      <Container>
        <div className="blockA__info">
          <div className="blockA__info-left">
            <h1 className="blockA__title">
              Discount <span className="blockA__expires">expires</span> at
            </h1>
            <div className="blockA__timer">timer</div>
            <button>Get my plan</button>
          </div>
          <div className="blockA__images">

          </div>
        </div>
        <div className="blockA__links-wrapper">
          <p className="blockA__fotter-title">As featured in:</p>
          <img src={Links} alt="links" />
        </div>
      </Container>
    </div>
  )
}

export default BlockA
