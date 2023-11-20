import { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RoleSwitch from "@/components/home/RoleSwitch";
import SmallImageList from "@/components/home/SmallImageList";
import Container from "@/components/home/Container";
import FAQ from "@/components/home/FAQ";
import GameLibrary from "@/components/home/GameLibrary";
import HorizonScroll from "@/components/home/HorizonScroll";
import NewGames from "@/components/home/NewGames";
import HomeSearch from "@/components/home/HomeSearch";
import Introduction1 from "@/components/home/Introduction1";
import Introduction2 from "@/components/home/Introduction2";
import Title from "@/components/home/Title";
import TopBorder from "@/components/home/TopBorder";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`,
};

export default function Home() {
  return (
    <Container>
      <Header />

      <TopBorder />

      <div className="m-[15px] flex cursor-pointer flex-row-reverse font-light text-[#EDF1F3]">
        <HomeSearch />
      </div>

      <section className="mt-[54px] flex flex-col gap-[40px] text-center">
        <Title />
      </section>

      <section className="mt-[100px] flex justify-center rounded-[16px] px-[15px] py-[10px]">
        <RoleSwitch />
      </section>

      <section className="mt-[97px] flex flex-col gap-[74px] text-[20px] font-light text-white">
        <Introduction1 />
        <Introduction2 />
      </section>

      <section className="mt-[150px] flex flex-col items-center gap-[99px]">
        <GameLibrary />
      </section>

      <section className="mt-[40px]">
        <SmallImageList />
        <HorizonScroll />
      </section>

      <section className="mt-[200px]">
        <NewGames />
      </section>

      <section className="mb-[100px] mt-[150px] flex flex-col items-center text-[#EDF1F3]">
        <FAQ />
      </section>

      <Footer />
    </Container>
  );
}
