export default function Navbar() {
    return (
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">YouTube</h1>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 px-3 py-1 rounded-md focus:outline-none"
        />
      </header>
    );
  }