import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepFour from "./step-four";
import StepFive from "./step-five";

const Form = ({ data }) => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit} className="flex flex-col">
        <StepOne data={data.steps[0]} inputs={data.steps[0].inputs} />
        <StepTwo data={data.steps[1]} plans={data.steps[1].plans} />
        <StepThree data={data.steps[2]} addOns={data.steps[2].add_ons} />
        <StepFour data={data.steps[3]} />
        <StepFive data={data.steps[4]} />
      </form>
    </>
  );
};

export default Form;
