import React from "react";
import cardimage1 from "../Images/cardimage1.png";
import cardimage2 from "../Images/cardimage2.png";
import cardimage3 from "../Images/card-image3.png";
import design from "../Images/design.png";
import progress from "../Images/progress.png";
import seven from "../Images/seven.png";
import two from "../Images/two.png";
import imagehero from "../Images/imagehero.png";

const Hero = () => {
  return (
    <div class="w[100%] h-[619px] bg-[#FCFBFC] px-[65px] py-[25px]  grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div>
        <div class="w-[100%] h-[51px] bg-[#F4F6F8] rounded-lg py-2 px-6 flex justify-between items-center my-4">
          <p class="text-[#858A93] font-medium text-base">To Do</p>
          <button class="text-white font-medium text-base bg-black w-[35px] h-[35px] rounded">
            1
          </button>
        </div>
        <div class="bg-white px-4 py-4">
          <div class="h-[168px]">
            <img src={cardimage1} alt="cardimage1" class="h-[100%]" />
          </div>
          <div class="flex justify-between items-center mt-2">
            <h4 class="font-semibold text-base text-black">
              Highfidelity Design
            </h4>
            <img src={design} alt="design" class="mr-2" />
          </div>
          <p class="font-normal text-[#B8B9BD] text-sm mt-1">
            Make clear design and color
          </p>
          <div class="flex justify-between items-center">
            <div class="flex justify-center items-center">
              <img src={progress} alt="progress" />
              <p>Progress </p>
            </div>
            <h4>2/10</h4>
          </div>
          <div></div>
          <div class="flex justify-between items-center">
            <div class="flex justify-center items-center">
              <div class="flex justify-center items-center">
                <img src={seven} alt="seven" />
                <p>7</p>
              </div>
              <div class="flex justify-center items-center">
                <img src={two} alt="two" />
                <p>2</p>
              </div>
            </div>
            <div class="flex items-center">
              <img
                src={imagehero}
                alt="imagehero"
                class="rounded-full border-white border-[3px]"
              />
              <img
                src={imagehero}
                alt="imagehero"
                class="rounded-full -ml-2 border-white border-[3px]"
              />
              <img
                src={imagehero}
                alt="imagehero"
                class="rounded-full -ml-2 border-white border-[3px]"
              />
            </div>
          </div>
        </div>
        <button>
          <img />
          Add Task
        </button>
      </div>
      <div class="">
        <div class="w-[100%] h-[51px] bg-[#F4F6F8] rounded-lg py-2 px-4 flex justify-between items-center my-4">
          <p class="text-[#858A93] font-medium text-base">Inprogress</p>
          <button class="text-white font-medium text-base bg-black w-[35px] h-[35px] rounded">
            2
          </button>
        </div>
        <div class="bg-white px-4 py-4">
          <div class="h-[168px]">
            <img src={cardimage2} alt="cardimage2" class="h-[100%]" />
          </div>
        </div>
      </div>
      <div class="">
        <div class="w-[100%] h-[51px] bg-[#F4F6F8] rounded-lg py-2 px-4 flex justify-between items-center my-4">
          <p class="text-[#858A93] font-medium text-base">Completed</p>
          <button class="text-white font-medium text-base bg-black w-[35px] h-[35px] rounded">
            3
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
