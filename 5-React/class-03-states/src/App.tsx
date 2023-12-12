import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("EmanuelQuintino");
  const [auxName, setAuxName] = useState("");
  const [data, setData] = useState<UserData>({} as UserData);

  function addCount() {
    // closures
    setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setAuxName(name);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${auxName}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [auxName]);

  console.log(data);

  return (
    <>
      <h1>Class 03 States</h1>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add&gt;</button>

      <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: 24 }}>
        <input type="text" onChange={handleChangeName} />
        <button>Pesquisar</button>
      </form>

      {data && (
        <section style={{ textAlign: "center" }}>
          <h2>{data.name}</h2>
          <img src={data.avatar_url} alt="" width={240} />
          <p>{data.bio}</p>
        </section>
      )}
    </>
  );
}
