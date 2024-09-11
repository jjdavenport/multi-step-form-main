const StepFour = ({ data }) => {
  return (
    <>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <span></span>
      <button>{data.change}</button>
    </>
  );
};

export default StepFour;
