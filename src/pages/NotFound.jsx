import notFound from "../assets/notFound.jpg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 p-4 text-center">
      <section className="max-w-2xl">
        {/* 404 Title */}
        <h1 className="text-7xl font-extrabold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Image */}
        <div className="mt-6">
          <img
            src={notFound}
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Not Found"
          />
        </div>

        {/* Go Home Button */}
        <div className="mt-6">
          <Link to="/">
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition"
            >
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
