import React, { useState }from 'react';
import Button from './Button';
import Input from './Input';

function BlockB() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setValue(e.target.value)

  }

  const addInput = (e) => {
    e.preventDefault();

    if (isVisible === true) {
      alert(value);
    }

    setIsVisible(true);

    setValue('')
  }

  return (
    <section className="block-b">
      <div className="container">
        <div className="block-b__main">
          <div className="block-b__left">
              <p className="block-b__title">
                Get Your
                {' '}
                <span className="block-b__title-red">
                  Personalized
                </span>
                {' '}
                Plan
              </p>
              <form action="">
                {isVisible && <Input handleChange={handleChange} value={value}/>}
                <Button addInput={addInput}/>
              </form>
          </div>
          <div className="block-b__right">
            <img className="block-b__picture" src="/src/images/iphone.svg" alt="telephone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockB;