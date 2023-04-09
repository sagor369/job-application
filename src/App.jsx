import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 items-center">
        <div className="">
        <div className="w-3/4 mx-auto">
          <h1 className="capitalize text-5xl font-bold mb-3">We are with you to eliminate <span className="text-cyan-500">unemployment</span> </h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn-primary mt-4">Get Started</button>
        </div>
        </div>
        <div className="h-96 flex justify-center">
          <img className="h-full w-4/5" src="/public/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
