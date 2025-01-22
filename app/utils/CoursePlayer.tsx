//courseplayer

import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!videoUrl) {
      setError("No video URL provided.");
      setLoading(false);
      return;
    }

    const fetchVideoData = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/v1/getVdoCipherOTP", {
          videoId: videoUrl, // Send the videoId (or URL) to your backend
        });
        setVideoData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching video data:", err);
        setError("Failed to load the video.");
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoUrl]);

  const videoSrc = `https://player.vdocipher.com/v2/?otp=${videoData.otp}&playbackInfo=${videoData.playbackInfo}&player=oei9CWA91F364Slu`;

  return (
    <div style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}>
      {loading ? (
        <p>Loading video...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <iframe
          src={videoSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
          allow="encrypted-media"
          title={title}
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
//updated
//The player dynamically generates the video URL using data fetched from the backend (otp and playbackInfo). This ensures the video is correctly loaded based on the specific input. The video URL is hardcoded, meaning it will only work for the specific otp and playbackInfo provided in the code. It is more flexible and works with different videos.
//updated