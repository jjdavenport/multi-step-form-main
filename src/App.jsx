import { useState } from "react";
import data from "./components/assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";
import Buttons from "./components/buttons.jsx";

function App() {
  const [page, setPage] = useState(1);
  const [plan, setPlan] = useState(null);
  const [term, setTerm] = useState("monthly");

  const handlePage = (num) => {
    setPage(num);
  };

  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-lightGray font-custom text-base">
        <div>
          <Progress onClick={handlePage} page={page} steps={data.steps} />
          <main className="-mt-20 p-4">
            <Form setPlan={setPlan} setTerm={setTerm} page={page} data={data} />
          </main>
        </div>
        <Buttons
          onClick={handlePage}
          data={
            page === 1
              ? data.steps[0]
              : page === 2
                ? data.steps[1]
                : page === 3
                  ? data.steps[2]
                  : page === 4
                    ? data.steps[3]
                    : page === 5 && data.steps[4]
          }
        />
      </div>
    </>
  );
}

export default App;
