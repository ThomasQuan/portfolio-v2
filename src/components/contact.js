import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./error";
import Avatar from "../assets/mountain.jpg";
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
  };
  return (
    <React.Fragment>
      <div className="contact">
        <h1>Contact me for projects or hiring</h1>
        <div className="form">
          <div className="form-image"></div>
          <form
            className="form-input"
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <input
              name="email"
              placeholder="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />

            <ErrorMessage error={errors.email} />

            <label>Your Feedback</label>
            <textarea name="feedback" ref={register} />

            <input onClick={handleSubmit(onSubmit)} type="submit" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
