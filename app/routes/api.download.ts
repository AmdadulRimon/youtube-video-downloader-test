
// import fs from "fs";
// import { promisify } from "util";
// import path from "path";
import ytdl from "@distube/ytdl-core";

// // Promisify fs functions
// const unlinkAsync = promisify(fs.unlink);

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const videoUrl = url.searchParams.get("video") || "https://www.youtube.com/watch?v=aqz-KE-bpKQ";
//   const filePath = path.resolve("./downloaded_video.mp4");

//   try {
//     // Step 1: Download the video to a local file
//     const videoStream = ytdl(videoUrl, { quality: "highest" });
//     const writeStream = fs.createWriteStream(filePath);
//     console.log("download start");
    
//     await new Promise((resolve, reject) => {
//       videoStream.pipe(writeStream);
//       videoStream.on("end", resolve);
//       videoStream.on("error", reject);
//     });
//     console.log("download ongoing");

//     // Step 2: Read the file and send it in response
//     const fileStream = fs.createReadStream(filePath);
   
    
//     // Step 3: Cleanup - Delete file after sending response
//     // fileStream.on("close", async () => {
//     //   await unlinkAsync(filePath);
//     // });
// console.log("download end");
//     return new Response(fileStream, {
//       headers: {
//         "Content-Type": "video/mp4",
//         "Content-Disposition": 'attachment; filename="downloaded_video.mp4"',
//       },
//     });
//   } catch (error) {
//     console.error("Error downloading video:", error);
    
//     // Cleanup if any error occurs
//     if (fs.existsSync(filePath)) {
//       await unlinkAsync(filePath);
//     }

//     return new Response("Failed to download video", { status: 500 });
//   }
// }

// app/routes/download.tsx
export async function loader({ request }: LoaderArgs) {
  const videoUrl = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";
console.log("video downloading");
  // ... (validation and info fetching)
  const stream = ytdl(videoUrl, { quality: "highest" });
  return new Response(stream as any, { // Cast to bypass type issues
    headers: {
      "Content-Disposition": `attachment; filename="video.mp4"`,
      "Content-Type": "video/mp4",
    },
  });
}