import { useState } from "react";

const StepTwo = ({ data, plans, setTerm }) => {
  const [active, setActive] = useState(null);
  const [yearly, setYearly] = useState(false);
  const toggleItems = (i) => {
    setActive(i);
  };
  const toggle = () => {
    setYearly(!yearly);
  };

  return (
    <>
      <div className="~sm/md:~gap-6/8 flex flex-col md:py-4">
        <div className="flex flex-col md:gap-2">
          <span className="~sm/md:~text-2xl/4xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {plans.map((i, index) => (
            <li key={index}>
              <button
                onChange={() => setTerm("monthly")}
                onClick={() => toggleItems(i)}
                className={`${active === i && "bg-purplishBlue bg-opacity-5 outline-purplishBlue"} ~sm/md:~gap-3/8 flex w-full items-center rounded-lg p-3 text-left outline outline-1 outline-gray-500 transition-colors duration-300 ease-in-out md:flex-col md:items-start`}
              >
                <img src={i.img} />
                <div className="flex flex-col">
                  <span className="font-bold text-marineBlue">{i.name}</span>
                  <span className="text-coolGray">
                    {yearly ? i.priceY : i.priceM}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <label
          htmlFor={data.billing_options}
          className="~sm/md:~p-2/3 flex w-full items-center justify-center gap-4 rounded-md bg-alabaster"
        >
          <span
            className={`${!yearly ? "text-marineBlue" : "text-coolGray"} font-bold`}
          >
            {data.billing_options[0]}
          </span>
          <div className="flex items-center">
            <button
              onClick={toggle}
              className="relative flex h-6 w-12 items-center rounded-full bg-marineBlue transition-colors duration-300"
            >
              <span
                className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
                  yearly ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
          </div>
          <span
            className={`${yearly ? "text-marineBlue" : "text-coolGray"} font-bold`}
          >
            {data.billing_options[1]}
          </span>
        </label>
      </div>
    </>
  );
};

export default StepTwo;
