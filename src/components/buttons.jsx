const Buttons = ({ data, onClick }) => {
  return (
    <>
      <div
        className={`flex ${data.buttons.length === 1 ? "justify-end" : "justify-between"} bg-white px-6 py-2`}
      >
        {data.buttons.length === 1 ? (
          <button
            onClick={() => onClick()}
            className="rounded-md bg-marineBlue p-3 text-white"
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
              className="rounded-md bg-marineBlue p-3 text-white"
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
