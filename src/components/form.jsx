import StepOne from "../pages/step-one";
import StepTwo from "../pages/step-two";
import StepThree from "../pages/step-three";
import StepFour from "../pages/step-four";
import StepFive from "../pages/step-five";
import useForm from "../hooks/useForm";

const Form = ({
  data,
  page,
  yearly,
  setPlan,
  changePlan,
  plan,
  error,
  setError,
  setYearly,
  formRef,
  setValid,
}) => {
  const {
    input,
    setInput,
    activePlan,
    setActivePlan,
    activeAddOns,
    setActiveAddOns,
  } = useForm({ data });
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white px-6 py-8 md:w-[28rem] md:flex-1 md:px-0 md:py-0">
        {page === 1 ? (
          <StepOne
            setValid={setValid}
            formRef={formRef}
            input={input}
            setInput={setInput}
            setFormError={setError}
            data={data.steps[0]}
            inputs={data.steps[0].inputs}
            error={error}
          />
        ) : page === 2 ? (
          <StepTwo
            setYearly={setYearly}
            plan={plan}
            active={activePlan}
            setActive={setActivePlan}
            setError={setError}
            error={error}
            setPlan={setPlan}
            yearly={yearly}
            data={data.steps[1]}
            plans={data.steps[1].plans}
          />
        ) : page === 3 ? (
          <StepThree
            active={activeAddOns}
            setActive={setActiveAddOns}
            yearly={yearly}
            setPlan={setPlan}
            data={data.steps[2]}
            addOns={data.steps[2].add_ons}
          />
        ) : page === 4 ? (
          <StepFour
            addOns={activeAddOns}
            plan={plan}
            yearly={yearly}
            onClick={changePlan}
            data={data.steps[3]}
          />
        ) : (
          <StepFive data={data.steps[4]} />
        )}
      </div>
    </>
  );
};

export default Form;
