import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import VidoeCard from "../components/VidoeCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import FakeYoutubeSearch from "../hook/useFakeYoutube";

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => FakeYoutubeSearch(keyword),
  });

  console.log("videos = ", videos);

  return (
    <div className="content pt-[100px]">
      Videos {keyword ? `🔍${keyword}` : "🔥"}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VidoeCard key={video.id} video={video} type />
          ))}
        </ul>
      )}
      {isLoading && <div>로디중..</div>}
      {error && <div>에러남!!</div>}
    </div>
  );
}
