import { useState } from "react";

const useForm = ({ data }) => {
  const [activePlan, setActivePlan] = useState(data.steps[1].plans[0]);
  const [activeAddOns, setActiveAddOns] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return {
    activePlan,
    setActivePlan,
    activeAddOns,
    setActiveAddOns,
    input,
    setInput,
  };
};

export default useForm;
