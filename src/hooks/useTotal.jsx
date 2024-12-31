const useTotal = ({ plan, addOns, yearly }) => {
  const total = () => {
    const planPrice = parseInt(plan.price.replace(/[^0-9]/g, ""));
    const addOnsPrice = addOns.reduce(
      (acc, item) =>
        acc +
        parseInt(
          yearly
            ? item.priceY.replace(/[^0-9]/g, "")
            : item.priceM.replace(/[^0-9]/g, ""),
          10,
        ),
      0,
    );
    return planPrice + addOnsPrice;
  };

  return {
    total,
  };
};

export default useTotal;
