import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepFour from "./step-four";
import StepFive from "./step-five";

const Form = ({
  data,
  page,
  toggle,
  yearly,
  setPlan,
  changePlan,
  plan,
  setValid,
  valid,
  onSubmit,
  error,
  setError,
}) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex h-fit flex-col rounded-lg bg-white px-6 py-8 md:max-w-md md:px-0 md:py-0"
      >
        {page === 1 ? (
          <StepOne data={data.steps[0]} inputs={data.steps[0].inputs} />
        ) : page === 2 ? (
          <StepTwo
            setError={setError}
            error={error}
            valid={valid}
            setValid={setValid}
            setPlan={setPlan}
            yearly={yearly}
            onClick={toggle}
            data={data.steps[1]}
            plans={data.steps[1].plans}
          />
        ) : page === 3 ? (
          <StepThree
            setValid={setValid}
            yearly={yearly}
            setPlan={setPlan}
            data={data.steps[2]}
            addOns={data.steps[2].add_ons}
          />
        ) : page === 4 ? (
          <StepFour
            plan={plan}
            yearly={yearly}
            onClick={changePlan}
            data={data.steps[3]}
          />
        ) : (
          <StepFive data={data.steps[4]} />
        )}
      </form>
    </>
  );
};

export default Form;
