import Input from "./input";

const StepOne = ({ data, inputs }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {inputs.map((i, index) => (
            <label
              key={index}
              htmlFor={i.type}
              className="flex flex-col gap-1 text-sm font-medium text-marineBlue"
            >
              {i.label}
              <Input type={i.type} placeholder={i.placeholder} />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default StepOne;
