"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

import { Checkbox } from "../ui/checkbox";

export default function Demo() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <section className="mb-[70px] ml-auto mr-auto mt-[39px] flex w-[80%] min-w-[400px] max-w-[880px] flex-col items-center gap-[24px] rounded-[24px] bg-[#35322F] py-[50px] text-[#EDF1F3] lg:max-h-[1089px] lg:w-full">
          <div className="flex flex-col gap-[14px] text-center">
            <h1 className="text-[30px] font-[700] md:text-[52px]">
              Welcome back!
            </h1>

            <p className="text-[12px] md:text-[20px]">
              Kneeshaw is happy to see you return.
            </p>
          </div>

          <div className="flex flex-col gap-[32px] px-[30px] pt-[40px] text-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-[275px] rounded-[16px] border-[1px] bg-transparent pl-[10px] md:w-[475px]"
            />
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                className="h-[52px] w-[275px] rounded-[16px] border-[1px] bg-transparent pl-[10px] md:w-[475px]"
              />

              <div className="mt-[10px] flex flex-row text-[14px]">
                <p className="flex w-1/2 flex-row items-center gap-[10px] text-left font-[400]">
                  <Checkbox className="rounded-[5px]" />
                  Remember me
                </p>

                <p className="w-1/2 text-right text-[14px] font-[500] text-[#E7717D]">
                  Forgot Password?
                </p>
              </div>
            </div>

            <button
              type="button"
              className="h-[52px] w-[275px] rounded-[16px] bg-[#AFD275] text-[18px] font-[600] md:w-[475px]"
            >
              Sign In
            </button>

            <button
              type="button"
              className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#EDF1F3] "
            >
              <FcGoogle />
              <span className="text-[14px] font-[600] sm:text-[18px]">
                Sign In with Google
              </span>
            </button>

            <p className="mb-[30px] text-[14px] font-[400]">
              Don&#x27;t have an account?
              <Link href="/signup">
                <span className="font-[600] text-[#AFD275]"> Sign Up</span>
              </Link>
            </p>
          </div>
        </section>
      )}

      {role === ROLES.CREATOR && (
        <section className="mb-[70px] ml-auto mr-auto mt-[39px] flex w-[80%] min-w-[400px] max-w-[880px] flex-col items-center gap-[24px] rounded-[24px] bg-[#F8FAFC] py-[50px] text-[#EDF1F3] lg:max-h-[1089px] lg:w-full">
          <div className="flex flex-col gap-[14px] text-center">
            <h1 className="text-[30px] font-[700] text-[#090914] md:text-[52px]">
              Welcome back!
            </h1>

            <p className="text-[12px] text-[#52525B] md:text-[20px]">
              Kneeshaw is happy to see you return.
            </p>
          </div>

          <div className="flex flex-col gap-[32px] px-[30px] pt-[40px] text-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[52px] w-[275px] rounded-[16px] border-[1px] border-[#C2CAD0] bg-transparent pl-[10px] text-[#52525B] md:w-[475px]"
            />
            <div>
              <input
                type="email"
                placeholder="Enter your password"
                className="h-[52px] w-[275px] rounded-[16px] border-[1px] border-[#C2CAD0] bg-transparent pl-[10px] text-[#52525B] md:w-[475px]"
              />

              <div className="mt-[10px] flex flex-row text-[14px]">
                <p className="flex w-1/2 flex-row items-center gap-[10px] text-left font-[400] text-[#52525B]">
                  <Checkbox className="rounded-[5px]" />
                  Remember me
                </p>

                <p className="w-1/2 text-right text-[14px] font-[500] text-[#E7717D]">
                  Forgot Password?
                </p>
              </div>
            </div>

            <button
              type="button"
              className="h-[52px] w-[275px] rounded-[16px] bg-[#AFD275] text-[18px] font-[600] md:w-[475px]"
            >
              Sign In
            </button>

            <button
              type="button"
              className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[##C2CAD0] "
            >
              <FcGoogle />
              <span className="text-[14px] font-[600] text-[#52525B] sm:text-[18px]">
                Sign In with Google
              </span>
            </button>

            <p className="mb-[30px] text-[14px] font-[400] text-[#52525B]">
              Don&#x27;t have an account?
              <Link href="/signup">
                <span className="font-[600] text-[#AFD275]"> Sign Up</span>
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
