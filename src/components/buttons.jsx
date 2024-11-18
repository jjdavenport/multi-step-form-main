const Buttons = ({ data, onClick }) => {
  return (
    <>
      <div
        className={`flex ${data.buttons.length === 1 ? "justify-end" : "justify-between"} ~sm/md:~px-6/0 ~sm/md:~py-4/0 w-full bg-white md:max-w-md`}
      >
        {data.buttons.length === 1 ? (
          <button
            onClick={() => onClick()}
            className="rounded-md bg-marineBlue px-5 py-3 text-white"
          >
            {data.buttons[0]}
          </button>
        ) : (
          <>
            <button onClick={() => onClick()} className="text-coolGray">
              {data.buttons[0]}
            </button>
            <button
              onClick={() => onClick()}
              className="rounded-md bg-marineBlue px-5 py-3 text-white"
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
