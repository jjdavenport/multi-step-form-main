import checkIcon from "./assets/icon-thank-you.svg";

const StepFive = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 py-8 text-center ~sm/md:~px-2/0 md:flex-1 md:justify-center">
        <img src={checkIcon} className="w-3/12 md:w-2/12" />
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-bold text-marineBlue">
            {data.title}
          </span>
          <p className="font-medium text-coolGray">{data.message}</p>
        </div>
      </div>
    </>
  );
};

export default StepFive;
