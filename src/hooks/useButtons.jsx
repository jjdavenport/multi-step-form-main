import { useEffect, useState } from "react";

const useButtons = ({ data }) => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    data.buttons.length === 2
      ? setTimeout(() => setShowButtons(true), 0)
      : setShowButtons(false);
  }, [data.buttons.length]);

  return {
    showButtons,
  };
};

export default useButtons;
