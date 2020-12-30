import React, { useEffect, useState } from 'react';

export default function HourCountdown() {
  // const [date, setDate] = useState(new Date())
  const [nextHour, setNextHour] = useState('');
  const [countdown, setCountdown] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      // 当前整点
      let currentHourStr = `${date.getFullYear()}/${date.getMonth() +
        1}/${date.getDate()} ${date.getHours()}:00:00`;
      let currentHourDate = new Date(currentHourStr);
      let currentHourTime = currentHourDate.getTime();
      // console.log(currentHourTime);
      // 下个小时
      let nextHour = Number(currentHourTime) + 3600000;
      let nextHourDate = new Date(nextHour);
      let nextHourDateTime = nextHourDate.getTime();
      setNextHour(lessThen(nextHourDate.getHours()));
      // console.log(nextHourDateTime);
      // 倒计时
      let countdownTime = nextHourDateTime - date.getTime();
      let h = Math.floor(countdownTime / 1000 / 60 / 60);
      let m = Math.floor((countdownTime / 1000 / 60) % 60);
      let s = Math.floor((countdownTime / 1000) % 60);
      setCountdown([
        (h = `${lessThen(h)}`),
        (m = `${lessThen(m)}`),
        (s = `${lessThen(s)}`),
      ]);
      function lessThen(num) {
        if (num < 10) {
          return '0' + num;
        }
        return num;
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 当前整小时

  // let setcurrentHour = new Date(currentHourStr);
  // console.log(currentHour);

  return (
    <div>
      {nextHour && (
        <div className="timer">
          <span className="field">{nextHour}:00场</span>
          <div className="content">
            <span className="timer-item">{countdown[0]}</span>:
            <span className="timer-item">{countdown[1]}</span>:
            <span className="timer-item">{countdown[2]}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// export default class HourCountdown extends Component {
//     constructor

//     render() {
//         return (
//             <div className='HourCountdown'>

//             </div>
//         )
//     }
// }
