import data from "./components/assets/data.json";
import Form from "./components/form.jsx";
import Progress from "./components/progress.jsx";

function App() {
  return (
    <>
      <Progress steps={data.steps} />
      <Form data={data} />
    </>
  );
}

export default App;
