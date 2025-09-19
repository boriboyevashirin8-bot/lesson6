import { Link } from 'react-router-dom';

export default function VideoCard({ video }) {
  return (
    <Link
      to={`/video/${video.id}`}  // ✅ Correct syntax
      className="block bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h2 className="text-sm font-semibold line-clamp-2">{video.title}</h2>
        <p className="text-xs text-gray-400 mt-1">{video.views} views</p>
      </div>
    </Link>
  );
}
