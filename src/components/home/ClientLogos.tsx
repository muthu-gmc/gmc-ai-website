import { motion } from "motion/react";
import fundsIndiaLogo from "figma:asset/49d40a44f7c9040d43715fc7930014d945400321.png";
import repcoLogo from "figma:asset/32634b43c1957e37d01ee2272c6a2feb3356eb74.png";
import adityaBirlaLogo from "figma:asset/d01b00bcdf008962624c510c19898cfcc80c8df4.png";
import tvsLogo from "figma:asset/a37f199eec9943d2a8a1dd1f68f24b456d6de876.png";
import digitLogo from "figma:asset/0ac3865758b75c1c49a727a82b8ef366d898acd4.png";
import almavivaLogo from "figma:asset/26d586c2c42cbdf0adc87eac72307ff09219d473.png";
import dlcenLogo from "figma:asset/0fef592b711cb74ec461e734ab974171d5a605b8.png";
import gieseckeLogo from "figma:asset/5344ba1ca9deb260e9b8995ce2f61b6020fa0483.png";
import amsLogo from "figma:asset/ed7ad6c8e3de5953420b710dcc135e28a5b11318.png";
import allanaLogo from "figma:asset/0afd84503f1d1f65fe53c1cccee80a1ddec3374d.png";
import repcoMicroFinanceLogo from "figma:asset/ca851c036af885d26aa6a3ba2df406a2ccc74e06.png";

export function ClientLogos() {
  const logos = [
    { src: fundsIndiaLogo, alt: "FundsIndia", id: "fundsindia" },
    { src: repcoLogo, alt: "Repco Home Finance", id: "repco" },
    { src: adityaBirlaLogo, alt: "Aditya Birla Capital", id: "aditya-birla" },
    { src: tvsLogo, alt: "TVS Supply Solutions", id: "tvs" },
    { src: digitLogo, alt: "Digit Insurance", id: "digit" },
    { src: almavivaLogo, alt: "AlmavivA", id: "almaviva" },
    { src: dlcenLogo, alt: "DLCEN", id: "dlcen" },
    { src: gieseckeLogo, alt: "Giesecke+Devrient", id: "giesecke" },
    { src: amsLogo, alt: "AMS Asset Marketing Services", id: "ams" },
    { src: allanaLogo, alt: "Allana", id: "allana" },
    { src: repcoMicroFinanceLogo, alt: "Repco Micro Finance", id: "repco-micro" },
  ];

  // Duplicate logos 3 times for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted by leading organizations
          </p>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Track - Right to Left */}
        <motion.div
          className="flex gap-4 items-center"
          animate={{
            x: [0, "-33.333%"],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 px-3 py-4 bg-white rounded-lg"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}