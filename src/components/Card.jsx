export default function Card({ title, description, professor }) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{professor}</p>
    </div>
  );
}
