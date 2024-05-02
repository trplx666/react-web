import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log(formData);
    // Reset form state after submission

    const body = {
      data: formData
    }

    await axios.post("http://localhost:1337/api/questions", body)

    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center login-container">
      <Col xs="12" md="6" lg="4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your question"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Col>
    </div>
  );
}

export default Contact;
