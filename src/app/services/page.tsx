import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Services`,
  description: `${SITE_TITLE} - Services`,
};

export default function Services() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />

      <section className="mx-[80px] mt-[146px] flex flex-col items-center text-[#EDF1F3]">
        <h1 className="text-[40px] font-[700]">Our Services</h1>
      </section>

      <section className="mx-[80px] mt-[56px] flex items-center justify-center">
        <div className="flex w-[100px] flex-row">
          <div className="h-[1px] w-1/3 border border-[#677746]" />
          <div className="h-[1px] w-1/3 border border-[#AFD275]" />
          <div className="h-[1px] w-1/3 border border-[#677746]" />
        </div>
      </section>
      <section className="mx-[80px] mt-[91px] flex justify-center text-center text-[#EDF1F3]">
        <h3 className="w-[966px] text-[20px] font-[400]">
          At Kneeshaw Development, we are passionate about delivering
          high-quality, innovative, and immersive gaming experiences.
        </h3>
      </section>

      <section className="mx-[80px] mt-[150px] flex flex-wrap justify-center gap-[40px] xl:gap-[90px]">
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_01.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Mobile Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Specialized in creating captivating and immersive games
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_02.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Unity 2D <br /> Games
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Tailoring mechanics, graphics, and animations to suit your vision
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_03.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Unity 3D <br /> Games
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Creating realistic environments, lifelike characters, and dynamic
              gameplay
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_04.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Unreal Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Transforming your ideas into a polished and thrilling game
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_06.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Godot Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Developing high-quality games that run smoothly across various
              platforms
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_07.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              HTML5 Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Interactive games that are compatible with desktops, laptops, and
              mobile devices
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_08.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Web3 Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Creating innovative and immersive gaming experiences
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_05.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Dapps Game <br /> Development
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              We leverage our expertise to build secure and user-friendly dApps
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_09.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Blockchain <br /> Integration
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Specialized in creating captivating and immersive games
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_10.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              Bug <br /> Fixing
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Tailoring mechanics, graphics, and animations to suit your vision
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_11.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              System <br /> Design
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Creating realistic environments, lifelike characters, and dynamic
              gameplay
            </p>
          </div>
        </div>
        <div className="flex h-[335px] w-[284px] flex-col">
          <img
            src="/images/services/service_image_12.svg"
            className="z-0 h-1/3 object-fill"
          />
          <div className="z-1 mt-[-50px] flex h-[275px] flex-col bg-[#292929] p-[25px] text-center">
            <p className="mt-[50px] text-[24px] font-[400] text-[#FFFFFF]">
              API <br /> Creation
            </p>
            <p className="mt-[15px] text-[18px] font-[400] text-[#959595]">
              Creating realistic environments, lifelike characters, and dynamic
              gameplay
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[80px] mt-[180px] flex flex-col justify-center gap-[20px] px-[30px] xl:flex-row">
        <div className="w-full xl:w-1/2">
          <div className="flex items-center">
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
            className="h-[52px] w-full rounded-[6px] border-[1px] bg-[#292929] p-[10px] font-[300] text-[#C2B9B0]"
            placeholder="Full name*"
          />
          <input
            className="h-[52px] w-full rounded-[6px] border-[1px] bg-[#292929] p-[10px] font-[300] text-[#C2B9B0]"
            placeholder="Email Address*"
          />
          <div className="relative">
            <textarea
              className="h-[165px] w-full resize-none rounded-[6px] border-[1px] bg-[#292929] p-[10px] font-[300] text-[#C2B9B0]"
              placeholder="Write your message"
            />
            <div className="absolute bottom-2 right-2 text-gray-400">
              0/1000
            </div>
          </div>
          <button
            type="submit"
            className="h-[52px] rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
          >
            Send Message
          </button>
        </div>
      </section>

      <section className="mx-[80px] mt-[38px] text-[20px] font-[400]">
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
