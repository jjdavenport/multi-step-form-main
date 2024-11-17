import { useState } from "react";

const Input = ({ type, placeholder }) => {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input === "") {
      setError("This field is required");
    } else if (type === "email" && !input.match(regex)) {
      setError("Must be a valid email address");
    } else {
      setError("");
    }
  };

  const blur = () => {
    validate();
  };

  return (
    <>
      <input
        className="rounded-sm p-2 text-base outline outline-1 outline-lightGray placeholder:font-medium placeholder:text-coolGray focus:outline-purplishBlue"
        value={input}
        type={type}
        placeholder={placeholder}
        onBlur={blur}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && (
        <>
          <span>{error}</span>
        </>
      )}
    </>
  );
};

export default Input;
