import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./error";
import Modal from "react-modal";
import { ReactComponent as ContactIllustration } from "../assets/svg/undraw_contact_us_15o2.svg";

const Contact = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("Development Error :", err));
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const templateId = "thanh_quan_portfolio";
    sendFeedback(templateId, {
      message_html: data.feedback,
      from_email: data.email,
      reply_to: "quantrithanh1999@gmail.com",
    });
    openModal();
  };
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <h1>Contact me for projects or hiring</h1>
        <div className="form-link">
          <a href="https://github.com/ThomasQuan">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/thanh-quan-355912169/">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/thanh.quan.129357">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            data-tip="quantrithanh1999@gmail.com"
            href="mailto:quantrithanh1999@gmail.com"
          >
            <i className="far fa-envelope fa-2x"></i>
          </a>
        </div>
        <div className="form">
          <ContactIllustration className="form-image" />
          <div className="form-content">
            <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <ErrorMessage error={errors.email} />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  ref={register}
                  name="feedback"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                className="btn-submit"
              >
                Send message
              </button>
            </form>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Your message has been sent !</h2>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
