
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Download YouTube Video</h1>
      <Link
        to="/api/download?videoUrl=https://www.youtube.com/watch?v=aqz-KE-bpKQ"
        download
        reloadDocument
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download Video
      </Link>
    </div>
  );
}

