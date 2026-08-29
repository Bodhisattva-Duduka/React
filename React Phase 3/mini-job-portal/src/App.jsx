import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App
