const Progress = ({ steps, page, desktop, sidebar }) => {
  return (
    <aside
      className={`${!desktop && "h-40"} flex cursor-default flex-col items-center bg-mobile bg-cover bg-no-repeat pt-8 ~sm/md:~p-6/8 md:w-5/12 md:items-start md:rounded-lg md:bg-desktop md:bg-bottom`}
    >
      <ul className="flex ~sm/md:~gap-4/6 md:h-full md:flex-col">
        {steps.slice(0, 4).map((i, index) => (
          <li key={index} className="flex gap-4 md:items-center">
            <div
              className={`${page === i.step || (page === 5 && i.step === 4) ? "border-lightBlue bg-lightBlue text-marineBlue" : "border-pastelBlue text-white"} flex items-center justify-center rounded-full border font-bold transition-colors duration-300 ease-in-out ~sm/md:~h-8/9 ~sm/md:~w-8/9`}
            >
              {i.step}
            </div>
            {desktop && (
              <div className="flex flex-col uppercase">
                <span className="text-sm text-pastelBlue">Step {i.step}</span>
                <span className="font-medium tracking-wider text-white">
                  {sidebar[`step${i.step}`]}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Progress;
