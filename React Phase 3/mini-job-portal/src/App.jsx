import { BrowserRouter , Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<h2>home</h2>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App
