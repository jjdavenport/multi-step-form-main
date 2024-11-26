import StepOne from "../pages/step-one";
import StepTwo from "../pages/step-two";
import StepThree from "../pages/step-three";
import StepFour from "../pages/step-four";
import StepFive from "../pages/step-five";
import { useState } from "react";

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
}) => {
  const [activePlan, setActivePlan] = useState(data.steps[1].plans[0]);
  const [activeAddOns, setActiveAddOns] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="flex h-fit flex-col rounded-lg bg-white px-6 py-8 md:max-w-md md:flex-1 md:px-0 md:py-0"
      >
        {page === 1 ? (
          <StepOne
            nameInput={nameInput}
            emailInput={emailInput}
            phoneInput={phoneInput}
            setNameInput={setNameInput}
            setEmailInput={setEmailInput}
            setPhoneInput={setPhoneInput}
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
      </form>
    </>
  );
};

export default Form;
