import React, { useState } from "react";
import "./Information.css";
import validator from "validator";

function Information() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  let countryCode;
  fetch("https://api.ipregistry.co/?key=tryout")
    .then((response) => response.json())
    .then((payload) => (countryCode = payload.location.country.calling_code));
  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid email!");
    }
  };
  const validateName = (name) => {
    if (name.length > 50) {
      setNameError("Name cannot be longer than 50 characters!");
    } else {
      setEmailError("");
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
        "\n Country Code: " +
        countryCode +
        "\n Email Validation: " +
        emailError +
        "\n Name validation: " +
        nameError
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
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            />
          </label>
          <label className="InputLabels">
            Phone
            <input
              className="Inputs"
              type="text"
              value={name}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
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
