import Input from "./input";

const StepOne = ({ data, inputs }) => {
  return (
    <>
      <div className="~sm/md:~gap-4/8 flex flex-col md:py-4">
        <div className="flex flex-col gap-2">
          <span className="~sm/md:~text-2xl/4xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <ul className="~sm/md:~gap-4/6 flex flex-col">
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
