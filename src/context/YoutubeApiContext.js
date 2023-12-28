import { createContext, useContext } from "react";
import FakeYoutubeSearch from "../hook/useFakeYoutube";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const youtube = new FakeYoutubeSearch(); //
  //   const youtube = new Youtube(client);

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
