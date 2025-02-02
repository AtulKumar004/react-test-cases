import React from "react";
import HeroBG from "../../assest/HeroBG.svg";
import heroImage from "../../assest/HeroImg.webp";
import bulkBookstoreLogo from "../../assest/Logo8.svg";
import fujitsuLogo from "../../assest/Logo7.svg";
import rescueEssentialsLogo from "../../assest/Logo6.svg";
import firstPlaceSupplyLogo from "../../assest/Logo5.svg";
import grandEntryLogo from "../../assest/Logo4.svg";
import albLogo from "../../assest/Logo3.svg";
// import bcPartnerLogo from "../../assest/Logo4.svg";

// const albLogo = "";
const bcPartnerLogo = "";
// const grandEntryLogo = "";

export default function HeroSection() {
  return (
    <div className="w-full ">
      {/* Main Hero Banner */}
      <section
        className="relative bg-gradient-to-r from-purple-800 to-purple-600 text-white overflow-hidden pb-10"
        style={{
          backgroundImage: `url(${HeroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Revolutionize Your Quote Process.
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Save Time. Find Bigger Deals.
            </p>
            <div
              className="inline-flex items-center bg-black hover:bg-gray-800 px-6 py-3 rounded text-white font-medium cursor-pointer"
              data-testid="view_demo_btn"
      
            >
              VIEW DEMO
              <span className="ml-2">{">>"}</span>
            </div>
          </div>

          {/* Right Image (Illustration) */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Logo Strip (BulkBookstore, Fujitsu, etc.) */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
          <img
            src={bulkBookstoreLogo}
            alt="Bulk Bookstore"
            className="h-8 object-contain"
          />
          <img src={fujitsuLogo} alt="Fujitsu" className="h-8 object-contain" />
          <img
            src={rescueEssentialsLogo}
            alt="Rescue Essentials"
            className="h-8 object-contain"
          />
          <img
            src={firstPlaceSupplyLogo}
            alt="First Place Supply"
            className="h-8 object-contain"
          />
          <img
            src={grandEntryLogo}
            alt="Grand Entry Doors"
            className="h-8 object-contain"
          />
          <img src={albLogo} alt="ALB" className="h-8 object-contain" />
        </div>
      </div>

      {/* BigCommerce Preferred Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
          {/* BC Partner Logo */}
          <div className="mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
            <img
              src={bcPartnerLogo}
              alt="BigCommerce Preferred Partner"
              className="h-16 object-contain"
            />
          </div>
          {/* Text Blurb */}
          <div>
            <h2 className="text-xl font-bold mb-2">
              BigCommerce Prefers B2B Ninja
            </h2>
            <p className="text-sm text-gray-700 max-w-xl">
              B2B Ninja is proud to be a BigCommerce Preferred App—a distinction
              given to standout applications which give merchants exceptional,
              tested, and invaluable advantages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
