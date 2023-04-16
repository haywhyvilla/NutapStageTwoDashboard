import React from "react";
import SideNav from "./Components/SideNav";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <div class="h-screen w-screen rounded-lg flex">
        <SideNav />
        <div class="flex-1">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
