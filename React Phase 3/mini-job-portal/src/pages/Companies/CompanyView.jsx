import { Link } from "react-router";

function CompanyView({ id, name }) {

  return (
    <Link to={`/companies/${id}`}>
      <div
        className="w-80 h-40 rounded-2xl border-2 border-gray-900
             flex items-center justify-center
             transition-all duration-200
             hover:bg-violet-400
             cursor-pointer"
      >
        <h1 className="text-2xl font-medium ">{name}</h1>
      </div>
    </Link>
  );
}

export default CompanyView;
