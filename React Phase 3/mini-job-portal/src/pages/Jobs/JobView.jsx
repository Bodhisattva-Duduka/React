import { Link } from "react-router";

function JobView({ id, title, company }) {
  return (
    <Link to={`/jobs/${id}`}>
      <div
        className="w-80 min-h-40 rounded-2xl border-2 border-gray-900
                   flex flex-col justify-center
                   px-6 py-5
                   transition-all duration-200
                   hover:bg-violet-400
                   cursor-pointer"
      >
        <h1 className="text-2xl font-medium ">{title}</h1>

        <p className="mt-3 text-lg">{company}</p>
      </div>
    </Link>
  );
}

export default JobView;
