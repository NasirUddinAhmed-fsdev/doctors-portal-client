import React from "react";
import Appointment from "../../assets/images/appointment.png";
import FocusButton from "../Shared/FocusButton";

const ContactBanner = () => {
  return (
    <section style={{ background: `url(${Appointment})` }} className="my-64">
      <div className="xl:max-w-xl mx-auto text-center py-16">
        <div className="text-center">
          <h3 className="text-secondary font-bold text-xl">Contact Us</h3>
          <h2 className="text-4xl text-white">Stay Connected With Us</h2>
        </div>
        <div className="flex flex-col p-10 gap-y-5">
          <input
            className="p-3 rounded-lg"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="p-3 rounded-lg"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="rounded-lg p-3"
            name="message"
            id="message"
            placeholder="Your message"
            cols="18"
            rows="6"
          ></textarea>
        </div>
        <FocusButton>Submit</FocusButton>
      </div>
    </section>
  );
};

export default ContactBanner;
