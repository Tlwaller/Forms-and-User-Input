import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const inputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if (nameIsValid) formIsValid = true;

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setNameTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) return;

    setNameTouched(false);
    setName("");
  };

  const nameInputClasses = !inputIsInvalid ? "" : " invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control` + nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          onBlur={inputBlurHandler}
          value={name}
        />
        {inputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
