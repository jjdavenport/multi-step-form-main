const Progress = ({ steps, onClick, page, desktop, sidebar }) => {
  return (
    <aside
      className={`${!desktop && "h-40"} ~sm/md:~p-6/8 flex flex-col items-center bg-mobile bg-cover bg-no-repeat pt-8 md:w-5/12 md:items-start md:rounded-xl md:bg-desktop md:bg-bottom`}
    >
      <ul className="~sm/md:~gap-4/6 flex md:h-full md:flex-col">
        {steps.slice(0, 4).map((i, index) => (
          <li key={index} className="flex gap-4 md:items-center">
            <button
              className={`${page === i.step ? "border-lightBlue bg-lightBlue text-marineBlue" : "border-pastelBlue text-white"} ~sm/md:~h-8/9 ~sm/md:~w-8/9 rounded-full border font-bold transition-colors duration-300 ease-in-out hover:border-lightBlue hover:bg-lightBlue hover:text-marineBlue`}
              onClick={() => onClick(i.step)}
            >
              {i.step}
            </button>
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
