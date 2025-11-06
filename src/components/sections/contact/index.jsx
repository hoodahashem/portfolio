import "./index.css";
import { useRef, useState } from "react";
import BackText from "../../backText";
import PrimaryBtn from "../../primaryBtn";
import { IoSend } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    show: false,
    error: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const showStatus = (error, message) => {
    setStatus({ show: true, error, message });
    setTimeout(() => {
      setStatus({ show: false, error: false, message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendForm(
        "service_rqftn4s",
        "template_w8b2r9j",
        form.current,
        "YVn67xznuO64gmEgf"
      );

      if (result.text === "OK") {
        showStatus(false, "Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      showStatus(true, "Failed to send message. Please try again.");
      console.error("Email error:", error);
    }

    setLoading(false);
  };
  return (
    <section id="contact">
      <BackText topText={"SEND ME EMAIL"} backText={"CONTACT ME"} />
      <div className="contact-section">
        {status.show && (
          <div
            className={`status-message ${status.error ? "error" : "success"}`}
          >
            {status.message}
          </div>
        )}
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-input"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                className="form-input"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-input"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sendMailBtn">
            <PrimaryBtn type="submit" disabled={loading}>
              <div className="primaryBtnContent">
                {loading ? (
                  <p>Sending...</p>
                ) : (
                  <>
                    <p>Send Message</p>
                    <IoSend />
                  </>
                )}
              </div>
            </PrimaryBtn>
          </div>
        </form>
        <div className="social-links">
          <a
            href="https://github.com/HoodaHashem"
            className="social-link"
            target="_blank"
            aria-label="Click here for my github profile"
          >
            <FaGithub />
          </a>
          <a
            className="social-link"
            href="https://x.com/HoodaHashem"
            target="_blank"
            aria-label="Click here for my twitter profile"
          >
            <FaXTwitter />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/hoodahashem"
            target="_blank"
            aria-label="Click here for my linkedin profile"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="contact-info">
          <div>mahmoud.hashem.dev@gmail.com</div>
        </div>
      </div>
      <div className="backLightBox">
        <div className="contactBacklightContainer">
          <div className="contactLeftColor" />
          <div className="contactRightColor" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
