const StepThree = ({ data, addOns, yearly, active, setActive }) => {
  const toggle = (index) => {
    const item = {
      name: addOns[index].name,
      priceM: addOns[index].priceM,
      priceY: addOns[index].priceY,
    };
    setActive((prev) =>
      prev.some((activeItem) => activeItem.name === item.name)
        ? prev.filter((activeItem) => activeItem.name !== item.name)
        : [...prev, item],
    );
  };
  return (
    <div className="flex flex-col ~sm/md:~gap-4/8 md:py-4">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-marineBlue ~sm/md:~text-2xl/3xl">
          {data.title}
        </span>
        <p className="font-medium text-coolGray">{data.description}</p>
      </div>
      <ul className="flex flex-col gap-4 text-left">
        {addOns.map((i, index) => {
          const isActive = active.some(
            (activeItem) => activeItem.name === i.name,
          );

          return (
            <li key={index}>
              <button
                onClick={() => toggle(index)}
                className={`${
                  isActive
                    ? "bg-purplishBlue bg-opacity-5 outline-purplishBlue"
                    : "outline-lightGray"
                } flex w-full items-center justify-between rounded-md outline outline-1 transition-all duration-300 ease-in-out hover:outline-purplishBlue ~sm/md:~p-2/4`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`${isActive && "bg-purplishBlue"} flex h-5 w-5 items-center justify-center rounded-md border border-coolGray`}
                  >
                    {isActive && (
                      <img
                        className="h-3 w-3 object-contain"
                        src={data.checked}
                        alt="checked"
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
          );
        })}
      </ul>
    </div>
  );
};

export default StepThree;
