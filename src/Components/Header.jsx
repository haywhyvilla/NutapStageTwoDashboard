import React from "react";
import image from "../Images/image.png";
import participants from "../Images/participants.png";
import board from "../Images/board.png";
import list from "../Images/list.png";
import power from "../Images/power.png";
import plus from "../Images/plus.png";

const Header = () => {
  return (
    <div class="h-[170px] w-[100%] py-[20px] px-[65px] shadow-[0px_4px_148px_rgba(0,0,0,0.2)]">
      <div>
        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold text-[38px] text-black tracking-tight">
              New Campaign Run
            </h1>
            <p class="text-[#B8B9BD] font-normal text-sm my-[4px]">
              A new campaign launch work for brand new featur in May month
            </p>
          </div>
          <button class="text-white font-normal text-sm py-[12px] px-[12px] bg-black w-[160px] h-[41px] rounded-lg">
            ADD MEMBERS
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center my-[25px]">
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center">
            <img
              src={image}
              alt="image1"
              class="rounded-full border-white border-[3px]"
            />
            <img
              src={image}
              alt="image2"
              class="rounded-full -ml-2 border-white border-[3px]"
            />
            <img
              src={image}
              alt="image3"
              class="rounded-full -ml-2 border-white border-[3px]"
            />
          </div>
          <p class="text-[#B8B9BD] font-normal text-sm">8 member</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex justify-between items-center gap-2 ml-5">
            <img src={participants} alt="participants" class="inline" />
            <p class="text-[#7D8088] font-medium text-sm">Participants View</p>
          </div>
          <div class="flex justify-between items-center gap-2 ml-5">
            <img src={board} alt="board" class="inline" />
            <p class="text-[#7D8088] font-medium text-sm">Board View</p>
          </div>
          <div class="flex justify-between items-center gap-2 ml-5">
            <img src={list} alt="list" class="inline" />
            <p class="text-[#7D8088] font-medium text-sm">List View</p>
          </div>

          <div class="flex justify-between items-center gap-2 ml-5">
            <img src={power} alt="power" class="inline" />
            <p class="text-[#7D8088] font-medium text-sm">Power View</p>
          </div>

          <img src={plus} alt="plus" class="ml-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
