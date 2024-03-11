import React, { useState } from 'react';

const ContactForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [call, setCall] = useState('');
  const [calculate, setCalculate] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Username: ${username}\nEmail: ${email}\nPhone: ${call}\nCalculate: ${calculate}\nMessage: ${message}\nCheckbox: ${checkbox}`;

    // Send the data to your desired endpoint or perform any necessary actions
    console.log(text);

    // Reset the form fields
    setUsername('');
    setEmail('');
    setCall('');
    setCalculate('');
    setMessage('');
    setCheckbox(false);
  };

  return (
    <section>
      <div className="contact text-[black]">
        <div className="private">
          <div className="container">
            <span className="text sec-text"></span>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="fa fa-user"></span>
              <input
                type="text"
                className="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* <div className="input-box">
              <span className="fa fa-envelope"></span>
              <input
                type="email"
                className="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="fa fa-phone"></span>
              <input
                type="number"
                className="call"
                placeholder="Phone number"
                value={call}
                onChange={(e) => setCall(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <textarea
                cols="60"
                rows="10"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
                required
              />
              <p>
                I agree with the I have read the information{' '}
                <a href="https://t.me/boss0_002">abbos with communicate for telegram</a> and Privacy Policy and I declare
                that I have read the information that is required in accordance with Article 13 of GDPR.
              </p>
            </div> */}
            <div className="input-1">
              <div className="submit">
                <button type="submit" value="Sent message">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default ContactForm;