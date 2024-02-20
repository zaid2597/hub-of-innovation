"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import * as Style from "@/style/contact.css";
import { FaEnvelope } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";

import axios from "axios";

export default function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleDetailsChange = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSendMessage = async () => {
    if (!details.name || !details.email || !details.message) {
      return alert("Please fill all the fields");
    } else {
      const response = await axios.post("http://localhost:8080/mail", details);
      alert(response.data.message);
    }
  };

  const handleFocus = () => {
    document.getElementById("name").focus();
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="contactPage">
          <h1>get in touch</h1>
          <p className="hover-underline-animation" onClick={handleFocus}>
            <span>
              <FaEnvelope />
            </span>
            email : hubofinnovation0@gmail.com
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
              width: "200px",
              alignItems: "center",
            }}
          >
            <div className="socialLinkButton">

              <a
                href="https://x.com/hubofinnovation?t=8-oUkVUgBGv4C-8WqCwHAQ&s=09"
                target="_blank"
                style={{ textDecoration: "none" }}>

                <span>
                  <FaSquareXTwitter className="twitter-share-button" />
                </span>
              </a>
            </div>
            <div className="socialLinkButton">


              <a href="https://www.behance.net/hubofinnovation"
                target="_blank"
                style={{ textDecoration: "none" }}>
                <span>
                  <FaBehance className="behance-share-button" />
                </span>
              </a>
            </div>
          </div>

          <div className="Form">
            <div className="ClientDetails">
              <input
                type="text"
                id="name"
                name="name"
                value={details.name}
                placeholder="your name * "
                onChange={(e) => handleDetailsChange(e)}
                required={true}
              />
              <input
                type="email"
                name="email"
                value={details.email}
                placeholder="your email *"
                onChange={(e) => handleDetailsChange(e)}
                required={true}
              />
            </div>
            <div className="MessageArea">
              <textarea
                name="message"
                value={details.message}
                id=""
                cols="30"
                rows="10"
                placeholder="your mesage *"
                onChange={(e) => handleDetailsChange(e)}
              ></textarea>
            </div>
          </div>
          <button className="SendMessageBtn" onClick={handleSendMessage}>
            send message
          </button>
        </div>
      </section>
    </>
  );
}
