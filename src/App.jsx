import { useState } from "react";
import data from "./components/assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";
import Buttons from "./components/buttons.jsx";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [plan, setPlan] = useState({
    plan: null,
    price: null,
    addOns: null,
  });
  const [yearly, setYearly] = useState(false);
  const [valid, setValid] = useState({
    form: false,
    plan: false,
  });
  const desktop = useMediaQuery({ minWidth: 768 });

  const changePlan = () => {
    setPage(2);
  };

  const toggle = () => {
    setYearly(!yearly);
  };

  const nextPage = () => {
    (page === 1 && setPage((prev) => prev + 1)) ||
      (page === 2 && valid.plan && setPage((prev) => prev + 1)) ||
      (page === 3 && setPage((prev) => prev + 1)) ||
      (page === 4 && setPage((prev) => prev + 1));
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-magnolia font-custom text-base">
        <div className="flex flex-1 flex-col justify-between md:w-full md:items-center md:justify-center">
          <main className="flex flex-col md:h-[600px] md:w-full md:max-w-[900px] md:flex-row md:rounded-xl md:bg-white md:p-4 md:shadow-xl">
            <Progress
              valid={page === 1 ? valid.form : page === 2 ? valid.plan : valid}
              desktop={desktop}
              page={page}
              steps={data.steps}
              sidebar={data.sidebar}
            />
            <section className="-mt-20 justify-between p-4 md:mt-0 md:flex md:w-full md:flex-col md:items-center">
              <Form
                valid={valid}
                setValid={setValid}
                plan={plan}
                setPlan={setPlan}
                yearly={yearly}
                toggle={toggle}
                page={page}
                data={data}
                changePlan={changePlan}
              />
              {desktop && page < 5 && (
                <Buttons
                  valid={
                    page === 1 ? valid.form : page === 2 ? valid.plan : valid
                  }
                  prevPage={prevPage}
                  nextPage={nextPage}
                  data={
                    page === 1
                      ? data.steps[0]
                      : page === 2
                        ? data.steps[1]
                        : page === 3
                          ? data.steps[2]
                          : data.steps[3]
                  }
                />
              )}
            </section>
          </main>
          {!desktop && page < 5 && (
            <Buttons
              valid={page === 1 ? valid.form : page === 2 ? valid.plan : valid}
              prevPage={prevPage}
              nextPage={nextPage}
              data={
                page === 1
                  ? data.steps[0]
                  : page === 2
                    ? data.steps[1]
                    : page === 3
                      ? data.steps[2]
                      : data.steps[3]
              }
            />
          )}
        </div>
        {desktop && <Footer />}
      </div>
    </>
  );
}

export default App;
