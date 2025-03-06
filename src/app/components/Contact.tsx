import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import useWeb3Forms from '@web3forms/react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { submit } = useWeb3Forms({
    access_key: 'c8aef99f-3be0-4664-ad96-614d4822fba8', // Replace with your Web3Forms access key
    onSuccess: (message) => {
      console.log(message);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    },
    onError: (message) => {
      console.log(message);
      alert('Failed to send message. Please try again later.');
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(formData);
  };

  return (
    <>
      <section className="fifth">
        <div className="outer">
          <div className="inner">
            <div className="bg">
              <h2 id="contact-me-header" className="section-heading">Contact Me</h2>
              <div className="contact-me-modal modal">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-button">Send</button>
                </form>
              </div>
              <ReactSVG src="/scroll-arrow.svg" className="scroll-arrow" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;