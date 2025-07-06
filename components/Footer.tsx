import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[hsla(43.64,31.43%,93.14%,1)] text-[hsla(60,1.56%,25.1%,1)] py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-semibold mb-4">
            Dr. Serena Blake, PsyD
          </h3>
          <p className="mb-6">
            Licensed Clinical Psychologist | Los Angeles, CA
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <p>(323) 555-0192</p>
            <p>serena@blakepsychology.com</p>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-sm">
            <p>
              &copy; {new Date().getFullYear()} GrowMyTherapy. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
