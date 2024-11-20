import Input from "./input";

const StepOne = ({ data, inputs }) => {
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
          {inputs.map((i, index) => (
            <li key={index}>
              <label
                htmlFor={i.type}
                className="flex flex-col gap-1 text-sm font-medium text-marineBlue"
              >
                <Input
                  label={i.label}
                  type={i.type}
                  placeholder={i.placeholder}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StepOne;
