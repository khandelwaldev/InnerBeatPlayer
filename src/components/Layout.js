import Header from "./Header";
import Player from "./Player";
import SideMenu from "./SideMenu";
import { useState } from "react";

export default function Layout({ children }) {
  const [currentVideoId, setCurrentVideoId] = useState(null);

  // Function to set the current video ID
  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
  };
  return (
    <div>
      <Header />
      <SideMenu />
      <Player videoId={currentVideoId} />
      <main className="ml-[250px] mt-[55px] p-5">{children}</main>
    </div>
  );
}
