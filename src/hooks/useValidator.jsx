import { useState } from "react";

const useValidator = ({ input, setValid }) => {
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = (type, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;

    value === ""
      ? setError((prev) => ({
          ...prev,
          [type]: "This field is required",
        }))
      : type === "email"
        ? !value.match(emailRegex)
          ? setError((prev) => ({
              ...prev,
              [type]: "Must be a valid email address",
            }))
          : setError((prev) => ({
              ...prev,
              [type]: null,
            }))
        : type === "phone"
          ? !value.match(phoneRegex)
            ? setError((prev) => ({
                ...prev,
                [type]: "Must be a valid phone number",
              }))
            : setError((prev) => ({
                ...prev,
                [type]: null,
              }))
          : setError((prev) => ({
              ...prev,
              [type]: null,
            }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    error.name === null && error.email === null && error.phone === null
      ? setValid(true)
      : validate("name", input.name);
    validate("email", input.email);
    validate("phone", input.phone);
  };

  return {
    handleSubmit,
    validate,
    error,
  };
};

export default useValidator;
