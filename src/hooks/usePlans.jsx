const usePlans = ({ setActive, setPlan, yearly, active, setYearly }) => {
  const togglePlans = (i) => {
    setActive(i);
    setPlan({ plan: i.name, price: yearly ? i.priceY : i.priceM });
  };

  const toggleYearly = () => {
    setYearly((prev) => {
      const changeYearly = !prev;
      active &&
        setPlan({
          plan: active.name,
          price: changeYearly ? active.priceY : active.priceM,
        });
      return changeYearly;
    });
  };

  return {
    togglePlans,
    toggleYearly,
  };
};

export default usePlans;
