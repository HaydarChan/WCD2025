"use client";
import { useState } from "react";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chats = [
  {
    id: 1,
    name: "Sultan Palugada",
    preview: "Hey! Is this still available?",
    avatar: "/store.png",
  },
  {
    id: 2,
    name: "Fashionista ID",
    preview: "Thanks for the trade offer!",
    avatar: "/store.png",
  },
  {
    id: 3,
    name: "ReWear Official",
    preview: "Let’s proceed with shipping.",
    avatar: "/store.png",
  },
];

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <main className="bg-[#e9e9e7]">
      <Navbar />
      <div className="px-10 md:px-20 lg:px-36 py-10 ">
        <div className="h-screen flex flex-col lg:flex-row border-3">
          {/* Chat List */}
          <div
            className={`rounded-lg border-2 lg:rounded-l-lg lg:border-l-2 border-stone-200 lg:rounded-r-none w-full lg:w-1/3 border-r bg-stone-100 ${
              selectedChat !== null ? "hidden lg:block" : "block"
            }`}
          >
            <h1 className="p-4 font-bold text-lg border-b">Messages</h1>
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className="w-full flex items-center gap-4 p-4 border-b hover:bg-gray-100"
              >
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Chat Content */}
          <div
            className={`w-full lg:w-2/3 flex flex-col h-screen lg:h-auto lg:rounded-l-none rounded-lg border-2 lg:rounded-r-lg lg:border-r-2 ${
              selectedChat === null ? "hidden lg:flex" : "flex"
            } bg-gray-50`}
          >
            {/* Top bar */}
            <div className="flex items-center p-4 border-b shrink-0 bg-stone-100">
              {selectedChat !== null && (
                <button
                  onClick={() => setSelectedChat(null)}
                  className="lg:hidden mr-3 text-xl"
                >
                  <FiArrowLeft />
                </button>
              )}
              <h1 className="font-bold text-lg">Chat</h1>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-stone-100">
              <div className="flex items-start gap-2">
                <Image
                  src="/store.png"
                  alt="User"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="bg-stone-50 p-3 rounded-lg shadow text-sm">
                  Hi! I'm interested in your listing. Is it still available?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#f56b27] text-white p-3 rounded-lg shadow text-sm">
                  Yes! It’s still available. 😊
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/store.png"
                  alt="User"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="bg-stone-50 p-3 rounded-lg shadow text-sm">
                  Great! Can I offer a trade?
                </div>
              </div>
            </div>

            {/* Input field */}
            <div className="p-4 border-t shrink-0 bg-stone-100 rounded-br-lg">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none bg-stone-50"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ChatPage;
