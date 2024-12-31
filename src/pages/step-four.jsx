import useTotal from "../hooks/useTotal";

const StepFour = ({ data, onClick, yearly, plan, addOns }) => {
  const { total } = useTotal({ plan, addOns, yearly });
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.description}</p>
        </div>
        <div
          className={`flex flex-col ${addOns.length >= 1 && "gap-4 divide-y"} rounded-lg bg-alabaster p-4`}
        >
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-start">
              <span className="font-bold text-marineBlue">
                {plan.plan} ({yearly ? "Yearly" : "Monthly"})
              </span>
              <button
                onClick={onClick}
                className="font-medium text-coolGray underline transition-colors duration-300 ease-in-out first-letter:uppercase hover:text-purplishBlue"
              >
                {data.change}
              </button>
            </div>
            <div className="font-bold text-marineBlue">{plan.price}</div>
          </div>
          <ul className={`flex flex-col gap-4 ${addOns.length >= 1 && "pt-4"}`}>
            {addOns.length >= 1 &&
              addOns.map((i, index) => (
                <li className="flex justify-between" key={index}>
                  <span className="font-medium text-coolGray">{i.name}</span>
                  <span className="font-medium text-marineBlue">
                    {yearly ? i.priceY : i.priceM}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex items-center justify-between px-4">
          <span className="font-medium text-coolGray">
            {yearly ? data.totalY : data.totalM}
          </span>
          <span className="font-bold text-purplishBlue ~sm/md:~text-lg/xl">
            +${total()}/{yearly ? "yr" : "mo"}
          </span>
        </div>
      </div>
    </>
  );
};

export default StepFour;
