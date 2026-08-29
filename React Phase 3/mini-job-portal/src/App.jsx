import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies/Companies";
import Jobs from "./pages/Jobs/Jobs";
import Job from "./pages/Jobs/Job";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/jobs" element={<Jobs/>}/>

          <Route path="/jobs/:id" element={<Job/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App
