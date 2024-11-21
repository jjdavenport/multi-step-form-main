const StepTwo = ({
  data,
  plans,
  yearly,
  setPlan,
  setValid,
  error,
  setError,
  active,
  setActive,
  setYearly,
}) => {
  const togglePlans = (i) => {
    setActive(i);
    setPlan({ plan: i.name, price: yearly ? i.priceY : i.priceM });
    setValid({ plan: true });
    setError(false);
  };
  const toggleYearly = () => {
    setYearly((prev) => {
      const changeYearly = !prev;
      active &&
        setPlan({
          plan: active.name,
          price: changeYearly ? active.priceY : active.priceM,
        });
      return changeYearly;
    });
  };
  return (
    <>
      <div className="flex flex-col ~sm/md:~gap-6/8 md:py-4">
        <div className="flex flex-col md:gap-2">
          <span className="font-bold text-marineBlue ~sm/md:~text-2xl/4xl">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {plans.map((i, index) => (
            <li key={index}>
              <button
                onClick={() => togglePlans(i)}
                className={`${active === i && "bg-purplishBlue bg-opacity-5 outline-purplishBlue"} ${error && "outline-strawberryRed"} flex w-full items-center rounded-lg p-3 text-left outline outline-1 outline-gray-500 transition-colors duration-300 ease-in-out ~sm/md:~gap-3/8 md:flex-col md:items-start`}
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
          className="flex w-full items-center justify-center gap-4 rounded-md bg-alabaster ~sm/md:~p-2/3"
        >
          <span
            className={`${!yearly ? "text-marineBlue" : "text-coolGray"} font-bold`}
          >
            {data.billing_options[0]}
          </span>
          <div className="flex items-center">
            <button
              onClick={toggleYearly}
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
