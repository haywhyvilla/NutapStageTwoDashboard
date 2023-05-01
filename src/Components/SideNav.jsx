import React from "react";
import welcome from "../Images/welcome.png";
import activities from "../Images/activities.png";
import addeduser from "../Images/addeduser.png";
import affiliate from "../Images/affiliate.png";
import dashboard from "../Images/dashboard.png";
import settings from "../Images/settings.png";
import users from "../Images/users.png";
import newproject from "../Images/newproject.png";

const SideNav = () => {
  return (
    <div class="hidden md:block h-[100vh] w-[272px] bg-[#1D1042] py-9 px-9 relative">
      <div>
        <button class="bg-[#45269C] text-white font-normal text-base py-[12px] px-[16px] rounded-lg w-[208px] h-[46px]">
          <img src={welcome} alt="welcome" class="inline mx-2.5" />
          Welcome Keerthi
        </button>
        <ul class="my-10">
          <li class="text-white font-medium text-sm mb-9">
            <img src={dashboard} alt="dashboard" class="inline mx-2.5" />
            Dashboard
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={settings} alt="settings" class="inline mx-2.5" />
            Settings
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={activities} alt="activities" class="inline mx-2.5" />
            Activities
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={users} alt="users" class="inline mx-2.5" />
            Users
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={addeduser} alt="addeduser" class="inline mx-2.5" />
            Added user
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={affiliate} alt="affiliate" class="inline mx-2.5" />
            Affiliate
          </li>
        </ul>
        <div class="bg-white h-[1px] w-[192px] ml-2 mb-9 opacity-50"></div>
        <ul>
          <li class="text-white font-medium text-sm mb-9">
            <img src={activities} alt="profile" class="inline mx-2.5" />
            Profile
          </li>
          <li class="text-white font-medium text-sm mb-9">
            <img src={users} alt="logout" class="inline mx-2.5" />
            Logout
          </li>
        </ul>
      </div>
      <button class="absolute text-white font-normal text-base py-[16px] px-[16px] rounded-lg w-[208px] h-[54px] bg-[#703EFE] bottom-9">
        <img src={newproject} alt="newproject" class="inline mx-2.5" />
        NEW PROJECT
      </button>
    </div>
  );
};

export default SideNav;
