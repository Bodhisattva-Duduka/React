import CompanyView from "./CompanyView";
import  companiesData  from "../../data/companiesData";
import Navbar from "../../components/Navbar";

function Companies() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex justify-center px-4 py-8 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {companiesData.map((item) => (
            <CompanyView key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Companies;
