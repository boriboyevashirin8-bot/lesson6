import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../api";

export default function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getVideo(id);
      setVideo(data);
    }
    fetchData();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{video.title}</h1>
      <img src={video.thumbnail} alt={video.title} className="w-full h-80 object-cover my-4" />
      <p>{video.description}</p>
      <p className="text-gray-500">{video.views} views</p>
    </div>
  );
}
