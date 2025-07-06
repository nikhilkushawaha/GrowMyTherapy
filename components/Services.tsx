'use client';

import { Button } from "@/components/ui/button";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn effective coping strategies to manage anxiety, panic attacks, and stress using CBT and mindfulness techniques.",
    image: "/Anxiety-&-Stress-Management.jpg",
    price: "$200 / session",
  },
  {
    title: "Relationship Counseling",
    description:
      "Improve communication and resolve conflicts to build stronger, healthier relationships in a safe environment.",
    image: "/family-therapy-psychologist-office.jpg",
    price: "$240 / couples session",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past experiences with trauma-informed care that empowers and supports you every step of the way.",
    image: "/trauma-recovery.jpg",
    price: "$200 / session",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-[hsla(43.64,31.43%,93.14%,1)] text-[hsla(60,1.56%,25.1%,1)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Services & Specialties
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Compassionate, evidence-based therapy tailored to your unique needs and goals
          </p>
        </div>

        <hr className="my-4 border-t-1 border-[hsla(60,1.56%,25.1%,1)] w-full" />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onLearnMore={scrollToContact}
            />
          ))}
        </div>

        <div className="bg-[hsl(180,15.05%,63.53%)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every healing journey begins with a single step. Book your free consultation 
            today and discover how therapy can help you create positive change in your life.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;