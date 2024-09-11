const StepOne = ({ data, inputs }) => {
  return (
    <>
      <span>{data.title}</span>
      <span>{data.description}</span>
      {inputs.map((i, index) => (
        <label key={index} htmlFor={i.type} className="flex flex-col">
          {i.label}
          <input type={i.type} placeholder={i.placeholder} />
        </label>
      ))}
    </>
  );
};

export default StepOne;
