import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

import GameDetail from "@/components/blog/GameDetail";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function PageGet({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />
      <section>{params.slug === "detail" && <GameDetail />}</section>
      <Footer />
    </main>
  );
}
