import React, { useEffect, useState, Fragment } from 'react';

export default function Scrolling(props) {
  const { children } = props;
  const [list, setList] = useState([...children]);
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const listCopy = list;
    let addTimer;
    let timer = setInterval(() => {
      setAnimate(false);
      addTimer = setTimeout(() => {
        listCopy.push(listCopy[0]);
        listCopy.shift();
        setList([...listCopy]);
        setAnimate(true);
      }, 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(addTimer);
    };
  });

  return (
    <div className={`express-swiper ${animate ? '' : 'anim'}`}>
      {list.map((item, index) => {
        return <Fragment key={index}>{item}</Fragment>;
      })}
    </div>
  );
}
