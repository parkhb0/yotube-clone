import axios from "axios";

export default function FakeYoutubeSearch(keyword) {
  return keyword ? searchByKeyword(keyword) : mostPopular();
}

const searchByKeyword = async () => {
  return axios
    .get(`/videos/search.json`)
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
};

const mostPopular = async () => {
  return axios.get(`/videos/popular.json`).then((res) => res.data.items);
};
