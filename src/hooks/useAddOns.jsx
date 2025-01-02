const useAddOns = ({ setActive, addOns }) => {
  const toggle = (index) => {
    const item = {
      name: addOns[index].name,
      priceM: addOns[index].priceM,
      priceY: addOns[index].priceY,
    };
    setActive((prev) =>
      prev.some((activeItem) => activeItem.name === item.name)
        ? prev.filter((activeItem) => activeItem.name !== item.name)
        : [...prev, item],
    );
  };
  return {
    toggle,
  };
};

export default useAddOns;
