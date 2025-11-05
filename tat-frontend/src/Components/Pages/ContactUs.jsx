import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import contactImg from "../assets/images/contactus.png"; // Update with your image
import "../Styles/ContactUs.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone) =>
  /^\d{10}$/.test(phone.replace(/\D/g, "")); // 10 digits only

const ContactUs = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("z08ubUjUZCiF6yIsc"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(form.email)) newErrors.email = "Invalid email";
    if (!validatePhone(form.phone)) newErrors.phone = "Invalid phone (10 digits)";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send email using EmailJS
      emailjs
        .send("service_eqg7dej", "template_dpoka6m", {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message || "No message provided",
        })
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setSubmitted(true);
            setForm(initialState);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
            setErrors({ ...errors, form: "Failed to send email. Please try again." });
          }
        );
    }
  };

  return (
    <section
      className="contact-section1"
      id="contact"
    >
      <h2 className="contact-title">
        Let's Connect With Us
      </h2>
      <div className="contact-flex">
        <div className="contact-img-side">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="contact-img-full"
          />
        </div>
        <div className="contact-form-container">
          <h2 className="contact-titles">
            Contact Us
          </h2>
          {submitted ? (
            <div className="contact-success">
              Thank you for contacting us!<br />
            </div>
          ) : (
            <div>
              {errors.form && <div className="error form-error">{errors.form}</div>}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="off"
                      placeholder="Enter Your Name"
                    />
                  </label>
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="off"
                      placeholder="Enter Your Email"
                    />
                  </label>
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label>
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="off"
                      maxLength={14}
                      placeholder="10 digit number"
                    />
                  </label>
                  {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
                <div className="form-group">
                  <label>
                    Message <span className="optional-label">(optional)</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Type Here"
                    />
                  </label>
                  {errors.message && <div className="error">{errors.message}</div>}
                </div>
                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;