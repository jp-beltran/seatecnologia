import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes"; 


function App() {
  return (
    <div className="w-screen bg-[#DBDBDB]">
      <RouterProvider router={router} />
      

    </div>
  );
}

export default App;