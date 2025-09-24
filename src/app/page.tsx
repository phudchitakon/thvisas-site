"use client";
import React, { useState } from "react";

// SVG Icons as components
const Globe = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="m9 12a9 9 0 0 1 3-9 9 9 0 0 1 3 9 9 9 0 0 1-3 9 9 9 0 0 1-3-9" />
  </svg>
);

const Smartphone = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <line x1="12" x2="12.01" y1="18" y2="18" />
  </svg>
);

const Clock = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const CheckCircle = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m9 12 2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const MapPin = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowRight = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CreditCard = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const Star = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const ThailandVisaLanding = () => {
  const [activeVisa, setActiveVisa] = useState("tourist");

  const visaTypes = [
    {
      id: "tourist",
      title: "Tourist Visa",
      duration: "60 days",
      price: "Free (Visa Exempt)",
      description:
        "Perfect for short-term visits, sightseeing, and leisure travel",
      features: [
        "Extendable to 90 days",
        "No work permitted",
        "Multiple entry options",
        "Valid passport required",
      ],
    },
    {
      id: "dtv",
      title: "DTV (Digital Nomad)",
      duration: "180 days",
      price: "$10,000 USD",
      description: "Ideal for remote workers, digital nomads, and freelancers",
      features: [
        "5-year validity",
        "Multiple entries",
        "Work remotely allowed",
        "Up to 180 days per visit",
      ],
    },
    {
      id: "business",
      title: "Business Visa (Non-B)",
      duration: "90 days",
      price: "2,000 THB",
      description:
        "For business activities, meetings, and employment opportunities",
      features: [
        "Work permit eligible",
        "Extendable to 1 year",
        "Multiple entry available",
        "Company sponsorship required",
      ],
    },
    {
      id: "retirement",
      title: "Retirement Visa (Non-O)",
      duration: "90 days",
      price: "2,000 THB",
      description: "For retirees aged 50+ seeking long-term residence",
      features: [
        "Age 50+ required",
        "800k THB bank deposit",
        "Annual renewal",
        "Re-entry permit available",
      ],
    },
    {
      id: "education",
      title: "Education Visa (Non-ED)",
      duration: "90 days",
      price: "2,000 THB",
      description: "For students, researchers, and educational purposes",
      features: [
        "School enrollment required",
        "Extendable annually",
        "Language courses eligible",
        "Work restrictions apply",
      ],
    },
    {
      id: "ltr",
      title: "Long-Term Resident (LTR)",
      duration: "5 years",
      price: "$80,000 income",
      description:
        "Premium visa for wealthy individuals and skilled professionals",
      features: [
        "10-year renewable",
        "Tax benefits",
        "Fast-track services",
        "Family members eligible",
      ],
    },
  ];

  const stats = [
    { number: "93", label: "Visa-exempt countries", icon: Globe },
    { number: "24/7", label: "Online application", icon: Smartphone },
    { number: "48hrs", label: "Processing time", icon: Clock },
    { number: "99%", label: "Approval rate", icon: CheckCircle },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      country: "United States",
      text: "The application process was incredibly smooth. Got my DTV visa approved in just 3 days!",
      rating: 5,
      visa: "DTV Visa",
    },
    {
      name: "James Wong",
      country: "Australia",
      text: "Excellent guidance throughout the business visa process. Highly recommended!",
      rating: 5,
      visa: "Business Visa",
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      text: "Retirement visa application was hassle-free. Now enjoying my life in Thailand!",
      rating: 5,
      visa: "Retirement Visa",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TH</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ThaiVisa Pro
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#visas"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Visa Types
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Process
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Reviews
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Apply Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Thailand Awaits
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Streamlined visa applications for tourists, digital nomads,
                business professionals, and long-term residents. Experience
                Thailand with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Your Application
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                  Check Requirements
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image - Abstract representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="relative z-10">
                  <div className="bg-white rounded-2xl p-6 shadow-xl mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold">Visa Approved!</span>
                      </div>
                      <span className="text-sm text-gray-500">2 min ago</span>
                    </div>
                    <p className="text-gray-600">
                      Your DTV visa has been approved and is ready for download.
                    </p>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold">Thailand</div>
                        <div className="text-sm text-gray-500">
                          Land of Smiles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section id="visas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Visa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick tourist visits to long-term residence, we have the
              right visa solution for your Thai adventure.
            </p>
          </div>

          {/* Visa Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {visaTypes.map((visa) => (
              <button
                key={visa.id}
                onClick={() => setActiveVisa(visa.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeVisa === visa.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {visa.title}
              </button>
            ))}
          </div>

          {/* Active Visa Details */}
          {visaTypes.map(
            (visa) =>
              activeVisa === visa.id && (
                <div
                  key={visa.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {visa.duration}
                        </div>
                        <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {visa.price}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {visa.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {visa.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {visa.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                        <span>Apply for {visa.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">
                            Application Status
                          </h4>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Active
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              Processing Time
                            </span>
                            <span className="font-semibold">24-48 hours</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Success Rate</span>
                            <span className="font-semibold text-green-600">
                              99.2%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              Documents Required
                            </span>
                            <span className="font-semibold">3-5 items</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get your Thailand visa in just a few easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose & Apply",
                description:
                  "Select your visa type and complete the online application with required documents.",
                icon: Smartphone,
              },
              {
                step: "02",
                title: "Review & Payment",
                description:
                  "Our experts review your application and you make secure payment online.",
                icon: CreditCard,
              },
              {
                step: "03",
                title: "Receive Visa",
                description:
                  "Get your approved visa delivered digitally within 24-48 hours.",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their visa experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.country}
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {testimonial.visa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Thai Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands who have successfully obtained their Thailand visa
            with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Application Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Speak with Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TH</span>
                </div>
                <span className="text-xl font-bold">ThaiVisa Pro</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for Thailand visa applications. Fast,
                reliable, and professional service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Visa Types</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tourist Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DTV Visa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Business Visa
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
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Application
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visa Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Travel Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Embassy Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    News & Updates
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 ThaiVisa Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThailandVisaLanding;
