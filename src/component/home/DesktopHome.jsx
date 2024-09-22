import React from "react";
import { MdArrowOutward } from "react-icons/md";

const DesktopHome = () => {
  return (
    <div className="relative bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-around items-center px-8 py-4 z-10 relative">
        <div className="text-3xl font-bold">Wefo</div>
        <div className=" bg-transparent border-2 border-[#848487] px-5 py-3 rounded-full ">
          <ul className="flex space-x-10">
            <li className="hover:underline">Menu item</li>
            <li className="hover:underline">Menu item</li>
            <li className="hover:underline">Menu item</li>
          </ul>
        </div>

        <span className="bg-[#4034EB] text-white px-6 py-2 rounded-full hover:bg-indigo-600 flex items-center space-x-2">
          <p>Start a project</p>
          <MdArrowOutward className="text-lg" />
        </span>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start px-8 py-24 relative z-10">
        <h1 className="text-6xl font-bold leading-tight">
          We create award
          <br />
          winning websites
        </h1>
        <p className="mt-6 text-lg max-w-md">
          Based in San Francisco, we’re a digital products design & development
          studio passionate about creating highly applicable digital
          experiences.
        </p>
        <span className="mt-8 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition flex items-center space-x-2">
          <p>Explore</p>
          <MdArrowOutward className="text-lg" />
        </span>
      </section>

      {/* Image Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://huemordev.b-cdn.net/wp-content/uploads/2022/10/2022.11.30.Pricing-Page-Designs-That-Translates-Into-Sales-6-Examples-100.jpg.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 filter blur-md"
        />
      </div>
    </div>
  );
};

export default DesktopHome;
