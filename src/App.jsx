import TableComponent from "./pages/Table";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <>
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/marks-project/marks" element={<TableComponent />} />
          <Route path="/marks-project/" element={<Login />} />
          <Route path="/marks-project/Navbar" element={<Navbar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
