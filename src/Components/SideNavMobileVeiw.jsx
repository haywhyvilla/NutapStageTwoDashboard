import React from "react";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const SideNavMobileVeiw = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div class="md:hidden sticky top-0 z-10">
      <div class="w-full h-12 bg-[#45269C] p-2 text-white">
        <p>
          <GiHamburgerMenu size={30} onClick={handleClick} />
        </p>
      </div>
    </div>
  );
};

export default SideNavMobileVeiw;
