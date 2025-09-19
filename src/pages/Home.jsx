import { useEffect, useState } from "react";
import { getVideos } from "../api";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getVideos();
      setVideos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
