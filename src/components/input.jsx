const Input = ({
  type,
  placeholder,
  label,
  onChange,
  onBlur,
  error,
  value,
  htmlFor,
}) => {
  return (
    <>
      <li>
        <label
          htmlFor={htmlFor}
          className="flex flex-col gap-1 text-sm font-medium text-marineBlue"
        >
          <div className="flex justify-between">
            <span>{label}</span>
            {error && (
              <span className="font-bold text-strawberryRed">{error}</span>
            )}
          </div>
          <input
            className={`${error ? "outline-strawberryRed" : "outline-lightGray focus:outline-purplishBlue"} cursor-pointer rounded-md text-base outline outline-1 transition-colors duration-300 ease-in-out [appearance:textfield] placeholder:font-medium placeholder:text-coolGray ~sm/md:~p-2/3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            value={value}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
          />
        </label>
      </li>
    </>
  );
};

export default Input;
