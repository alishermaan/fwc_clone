import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#153b68] text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full blur-md opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Florida Water Control offers complete water testing services to the residents of Florida. 
              From freshwater to well water and tap water, we analyze all kinds of samples to ensure that 
              water is clean, healthy, and contaminant free. Our specialists will guide you in improving 
              water quality and safety at your home or office.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              {[
                "Chlorine testing",
                "Lead testing",
                "Bacteria testing",
                "Pesticides testing",
                "pH testing",
                "Nitrite/Nitrate testing",
              ].map((service, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              {[
                "FAQs",
                "About Us",
                "Contact Us",
                "Services",
                "Terms and Conditions",
                "Privacy Policy",
              ].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Head Office</h3>
            <p className="text-blue-100 text-sm mb-4">
              Mon – Sat: <br /> 9:00 AM – 8:00 PM
            </p>

            <h4 className="text-lg font-bold mb-3">Contact Info</h4>
            <div className="text-blue-100 text-sm space-y-2">
              <p>
                <a href="tel:8509997905" className="hover:text-white transition">
                  (850) 999-7905
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@floridawatercontrol.org"
                  className="hover:text-white transition break-all"
                >
                  contact@floridawatercontrol.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} Florida Water Control. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
