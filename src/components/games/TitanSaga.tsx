"use client";

import Link from "next/link";

export default function TitanSaga() {
  return (
    <div className="flex flex-col rounded-xl bg-[#3F3046] p-8 text-[#EDF1F3] xl:flex-row">
      <div className="flex w-full flex-col gap-8 xl:w-1/2">
        <h5 className="flex justify-start text-[20px] font-[600]">
          7k Players
          <span className="inline-flex h-3 w-3 rounded-full bg-[#B74AFF]" />
        </h5>

        <img
          className="mb-[-100px] mt-[-100px] hidden h-[369.8px] w-[562px] object-scale-down lg:block"
          src="/images/games/image01.png"
        />

        <p className="text-[20px] font-[400]">
          It is a turn-based RPG (role-playing game) that takes place in a
          fantasy world filled with magic and mythical creatures. The game
          features a deep and immersive story, with players taking on the role
          of a hero tasked with saving the world from destruction.
        </p>

        <div className="flex flex-col justify-center gap-[20px] sm:flex-row sm:justify-start">
          <Link href="/games/titansaga/get">
            <button
              type="button"
              className="flex h-[44px] w-[180px] items-center justify-center rounded-lg bg-[#AFD275] px-[44px] py-[12px] text-[16px] text-base font-[600] sm:w-[210px]"
            >
              Get it now
            </button>
          </Link>
          <Link href="/games/titansaga">
            <button
              type="button"
              className="flex h-[44px] w-[180px] items-center justify-center rounded-lg border border-white bg-transparent px-[24px] py-[12px] text-[16px] font-[600] sm:w-[83px]"
            >
              More
            </button>
          </Link>
        </div>
      </div>

      <img
        src="/images/games/image02.png"
        className="ml-auto mr-auto mt-[-130px] hidden h-[623px] w-[600px] object-scale-down xl:block"
      />
    </div>
  );
}
