import useInput from "../Hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fName,
    valueIsValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lName,
    valueIsValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  const formIsValid = fNameIsValid && lNameIsValid && emailIsValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      alert(`First name: ${fName}\nLast name: ${lName}\nEmail: ${email}`);
      fNameReset();
      lNameReset();
      emailReset();
    } else alert("Please review highlighted errors.");
  };

  const fNameInputClasses = fNameHasError ? "invalid" : "";
  const lNameInputClasses = lNameHasError ? "invalid" : "";
  const emailInputClasses = emailHasError ? "invalid" : "";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            className={fNameInputClasses}
            type="text"
            id="name"
            value={fName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            className={lNameInputClasses}
            type="text"
            id="name"
            value={lName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          className={emailInputClasses}
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Must be a valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
