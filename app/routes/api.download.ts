
import ytdl from "@distube/ytdl-core";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const videoUrl = url.searchParams.get("videoUrl");

    if (!videoUrl || !ytdl.validateURL(videoUrl)) {
      return new Response("Invalid or missing YouTube URL", { status: 400 });
    }

    const videoInfo = await ytdl.getInfo(videoUrl);
    const title = videoInfo.videoDetails.title.replace(/[^\w\s]/gi, ""); // Remove special characters from title

    const stream = ytdl(videoUrl, { quality: "highest" });

    return new Response(stream as any, {
      headers: {
        "Content-Disposition": `attachment; filename="${title}.mp4"`,
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    console.error("Error downloading video:", error);
    return new Response("Failed to process video download", { status: 500 });
  }
}

