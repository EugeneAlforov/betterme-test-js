import React, { useEffect, useState } from 'react'
import moment from 'moment';
import './style.css';

var defaultTime = moment(moment()).add(10, 'm').toDate();
const formatTime = 'MM DD YYYY, h:mm'

const Timer = () => {
  const [seconds, setSeconds] = useState('59');
  const [minutes, setMinutes] = useState('09');
  useEffect(() => {
    setInterval(() => {
      const now = moment()
      const then = moment(defaultTime, formatTime);
      const countdown = moment(then - now);
      const min = countdown.format('mm');
      const sec = countdown.format('ss');
      if (min !== minutes) setMinutes(min);
      if (sec !== seconds) setSeconds(sec);
    }, 1000)
  })


  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  )
}

export default Timer
