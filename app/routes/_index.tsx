import { Form, Link } from "@remix-run/react";
// import { DownloadButton } from "~/components/download-button";

export default function Index() {


  return (
    <div className="p-4">
    <div>
      <h1>Download YouTube Video</h1>
      {/* <Form method="get" action="/api/download">
        <input
          type="url"
          name="url"
          placeholder="Enter YouTube URL"
          required
        />
        <button type="submit">Download</button>
      </Form> */}
      <Link to="/api/download" download reloadDocument>
      Download lInk
      </Link>
    </div>
    </div>
  );
}
