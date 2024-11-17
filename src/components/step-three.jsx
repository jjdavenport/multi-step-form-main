import { useState } from "react";

const StepThree = ({ data, addOns }) => {
  const [active, setActive] = useState([]);
  const toggle = (index) => {
    setActive((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col gap-4 text-left">
          {addOns.map((i, index) => (
            <li key={index}>
              <button
                onClick={() => toggle(index)}
                className={`${active.includes(index) ? "bg-purplishBlue bg-opacity-5 outline-purplishBlue" : "outline-coolGray"} flex w-full items-center justify-between rounded-md p-2 outline outline-1 transition-colors duration-300 ease-in-out`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`${active.includes(index) && "bg-purplishBlue"} flex h-5 w-5 items-center justify-center rounded-md border border-coolGray`}
                  >
                    {active.includes(index) && (
                      <img
                        className="h-3 w-3 object-contain"
                        src={data.checked}
                      />
                    )}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-marineBlue">{i.name}</span>
                    <span className="text-sm text-coolGray">
                      {i.description}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium text-purplishBlue">
                  {i.price}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StepThree;
