const StepTwo = ({ data, plans }) => {
  return (
    <>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {plans.map((i, index) => (
          <li key={index}>
            <button>
              <img src={i.img} />
              <span>{i.name}</span>
              <span>{i.priceM}</span>
            </button>
          </li>
        ))}
      </ul>
      <label htmlFor={data.billing_options}>
        {data.billing_options[0]}
        <button></button>
        {data.billing_options[1]}
      </label>
    </>
  );
};

export default StepTwo;
