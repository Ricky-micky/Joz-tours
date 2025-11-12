import React, { useState } from "react";

const Nakuru = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    contactMethod: "whatsapp",
    message: "",
  });

  const parkInfo = {
    id: 6,
    name: "Lake Nakuru National Park",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description:
      "Famous for its flamingo populations, rhino sanctuary, and diverse birdlife in the Great Rift Valley.",
    highlights: [
      "Millions of flamingos painting the lake pink",
      "Rhino sanctuary with both black and white rhinos",
      "Baboon cliff viewpoints",
      "Over 450 bird species recorded",
      "Rothschild giraffe conservation",
    ],
    bestTime: "Year-round, but June-March for bird watching",
    wildlife:
      "Flamingos, Pelicans, Rhinos, Rothschild Giraffes, Lions, Leopards, Baboons",
    size: "188 km² - Compact park with diverse ecosystems",
    specialFeature:
      "World's greatest bird spectacle with millions of flamingos",
  };

  const safariRoutes = [
    {
      id: 1,
      name: "Lake Nakuru → Lake Naivasha → Masai Mara",
      description:
        "Rift Valley lakes circuit combining bird watching with big game viewing in the Mara.",
      priceRange: { min: 280, max: 380 },
      duration: "4-6 days recommended",
      highlights: ["Flamingo Lakes", "Rhino Sanctuary", "Big Cats"],
    },
    {
      id: 2,
      name: "Lake Nakuru Birding Special",
      description:
        "Focused bird watching experience with expert guides and extended lake viewing.",
      priceRange: { min: 220, max: 320 },
      duration: "2-3 days recommended",
      highlights: ["Bird Watching", "Flamingo Spectacle", "Lake Views"],
    },
    {
      id: 3,
      name: "Nakuru → Bogoria → Baringo Lakes Tour",
      description:
        "Comprehensive Rift Valley lakes tour featuring flamingos, geysers, and diverse ecosystems.",
      priceRange: { min: 250, max: 350 },
      duration: "3-5 days recommended",
      highlights: ["Three Lakes", "Hot Springs", "Cultural Visits"],
    },
  ];

  const generateItinerary = (days, route) => {
    const itineraries = [];
    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        itineraries.push(
          `Day ${i}: Arrival at Lake Nakuru National Park, check-in and afternoon game drive to flamingo shores`
        );
      } else if (i === days) {
        itineraries.push(
          `Day ${i}: Morning visit to rhino sanctuary, breakfast, and departure from ${route
            .split("→")
            .pop()
            .trim()}`
        );
      } else {
        const parksInRoute = route.split("→").map((park) => park.trim());
        const currentParkIndex = Math.min(i - 2, parksInRoute.length - 1);
        if (parksInRoute[currentParkIndex].includes("Nakuru")) {
          itineraries.push(
            `Day ${i}: Full day at Lake Nakuru with bird watching, rhino tracking, and baboon cliff visit`
          );
        } else {
          itineraries.push(
            `Day ${i}: Full day exploration of ${parksInRoute[currentParkIndex]} with wildlife viewing`
          );
        }
      }
    }
    return itineraries;
  };

  const calculatePrice = (days, priceRange) => {
    const minTotal = days * priceRange.min;
    const maxTotal = days * priceRange.max;
    return { min: minTotal, max: maxTotal };
  };

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setShowItineraryModal(true);
  };

  const handleBookingConfirm = () => {
    setShowItineraryModal(false);
    setShowBookingModal(true);
  };

  const handleFormChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPrice = calculatePrice(selectedDays, selectedRoute.priceRange);
    const itinerary = generateItinerary(selectedDays, selectedRoute.name);

    const bookingDetails = `
LAKE NAKURU SAFARI BOOKING DETAILS:

Personal Information:
- Name: ${bookingForm.fullName}
- Email: ${bookingForm.email}
- Phone: ${bookingForm.phone}
- Number of Travelers: ${bookingForm.travelers}

Safari Details:
- Safari Route: ${selectedRoute.name}
- Duration: ${selectedDays} days
- Estimated Price: $${totalPrice.min} - $${totalPrice.max}
- Preferred Contact: ${bookingForm.contactMethod}

Itinerary:
${itinerary.map((day) => `  • ${day}`).join("\n")}

Additional Message: ${bookingForm.message}

Thank you for choosing Lake Nakuru Safari Experience!
    `.trim();

    if (bookingForm.contactMethod === "whatsapp") {
      const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(
        bookingDetails
      )}`;
      window.open(whatsappUrl, "_blank");
    } else {
      const subject = `Lake Nakuru Safari Booking - ${selectedRoute.name} - ${bookingForm.fullName}`;
      const body = bookingDetails;
      const mailtoUrl = `mailto:bookings@lakenakurusafari.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    setShowBookingModal(false);
    setBookingForm({
      fullName: "",
      email: "",
      phone: "",
      travelers: 1,
      contactMethod: "whatsapp",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={parkInfo.image}
          alt={parkInfo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 font-serif">
              {parkInfo.name}
            </h1>
            <p className="text-xl max-w-2xl">{parkInfo.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Park Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
              Discover Lake Nakuru
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Lake Nakuru National Park, located in the Great Rift Valley, is
              world-renowned for its spectacular birdlife, particularly the
              millions of flamingos that gather along its shores. The alkaline
              lake creates the perfect environment for algae, which attracts
              vast numbers of lesser and greater flamingos, creating a stunning
              pink ribbon around the lake.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Park Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {parkInfo.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Best Time to Visit
                  </h4>
                  <p className="text-gray-700">{parkInfo.bestTime}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Wildlife
                  </h4>
                  <p className="text-gray-700">{parkInfo.wildlife}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Park Size
                  </h4>
                  <p className="text-gray-700">{parkInfo.size}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Special Feature
                  </h4>
                  <p className="text-gray-700">{parkInfo.specialFeature}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Lake Nakuru?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Flamingo Spectacle
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Witness millions of flamingos creating a pink ribbon around
                    the lake.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Rhino Sanctuary
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Excellent rhino viewing with both black and white rhino
                    species.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Bird Paradise</h4>
                  <p className="text-gray-600 text-sm">
                    Over 450 bird species including pelicans and rare migrants.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Compact & Diverse
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Easy to explore with varied landscapes from lake to
                    woodland.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bird Species Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            Bird Watching Paradise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Major Bird Species
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Water Birds
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lesser Flamingo</li>
                    <li>• Greater Flamingo</li>
                    <li>• Pelicans</li>
                    <li>• African Fish Eagle</li>
                    <li>• Herons & Egrets</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Land Birds
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Verreaux's Eagle</li>
                    <li>• Hornbills</li>
                    <li>• Woodpeckers</li>
                    <li>• Sunbirds</li>
                    <li>• Kingfishers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Bird Watching Tips
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Early morning and late afternoon for best bird activity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Bring binoculars and bird identification guide
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Visit Makalia Falls for forest species
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Baboon Cliff for panoramic views and raptors
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  Lake shorelines for flamingo congregations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safari Routes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
            Lake Nakuru Safari Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-blue-200"
                onClick={() => handleRouteSelect(route)}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {route.name.split("→")[0].trim()}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mb-2"></div>
                    <p className="text-blue-100">Starting Point</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {route.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{route.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">
                      Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {route.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-600 font-bold text-lg">
                      ${route.priceRange.min} - ${route.priceRange.max} / day
                    </span>
                    <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">
                      {route.duration}
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Plan Your Lake Nakuru Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Choose Your Package
              </h3>
              <p className="text-gray-600 text-sm">
                Select from our curated Lake Nakuru safari routes and durations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Customize Itinerary
              </h3>
              <p className="text-gray-600 text-sm">
                Tailor your safari days and bird watching activities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Book & Confirm
              </h3>
              <p className="text-gray-600 text-sm">
                Secure your spot with our easy booking process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItineraryModal && selectedRoute && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedRoute.name}
                </h2>
                <button
                  onClick={() => setShowItineraryModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Days Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Duration (2-9 days):
                </label>
                <div className="flex flex-wrap gap-2">
                  {[2, 3, 4, 5, 6, 7, 8, 9].map((days) => (
                    <button
                      key={days}
                      onClick={() => setSelectedDays(days)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedDays === days
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Detailed Itinerary:
                </h3>
                <div className="space-y-3">
                  {generateItinerary(selectedDays, selectedRoute.name).map(
                    (day, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
                      >
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{day}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Price Estimate */}
              <div className="bg-blue-100 p-4 rounded-lg mb-6 border border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Estimated Total Price:
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    $
                    {calculatePrice(selectedDays, selectedRoute.priceRange).min}{" "}
                    - $
                    {calculatePrice(selectedDays, selectedRoute.priceRange).max}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ({selectedDays} days × ${selectedRoute.priceRange.min}-$
                  {selectedRoute.priceRange.max}/day per person)
                </p>
              </div>

              <button
                onClick={handleBookingConfirm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirm & Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Book Your Lake Nakuru Safari
                </h2>
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={bookingForm.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Number of Travelers *
                  </label>
                  <select
                    name="travelers"
                    value={bookingForm.travelers}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Traveler" : "Travelers"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={bookingForm.contactMethod === "whatsapp"}
                        onChange={handleFormChange}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="flex items-center">WhatsApp</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={bookingForm.contactMethod === "email"}
                        onChange={handleFormChange}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      Email
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleFormChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Any special requirements, bird watching preferences, or questions about your Lake Nakuru safari..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mt-6"
              >
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nakuru;
