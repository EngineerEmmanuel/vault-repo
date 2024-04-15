import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { useState } from "react";

export default function PostCode() {
  const categories = [
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Category",
    },
    {
      id: 3,
      title: "Category",
    },
  ];

  const [seeMore, setSeeMore] = useState(false);

  const code = `import { Override } from "framer";
  import { useState, useEffect } from "react";
  
  export const ScrollPositionText: Override = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return {
      text: scrollPosition.toFixed(0), // Coverts scroll position to a string without decimal points
    };
  }`;

  return (
    <main className="flex justify-center items-center h-full ">
      <div>
        {/* text post  */}

        <div
          className="w-[327px] h-[437px]  bg-[#ffffff] p-6 rounded-[16px] shadow-md md:w-[600px]  md:h-[350px]"
          style={{ height: seeMore ? "840px" : "350px" }}
        >
          {/* profile main container */}
          <div className="flex justify-between items-center">
            {/* profile gen con */}
            <div className="flex items-center gap-x-[20px]">
              <img
                src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="w-[40px] h-[40px] rounded-full md:w-16 md:h-16"
              />
              {/* profile details */}
              <div className="flex flex-col gap-[5px]">
                <h4 className="text-gray-800 text-sm md:text-base font-bold font-['Space Grotesk'] leading-relaxed">
                  @jurrehoutkamp
                </h4>
                <h6 className="text-gray-400 text-xs md:text-sm font-medium font-['Space Grotesk'] leading-normal">
                  16 Hours ago
                </h6>
              </div>
            </div>
            {/* three dots icon */}
            <div>
              <MoreVertIcon className="cursor-pointer text-[#9c9bb3]" />
            </div>
          </div>

          {/* post content con */}
          <div className="mt-[5px] md:mt-[24px]">
            <h3 className="text-gray-800 text-xl font-bold font-['Space Grotesk'] leading-[30px]">
              Code Override for Scroll Position
            </h3>
            {/* code contain */}

            <div
              className="w-full bg-[#f9fafb] overflow-hidden p-[10px] mt-[5px]"
              style={{ height: seeMore ? "614px" : "100px" }}
            >
              <h6 className="leading-[47px]">{code}</h6>
            </div>
            <h6
              onClick={() => setSeeMore(!seeMore)}
              className="text-gray-800 text-xs font-medium font-['Space Grotesk'] leading-[18px] cursor-pointer"
            >
              {seeMore ? "See less" : "See more"}
            </h6>
          </div>
          {/* categories con */}
          <div className="flex gap-[20px] mt-[20px]">
            {categories.map((cate) => {
              return (
                <button
                  key={cate.id}
                  className=" bg-[#f9f8ff] w-[79px] p-[5px] rounded-[5px] text-center text-gray-800 text-sm font-medium font-['Space Grotesk'] leading-normal"
                >
                  {cate.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
