import { useMediaQuery } from "react-responsive";

const Progress = ({ steps }) => {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <aside>
        <ul>
          {steps.slice(0, 4).map((i, index) => (
            <li key={index} className="flex">
              <button>{i.step}</button>
              {desktop ? (
                <>
                  <span>{i.title}</span>
                  <span>{i.title}</span>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Progress;
