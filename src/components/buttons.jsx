import { useEffect, useState } from "react";

const Buttons = ({ data, prevPage, nextPage, error, type }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (data.buttons.length === 2) {
      setTimeout(() => setShowButtons(true), 1);
    } else {
      setShowButtons(false);
    }
  }, [data.buttons.length]);

  return (
    <>
      <nav
        className={`flex ${data.buttons.length === 1 ? "justify-end" : "justify-between"} w-full bg-white ~sm/md:~px-6/0 ~sm/md:~py-4/0 md:max-w-md`}
      >
        {data.buttons.length === 1 ? (
          <button
            type={type}
            onClick={nextPage}
            className={`${error && "cursor-not-allowed"} rounded-md bg-marineBlue px-5 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:bg-opacity-60`}
          >
            {data.buttons[0]}
          </button>
        ) : (
          showButtons && (
            <>
              <button
                onClick={prevPage}
                className="px-5 py-3 font-medium text-coolGray transition-all duration-300 ease-in-out hover:text-marineBlue"
              >
                {data.buttons[0]}
              </button>
              <button
                onClick={nextPage}
                className={`${error && "cursor-not-allowed"} ${data.buttons[1] === "Confirm" ? "bg-purplishBlue" : "bg-marineBlue"} rounded-md px-5 py-3 font-medium text-alabaster transition-all duration-300 ease-in-out hover:bg-opacity-60`}
              >
                {data.buttons[1]}
              </button>
            </>
          )
        )}
      </nav>
    </>
  );
};

export default Buttons;
