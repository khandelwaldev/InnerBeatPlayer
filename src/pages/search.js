import { useRouter } from "next/router";
import axios from "axios";

const SearchPage = ({ results }) => {
    const router = useRouter();
    const { q } = router.query;
  
    return (
      <div>
        <h1>Search Results for: {q}</h1>
        <ul>
          {results.map((result) => (
            <div key={result.id.videoId}>
              {result.snippet && result.snippet.thumbnails && (
                <img
                  src={result.snippet.thumbnails.default.url}
                  alt={result.snippet.title}
                  width={result.snippet.thumbnails.default.width}
                  height={result.snippet.thumbnails.default.height}
                />
              )}
              {result.snippet && result.snippet.title && (
                <p>{result.snippet.title}</p>
              )}
            </div>
          ))}
        </ul>
      </div>
    );
  };

export async function getServerSideProps({ query }) {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query.q}&type=video&videoCategoryId=10&key=${API_KEY}`
  );

  const results = response.data.items || [];

  return {
    props: {
      results,
    },
  };
}

export default SearchPage;
