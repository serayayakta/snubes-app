import React, { useState } from "react";
import "./Information.css";
import validator from "validator";

function Information() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The input you entered was: ${
        "Company: " +
        company +
        ", Name: " +
        name +
        ", Phone: " +
        phone +
        ", Email: " +
        email +
        "\n Email Validation: " +
        emailError
      }`
    );
  };

  return (
    <>
      <div className="InformationBox">
        <form onSubmit={handleSubmit} className="Form">
          <label className="InputLabels">
            Company
            <input
              className="Inputs"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <label className="InputLabels">
            Name
            <input
              className="Inputs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="InputLabels">
            Phone
            <input
              className="Inputs"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="InputLabels">
            Email
            <input
              className="Inputs"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Information;