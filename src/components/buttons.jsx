const Buttons = ({ data, prevPage, nextPage, valid, checkValid, error }) => {
  return (
    <>
      <div
        className={`flex ${data.buttons.length === 1 ? "justify-end" : "justify-between"} w-full bg-white ~sm/md:~px-6/0 ~sm/md:~py-4/0 md:max-w-md`}
      >
        {data.buttons.length === 1 ? (
          <button
            onClick={nextPage}
            className="rounded-md bg-marineBlue px-5 py-3 font-medium text-white"
          >
            {data.buttons[0]}
          </button>
        ) : (
          <>
            <button onClick={prevPage} className="font-medium text-coolGray">
              {data.buttons[0]}
            </button>
            <button
              onClick={valid ? nextPage : checkValid}
              className={`${error && "cursor-not-allowed"} rounded-md bg-marineBlue px-5 py-3 font-medium text-alabaster`}
            >
              {data.buttons[1]}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Buttons;
