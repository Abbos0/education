import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, ''); // Remove non-numeric characters
    setPhoneNumber(numericInput);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const formattedPhoneNumber = phoneNumber.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
    const text = `%0A 👦 Username: ${username} %0A 📩 Email: ${email} %0A 📞 Phone: ${formattedPhoneNumber}`;
    const chatId = -1002128588085;
    const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    setUsername('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className='flex bg-[transparent] w-full justify-center items-center md:px-0 px-5'>
      <form
        id='form'
        className='bg-[white] flex flex-col max-w-[400px] md:gap-10 gap-5 p-5 w-full justify-center items-center rounded-[10px]'
        onSubmit={sendMessage}
      >
        <h1 className='font-bold md:text-[25px] text-[18px]'>Create Free Account Now!</h1>
        <input
          type='text'
          id='username' required
          className='capitalize outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px]'
          placeholder='Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          id='email' required
          className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px]'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='tel'
          id='call' required
          className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px]'
          placeholder='Phone Number'
          pattern='[0-9]*'
          value={phoneNumber}
          onChange={handleChange}
        />
        <input
          type='submit'
          className='bg-[orange] outline-none border-[2px] border-solid border-[orange] text-[white] cursor-pointer md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[200px] hover:bg-[white] hover:text-[orange] self-start rounded-[4px] font-bold text-[14px] md:text-[18px]'
          value='Visit Courses'
        />
      </form>
    </div>
  );
};

export default Form;







// // import React from 'react'

// // const Form = () => {
// //   return (
// //     <div className='flex  bg-[transparent] w-full justify-center items-center md:px-0 px-5'>
// //         <form className='bg-[white] flex flex-col  max-w-[400px] md:gap-10 gap-5 p-5 w-full justify-center items-center rounded-[10px]'>
// //             <h18 className='font-bold md:text-[25px] text-[18px]'>Create Free Account Now!</h18>
// //             <input type="text" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Name'/>
// //             <input type="email" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Email Address'/>
// //             <input type="tel" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Phone Number'/>
// //             <input type="submit" className='bg-[orange] outline-none border-[2px] border-solid border-[orange] text-[white] cursor-pointer md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[200px] hover:bg-[white] hover:text-[orange] self-start rounded-[4px] font-bold text-[14px] md:text-[18px]' value="Visit Courses" />
// //         </form>
// //     </div>
// //   )
// // }

// // export default Form


