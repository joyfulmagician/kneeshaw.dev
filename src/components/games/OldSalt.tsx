"use client";

import Link from "next/link";

export default function OldSalt() {
  return (
    <div className="flex flex-col gap-[40px] rounded-xl bg-[#2E2322] p-[50px] text-[#EDF1F3]">
      <h5 className="flex justify-end text-[20px] font-[600]">
        7k Players
        <span className="inline-flex h-3 w-3 rounded-full bg-[#9F0808]" />
      </h5>

      <div className="mb-[-100px] ml-[-180px] mt-[-100px] hidden lg:block">
        <img
          className="lg:h-[433px] lg:w-[1450px]"
          src="/images/games/image03.png"
        />
      </div>

      <div className="flex justify-end text-[20px]">
        <p className="w-[700px] text-right text-[20px] font-[400]">
          The game is a survival adventure that requires the player to manage
          their character&#x27;s hunger, thirst, and health while exploring the
          island for resources and materials to help them survive.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-[20px] font-[600] sm:flex-row sm:justify-end">
        <Link href="/games/oldsalt/get">
          <button
            type="button"
            className="flex h-[44px] w-[180px] items-center justify-center rounded-lg bg-[#AFD275] px-[44px] py-[12px] text-[16px] sm:w-[210px]"
          >
            Get it now
          </button>
        </Link>
        <Link href="/games/oldsalt">
          <button
            type="button"
            className="flex h-[44px] w-[180px] items-center justify-center rounded-lg border border-white bg-transparent px-[24px] py-[12px] text-[16px] sm:w-[83px]"
          >
            More
          </button>
        </Link>
      </div>
    </div>
  );
}
