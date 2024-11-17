const StepFour = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.description}</p>
        </div>
        <div className="bg-alabaster p-3">
          <span></span>
          <button className="text-coolGray underline">{data.change}</button>
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
