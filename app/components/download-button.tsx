import { useNavigate } from "@remix-run/react";

export function DownloadButton() {
  const navigate = useNavigate();
  const videoUrl = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";

  const handleDownload = () => {
    navigate(`/api/download?url=${encodeURIComponent(videoUrl)}`);
  };

  return (
    <button 
      onClick={handleDownload}
      className="bg-blue-500 text-white p-2 rounded"
    >
      Download Video
    </button>
  );
}