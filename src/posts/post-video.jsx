import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function PostVideo() {
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

        <div className="h-[478px] w-[343px] shadow-md bg-[#ffffff] p-[20px] rounded-[16px] md:w-[600px] md:h-[669px]">
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
              Post Title Et laboris
            </h3>

            <h5 className="mt-[20px] text-gray-800 text-sm font-medium font-['Space Grotesk']  leading-normal">
              Coming soon: The privacy-first VPN that CAN'T track your activity.
              Be the first to use Obscura: https://obscuravpn.io
            </h5>
            {/* image con */}
            <div className="mt-[10px]">
              <img
                src="https://images.pexels.com/photos/20606227/pexels-photo-20606227/free-photo-of-a-person-standing-on-the-beach-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className=" h-[150px] w-full md:h-[311px]"
              />
            </div>

            {/* categories con */}
            <div className="flex gap-[20px] mt-[20px]">
              {categories.map((cate) => {
                return (
                  <button
                    key={cate.id}
                    className=" bg-[#f9f8ff] w-[79px] px-2 py-1 rounded-lg"
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
                    className="bg-[#ede7ff] text-[#7766ff] w-[81px] px-2 py-1 rounded-lg"
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
