"use client";

import {
  IoIosArrowDown,
  IoIosArrowDropleft,
  IoIosArrowDropright,
} from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function GameDetail() {
  return (
    <div
    // style={{
    //   backgroundImage: "url('/images/blog/greenback.png')",
    //   backgroundPosition: "",
    //   backgroundClip: "content-box",
    //   backgroundSize: "contain",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <section className="mx-[20px] mt-[120px] flex flex-row items-center justify-center">
        <div className="mx-[20px] flex w-full flex-col gap-[20px] lg:ml-[80px] lg:mr-[30px] lg:w-1/2">
          <h1 className="text-[50px] font-[400] text-[#EDF1F3] md:text-[70px] xl:text-[96px]">
            Titan Saga&#x27;s
            <br />
            Sneak Peak
          </h1>

          <p className="text-[18px] font-[400] text-[#EDF1F3]">
            Create a story that the players can actually impact using the D&D
            Skill System, that accomplishes the measure the ability of a
            character to succeed at a task
          </p>

          <button
            type="button"
            className="px-auto flex h-[52px] w-[202px] flex-row items-center justify-center gap-[10px] rounded-[18px] border-[2px] border-[#EDF1F3] text-[18px] font-[600] text-[#EDF1F3]"
          >
            Browse more <IoIosArrowDown />
          </button>
        </div>

        <div className="relative hidden w-1/2 items-center justify-center lg:flex">
          <img
            src="/images/blog/circle.png"
            alt="circle"
            className="h-[594px]"
          />

          <img
            src="/images/blog/card.png"
            alt="card"
            className="absolute h-[383px]"
          />
        </div>
      </section>

      <section className="mx-[20px] mt-[100px] flex h-auto flex-col gap-[30px] rounded-[22px] bg-[#85858533] py-[50px] xl:mx-[100px]">
        <h6 className="text-center text-[24px] font-[700]">
          Proposed future improvements
        </h6>

        <div className="mx-[60px] border border-[#EDF1F333]" />

        <div className="mt-[20px] flex flex-col items-center justify-center gap-[30px] lg:flex-row lg:justify-around xl:px-[150px]">
          <img
            src="/images/blog/shot.png"
            alt="screenshot"
            className="h-[229px] w-[406px]"
          />

          <img
            src="/images/blog/description.png"
            alt=" description"
            className="h-[87px] w-[448px]"
          />
        </div>

        <div className="mr-[60px] mt-[10px] flex flex-row-reverse">
          <div className="flex h-[44px] w-[104px] gap-[20px]">
            <IoIosArrowDropleft className="h-full w-full" />
            <IoIosArrowDropright className="h-full w-full" />
          </div>
        </div>
      </section>

      <section
        className="mx-[20px] mt-[100px] flex h-[776px] flex-col items-center justify-center gap-[30px]"
        style={{
          backgroundImage: "url('/images/blog/detailback.png')",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-[40px] font-[700] text-[#EDF1F3]">Details</h2>

        <p className="max-w-[1000px] text-center text-[20px] font-[400] text-[#EDF1F3]">
          One of the things that the D&D Skill system accomplishes is to measure
          the ability of a character to succeed at a task.
          <br /> Every playable character will have Talents and by specializing
          characters into certain Talents, you will be more likely to
          successfully affect the world of Titan Saga. This allows the story to
          have many branching options and also give realistic outcomes. Your
          character who has spent most social interactions being deceptive will
          be able to trick a guard in Act 2 while another player, who used other
          skills, will need to sneak into the Keep.
          <br /> They can still certainly try to lie to the guard but a failure
          is likely to lead to battle and a critical failure is likely to lead
          to an overwhelming battle.
        </p>

        <div className="flex h-[52px] w-[263px] items-center justify-center rounded-[18px] border-[2px] border-[#AFD275] text-[18px] font-[600] text-[#AFD275]">
          Download Titan Saga
        </div>
      </section>

      <section className="mx-[20px] mt-[100px]  flex flex-col items-center gap-[20px]">
        <h2 className="my-[20px] text-center text-[40px] font-[700] text-[#EDF1F3]">
          More screens from Titan Saga
        </h2>
        <div className="relative flex">
          <img src="/images/blog/morescreen.png" alt="morescreen" />

          <img
            src="/images/blog/zoom.png"
            alt="zoom"
            className="absolute bottom-5 right-5"
          />
        </div>

        <div className="flex gap-[10px]">
          <AiOutlineExclamationCircle className="h-[24px] w-[24px]" />
          Please note all images are from an alpha state. UI and Graphical
          improvements will be made and gameplay is subject to some change.
        </div>

        <div className="mr-[60px] mt-[10px] flex">
          <div className="flex h-[44px] w-[104px] gap-[20px]">
            <IoIosArrowDropleft className="h-full w-full text-[]" />
            <IoIosArrowDropright className="h-full w-full" />
          </div>
        </div>
      </section>

      <div className="my-[100px] flex h-auto w-full justify-center">
        <div className="flex w-[60%] min-w-[350px] flex-col gap-[20px] rounded-[22px] bg-[#85858533] p-[50px]">
          <h2 className="text-[#EDF1F3]] py-[20px] text-center text-[40px] font-bold">
            Share your thoughts with us
          </h2>

          <Input
            type="text"
            className="h-[52px] w-full rounded-[6px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[#EDF1F3]"
            placeholder="Full Name*"
          />

          <Input
            type="text"
            className="h-[52px] w-full rounded-[6px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[#EDF1F3]"
            placeholder="Email Address"
          />

          <Textarea
            placeholder="Write your message"
            className="h-[242px] resize-none bg-transparent text-[#EDF1F3]"
          />

          <button
            type="button"
            className="h-[52px] w-full rounded-[6px] bg-[#AFD275] text-[18px] font-semibold text-[#EDF1F3]"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
