import React from "react";
import { useNavigate } from "react-router-dom";

export default function VidoeCard({ video, type }) {
  const isList = type === "list";
  const navigate = useNavigate();
  const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

  console.log("video.id = ", video.id);

  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => navigate(`/videos/watch/${video.id}`)}
    >
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{publishedAt}</p>
      </div>
    </li>
  );
}
