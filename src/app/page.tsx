"use client";

import { useState } from "react";

// Simple inline SVG icons
const PlaneIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

const ClockIcon = ({ className = "h-8 w-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.7L16.2,16.2Z" />
  </svg>
);

const ShieldIcon = ({ className = "h-8 w-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
  </svg>
);

const CheckIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
  </svg>
);

const GlobeIcon = ({ className = "h-8 w-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M17.89,17.4C17.96,16.95 18,16.5 18,16V15L16,13H14V11H16L17,10V8H14L12.93,6.93C16.08,7.44 18.5,10.08 18.5,13.21C18.5,15.23 17.41,17.08 17.89,17.4Z" />
  </svg>
);

const PhoneIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
  </svg>
);

const MailIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
  </svg>
);

const MapPinIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
  </svg>
);

const ArrowRightIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
  </svg>
);

const MenuIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
);

const XIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const visaTypes = [
    {
      title: "Tourist Visa",
      duration: "30-60 days",
      price: "From $35",
      description: "Perfect for vacation and sightseeing",
      features: [
        "Single/Multiple entry",
        "30-60 day stay",
        "Fast processing",
        "Tourism activities",
      ],
    },
    {
      title: "Business Visa",
      duration: "90 days",
      price: "From $80",
      description: "For business meetings and conferences",
      features: [
        "Multiple entry",
        "90 day validity",
        "Business activities",
        "Meeting attendance",
      ],
    },
    {
      title: "Education Visa",
      duration: "1 year",
      price: "From $120",
      description: "Study at Thai universities and schools",
      features: [
        "1 year validity",
        "Student activities",
        "Part-time work allowed",
        "Extension possible",
      ],
    },
    {
      title: "Retirement Visa",
      duration: "1 year",
      price: "From $200",
      description: "Long-term stay for retirees over 50",
      features: [
        "1 year renewable",
        "Age 50+ required",
        "Bank deposit needed",
        "Healthcare access",
      ],
    },
  ];

  const features = [
    {
      icon: ClockIcon,
      title: "Fast Processing",
      description:
        "Get your visa in 3-5 business days with our expedited service",
    },
    {
      icon: ShieldIcon,
      title: "Secure & Reliable",
      description:
        "Your documents are handled with the highest security standards",
    },
    {
      icon: CheckIcon,
      title: "High Success Rate",
      description: "99.2% approval rate with our expert document review",
    },
    {
      icon: GlobeIcon,
      title: "Global Support",
      description: "24/7 customer support in multiple languages",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-thai-red">
                <PlaneIcon />
              </div>
              <span className="text-xl font-bold gradient-text ml-2">
                ThailandVisa.com
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-thai-red transition-colors"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-thai-red transition-colors"
                >
                  Process
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-thai-red transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-thai-red transition-colors"
                >
                  Contact
                </a>
                <button className="bg-thai-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-thai-red"
              >
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-thai-red"
              >
                Services
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-gray-700 hover:text-thai-red"
              >
                Process
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-thai-red"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-thai-red"
              >
                Contact
              </a>
              <button className="w-full text-left bg-thai-red text-white px-3 py-2 rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Gateway to
              <span className="gradient-text block">Thailand</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fast, reliable, and hassle-free Thailand visa processing. Get your
              visa approved in just 3-5 business days with our expert guidance
              and 99.2% success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-thai-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                Start Your Application
                <ArrowRightIcon className="ml-2" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                Check Requirements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Service
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by over 50,000 travelers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-thai-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-thai-red">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thailand Visa Types
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right visa for your travel purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaTypes.map((visa, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {visa.title}
                  </h3>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {visa.price}
                  </div>
                  <div className="text-sm text-gray-600">{visa.duration}</div>
                </div>

                <p className="text-gray-600 mb-6 text-center">
                  {visa.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {visa.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-thai-blue text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get your Thailand visa in just a few easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Visa Type",
                description:
                  "Select the visa that matches your travel purpose and duration",
              },
              {
                step: "2",
                title: "Upload Documents",
                description:
                  "Submit your passport, photos, and required documents securely",
              },
              {
                step: "3",
                title: "Expert Review",
                description:
                  "Our visa specialists review and verify all your documents",
              },
              {
                step: "4",
                title: "Receive Visa",
                description:
                  "Get your approved visa delivered within 3-5 business days",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-thai-red w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-thai-blue to-thai-red">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Thailand Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied travelers who trusted us with their visa
            applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-thai-red px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Visa Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-thai-red">
                  <PlaneIcon />
                </div>
                <span className="text-xl font-bold ml-2">ThailandVisa.com</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for Thailand visa services since 2020.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tourist Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Retirement Visa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Processing Time
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Application
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <PhoneIcon />
                  <span className="ml-2">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MailIcon />
                  <span className="ml-2">support@thailandvisa.com</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon />
                  <span className="ml-2">Bangkok, Thailand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ThailandVisa.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
