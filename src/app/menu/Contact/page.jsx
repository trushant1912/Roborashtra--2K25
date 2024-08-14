"use client";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './contact.css';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9678c114-baea-4519-81f4-7c57e7970174");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
           setSubmitted(true);
    
    }
}
  
  return (
    <>

    {!submitted ?(
    <div className="contact_wrapper text-2xl ">
      <h2 className="Contact text-2xl text-orange-700">For Any Query, You can make a call on:</h2>
      <h4 className="text-xl">Roborashtra Helpine : 9307727077</h4>
      <p className="text-xl">Event Lead(Aditya Pardeshi):8956596939</p>
      <p className="text-xl">Event Co-Lead(Vishal Jangid):9172008630</p>
      <p className="text-xl">Event CoLead(Pratik Chavare):8265005103</p>
      <div className="routeMap flex sm:flex-row flex-col justify-center items-center gap-2">
      <div className="route mt-4 sm:w-1/2 w-full ">
        <h4 className="text-orange-700">How to Reach ?</h4>
        <p className="mt-2 text-xl">By Train:

From Pune Junction, take a local train towards Talegaon or Lonavala and get off at Akurdi station.</p>
       <p>By Bus:

From Akurdi station, you can take an auto-rickshaw directly to PCCOER in Ravet. Alternatively, catch a local bus heading towards Ravet or Dehu Road and get off at the nearest stop to the college.</p>
       <p>By Auto-Rickshaw:

You can take an auto-rickshaw directly from Pune Junction to PCCOER, though this will be more expensive than the train and bus options.</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6357.674639144745!2d73.74122481005469!3d18.650710592595445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOE-Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1723558759207!5m2!1sen!2sin" width="400" height="300" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div>
      </div>
        
      </div>
            {/* <div className="contactTable">      <table>
        <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Contact No.</th>
        </tr>
        <tr>
          <td>Om Khare</td>
          <td>Team Lead</td>
          <td>-</td>
        </tr>
      </table>
      </div> */}

      {/* <form onSubmit={handleSubmit}>
        
        <div className="Name">
          <p className="Info">Name:</p>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div className="emaiPhn">
          <div className="email">
            <p className="Info">Email:</p>
            <input
              type="email"
              name="email"
              required
            />
          </div>
          <div className="phnNo">
            <p className="Info">Phone No:</p>
            <input
              type="tel"
              name="phoneNumber"
              required
            />
          </div>
        </div>
        <div className="query">
          <p className="Info">Query:</p>
          <textarea
            className="query-box"
            rows={4}
            name="message"
            required
          ></textarea>
        </div>
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </form> */}
      {/* <div className="Name">
          <p className="Info">Name:</p>
          <input
            type="text"
            name="name"
            required
          />
        </div> */}

      <p className="Follow text-center">Follow US ON</p>
      <div className="socialMedia flex row-auto gap-3 items-center align-middle justify-center">
        <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube /></a>
        <a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook /></a>
        <a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /></a>
      </div>
    </div>):(
    <div className="thankContainer">
        <div className="innerBox">
          <div className="Thankingtext">Thanks! We will get back to you promptly.</div>
          <div className="submitBtn" style={{fontFamily: "bankGothlic"}}>
          <div className="thanksBtn">
            <a href="../menu">
          <button>Back to event</button>
          </a>
          </div>
        </div>
        </div>
      </div>
    )}
      </>
  );
};

export default ContactPage;
