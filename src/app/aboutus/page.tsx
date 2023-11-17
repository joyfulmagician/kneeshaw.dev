import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Aboutus`,
  description: `${SITE_TITLE} - Aboutus`,
};

export default function AboutUs() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />

      <section className="mx-[80px] mt-[146px] flex flex-col items-center">
        <h1 className="text-[40px] font-[700] text-[#EDF1F3]">About Us</h1>
      </section>

      <section className="mx-[80px] mt-[56px] flex items-center justify-center">
        <div className="flex w-[100px] flex-row">
          <div className="h-[1px] w-1/3 border border-[#677746]" />
          <div className="h-[1px] w-1/3 border border-[#AFD275]" />
          <div className="h-[1px] w-1/3 border border-[#677746]" />
        </div>
      </section>

      <section className="mx-[80px] mt-[91px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px] font-[400] text-[#EDF1F3]">
          Crafting unforgettable gaming experiences with innovative design and
          cutting-edge technology
        </h3>
      </section>

      <section className="mx-[80px] mt-[160px] flex flex-col 2xl:flex-row">
        <div className="w-full 2xl:w-1/2 ">
          <div className="flex w-[100px] flex-row">
            <div className="h-[1px] w-1/3 border border-[#AFD275]" />
            <div className="h-[1px] w-1/3 border border-[#677746]" />
            <div className="h-[1px] w-1/3 border border-[#677746]" />
          </div>
          <h1 className="mt-[19px] text-center text-[40px] font-[700] text-[#EDF1F3] 2xl:text-left">
            {"What we're "}
            <br />
            creating
          </h1>
          <p className="text-center text-[20px] font-[400] text-[#EDF1F3] 2xl:text-left">
            Kneeshaw Game Development is a leading game development company that
            specializes in creating immersive and engaging gaming experiences
            for players around the world. Based in the United Kingdom, Kneeshaw
            Game Development is known for its passion for gaming and its
            commitment to innovation, which has led to the creation of some of
            the most popular and successful games on the market.
          </p>
        </div>
        <div className="flex-center flex w-1/2">
          <img
            src="/images/aboutus/aboutus_image_02.svg"
            className="ml-auto hidden 2xl:block"
          />
          <img
            src="/images/aboutus/aboutus_image_04.svg"
            className="mr-[-800px] mt-[-1000px] hidden 2xl:block"
          />
          <img
            src="/images/aboutus/aboutus_image_05.svg"
            className="ml-auto mt-[-400px] hidden 2xl:block"
          />
        </div>
      </section>

      <section className="mx-[80px] mt-[150px] flex flex-col items-center">
        <h1 className="text-center text-[40px] font-[700] text-[#EDF1F3]">
          Why choose us in
          <br />
          your game development?
        </h1>
      </section>

      <section className="mx-[80px] mt-[21px] flex items-center justify-center">
        <div className="flex w-[100px] flex-row">
          <div className="h-[1px] w-1/3 border border-[#677746]" />
          <div className="h-[1px] w-1/3 border border-[#AFD275]" />
          <div className="h-[1px] w-1/3 border border-[#677746]" />
        </div>
      </section>

      <section className="mx-[80px] mt-[120px] flex h-[278px] justify-center gap-[50px] font-[400] text-[#EDF1F3]">
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus/aboutus_icon_01.png"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Innovation</h1>
          <p className="text-center text-[20px]">
            Our company uses innovative game development techniques and
            technologies.
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus/aboutus_icon_02.png"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Quality</h1>
          <p className="text-center text-[20px]">
            We prioritize quality in every aspect of game development, from art
            to programming to testing
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus/aboutus_icon_03.png"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Expertise</h1>
          <p className="text-center text-[20px]">
            5+ years experience in game development industry.
          </p>
        </div>
      </section>

      <section className="mx-[80px] mt-[160px] flex h-[278px] justify-center gap-[50px] font-[400] text-[#EDF1F3] lg:mt-[84px]">
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus/aboutus_icon_04.png"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Support</h1>
          <p className="text-center text-[20px]">
            After the game is launched any updates, bugs, or marketing support,
            you can rely on our team.
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus/aboutus_icon_05.png"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Collaboration</h1>
          <p className="text-center text-[20px]">
            We’re committed to collaborating with our clients to ensure they get
            the game they want.
          </p>
        </div>
      </section>

      <section className="mx-[80px] mt-[126px] flex flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="/images/aboutus/aboutus_image_03.svg"
            className="ml-[-120px] hidden w-[339px] lg:block"
          />
        </div>
        <div className="w-full text-[#EDF1F3] lg:w-1/2">
          <div className="flex justify-end">
            <div className="flex w-[100px] flex-row">
              <div className="h-[1px] w-1/3 border border-[#677746]" />
              <div className="h-[1px] w-1/3 border border-[#677746]" />
              <div className="h-[1px] w-1/3 border border-[#AFD275]" />
            </div>
          </div>
          <h1 className="mt-[21px] text-center text-[40px] font-[700] lg:text-right">
            Our mission
          </h1>
          <p className="mt-[50px] text-center text-[20px] font-[400] lg:text-right">
            One of our main focuses is on creating games that are accessible to
            players of all skill levels. We believe that games should be fun and
            engaging for everyone, regardless of their experience with gaming,
            and we work hard to ensure that our games are easy to pick up and
            play while still providing a challenging and rewarding experience.
            <br />
            <br />
            In addition to creating our own original games, we also work with
            publishers and other developers to help bring their games to market.
            Our team has extensive experience in all aspects of game
            development, from concept and design to programming and marketing,
            and we are committed to helping our clients achieve success in the
            highly competitive gaming industry.
          </p>
        </div>
      </section>

      <section className="mx-[80px] mt-[150px] flex flex-col items-center text-[40px] font-[700] text-[#EDF1F3]">
        Our Team
      </section>

      <section className="mx-[80px] mt-[21px] flex items-center justify-center">
        <div className="flex w-[100px] flex-row">
          <div className="h-[1px] w-1/3 border border-[#677746]" />
          <div className="h-[1px] w-1/3 border border-[#677746]" />
          <div className="h-[1px] w-1/3 border border-[#AFD275]" />
        </div>
      </section>

      <section className="mx-[80px] mt-[108px] w-full text-center text-[40px] font-[400] text-[#EDF1F3] xl:w-1/2">
        Kneeshaw Developments Team
      </section>

      <section className="mx-[80px] mt-[40px] flex flex-col text-center font-[400] text-[#EDF1F3] xl:flex-row">
        <div className="flex w-full flex-col xl:w-1/2">
          <p className="text-[20px]">
            Kneeshaw Game Development is home to a team of experienced and
            dedicated professionals who are passionate about creating innovative
            and engaging games for players around the world. Our development
            team is made up of skilled programmers, designers, artists, and
            writers who work together to bring our games to life. With their
            expertise in various areas of game development, our team is able to
            tackle complex challenges and create games that are both fun to play
            and visually stunning.
          </p>
        </div>
        <div className="mt-[20px] flex w-full flex-row justify-center gap-[100px] text-[#EDF1F3] xl:mt-[0] xl:w-1/2">
          <div className="flex h-[208px] flex-col gap-[10px]">
            <img
              src="/images/aboutus/avatar_01.png"
              className="h-[120px] object-scale-down"
            />
            <p className="text-[20px] font-[700]">Michael Kneeshaw</p>
            <p className="text-[20px] font-[400]">
              <i className="fa-solid fa-l fa-user-tie mr-[10px]" />
              Lead
            </p>
          </div>
          <div className="flex h-[208px] flex-col gap-[10px]">
            <img
              src="/images/aboutus/avatar_02.png"
              className="h-[120px] object-scale-down"
            />
            <p className="text-[20px] font-[700]">Aidan Abat</p>
            <p className="text-[20px] font-[400]">
              <i className="fa-solid fa-l fa-user-gear mr-[10px]" />
              Developer
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[80px] mt-[180px] flex flex-col justify-center gap-[20px] px-[30px] xl:flex-row">
        <div className="w-full xl:w-1/2">
          <div className="mt-[-30px] flex items-center">
            <div className="flex w-[100px] flex-row">
              <div className="h-[1px] w-1/3 border border-[#AFD275]" />
              <div className="h-[1px] w-1/3 border border-[#677746]" />
              <div className="h-[1px] w-1/3 border border-[#677746]" />
            </div>
          </div>
          <h1 className="mt-[21px] text-[40px] font-[700] text-[#EDF1F3]">
            Contact Us
          </h1>
          <p className="mt-[80px] text-left text-[30px] font-[400] text-[#EDF1F3]">
            Turning Your Ideas and
            <br /> Fantasies Into Playable Games
          </p>
        </div>
        <div className=" flex w-full flex-col gap-[20px] bg-[#292929] p-[35px] xl:w-1/2">
          <p className="text-[20px] font-[400] text-[#EDF1F3]">
            Let us know about your project
          </p>
          <input
            className="h-[52px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px] font-[300] text-[#C2B9B0]"
            placeholder="Full name*"
          />
          <input
            className="h-[52px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px] font-[300] text-[#C2B9B0]"
            placeholder="Email Address*"
          />
          <input
            className="h-[165px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px] font-[300] text-[#C2B9B0]"
            placeholder="Write your message"
          />
          <button
            type="submit"
            className="h-[52px] rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
          >
            Send Message
          </button>
        </div>
      </section>

      <section className="mx-[80px] my-[38px] text-[20px] font-[400]">
        Stalk us
      </section>

      <section className="mx-[80px] my-[32px] flex flex-row gap-[20px] text-[#EDF1F3]">
        <i className="fa-brands fa-xl fa-youtube" />
        <i className="fa-brands fa-xl fa-steam" />
        <i className="fa-brands fa-xl fa-reddit" />
        <i className="fa-solid fa-xl fa-bolt-lightning" />
        <i className="fa-brands fa-xl fa-discord" />
        <i className="fa-brands fa-xl fa-twitch" />
        <i className="fa-brands fa-xl fa-twitter" />
      </section>

      <Footer />
    </main>
  );
}
