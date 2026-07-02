import { Link } from "react-router-dom";
import BackUp from "../assets/Default.jpg";
import { motion } from "framer-motion";

const Card = ({ movie }) => {
  const { id, original_title, poster_path, overview } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : BackUp;

  return (
    <Link to={`/movie/${id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transform transition-all"
      >
        {/* Poster */}
        <div className="relative">
          <img
            className="w-full h-80 object-cover"
            src={image}
            alt={original_title}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center p-3">
            <span className="text-sm text-white line-clamp-2">{overview}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-white hover:text-blue-400 transition">
            {original_title}
          </h5>
          <p className="text-gray-400 text-sm line-clamp-3 flex-grow">
            {overview}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
