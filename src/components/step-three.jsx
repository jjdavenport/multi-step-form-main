import { useState } from "react";

const StepThree = ({ data, addOns, yearly, plan }) => {
  const [active, setActive] = useState([]);
  const toggle = (index) => {
    setActive((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <>
      <div className="flex flex-col ~sm/md:~gap-4/8 md:py-4">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-marineBlue ~sm/md:~text-2xl/3xl">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col gap-4 text-left">
          {addOns.map((i, index) => (
            <li key={index}>
              <button
                onClick={() => toggle(index)}
                className={`${active.includes(index) ? "bg-purplishBlue bg-opacity-5 outline-purplishBlue" : "outline-lightGray"} flex w-full items-center justify-between rounded-md outline outline-1 transition-colors duration-300 ease-in-out ~sm/md:~p-2/4`}
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
                  {yearly ? i.priceY : i.priceM}
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
