import { Link } from "@remix-run/react";

export default function Index() {


  return (
    <div className="p-4">
    <div>
      <h1>Download YouTube Video</h1>
      <Link to="/api/download" download reloadDocument>
      Download lInk
      </Link>
    </div>
    </div>
  );
}
