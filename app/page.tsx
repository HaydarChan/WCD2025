import Hero from "@/components/Hero";
import Support from "@/components/Support";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import TodayAuction from "@/components/TodayAuction";
import BrowseStyle from "@/components/BrowseStyle";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <Hero />
      <BrowseStyle />
      <TodayAuction />
      <NewArrivals />
      <Support />
      <Footer />
    </main>
  );
};

export default page;
