import React, { useEffect, useState } from 'react';

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
     };
    },  
[]);
  return (
    <div className='flex justify-center gap-5 text-[white] '>
      <p className='p-5  backdrop-blur font-bold text-center'>
        <span>{date.getDate()}</span>
        <p>Days</p>
      </p>
      <p className='p-5  backdrop-blur font-bold text-center'>
        <span>{String(date.getHours()).padStart(2, '0')}</span>
        <p>Hours</p>
      </p>
      <p className='p-5  backdrop-blur font-bold text-center'>
        <span>{String(date.getMinutes()).padStart(2, '0')}</span>
        <p>Mins</p>
      </p>
      <p className='p-5 backdrop-blur font-bold text-center'>
        <span>{String(date.getSeconds()).padStart(2, '0')}</span>
        <p>Secs</p>
      </p>
    </div>
  );
};

export default Time;
