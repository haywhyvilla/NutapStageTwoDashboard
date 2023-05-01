import React from "react";
import SideNav from "./Components/SideNav";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "./App.css";
function App() {
  return (
    <>
      <div class="lg:h-screen w-screen rounded-3xl shadow-[0px_38px_200px_rgba(0,0,0,0.1)] flex">
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
