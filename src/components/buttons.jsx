const Buttons = ({ data }) => {
  return (
    <>
      <button>{data.buttons[0]}</button>
      <button>{data.buttons[1]}</button>
    </>
  );
};

export default Buttons;
