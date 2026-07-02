import { useEffect } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const MoviesList = ({ apiPath, head }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${head} / CinemaBite`;
  }, [head]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MoviesList;
