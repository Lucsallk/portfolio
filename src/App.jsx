import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <Intro />
      <Portfolio />
      <Timeline />
    </div>
  );
}

export default App;
