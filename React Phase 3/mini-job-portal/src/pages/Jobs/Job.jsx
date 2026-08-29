import { useParams } from "react-router-dom";

import jobsData from "../../data/jobsData";
import Navbar from "../../components/Navbar";

function Job() {
  const { id } = useParams();

  const data = jobsData.find((item) => item.id === Number(id));

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white px-8 py-12 flex justify-center">
        <div className="w-full max-w-4xl rounded-3xl border border-gray-200 bg-white p-10">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>

            <p className="mt-3 text-2xl font-medium text-violet-600">
              {data.company}
            </p>

            <p className="mt-2 text-gray-500">{data.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-7 py-8">
            <div>
              <p className="text-sm text-gray-500">Job ID</p>
              <p className="mt-1 text-lg text-gray-900">{data.id}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Company ID</p>
              <p className="mt-1 text-lg text-gray-900">{data.companyId}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Job Type</p>
              <p className="mt-1 text-lg text-gray-900">{data.type}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="mt-1 text-lg text-gray-900">{data.experience}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Salary</p>
              <p className="mt-1 text-lg text-gray-900">{data.salary}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Posted</p>
              <p className="mt-1 text-lg text-gray-900">{data.posted}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-8">
            <h2 className="text-xl font-semibold text-gray-900">Skills</h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span className="rounded border border-violet-200 bg-violet-50 px-4 py-2 text-sm text-violet-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900">Description</h2>

            <p className="mt-4 leading-8 text-gray-600">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
