import React from 'react';
import Button from './Button';

function BlockB() {
  return (
    <section className="block-b">
      <div className="container">
        <div className="block-b__main">
          <div className="block-b__left">
              <p className="block-b__title">
                Get Your
                <span>
                  Personalized
                </span>
                Plan
              </p>
              <form action="">
                <input type="text"/>
              </form>
              <Button />
          </div>
          <div className="block-b__right">
            <img className="block-b__picture" src="" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockB;