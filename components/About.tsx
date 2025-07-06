"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f7f6f4] text-[#5e5e50]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#333]">
            About Dr. Serena Blake
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-lg text-[#444] mb-2 font-sans">
                Clinical Psychologist
              </p>
              <p className="leading-relaxed font-sans text-[#5e5e50]">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
                in Los Angeles, CA, with eight years of experience and over 500
                client sessions. She blends evidence-based approaches—like
                cognitive-behavioral therapy and mindfulness—with compassionate,
                personalized care to help you overcome anxiety, strengthen
                relationships, and heal from trauma.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-serif font-semibold text-primary mb-3">
                My Approach
              </h4>
              <p className="leading-relaxed font-sans text-[#5e5e50]">
                Whether you meet in my Maplewood Drive office or connect virtually
                via Zoom, I&apos;m committed to creating a safe, supportive space
                for you to thrive. My practice combines evidence-based techniques
                with genuine compassion to help you navigate life&apos;s challenges
                and discover your inner strength.
              </p>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Dr. Serena Blake"
              width={800}
              height={600}
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-[#5e5e50] font-sans">
            {[
              {
                title: "Location",
                value: (
                  <>
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </>
                ),
              },
              { title: "Phone", value: "(323) 555-0192" },
              { title: "Email", value: "serena@blakepsychology.com" },
              {
                title: "Office Hours",
                value: (
                  <>
                    In-person: Tue & Thu, 10 AM–6 PM
                    <br />
                    Virtual: Mon, Wed & Fri, 1 PM–5 PM
                  </>
                ),
              },
            ].map(({ title, value }) => (
              <div key={title}>
                <h5 className="text-base font-semibold text-primary mb-1 font-serif">
                  {title}
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;