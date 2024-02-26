// ContactForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_rrvvoyl", "template_m3amkhg", data, "U9obhFRl7u_2nHXG8")
      .then((response) => {
        console.log("Email sent:", response);
        toast.success("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast.error("Failed to send message. Please try again later.");
        reset();
      });
  };

  return (
    <div className="d-flex justify-content-center Contact-main-container">
      <Fade direction="up">
        <Container className=" contact-container ">
          <div className="form-container">
            <ToastContainer />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formName">
                <Form.Label className="input-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="form-input-field"
                  {...register("to_name", { required: true })}
                  style={{ width: "60%", height: "50px" }}
                />

                <div className="error-message">
                  {errors.to_name && (
                    <span className="error">Name is required</span>
                  )}
                </div>
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="input-label1">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  {...register("from_name", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  style={{ width: "60%", height: "50px" }}
                />

                {errors.from_name && (
                  <span className="error">Please enter a valid email</span>
                )}
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="input-label1"> Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  className="form-control"
                  {...register("message", { required: true })}
                  style={{ width: "60%" }}
                />

                {errors.message && (
                  <span className="error">Message is required</span>
                )}
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </div>
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
              alt="Contact"
            />
          </div>
        </Container>
      </Fade>
    </div>
  );
};

export default ContactForm;
