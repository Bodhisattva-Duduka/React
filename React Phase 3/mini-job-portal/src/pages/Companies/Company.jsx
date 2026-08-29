import { useParams } from "react-router-dom";
import companiesData from "../../data/companiesData";
import Navbar from "../../components/Navbar";

function Company() {
  const { id } = useParams();

  const data = companiesData.find((item) => item.id === Number(id));

  return (
    <div>
      <div><Navbar/></div>
      <div className="min-h-screen bg-white px-8 py-12 flex justify-center">
        <div className="w-full max-w-4xl rounded-3xl border border-gray-200 bg-white p-10">
          <div className="border-b border-gray-200 pb-8">
            <h1 className="text-4xl font-bold text-gray-900">{data.name}</h1>

            <p className="mt-3 text-2xl font-medium text-violet-600">
              {data.industry}
            </p>

            <p className="mt-2 text-gray-500">{data.location}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-7 py-8">
            <div>
              <p className="text-sm text-gray-500">Employees</p>
              <p className="mt-1 text-lg text-gray-900">{data.employees}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Founded</p>
              <p className="mt-1 text-lg text-gray-900">{data.founded}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Website</p>
              <p className="mt-1 text-lg text-violet-600">
                <a href={data.website} target="_blank">
                  {data.website}
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900">About Company</h2>

            <p className="mt-4 leading-8 text-gray-600">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
