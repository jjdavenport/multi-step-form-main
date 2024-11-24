import Input from "./input";
import { useState } from "react";

const StepOne = ({ data, inputs }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validate = (input, setError, type) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?(\d[\d-. ]+)?(\([\d-. ]+\))?[\d-. ]+\d$/;

    input === ""
      ? setError("This field is required")
      : type === "email"
        ? !input.match(emailRegex)
          ? setError("Must be a valid email address")
          : setError("")
        : type === "phone"
          ? !input.match(phoneRegex)
            ? setError("Must be a valid phone number")
            : setError("")
          : setError("");
  };

  const handleBlur = (input, setError, type) => {
    validate(input, setError, type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  return (
    <>
      <div className="flex flex-col ~sm/md:~gap-4/8 md:py-4">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-marineBlue ~sm/md:~text-2xl/4xl">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col ~sm/md:~gap-4/6">
          <Input
            htmlFor={inputs[0].type}
            label={inputs[0].label}
            type={inputs[0].type}
            placeholder={inputs[0].placeholder}
            onChange={(e) => setNameInput(e.target.value)}
            onBlur={() => handleBlur(nameInput, setNameError, "name")}
            value={nameInput}
            onError={nameError}
          />
          <Input
            htmlFor={inputs[1].type}
            label={inputs[1].label}
            type={inputs[1].type}
            placeholder={inputs[1].placeholder}
            onChange={(e) => setEmailInput(e.target.value)}
            onBlur={() => handleBlur(emailInput, setEmailError, "email")}
            value={emailInput}
            onError={emailError}
          />
          <Input
            htmlFor={inputs[2].type}
            label={inputs[2].label}
            type={inputs[2].type}
            placeholder={inputs[2].placeholder}
            onChange={(e) => setPhoneInput(e.target.value)}
            onBlur={() => handleBlur(phoneInput, setPhoneError, "phone")}
            value={phoneInput}
            onError={phoneError}
          />
        </ul>
      </div>
    </>
  );
};

export default StepOne;
