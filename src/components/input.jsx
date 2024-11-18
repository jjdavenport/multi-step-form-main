import { useState } from "react";

const Input = ({ type, placeholder, label }) => {
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
      <div className="flex justify-between">
        <span>{label}</span>
        {error && <span className="font-bold text-strawberryRed">{error}</span>}
      </div>
      <input
        className={`${error ? "outline-strawberryRed" : "outline-lightGray focus:outline-purplishBlue"} ~sm/md:~p-2/3 cursor-pointer rounded-md text-base outline outline-1 transition-colors duration-300 ease-in-out placeholder:font-medium placeholder:text-coolGray`}
        value={input}
        type={type}
        placeholder={placeholder}
        onBlur={blur}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default Input;
