// Soxta (mock) ma'lumotlar
const mockVideos = [
    {
      id: "1",
      title: "Birinchi Video",
      thumbnail: "https://via.placeholder.com/300x200",
      views: "1.2K",
      description: "Bu birinchi video tavsifi",
    },
    {
      id: "2",
      title: "Ikkinchi Video",
      thumbnail: "https://via.placeholder.com/300x200",
      views: "3.5K",
      description: "Bu ikkinchi video tavsifi",
    },
    {
      id: "3",
      title: "Uchinchi Video",
      thumbnail: "https://via.placeholder.com/300x200",
      views: "5K",
      description: "Bu uchinchi video tavsifi",
    },
  ];
  
  // Barcha videolarni olish
  export async function getVideos() {
    return mockVideos;
  }
  
  // Id bo‘yicha bitta videoni olish
  export async function getVideo(id) {
    return mockVideos.find((video) => video.id === id);
  }
  