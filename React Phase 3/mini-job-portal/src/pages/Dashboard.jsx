import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function companiesButton(){
    navigate('/companies');
  }

  function jobsButton(){
    navigate('/jobs');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex justify-center items-center">
        <div className="flex gap-6">
          <button onClick={companiesButton} className="w-48 h-28 bg-violet-300 hover:bg-violet-400 rounded-2xl flex justify-center items-center">
            Companies
          </button>

          <button onClick={jobsButton} className="w-48 h-28 bg-violet-300 hover:bg-violet-400 rounded-2xl flex justify-center items-center">
            Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;