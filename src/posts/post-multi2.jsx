import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostImageMulti2() {
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

  const hastags = [
    {
      id: 1,
      title: "#hashtag",
    },
    {
      id: 2,
      title: "#hashtag",
    },
  ];
  return (
    <main className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center">
        {/* text post */}

        <div className="w-[343px] h-[556px] shadow-md bg-[#ffffff]     md:w-[600px] md:h-[746px] p-6  rounded-2xl">
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
                <h4 className="text-gray-800 text-base font-bold font-['Space Grotesk'] leading-relaxed">
                  @jurrehoutkamp
                </h4>
                <h6 className="text-gray-400 text-sm font-medium font-['Space Grotesk'] leading-normal">
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
          <div className="mt-[15px] md:mt-[28px]">
            <h3 className="text-gray-800 text-base md:text-xl font-bold font-['Space Grotesk'] leading-relaxed md:leading-[30px]">
              Post Title Et laboris reprehenderit laboris officia
            </h3>
            {/* text con */}
            <div className="mt-[10px]">
              <h5 class=" hidden md:block text-gray-800 text-sm font-medium font-['Space Grotesk'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in volupt velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint.
              </h5>

              <h5 className="md:hidden  text-gray-800 text-sm font-medium font-['Space Grotesk'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusm tempor inci ut labore et dolore magna aliq.
              </h5>
            </div>
            {/* image con */}
            <div className="mt-[10px] grid grid-cols-2 items-center gap-[10px]">
              <img
                src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className=" h-[100px] w-full md:h-[151px]"
              />

              <img
                src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className=" h-[100px] w-full md:h-[151px]"
              />
              <img
                src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className=" h-[100px] w-full md:h-[151px]"
              />
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

            {/* hash tags con */}
            <div className="flex gap-[20px] mt-[20px]">
              {hastags.map((tag) => {
                return (
                  <button
                    key={tag.id}
                    className="bg-[#ede7ff] text-[#7766ff] w-[79px] p-[5px] rounded-[5px]  text-sm font-medium font-['Space Grotesk'] leading-normal"
                  >
                    {tag.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
