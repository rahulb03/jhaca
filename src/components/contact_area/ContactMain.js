


'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { Address, Email_id, Phone_number, IframeSrc , YOUR_PUBLIC_KEY , YOUR_SERVICE_ID , YOUR_TEMPLATE_ID} from '@/Config/config';

const ContactMain = () => {
  const formRef = useRef(null);

  

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        formRef.current, // Pass the form reference directly
        YOUR_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Message Sent Successfully!');
        formRef.current.reset(); // Reset the form
      } else {
        toast.error('Message Not Sent! Something went wrong.');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast.error('Message Not Sent! Please try again later.');
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">Direct contact us?</h2>
              <p className="content mb-0">
                For your car we will do everything advice, repairs, and maintenance. We are the preferred choice by many car owners because our experience and knowledge are self-evident.
              </p>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="name"
                      name="from_name"
                      type="text"
                      placeholder="Enter Your Name."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="email"
                      name="from_email"
                      type="email"
                      placeholder="Enter Your Email (optional)"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="pan"
                      name="user_pan"
                      type="text"
                      placeholder="Enter Your PAN Number."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="city"
                      name="user_city"
                      type="text"
                      placeholder="Enter Your City."
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      id="message"
                      cols="1"
                      rows="5"
                      placeholder="Enter Your Message..."
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-base border-radius-5"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-page-list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/13.svg" alt="Contact Us" />
                </div>
                <div className="media-body">
                  <h5>Contact Us</h5>
                  <h6>{Phone_number}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/14.svg" alt="Your Email" />
                </div>
                <div className="media-body">
                  <h5>Your Email</h5>
                  <h6>{Email_id}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/15.svg" alt="Location" />
                </div>
                <div className="media-body">
                  <h5>Location</h5>
                  <h6>{Address}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-g-map">
        <iframe
          src={IframeSrc}
          title="Map"
        />
      </div>
    </>
  );
};

export default ContactMain;
