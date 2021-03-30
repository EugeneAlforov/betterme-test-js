import React from 'react';
import classes from './BlockX.module.css';

const BlockX = () => {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src="/logo.png" />
      <img className={classes.sandwich} src="/sandwich.png" />
    </div>
  )
}

export default BlockX;
