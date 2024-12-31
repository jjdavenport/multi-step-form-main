import Input from "../components/input";
import useValidator from "../hooks/useValidator";

const StepOne = ({ data, formRef, inputs, setInput, setValid, input }) => {
  const { handleSubmit, validate, error } = useValidator({ setValid, input });
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col ~sm/md:~gap-4/8"
      >
        <div className="flex flex-col gap-2">
          <span className="font-bold text-marineBlue ~sm/md:~text-2xl/4xl ~sm/md:~pt-0/4">
            {data.title}
          </span>
          <p className="text-coolGray">{data.description}</p>
        </div>
        <ul className="flex flex-col ~sm/md:~gap-4/6">
          <Input
            htmlFor={inputs[0].type}
            label={inputs[0].label}
            type={inputs[0].type}
            placeholder={inputs[0].placeholder}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
            onBlur={(e) => validate("name", e.target.value)}
            value={input.name}
            error={error.name}
          />
          <Input
            htmlFor={inputs[1].type}
            label={inputs[1].label}
            type={inputs[1].type}
            placeholder={inputs[1].placeholder}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={(e) => validate("email", e.target.value)}
            value={input.email}
            error={error.email}
          />
          <Input
            htmlFor={inputs[2].type}
            label={inputs[2].label}
            type={inputs[2].type}
            placeholder={inputs[2].placeholder}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, phone: e.target.value }))
            }
            onBlur={(e) => validate("phone", e.target.value)}
            value={input.phone}
            error={error.phone}
          />
        </ul>
      </form>
    </>
  );
};

export default StepOne;
