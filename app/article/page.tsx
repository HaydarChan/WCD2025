// Library Import
import Link from "next/link";
// Components Import
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
// Icons Import
import { BookOpen } from 'lucide-react';
import Image from "next/image";

const educationArticles = [
  {
    title: "How to Style Streetwear",
    image: "/education/education1.png",
    description: "Learn how to mix and match streetwear pieces like a pro.",
    readTime: "5 min read",
    category: "Styling",
    categoryColor: "text-orange-400 border-orange-200 bg-orange-100",
  },
  {
    title: "Choosing Sustainable Fabrics",
    image: "/education/education2.png",
    description: "Understand different fabrics and how they impact the environment.",
    readTime: "7 min read",
    category: "Sustainability",
    categoryColor: "text-green-400 border-green-200 bg-green-100",
  },
  {
    title: "Fashion Trends 2024",
    image: "/education/education3.png",
    description: "Stay ahead with the latest fashion trends this year.",
    readTime: "6 min read",
    category: "Trends",
    categoryColor: "text-blue-400 border-blue-200 bg-blue-100",
  },
  {
    title: "DIY: Customizing Your Clothes",
    image: "/education/education4.png",
    description: "Get creative by personalizing your fashion pieces.",
    readTime: "8 min read",
    category: "DIY & Customization",
    categoryColor: "text-purple-400 border-purple-200 bg-purple-100",
  },
];

const EducationPage = () => {
  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />

      {/* Page Content */}
      <div className="px-10 md:px-20 lg:px-36 py-10 flex flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#b04e1d] to-[#7b3410] bg-clip-text text-transparent text-center font-garamond italic">
          Fashion Education
        </h1>
        <p className="text-lg text-neutral-600 text-center mb-10">
          Learn about the latest trends, sustainability, and styling tips.
        </p>

        {/* Grid Section */}
        <Link href={"/article/how-to-style-streetwear"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <Image src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col w-full justify-between items-start gap-y-2">
                <div className="flex items-center w-full justify-between">
                  <div className={cn(
                    "border-2 rounded-full px-2 py-1 flex items-center text-sm",
                    article.categoryColor
                  )}>
                    {article.category}
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <BookOpen className="text-slate-400 h-4 w-4" /> 
                    <p className="text-slate-400 text-sm">{article.readTime}</p>                
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">{article.title}</h3>
                  <p className="text-neutral-500">{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>

      <Footer />
    </main>
  );
};

export default EducationPage;
