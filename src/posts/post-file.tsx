import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostFile() {
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

  return (
    <main className="flex justify-center items-center h-full">
      <div>
        {/* text post */}

        <div className="h-[416px] w-[343px] shadow-md bg-[#ffffff] p-[20px] rounded-2xl md:w-[600px] md:h-[462px]">
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
              Post Title Et laboris reprehenderit laboris officia.
            </h3>
            <h5 className="  md:hidden mt-[15px] text-gray-800 text-base font-medium font-['Space Grotesk'] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud
            </h5>

            <h5 className="hidden md:block mt-[15px] md:mt-[24px] text-gray-800 text-base font-medium font-['Space Grotesk'] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volupt velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint.
            </h5>

            {/* file con */}
            <div className="mt-[10px] h-[70px] w-full bg-[#f1f3f5]">
              {/* file gen con */}
              <div className="flex items-center gap-x-[20px] p-[10px]">
                <img
                  src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                  className="w-[40px] h-[40px] rounded-[5px]"
                />
                {/* file details */}
                <div className="flex flex-col gap-[5px]">
                  <h4 className="text-gray-800 text-base font-bold font-['Space Grotesk'] leading-relaxed">
                    xyzfiles.zip
                  </h4>
                  <h6 className="text-gray-400 text-sm font-medium font-['Space Grotesk'] leading-normal">
                    264 KB
                  </h6>
                </div>
              </div>
            </div>
            {/* categories con */}
            <div className="flex gap-[20px] mt-[15px] md:mt-[20px]">
              {categories.map((cate) => {
                return (
                  <button
                    key={cate.id}
                    className=" text-gray-800 text-sm font-medium font-['Space Grotesk'] leading-normal  w-[79px] px-2 py-1 bg-purple-50 rounded-lg"
                  >
                    {cate.title}
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
