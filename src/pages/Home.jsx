import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieservices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title="trending" url={endpoints.trending} />
      <MovieRow title="upcoming" url={endpoints.upcoming} />
      <MovieRow title="Top Rated" url={endpoints.topRated} />
      <MovieRow title="comedy" url={endpoints.comedy} />
      <MovieRow title="popular" url={endpoints.popular} />
    </>
  );
};

export default Home;
