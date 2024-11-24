const Input = ({
  type,
  placeholder,
  label,
  onChange,
  onBlur,
  onError,
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
            {onError && (
              <span className="font-bold text-strawberryRed">{onError}</span>
            )}
          </div>
          <input
            className={`${onError ? "outline-strawberryRed" : "outline-lightGray focus:outline-purplishBlue"} cursor-pointer rounded-md text-base outline outline-1 transition-colors duration-300 ease-in-out placeholder:font-medium placeholder:text-coolGray ~sm/md:~p-2/3`}
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
