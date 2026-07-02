import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { options } from "../Utilitis/Options";
import Default from "../assets/Default.jpg";
import { motion } from "framer-motion";
import { Star, ThumbsUp, Flame, ArrowLeft } from "lucide-react"; // added ArrowLeft

const MovieDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const {
    original_title,
    poster_path,
    popularity,
    overview,
    release_date,
    vote_average,
    vote_count,
    genres,
  } = data;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : Default;

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
        options
      );
      const MovieDetail = await response.json();
      setData(MovieDetail);
    }
    fetchDetails();
  }, [params.id]);

  useEffect(() => {
    if (original_title) {
      document.title = `${original_title} / CinemaBite`;
    }
  }, [original_title]);

  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-b from-purple-800 via-black to-gray-900 min-h-screen px-6 sm:px-10 lg:px-16 text-white">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg my-6 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 py-8">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-72 sm:w-80 lg:w-96"
          >
            <img
              className="rounded-xl shadow-2xl border-4 border-purple-500"
              alt={original_title}
              src={image}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-md">
              {original_title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-200">
              {overview}
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-3 mt-6">
              {genres &&
                genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md hover:scale-105 transition"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>

            {/* Release Date */}
            <p className="mt-8 text-lg">
              <span className="font-bold text-cyan-400">Release Date:</span>{" "}
              <span className="text-gray-200">{release_date}</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-blue-600/30 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition">
                <Flame className="text-orange-400" size={18} />
                <span className="text-sm font-semibold text-blue-300">
                  Popularity: {popularity}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition">
                <Star className="text-yellow-400" size={18} />
                <span className="text-sm font-semibold text-green-300">
                  Vote Avg: {vote_average}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-red-600/30 px-4 py-2 rounded-lg shadow-md hover:scale-105 transition">
                <ThumbsUp className="text-red-400" size={18} />
                <span className="text-sm font-semibold text-red-300">
                  Votes: {vote_count}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetails;
