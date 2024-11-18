import { useState } from "react";
import data from "./components/assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";
import Buttons from "./components/buttons.jsx";
import { useMediaQuery } from "react-responsive";

function App() {
  const [page, setPage] = useState(1);
  const [plan, setPlan] = useState(null);
  const [term, setTerm] = useState("monthly");
  const [valid, setValid] = useState(false);
  const desktop = useMediaQuery({ minWidth: 768 });

  const handlePage = (num) => {
    setPage(num);
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-magnolia font-custom text-base md:items-center md:justify-center">
        <main className="flex flex-col md:h-[600px] md:w-full md:max-w-[900px] md:flex-row md:rounded-xl md:bg-white md:p-4 md:shadow-xl">
          <Progress
            desktop={desktop}
            onClick={handlePage}
            page={page}
            steps={data.steps}
            sidebar={data.sidebar}
          />
          <section className="-mt-20 justify-between p-4 md:mt-0 md:flex md:w-full md:flex-col md:items-center">
            <Form setPlan={setPlan} setTerm={setTerm} page={page} data={data} />
            {desktop && (
              <Buttons
                onClick={handlePage}
                data={
                  page === 1
                    ? data.steps[0]
                    : page === 2
                      ? data.steps[1]
                      : page === 3
                        ? data.steps[2]
                        : page === 4
                          ? data.steps[3]
                          : page === 5 && data.steps[4]
                }
              />
            )}
          </section>
        </main>
        {!desktop && (
          <Buttons
            onClick={handlePage}
            data={
              page === 1
                ? data.steps[0]
                : page === 2
                  ? data.steps[1]
                  : page === 3
                    ? data.steps[2]
                    : page === 4
                      ? data.steps[3]
                      : page === 5 && data.steps[4]
            }
          />
        )}
      </div>
    </>
  );
}

export default App;
