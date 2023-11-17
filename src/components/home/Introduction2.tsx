"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function Introduction2() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <div className="grid grid-cols-12">
          <div className="col-span-9 col-end-13 border-[1px] border-[#E7717D]" />

          <div className="col-span-9 col-end-13 my-[30px] mr-[40px] text-right">
            Our game library features a wide range of games, from action-packed
            shooters and intense RPGs to casual puzzle games and family-friendly
            adventures. We have games for every platform, including PC, mobile,
            and console, and our developers are always working on new titles to
            keep our players entertained.
          </div>

          <div className="col-span-5 col-end-13 border-[1px] border-[#E7717D]" />
        </div>
      )}

      {role === ROLES.CREATOR && (
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-end-13">
            <div className="flex w-full flex-col items-end justify-end gap-[15px] pr-[70px]">
              <img
                src="/images/home/line02.png"
                className="h-[9px] w-[100px]"
              />

              <h2 className="text-[40px] font-bold text-[#AFD275]">
                Agency Services
              </h2>

              <div className="text-right text-[20px] font-normal text-[#000000]">
                Are you looking for a community of gamers and developers to
                collaborate with on your next gaming project? <br />
                Look no further than Kneeshaw Developments! Our community is
                made up of passionate gamers and developers who share the same
                goal of creating the next big thing in gaming. With access to
                the latest tools and resources, you&#x27;ll have everything you
                need to bring your game ideas to life. Join us today and
                let&#x27;s work together to make gaming history!
              </div>

              <button
                type="button"
                className="mt-[20px] h-[52px] w-[205px] rounded-[18px] border-[2px] border-[#AFD275] font-semibold text-[#AFD275]"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
