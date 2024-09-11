const StepThree = ({ data, addOns }) => {
  return (
    <>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <ul>
        {addOns.map((i, index) => (
          <li key={index}>
            <button>
              <div>
                <img src={data.checked} />
              </div>
              <span>{i.name}</span>
              <span>{i.description}</span>
              <span>{i.price}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StepThree;
