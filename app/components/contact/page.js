"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    to_name:'Aun',
    from_name: '',
    from_email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.send(
      'service_3wrq1sg',
      'template_cnvi8do',
      formData,
      'aS_1bZYfa8R0y4Cva'
    ).then((response) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      setStatus('Failed to send message.');
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-primary text-white p-8 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold font-poppins mb-4">CONTACT</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none"
        />
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-accent text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </section>
  );
}
