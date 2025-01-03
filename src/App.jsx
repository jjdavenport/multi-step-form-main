import data from "./assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";
import Buttons from "./components/buttons.jsx";
import Footer from "./components/footer.jsx";
import useApp from "./hooks/useApp.jsx";

function App() {
  const {
    formRef,
    page,
    plan,
    setPlan,
    yearly,
    setYearly,
    valid,
    updateValid,
    desktop,
    changePlan,
    nextPage,
    prevPage,
    dataProp,
  } = useApp({ data });

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-magnolia font-custom text-base">
        <div className="flex flex-1 flex-col justify-between md:w-full md:items-center md:justify-center">
          <main className="flex flex-col items-center md:h-[600px] md:w-full md:max-w-[900px] md:flex-row md:items-stretch md:rounded-xl md:bg-white md:p-4 md:shadow-xl">
            <Progress
              desktop={desktop}
              page={page}
              steps={data.steps}
              sidebar={data.sidebar}
            />
            <section className="-mt-20 w-11/12 justify-between overflow-hidden rounded-md shadow-md md:mt-0 md:flex md:w-full md:flex-col md:items-center md:p-4 md:shadow-none">
              <Form
                valid={valid}
                updateValid={updateValid}
                formRef={formRef}
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
