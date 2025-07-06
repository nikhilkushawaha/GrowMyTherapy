"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[hsla(43.64,31.43%,93.14%,1)] min-h-screen flex items-center justify-center overflow-hidden py-20 mt-5">
      {/* Centered Container */}
      <div className="relative w-full max-w-[90vw] xl:max-w-7xl mx-auto rounded-xl overflow-hidden">

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,107,161,0.6)] via-[rgba(0,13,26,0.5)] to-[rgba(0,0,0,0.7)] z-10 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 py-16 sm:py-20 lg:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Find Your Path to
            <span className="block text-accent-foreground">Healing & Growth</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 mb-8 mx-auto max-w-2xl leading-relaxed drop-shadow-md">
            Compassionate, evidence-based therapy to help you overcome anxiety,
            strengthen relationships, and heal from trauma
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              SCHEDULE A CONSULTATION
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/95">
            {[
              { label: "Client Sessions", value: "500+" },
              { label: "Years Experience", value: "8" },
              { label: "Clinical Psychologist", value: "Licensed" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/70 rounded-full flex justify-center items-start backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
