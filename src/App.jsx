import { Routes,Route, Link } from "react-router-dom";
import "./App.css";
import DataPage from "./DataPage";
import AddPage from "./AddPage";

function App() {
  return (
    <div className=" flex flex-col items-center">
      <h6 className=" text-xl font-semibold text-center bg-blue-500 p-5 text-white w-[100%]">NITROUS'S DIRECTORY APP</h6>
      <div className="flex items-center flex-col">
      
        <div className="p-5 flex justify-start w-screen space-x-9 ">
        <Link to="./"><button className=" bg-blue-400 p-5 rounded-md ">ADD NEW PERSON</button></Link>
          
          <Link to="./data"><button className=" bg-blue-400 p-5  rounded-md">RETRIEVE INFORMATION</button></Link>
        </div>

        
        <Routes  >
          <Route path="/" element={<AddPage></AddPage>} />
          <Route path="/data" element={<DataPage></DataPage>} />
          
          <Route path="*" element={<div>ERROR 404 NO PAGE FOUND</div>} />

        </Routes>
        
      </div>



    </div>
  
  );
}

export default App;
