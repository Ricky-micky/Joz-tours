import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Safaris = () => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showParkModal, setShowParkModal] = useState(false);
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

  const navigate = useNavigate();

  const parks = [
    {
      id: 1,
      name: "Amboseli",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Famous for its large elephant herds and stunning views of Mount Kilimanjaro.",
      route: "/amboseli",
    },
    {
      id: 2,
      name: "Tsavo East",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: 'Known for the "red elephants" and vast wilderness areas.',
      route: "/tsavoeast",
    },
    {
      id: 3,
      name: "Tsavo West",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Features Mzima Springs, volcanic landscapes, and diverse wildlife.",
      route: "/tsavo-west",
    },
    {
      id: 4,
      name: "Masai Mara",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Home to the Great Migration and abundant big cat populations.",
      route: "/masai-mara",
    },
    {
      id: 5,
      name: "Nairobi National Park",
      image:
        "https://images.unsplash.com/photo-1549317336-206009e0c0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Unique wildlife park located just outside Nairobi city.",
      route: "/nairobi-national-park",
    },
  ];

  const safariRoutes = {
    Amboseli: [
      {
        id: 1,
        name: "Amboseli → Tsavo East → Tsavo West",
        description:
          "Experience the best of southern Kenya parks with diverse landscapes.",
        priceRange: { min: 250, max: 350 },
      },
      {
        id: 2,
        name: "Amboseli → Nairobi National Park",
        description:
          "Short safari combining Amboseli elephants with Nairobi convenience.",
        priceRange: { min: 200, max: 300 },
      },
    ],
    "Tsavo East": [
      {
        id: 1,
        name: "Tsavo East → Tsavo West → Amboseli",
        description:
          "Comprehensive southern circuit exploring three major parks.",
        priceRange: { min: 270, max: 370 },
      },
    ],
    "Tsavo West": [
      {
        id: 1,
        name: "Tsavo West → Amboseli → Nairobi",
        description: "Scenic route from volcanic landscapes to mountain views.",
        priceRange: { min: 260, max: 360 },
      },
    ],
    "Masai Mara": [
      {
        id: 1,
        name: "Masai Mara → Nairobi National Park",
        description: "From the great migration to urban wildlife experience.",
        priceRange: { min: 300, max: 400 },
      },
    ],
    "Nairobi National Park": [
      {
        id: 1,
        name: "Nairobi → Amboseli → Tsavo West",
        description:
          "Perfect combination of convenience and wilderness adventure.",
        priceRange: { min: 220, max: 320 },
      },
    ],
  };

  const generateItinerary = (days, route) => {
    const itineraries = [];
    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        itineraries.push(
          `Day ${i}: Arrival at ${route
            .split("→")[0]
            .trim()}, afternoon game drive`
        );
      } else if (i === days) {
        itineraries.push(
          `Day ${i}: Morning game drive, departure from ${route
            .split("→")
            .pop()
            .trim()}`
        );
      } else {
        const parksInRoute = route.split("→").map((park) => park.trim());
        const currentParkIndex = Math.min(i - 2, parksInRoute.length - 1);
        itineraries.push(
          `Day ${i}: Full day game drive in ${parksInRoute[currentParkIndex]}`
        );
      }
    }
    return itineraries;
  };

  const calculatePrice = (days, priceRange) => {
    const minTotal = days * priceRange.min;
    const maxTotal = days * priceRange.max;
    return { min: minTotal, max: maxTotal };
  };

  const handleParkSelect = (park) => {
    // If park has a dedicated page, navigate to it
    if (park.route) {
      navigate(park.route);
    } else {
      // For parks without dedicated pages, show the modal
      setSelectedPark(park);
      setShowParkModal(true);
    }
  };

  const getButtonText = (parkName) => {
    const dedicatedPages = [
      "Amboseli",
      "Tsavo East",
      "Tsavo West",
      "Masai Mara",
      "Nairobi National Park",
    ];
    return dedicatedPages.includes(parkName)
      ? `Explore ${parkName}`
      : "View Safaris";
  };

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setShowParkModal(false);
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
Booking Details:
- Name: ${bookingForm.fullName}
- Email: ${bookingForm.email}
- Phone: ${bookingForm.phone}
- Travelers: ${bookingForm.travelers}
- Safari: ${selectedRoute.name}
- Duration: ${selectedDays} days
- Estimated Price: $${totalPrice.min} - $${totalPrice.max}
- Itinerary: ${itinerary.join(", ")}
- Additional Message: ${bookingForm.message}
    `.trim();

    if (bookingForm.contactMethod === "whatsapp") {
      const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(
        bookingDetails
      )}`;
      window.open(whatsappUrl, "_blank");
    } else {
      const subject = `Safari Booking Request - ${selectedRoute.name}`;
      const body = bookingDetails;
      const mailtoUrl = `mailto:info@safaritours.com?subject=${encodeURIComponent(
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
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
          Safari Packages
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our curated safari experiences across Kenya's most iconic
          national parks. Choose your starting point and discover unforgettable
          wildlife adventures.
        </p>

        {/* Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {parks.map((park) => (
            <div
              key={park.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              onClick={() => handleParkSelect(park)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={park.image}
                  alt={park.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{park.name}</h3>
                </div>
                {park.route && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Dedicated Page
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{park.description}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 group-hover:bg-amber-700">
                  {getButtonText(park.name)}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Text for Dedicated Pages */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            💡 Parks with dedicated pages offer more detailed information,
            customized packages, and enhanced booking experiences.
          </p>
        </div>

        {/* Park Routes Modal */}
        {showParkModal && selectedPark && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Safari Routes from {selectedPark.name}
                  </h2>
                  <button
                    onClick={() => setShowParkModal(false)}
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
                  {safariRoutes[selectedPark.name]?.map((route) => (
                    <div
                      key={route.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleRouteSelect(route)}
                    >
                      <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-700">
                        {route.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {route.description}
                      </p>
                      <p className="text-amber-600 font-semibold">
                        ${route.priceRange.min} - ${route.priceRange.max} / day
                      </p>
                    </div>
                  ))}
                </div>

                {!safariRoutes[selectedPark.name] && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No safari routes available for {selectedPark.name}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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
                            ? "bg-amber-600 text-white border-amber-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-amber-400"
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
                    Itinerary:
                  </h3>
                  <div className="space-y-2">
                    {generateItinerary(selectedDays, selectedRoute.name).map(
                      (day, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{day}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Price Estimate */}
                <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">
                      Estimated Price:
                    </span>
                    <span className="text-2xl font-bold text-amber-600">
                      $
                      {
                        calculatePrice(selectedDays, selectedRoute.priceRange)
                          .min
                      }{" "}
                      - $
                      {
                        calculatePrice(selectedDays, selectedRoute.priceRange)
                          .max
                      }
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    ({selectedDays} days × ${selectedRoute.priceRange.min}-$
                    {selectedRoute.priceRange.max}/day per person)
                  </p>
                </div>

                <button
                  onClick={handleBookingConfirm}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Confirm Booking
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
                    Booking Request
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                          className="mr-2 text-amber-600 focus:ring-amber-500"
                        />
                        WhatsApp
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={bookingForm.contactMethod === "email"}
                          onChange={handleFormChange}
                          className="mr-2 text-amber-600 focus:ring-amber-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Any special requirements or questions..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 mt-6 transform hover:scale-105"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Safaris;
