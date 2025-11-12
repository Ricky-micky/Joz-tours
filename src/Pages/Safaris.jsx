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
      route: "/tsavoeast", // Fixed: changed from "/tsavoeast" to "/tsavo-east"
    },
    {
      id: 3,
      name: "Tsavo West",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Features Mzima Springs, volcanic landscapes, and diverse wildlife.",
      route: "/tsavowest", // This should work if route is set up correctly
    },
    {
      id: 4,
      name: "Masai Mara",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Home to the Great Migration and abundant big cat populations.",
      route: "/masaimara",
    },
    {
      id: 5,
      name: "Nakuru National Park",
      image:
        "https://images.unsplash.com/photo-1549317336-206009e0c0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Unique wildlife park located just outside nakuru town",
      route: "/Nakurupark",
    },
  ];

  // ... rest of your existing code (safariRoutes, generateItinerary, calculatePrice, etc.)

  const handleParkSelect = (park) => {
    console.log(`Clicked on ${park.name}, navigating to: ${park.route}`); // Debug log
    // If park has a dedicated page, navigate to it
    if (park.route) {
      navigate(park.route);
    } else {
      // For parks without dedicated pages, show the modal
      setSelectedPark(park);
      setShowParkModal(true);
    }
  };

  // ... rest of your existing code remains the same

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
                  {park.route ? `Explore ${park.name}` : "View Safaris"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ... rest of your existing JSX remains the same */}
      </div>
    </div>
  );
};

export default Safaris;
