import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ArticlePage = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />

      {/* Article Content */}
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] bg-clip-text text-transparent text-center mb-6">
          How to Style Streetwear
        </h1>
        <p className="text-lg text-gray-600 text-center mb-4">By Fashion Experts - March 9, 2025</p>

        <img
          src="/education/education1.png"
          alt="Streetwear Style"
          className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
        />

        <div className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Streetwear has become one of the most popular fashion trends in recent years,
            blending casual, comfortable clothing with high-fashion influences. If you want
            to achieve the perfect streetwear look, here are some essential tips.
          </p>

          <h2 className="text-2xl font-semibold mt-4">1. Start with a Statement Piece</h2>
          <p>
            Every good streetwear outfit needs a statement piece, whether it's a bold hoodie,
            graphic t-shirt, or a pair of eye-catching sneakers. Choose something that stands out
            and build your outfit around it.
          </p>

          <h2 className="text-2xl font-semibold mt-4">2. Mix High and Low Fashion</h2>
          <p>
            One of the defining features of streetwear is mixing high-end brands with casual,
            everyday pieces. Pair designer sneakers with affordable cargo pants, or wear a
            luxury hoodie with vintage jeans.
          </p>

          <h2 className="text-2xl font-semibold mt-4">3. Layering is Key</h2>
          <p>
            Layering different textures and colors adds depth to your outfit. Try wearing
            an oversized jacket over a fitted t-shirt, or layering a hoodie under a denim
            jacket for extra style points.
          </p>

          <h2 className="text-2xl font-semibold mt-4">4. Accessorize Wisely</h2>
          <p>
            The right accessories can elevate your look. Consider adding a beanie, sunglasses,
            or a crossbody bag to complete your outfit.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ArticlePage;
