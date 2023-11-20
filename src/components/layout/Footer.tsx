"use client";

import Link from "next/link";

import clsx from "clsx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaSteam } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import Logo from "./Logo";

export default function Footer() {
  const { role } = useRole();

  return (
    <div className="flex flex-col gap-[32px]">
      <div
        className={clsx(
          "border-t-[1px]",
          role === ROLES.PLAYER ? "border-[#EDF1F3]" : "border-[#000000]",
        )}
      />

      <div className="mx-[24px] flex flex-wrap gap-[48px] lg:flex-nowrap">
        <div className="flex w-full flex-col justify-around gap-[60px] md:flex-row lg:w-[60%]">
          <div className="flex flex-col items-center gap-[32px]">
            <Logo />

            <div
              className={clsx(
                "flex flex-row justify-between gap-[32px] text-[24px]",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            >
              <FaLinkedinIn />
              <FaTwitter />
              <PiRedditLogoFill />
              <FaSteam />
              <FaYoutube />
            </div>
          </div>

          <div className="lg:ga-[150px] flex justify-center gap-[84px] xl:gap-[200px]">
            <div
              className={clsx(
                "flex flex-col gap-[24px] text-[20px] font-semibold",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            >
              <Link href="/games">Games</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/services">Services</Link>
              <Link href="/job">Job</Link>
              <Link href="/aboutus">About Us</Link>
            </div>

            <div
              className={clsx(
                "flex flex-col gap-[24px] text-[20px] font-semibold",
                role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
              )}
            >
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="mb-[24px] flex w-full flex-col items-center gap-[24px] lg:w-[40%]">
          <h6
            className={clsx(
              "text-[16px] font-bold",
              role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
            )}
          >
            Join our newsletter
          </h6>

          <div className="relative">
            <input
              type="text"
              className={clsx(
                "h-[54px] w-[320px] rounded-[16px] pl-[12px] pr-[160px] text-[14px] font-light md:w-[415px]",
                role === ROLES.PLAYER
                  ? "bg-[#39352F] text-white"
                  : "bg-[#E7E9E9] text-black",
              )}
              placeholder="Your email"
            />

            <button className="absolute right-[7px] top-[7px] h-[40px] w-[134px] rounded-[11px] bg-[#AFD275] text-[16px] font-semibold text-[#EDF1F3]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "mb-[24px] text-center text-[15px] font-light",
          role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
        )}
      >
        &copy; 2022 Kneeshaw Development All rights reserved
      </div>
    </div>
  );
}
