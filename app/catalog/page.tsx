import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <p className="pr-1 w-fit relative inline-block pb-2 md:pb-4 text-3xl lg:text-5xl">
          Your
          <span className="font-garamond italic font-bold text-4xl lg:text-6xl ml-2 md:ml-3 tracking-tight">
            catalog
          </span>
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default page;
