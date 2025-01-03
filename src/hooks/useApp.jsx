import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useApp = ({ data }) => {
  const formRef = useRef(null);
  const validRef = useRef(false);
  const [page, setPage] = useState(1);
  const [plan, setPlan] = useState({
    plan: data.steps[1].plans[0].name,
    price: data.steps[1].plans[0].priceM,
  });
  const [yearly, setYearly] = useState(false);
  const desktop = useMediaQuery({ minWidth: 768 });

  const changePlan = () => {
    setPage(2);
  };

  const nextPage = () => {
    if (page === 1 && formRef.current) {
      formRef.current.requestSubmit();
      if (validRef.current) {
        setPage((prevPage) => prevPage + 1);
      }
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const dataProp = () => {
    return page === 1
      ? data.steps[0]
      : page === 2
        ? data.steps[1]
        : page === 3
          ? data.steps[2]
          : data.steps[3];
  };

  const updateValid = (isValid) => {
    validRef.current = isValid;
  };

  return {
    formRef,
    page,
    plan,
    setPlan,
    yearly,
    setYearly,
    valid: validRef,
    updateValid,
    desktop,
    changePlan,
    nextPage,
    prevPage,
    dataProp,
  };
};

export default useApp;
