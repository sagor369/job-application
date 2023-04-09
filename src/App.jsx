import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        <div className="flex justify-center">
        <div className="">
          <h1>We are with you to eliminate unemployment</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button>Get Started</button>
        </div>
        </div>
        <div className="h-96 flex justify-center">
          <img className="h-full" src="/public/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
