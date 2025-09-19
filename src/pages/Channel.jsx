import { useParams } from 'react-router-dom';

export default function Channel() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Channel {id}</h1>
      <p>Bu yerda kanal haqida ma'lumot yoki videolar chiqadi.</p>
    </div>
  );
}