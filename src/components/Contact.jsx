import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dividerImage from "../assets/divider.png";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRowRef = useRef(null);
  const [formStatus, setFormStatus] = useState(""); // formstatus initially set to empty strings using to manage the message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // formdata initially set to empty strings using to manage

  useEffect(() => {
    const formItems = gsap.utils.toArray(".form-item");

    gsap.fromTo(
      formItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, // Delay between each item's animation
        scrollTrigger: {
          trigger: formRowRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; //this function handle changes in the form field and update it using the useState and update it in setFormData

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Your message was sent, thank you!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">
              Get In Touch
              <span className="cover"></span>
            </span>
          </h2>
          <span className="gsap-reveal">
            <img src={dividerImage} alt="divider" width="76" />
            <span className="cover"></span>
          </span>
        </div>

        <div className="form-row justify-content-between" ref={formRowRef}>
          <div className="col-md-6">
            <form
              method="post"
              className="form-outline-style-v1"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              <div className="form-group form-row mb-0">
                <div className="col-lg-6 form-group form-item">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 form-group form-item">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 form-group form-item">
                  <label htmlFor="message">Write your message...</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row form-item">
                <div className="col-md-12 d-flex align-items-center">
                  <input
                    type="submit"
                    className="btn btn-outline-pill btn-custom-light mr-3"
                    value="Send Message"
                  />
                  <span className="submitting"></span>
                </div>
              </div>
            </form>
            <div id="form-message-warning" className="mt-4"></div>
            <div id="form-message-success">
              {formStatus && <p>{formStatus}</p>}
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-info-v1">
              <div className="form-item d-block">
                <span className="contact-info-label">Email</span>
                <a
                  href="mailto:odidihope@gmail.com"
                  className="contact-info-val"
                >
                  odidihope@gmail.com
                </a>
              </div>

              <div className="form-item d-block">
                <span className="contact-info-label">Phone</span>
                <a href="tel:+2349160081428" className="contact-info-val">
                  +234 916 000 81428
                </a>
              </div>

              <div className="form-item d-block">
                <span className="contact-info-label">Address</span>
                <address className="contact-info-val">
                  Lagos, <br />
                  Nigeria
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
