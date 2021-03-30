import React, { useState }from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import Links from '../../images/iphone.svg';


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

    setValue('');
  }

  return (
    <section className="block-b" id="center-block">
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
              <form action="" className="form">
                {isVisible && <Input handleChange={handleChange} value={value} setIsVisible={setIsVisible}/>}
                <Button addInput={addInput}/>
              </form>
          </div>
          <div className="block-b__right">
            <img className="block-b__picture" src={Links} alt="telephone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockB;