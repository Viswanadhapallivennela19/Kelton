import React, { useState } from 'react';

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
  };

  return (
    <div className="container  margin">
	<h2 className=' text-center  header-font big-font'>Have a Question for Us</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="row g-3 mb-3">
          <div className="col-md-4">
            <label htmlFor="name" className="form-label header-font text-black">Your Name</label>
            <input 
              type="text"
              className="form-control p-3"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label header-font text-black">Your Email</label>
            <input 
              type="email"
              className="form-control p-3"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label header-font text-black">Your Mobile Number</label>
            <input 
              type="tel"
              className="form-control p-3"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>
 
        <div className="mb-3">
          <label htmlFor="message" className="form-label header-font text-black">Your Message Here</label>
          <textarea 
            className="form-control p-3"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
          ></textarea>
        </div>
 
        <div className="text-center">
          <button type="submit" className="btn extra-bg px-4">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
