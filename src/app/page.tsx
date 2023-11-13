import { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Footer />
    </main>
  );
}
