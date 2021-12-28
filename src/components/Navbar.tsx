import React, { useRef } from "react";

const Navbar: React.FC = () => {
  const navbar = useRef(null);

  return (
    <>
      <div
        ref={navbar}
        className={` sticky top-0  select-none z-40 w-full h-20 xl:h-20 flex flex-col justify-start xl:flex-row xl:items-center shadow-lg bg-white overflow-hidden `}
      >
        <div className="my-2 flex items-center xl:flex-grow w-full">
          <a
            href="/"
            className="font-semibold text-2xl md:text-4xl flex-grow ml-4"
          >
            Movie Store
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
