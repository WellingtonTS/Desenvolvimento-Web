import "./style.css";

type CardProps = {
  name: string;
  birth: string;
  calcAge: (birth: string) => number;
};

export function CardProfile({ name, birth, calcAge }: CardProps) {
  return (
    <div className="container">
      <p>{name}</p>
      <p>Idade: {calcAge(birth)}</p>
    </div>
  );
}
