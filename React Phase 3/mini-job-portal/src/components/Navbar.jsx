import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 bg-violet-400 flex-wrap">
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>

      <Link to="/companies" className="hover:text-gray-300">
        Companies
      </Link>

      <Link to="/jobs" className="hover:text-gray-300">
        Jobs
      </Link>
    </nav>
  );
}

export default Navbar;