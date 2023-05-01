import React from "react";
import SideNav from "./Components/SideNav";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SideNavMobileVeiw from "./Components/SideNavMobileVeiw";
import "./App.css";
function App() {
  return (
    <div class="relative h-full">
      <SideNavMobileVeiw />
      <div class="h-screen w-screen rounded-3xl shadow-[0px_38px_200px_rgba(0,0,0,0.1)] flex">
        <SideNav />
        <div class="flex-1 h-full overflow-y-scroll">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
