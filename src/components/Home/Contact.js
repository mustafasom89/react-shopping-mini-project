import React from "react";
import "./Contact.css";

const sendRequest = () => {
  alert("THANK YOU FOR YOU CONTACT!, BYE, LOGI AGAIN!");
};
export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
        ></textarea>

        <button type="submit" className="btn" onClick={sendRequest}>
          Submit
        </button>
      </form>
    </div>
  );
}
