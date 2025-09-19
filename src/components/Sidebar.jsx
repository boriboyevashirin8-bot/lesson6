import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-900 p-4 space-y-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </aside>
  );
}
