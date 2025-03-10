"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SidebarMenu = [
  "Edit Profile",
  "Notifications",
  "Choose Plan",
  "Password & Security",
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10">
        <div className="flex flex-col lg:flex-row bg-stone-50 rounded-xl h-full p-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex lg:flex-col gap-2 border-b lg:border-b-0 lg:border-r pb-4 lg:pb-0 lg:pr-4">
            {SidebarMenu.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-center lg:text-left py-2 px-4 rounded-full text-xs lg:text-sm ${
                  activeTab === item
                    ? "bg-[#f56b27] text-white font-medium"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </aside>

          {/* Content */}
          <section className="w-full lg:w-3/4 p-6 rounded-lg lg:border-l-[1px] lg:border-stone-200 mt-4 lg:mt-0">
            <h1 className="text-xl font-bold mb-6">Edit Profile</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm">National Code</label>
                  <input
                    type="text"
                    placeholder="Enter National Code"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm">Surname</label>
                  <input
                    type="text"
                    placeholder="Enter Surname"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm"
                  />
                </div>
                <div className="lg:pt-1">
                  <label className="text-sm">Phone Number</label>
                  <div className="flex">
                    <select className="p-2 border rounded-l-full text-sm font-light">
                      <option>+62</option>
                      <option>+98</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-2 border rounded-r-full font-light text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm">Country</label>
                  <select className="w-full mt-1 p-2 border rounded-full px-5 font-light text-sm">
                    <option>Indonesia</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm">City</label>
                  <select className="w-full mt-1 p-2 border  rounded-full px-5 font-light text-sm">
                    <option>Jakarta</option>
                    <option>Bandung</option>
                  </select>
                </div>
              </div>
            </form>

            <div className="mt-6">
              <button className="px-6 py-2 bg-[#f56b27] text-white rounded-full">
                Save
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProfilePage;
