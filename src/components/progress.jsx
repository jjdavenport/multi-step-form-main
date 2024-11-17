import { useMediaQuery } from "react-responsive";

const Progress = ({ steps, onClick, page }) => {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <aside className="flex h-40 justify-center bg-mobile bg-cover bg-no-repeat p-4 md:bg-desktop">
        <ul className="flex gap-4">
          {steps.slice(0, 4).map((i, index) => (
            <li key={index} className="flex">
              <button
                className={`${page === i.step ? "border-lightBlue bg-lightBlue text-marineBlue" : "border-gray-50 text-white"} h-8 w-8 rounded-full border font-bold transition-colors duration-300 ease-in-out hover:border-lightBlue hover:bg-lightBlue hover:text-marineBlue`}
                onClick={() => onClick(i.step)}
              >
                {i.step}
              </button>
              {desktop && (
                <>
                  <span>{i.title}</span>
                  <span>{i.title}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Progress;
