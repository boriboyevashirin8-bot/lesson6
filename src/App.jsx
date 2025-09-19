import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Channel from './pages/Channel';
import Video from './pages/Video';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/channel/:id" element={<Channel />} />
              <Route path="/video/:id" element={<Video />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
