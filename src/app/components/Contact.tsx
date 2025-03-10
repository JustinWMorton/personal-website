import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSuccess = (message: any) => {
    console.log(message);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const onError = (message: any) => {
    console.log(message);
    alert("Failed to send message. Please try again later.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", 'c8aef99f-3be0-4664-ad96-614d4822fba8');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        // Call onSuccess if the submission is successful
        onSuccess(result.message);
      } else {
        // Call onError if the submission fails
        onError(result.message || "An error occurred");
      }
    } catch (error) {
      // Handle unexpected errors
      if (error instanceof Error) {
        onError(error.message || "An unexpected error occurred");
      } else {
        onError("An unexpected error occurred");
      }
    }
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