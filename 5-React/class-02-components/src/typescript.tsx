type userProps = {
  name: string;
  age: number;
}

function double(user: userProps) {
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
    </>
  );
}

double({name: "Emanuel", age: 30});
