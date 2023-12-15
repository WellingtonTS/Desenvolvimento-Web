import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Input = {
  name: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Class 07 Forms</h1>
      <label>
        Nome:
        <input
          type="text"
          {...register("name", { required: "Campo obrigatório" })}
        />
        <span className="error">{errors.name?.message}</span>
      </label>

      <button>Cadastrar</button>
    </form>
  );
}
