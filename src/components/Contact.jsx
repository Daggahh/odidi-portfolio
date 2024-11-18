import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import dividerImage from "../assets/divider.png";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRowRef = useRef(null);
  const form = useRef();

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
        stagger: 0.2,
        scrollTrigger: {
          trigger: formRowRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus("Please fill all required fields correctly.");
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm("service_jfoohqs", "template_qa7s8jw", form.current, {
        publicKey: "Vcb_urU0cyKPopIYU",
      })
      .then(
        () => {
          setFormStatus("Message sent successfully!");
          setIsSubmitting(false);
          setFormData({ user_name: "", user_email: "", message: "" });
          setFormErrors({});
        },
        (error) => {
          setFormStatus("Message sending failed. Please try again.");
          setIsSubmitting(false);
          console.error("Failed to send message:", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = "Please enter your name";
    if (!formData.user_email) {
      errors.user_email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Please enter a valid email address";
    }
    if (!formData.message || formData.message.length < 5) {
      errors.message = "Message must be at least 5 characters.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-group form-row mb-0">
                <div className="col-lg-6 form-group form-item">
                  <label
                    htmlFor="user_name"
                    className={formData.user_name ? "field--not-empty" : ""}
                  >
                    Name
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    className="form-control form-control-large"
                    id="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  {formErrors.user_name && (
                    <span className="form-error">{formErrors.user_name}</span>
                  )}
                </div>

                <div className="col-lg-6 form-group form-item">
                  <label
                    htmlFor="user_email"
                    className={formData.user_email ? "field--not-empty" : ""}
                  >
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    className="form-control form-control-large"
                    id="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                  {formErrors.user_email && (
                    <span className="form-error">{formErrors.user_email}</span>
                  )}
                </div>

                <div className="col-lg-12 form-group form-item">
                  <label
                    htmlFor="message"
                    className={formData.message ? "field--not-empty" : ""}
                  >
                    Write your message...
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control form-control-large"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <span className="form-error">{formErrors.message}</span>
                  )}
                </div>
              </div>

              <div className="form-group row form-item">
                <div className="col-md-12 d-flex align-items-center">
                  <input
                    type="submit"
                    className="btn btn-outline-pill btn-custom-light mr-3"
                    value={isSubmitting ? "Submitting..." : "Send Message"}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </form>

            <div id="form-message-warning" className="mt-4">
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
