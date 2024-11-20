const StepFour = ({ data, onClick, yearly, plan }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.description}</p>
        </div>
        <div className="flex justify-between bg-alabaster p-3">
          <div className="flex flex-col">
            <span>
              {plan.price}({yearly ? "Yearly" : "Monthly"})
            </span>
            <button
              onClick={onClick}
              className="text-coolGray underline first-letter:uppercase"
            >
              {data.change}
            </button>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between">
          <span>{data.total}</span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default StepFour;
