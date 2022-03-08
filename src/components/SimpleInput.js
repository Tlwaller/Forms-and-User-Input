import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    resetName();
    resetEmail();
  };

  const nameInputClasses = !nameHasError ? "" : " invalid";
  const emailInputClasses = !emailHasError ? "" : " invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className={"form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          className={nameInputClasses}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}

        <label htmlFor="email">Your Email</label>
        <input
          className={`form-control` + emailInputClasses}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && email.trim() === "" && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
