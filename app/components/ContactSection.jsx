"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/svgs/github-icon.svg";
import LinkedinIcon from "../../public/svgs/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Spinner from "./Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, "Invalid email")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);

    const data = {
      ...values,
      captchaToken: values.captcha,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
        resetForm();
      } else {
        switch (response.status) {
          case 400:
            if (result.error === "reCAPTCHA verification failed") {
              alert("reCAPTCHA verification failed. Please try again.");
            } else {
              alert(`Bad request: ${result.error}`);
            }
            break;
          case 429:
            alert("Too many requests. Please try again later.");
            break;
          case 500:
            alert(`Server error: ${result.error}`);
            break;
          default:
            alert(`Unexpected error: ${result.error}`);
        }
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently exploring new opportunities and I&apos;d love to
          connect! My inbox is always open, so feel free to reach out with
          questions or just to say hello. I&apos;ll get back to you as soon as
          possible!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/osstd">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/omar-shemy/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <Formik
            initialValues={{ email: "", subject: "", message: "", captcha: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="flex flex-col gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="a@b.com"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <Field
                    name="subject"
                    type="text"
                    placeholder="Just saying hi"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Let's talk about..."
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6LdrVAEqAAAAAKqZWszHMHHIUk7JwRmDfyxZp57G"
                  onChange={(value) => setFieldValue("captcha", value)}
                />
                <ErrorMessage
                  name="captcha"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
