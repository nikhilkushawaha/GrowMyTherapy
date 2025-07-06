import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import EmergencySupport from "./EmergencySupport";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Get Started Today</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your free consultation and begin your healing journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <EmergencySupport />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
