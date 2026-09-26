import JobView from "./JobView";
import jobsData from "../../data/jobsData";
import Navbar from "../../components/Navbar";

function Jobs() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex justify-center px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {jobsData.map((item) => (
            <JobView
              key={item.id}
              id={item.id}
              title={item.title}
              company={item.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
