"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function FAQ() {
  const { role } = useRole();

  const faqs = [
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
  ];
  return (
    <>
      {role === ROLES.PLAYER && (
        <>
          <h2 className="mb-[80px] text-center text-[40px] font-bold">
            Frequently Asked Questions
          </h2>

          <div className="flex w-[400px] flex-col gap-[20px] sm:w-[500px] md:w-[600px] lg:w-[880px] ">
            {faqs.map((f) => (
              <Accordion
                key={f.answer}
                type="single"
                collapsible
                className="rounded-[10px] bg-[#312C29]"
              >
                <AccordionItem
                  value="item-1"
                  className="rounded-[10px]  border-[#312C29]"
                >
                  <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                    <div className="flex flex-row items-center justify-center">
                      <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]" />
                      <p className="text-[18px] font-semibold text-[#EDF1F3]">
                        {f.question}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="flex flex-col gap-[5px]">
                    <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                      <img src="/images/home/Line.png" alt="line" />
                      <div className="text-[15px] font-light text-[#EDF1F3]">
                        {f.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </>
      )}
      {role === ROLES.CREATOR && (
        <div className="flex h-auto w-full justify-center">
          <div className="flex w-[60%] min-w-[350px] flex-col gap-[20px] rounded-[22px] bg-white p-[50px]">
            <h2 className="py-[20px] text-center text-[40px] font-bold text-[#211D19]">
              Have a Questions? Let&#x27;s talk!
            </h2>

            <Input
              type="text"
              className="h-[52px] w-full rounded-[6px] border border-[#C2B9B0] pl-[10px]"
              placeholder="Full Name*"
            />

            <Input
              type="text"
              className="h-[52px] w-full rounded-[6px] border border-[#C2B9B0] pl-[10px]"
              placeholder="Email Address"
            />

            <Textarea
              placeholder="Write your message"
              className="h-[242px] resize-none"
            />

            <button
              type="button"
              className="h-[52px] w-full rounded-[6px] bg-[#AFD275] text-[18px] font-semibold text-[#EDF1F3]"
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </>
  );
}
