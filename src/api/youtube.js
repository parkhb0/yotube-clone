import axios from "axios";

export default function Youtube() {
  const httpClient = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
  });

  const search = async (keyword) => {
    return keyword ? this.searchByKeyword(keyword) : this.#mostPopular();
  };

  const searchByKeyword = async (keyword) => {
    return await httpClient
      .search({
        params: {
          part: "snippet",
          maxResults: 5,
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  };

  const mostPopular = async () => {
    return await httpClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 5,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  };

  const channelImageURL = async (id) => {
    return await httpClient
      .channels({
        params: {
          part: "snippet",
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  };

  const relatedVideos = async (id) => {
    return await httpClient
      .search({
        params: {
          part: "snippet",
          maxResults: 5,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id })));
  };
}
