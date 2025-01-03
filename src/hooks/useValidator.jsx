import { useState, useCallback } from "react";

const useValidator = ({ input, valid }) => {
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = useCallback((type, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;

    let newError = null;

    if (value === "") {
      newError = "This field is required";
    } else if (type === "email" && !value.match(emailRegex)) {
      newError = "Must be a valid email address";
    } else if (type === "phone" && !value.match(phoneRegex)) {
      newError = "Must be a valid phone number";
    }

    setError((prev) => ({
      ...prev,
      [type]: newError,
    }));

    return newError === null;
  }, []);

  const isFormValid = useCallback(() => {
    const nameValid = validate("name", input.name);
    const emailValid = validate("email", input.email);
    const phoneValid = validate("phone", input.phone);
    return nameValid && emailValid && phoneValid;
  }, [input, validate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = isFormValid();
    valid.current = formIsValid;
  };

  return {
    handleSubmit,
    validate,
    error,
    isFormValid,
  };
};

export default useValidator;
