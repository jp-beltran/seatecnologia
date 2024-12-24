import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes"; 
import bgElement from "./assets/bg_element.svg"; // Certifique-se de que a importação está correta

function App() {
  return (
    <div className="relative bg-[#DBDBDB] min-h-screen ">
      <img src={bgElement} alt="Background Element" className="absolute bottom-0 right-0 w-auto h-auto z-0" />
      <RouterProvider router={router} className="z-1"/>
      
    </div>
  );
}

export default App;
