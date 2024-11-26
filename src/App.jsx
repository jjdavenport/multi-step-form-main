import { useState } from "react";
import data from "./assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";
import Buttons from "./components/buttons.jsx";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [plan, setPlan] = useState({
    plan: data.steps[1].plans[0].name,
    price: data.steps[1].plans[0].priceM,
  });
  const [yearly, setYearly] = useState(false);
  const desktop = useMediaQuery({ minWidth: 768 });

  const changePlan = () => {
    setPage(2);
  };

  const nextPage = () => {
    (page === 1 && error === null && setError(true)) ||
      (page === 1 && error === true) ||
      (page === 1 && error === false && setPage((prev) => prev + 1)) ||
      (page === 2 && setPage((prev) => prev + 1)) ||
      (page === 3 && setPage((prev) => prev + 1)) ||
      (page === 4 && setPage((prev) => prev + 1));
    console.log("next", error);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const dataProp = () => {
    return page === 1
      ? data.steps[0]
      : page === 2
        ? data.steps[1]
        : page === 3
          ? data.steps[2]
          : data.steps[3];
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-magnolia font-custom text-base">
        <div className="flex flex-1 flex-col justify-between md:w-full md:items-center md:justify-center">
          <main className="flex flex-col md:h-[600px] md:w-full md:max-w-[900px] md:flex-row md:rounded-xl md:bg-white md:p-4 md:shadow-xl">
            <Progress
              desktop={desktop}
              page={page}
              steps={data.steps}
              sidebar={data.sidebar}
            />
            <section className="-mt-20 justify-between p-4 md:mt-0 md:flex md:w-full md:flex-col md:items-center">
              <Form
                setError={setError}
                error={error}
                plan={plan}
                setPlan={setPlan}
                yearly={yearly}
                setYearly={setYearly}
                page={page}
                data={data}
                changePlan={changePlan}
              />
              {desktop && page < 5 && (
                <Buttons
                  type={"submit"}
                  error={error}
                  prevPage={prevPage}
                  nextPage={nextPage}
                  data={dataProp()}
                />
              )}
            </section>
          </main>
          {!desktop && page < 5 && (
            <Buttons
              type={"submit"}
              error={error}
              prevPage={prevPage}
              nextPage={nextPage}
              data={dataProp()}
            />
          )}
        </div>
        {desktop && <Footer />}
      </div>
    </>
  );
}

export default App;
