import axios from "axios";
import Greeting from "~/components/Greeting";
import SongCard from "~/components/elements/SongCard";

const Home = ({ videos }) => {
  return (
    <div>
      <div className="my-10">
        <Greeting />
      </div>

      {/** Trending Songs  */}
      <div>
        <h1 className="text-2xl font-semibold">Top Trending Music Videos</h1>
        <div className="grid grid-cols-4 gap-[100px]">
          {videos.map((video) => (
            <div key={video.id}>
              <SongCard
                imgUrl={video.snippet.thumbnails.standard.url}
                title={video.snippet.title}
                author={video.snippet.channelTitle}
                id={video.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=10&key=${API_KEY}`
  );

  const videos = response.data.items.map((item) => ({
    id: item.id,
    snippet: item.snippet,
  }));

  return {
    props: {
      videos,
    },
  };
}

export default Home;
