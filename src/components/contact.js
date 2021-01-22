import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./error";
import { ReactComponent as ContactIllustration } from "../assets/svg/undraw_contact_us_15o2.svg";
import { ReactComponent as ConfirmMessageIllustration } from "../assets/svg/undraw_message_sent_1030.svg";
import resume from "../Thanh Quan Resume.pdf";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

const Contact = () => {
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
    confirmAlert({
      message: "Message sent - we will be in contact",
      childrenElement: () => <ConfirmMessageIllustration className="sbm-img" />,
      buttons: [
        {
          label: "OK",
        },
      ],
    });
  };
  return (
    <React.Fragment>
      <div className="contact" id="contact">
        <h1>CONTACT ME</h1>
        <h4>
          Feel free to message me for projects or recruitment as I am always
          interest in working on the things I like.
        </h4>
        <div className="form-link">
          <a href="https://github.com/ThomasQuan" target="_blank">
            <i className="fab fa-github fa-2x"></i>
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/thanh-quan-355912169/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
            <p>LinkedIn</p>
          </a>
          <a
            data-tip="quantrithanh1999@gmail.com"
            href="mailto:quantrithanh1999@gmail.com"
          >
            <i className="far fa-envelope fa-2x"></i>
            <p>Gmail</p>
          </a>
          <a href={resume} target="_blank">
            <i class="far fa-file fa-2x"></i>
            <p>Resume</p>
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
