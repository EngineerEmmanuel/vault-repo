import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostAudio() {
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

        <div className="h-[450px] w-[343px] shadow-md bg-[#ffffff] p-[20px] rounded-[16px] md:w-[600px] md:h-[500px]">
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
              Post Title Et laboris reprehe
            </h3>
            <h5 className="  md:hidden mt-[20px] text-gray-800 text-base font-medium font-['Space Grotesk'] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
            </h5>

            <h5 class="hidden md:block mt-[20px] text-gray-800 text-base font-medium font-['Space Grotesk'] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volupt velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint.
            </h5>

            {/* image con */}
            <div className="mt-[10px] h-12 w-full bg-red-500"></div>
            {/* categories con */}
            <div className="flex gap-[20px] mt-[20px]">
              {categories.map((cate) => {
                return (
                  <button
                    key={cate.id}
                    className=" w-[79px] px-2 py-1 bg-purple-50 rounded-lg  text-gray-800 text-sm font-medium font-['Space Grotesk'] leading-normal"
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
                    className="w-[81px] px-2 py-1 bg-violet-100 rounded-lg  text-indigo-500 text-sm font-medium font-['Space Grotesk'] leading-normal"
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
