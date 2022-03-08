import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const emailIsValid = email.trim() !== "" && email.trim().includes("@");
  const emailInputIsInvalid = !emailIsValid && emailTouched;
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!formIsValid) return;

    setNameTouched(false);
    setEmailTouched(false);
    setName("");
    setEmail("");
  };

  const nameInputClasses = !nameInputIsInvalid ? "" : " invalid";
  const emailInputClasses = !emailInputIsInvalid ? "" : " invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={"form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClasses}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setNameTouched(true)}
          value={name}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}

        <label htmlFor="email">Your Email</label>
        <input
          className={`form-control` + emailInputClasses}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmailTouched(true)}
          value={email}
        />
        {emailInputIsInvalid && email.trim() === "" && (
          <p className="error-text">
            Email must be in correct format and not empty.
          </p>
        )}
        {emailInputIsInvalid && !email.trim().includes("@") && (
          <p className="error-text">Must be valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
