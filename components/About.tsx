"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#f7f6f4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[hsla(60,1.56%,25.1%,1)] mb-6">
            About Dr. Serena Blake
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-lg mb-4">
                Clinical Psychologist
              </p>
              <p className="leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care to help you
                overcome anxiety, strengthen relationships, and heal from
                trauma.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-serif font-semibold text-primary mb-4">
                My Approach
              </h4>
              <p className="leading-relaxed">
                Whether you meet in my Maplewood Drive office or connect
                virtually via Zoom, I&apos;m committed to creating a safe, supportive
                space for you to thrive. My practice combines evidence-based
                techniques with genuine compassion to help you navigate life&apos;s
                challenges and discover your inner strength.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "Experience",
                  value: "8 Years",
                  sub: "Clinical Practice",
                },
                { label: "Sessions", value: "500+", sub: "Client Sessions" },
              ].map(({ label, value, sub }) => (
                <Card key={label} className="bg-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-primary mb-2">{label}</h4>
                    <p className="text-2xl font-bold text-accent">{value}</p>
                    <p className="text-sm">{sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Image Section */}
            <div className="relative h-auto w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Dr. Serena Blake"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
                <h5 className="font-semibold text-primary mb-2">{title}</h5>
                <p className="text-sm text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
