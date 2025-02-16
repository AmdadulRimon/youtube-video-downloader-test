import ytdl from "@distube/ytdl-core";
import { LoaderFunctionArgs } from "@remix-run/node";


// app/routes/download.tsx
export async function loader({ request }: LoaderFunctionArgs) {
  const videoUrl = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";
  // ... (validation and info fetching)
  const stream = ytdl(videoUrl, { quality: "highest" });
  return new Response(stream as any, { // Cast to bypass type issues
    headers: {
      "Content-Disposition": `attachment; filename="video.mp4"`,
      "Content-Type": "video/mp4",
    },
  });
}