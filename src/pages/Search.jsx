import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = ({ apiPath }) => {
  
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);


  return (
    <main>
      <section className="display-flex justify-center ">
        <p
          className={`text p-5 text-center text-white mb-2 ${
            movies.length === 0 ? "bg-red-500" : "bg-green-500"
          } rounded`}
        >
          {movies.length === 0
            ? `No Movies are there in this name ( ${queryTerm} ! )`
            : `Movies In that Name ( ${queryTerm} )`}
        </p>
      </section>
      <section className="max-w-7xl max-auto py-7">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
