import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Safaris = () => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedLodge, setSelectedLodge] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showParkModal, setShowParkModal] = useState(false);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [autoOpenPark, setAutoOpenPark] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    contactMethod: "whatsapp",
    message: "",
    startDate: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Check for auto-open data from Home page
  useEffect(() => {
    if (location.state?.autoOpen) {
      setSelectedPark(location.state.park);
      setSelectedLodge(location.state.lodge);
      setShowParkModal(true);
      setAutoOpenPark(location.state.park.name);
    }

    // Also check localStorage for booking data
    const storedBooking = localStorage.getItem("currentBooking");
    if (storedBooking) {
      const bookingData = JSON.parse(storedBooking);
      setSelectedPark(bookingData.park);
      setSelectedLodge(bookingData.lodge);
      setShowParkModal(true);
      setAutoOpenPark(bookingData.park.name);
    }
  }, [location]);

  // Detailed parks data with all information
  const parks = [
    {
      id: 1,
      name: "Maasai Mara",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Witness the Great Wildebeest Migration and abundant wildlife.",
      route: "/masaimara",
      highlights: [
        "Great Migration",
        "Big Cats",
        "Maasai Culture",
        "River Crossings",
        "Hot Air Balloon Safaris",
      ],
      bestTime: "July to October for Migration, Year-round for wildlife",
      wildlife:
        "Lions, Cheetahs, Leopards, Elephants, Rhinos, Buffaloes, Wildebeest, Zebras",
      size: "1,510 km² - World's most famous wildlife reserve",
      specialFeature: "Annual Great Migration of over 1.5 million wildebeest",
      pricePerDay: 350,
      lodges: [
        {
          name: "Mara Serena Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Luxurious lodge overlooking the Mara River with premium game viewing opportunities.",
          priceRange: "$$$",
        },
        {
          name: "Basecamp Explorer",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Eco-friendly tented camp offering intimate wildlife encounters.",
          priceRange: "$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Maasai Mara → Lake Nakuru → Nairobi",
          description:
            "Classic safari combining the Mara's big cats with Lake Nakuru's flamingos and rhinos.",
          priceRange: { min: 350, max: 500 },
          duration: "5-7 days recommended",
          highlights: ["Great Migration", "Big Cats", "Flamingo Lake"],
        },
        {
          id: 2,
          name: "Maasai Mara Great Migration Special",
          description:
            "Focused experience during migration season with extended Mara stays for river crossings.",
          priceRange: { min: 400, max: 600 },
          duration: "4-6 days recommended",
          highlights: ["River Crossings", "Predator Action", "Migration Herds"],
        },
      ],
    },
    {
      id: 2,
      name: "Amboseli",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Famous for its large elephant herds and stunning views of Mount Kilimanjaro.",
      route: "/amboseli",
      highlights: [
        "Elephant Herds",
        "Mount Kilimanjaro",
        "Big Five",
        "Swamp Ecosystems",
        "Observation Hill",
      ],
      bestTime: "June to October & January to February",
      wildlife:
        "Elephants, Lions, Cheetahs, Buffaloes, Hippos, Giraffes, Zebras",
      size: "392 km² - Best views of Mount Kilimanjaro",
      specialFeature: "Large elephant herds with Kilimanjaro backdrop",
      pricePerDay: 300,
      lodges: [
        {
          name: "Ol Tukai Lodge",
          image:
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Award-winning lodge with the best views of Mount Kilimanjaro.",
          priceRange: "$$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Amboseli Elephant Safari",
          description:
            "Focused elephant watching with Kilimanjaro photography opportunities.",
          priceRange: { min: 300, max: 450 },
          duration: "3-5 days recommended",
          highlights: ["Elephant Herds", "Kilimanjaro Views", "Swamp Wildlife"],
        },
      ],
    },
    {
      id: 3,
      name: "Samburu",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Home to the rare 'Special Five' and unique northern species.",
      route: "/samburu",
      highlights: [
        "Special Five",
        "Ewaso Nyiro River",
        "Cultural Visits",
        "Unique Species",
        "Riverine Forest",
      ],
      bestTime: "June to October & December to March",
      wildlife:
        "Grevy's Zebra, Reticulated Giraffe, Somali Ostrich, Gerenuk, Beisa Oryx",
      size: "165 km² - Unique northern species sanctuary",
      specialFeature:
        "The 'Special Five' - unique species not found in southern parks",
      pricePerDay: 280,
      lodges: [
        {
          name: "Samburu Intrepids Club",
          image:
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description: "Luxurious tented camp along the Ewaso Nyiro River.",
          priceRange: "$$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Samburu Special Five Safari",
          description:
            "Search for the unique wildlife species of northern Kenya.",
          priceRange: { min: 280, max: 420 },
          duration: "3-4 days recommended",
          highlights: ["Special Five", "River Game Viewing", "Samburu Culture"],
        },
      ],
    },
    {
      id: 4,
      name: "Nakuru",
      image:
        "https://images.unsplash.com/photo-1549317336-206009e0c0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Famous for flamingos and one of Kenya's largest rhino sanctuaries.",
      route: "/nakurupark",
      highlights: [
        "Flamingos",
        "Rhino Sanctuary",
        "Bird Watching",
        "Lake Views",
        "Baboon Cliff",
      ],
      bestTime: "June to March for bird watching",
      wildlife: "Flamingos, Rhinos, Lions, Leopards, Waterbucks, Giraffes",
      size: "188 km² - World famous bird sanctuary",
      specialFeature:
        "Sometimes over a million flamingos coloring the lake pink",
      pricePerDay: 250,
      lodges: [
        {
          name: "Lake Nakuru Lodge",
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Modern lodge with stunning lake views and swimming pool.",
          priceRange: "$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Lake Nakuru Birding Special",
          description:
            "Perfect for bird enthusiasts and rhino conservation viewing.",
          priceRange: { min: 250, max: 380 },
          duration: "2-3 days recommended",
          highlights: ["Flamingo Colonies", "Rhino Tracking", "Bird Species"],
        },
      ],
    },
    {
      id: 5,
      name: "Tsavo East",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Known for the 'red elephants' and vast wilderness areas.",
      route: "/tsavoeast",
      highlights: [
        "Red Elephants",
        "Mudanda Rock",
        "Lugard Falls",
        "Yatta Plateau",
        "Arid Wilderness",
      ],
      bestTime: "All Year Round",
      wildlife:
        "Red Elephants, Lions, Buffaloes, Giraffes, Antelopes, Bird Species",
      size: "13,747 km² - Kenya's largest national park",
      specialFeature: "Famous 'red elephants' dusted in red volcanic soil",
      pricePerDay: 270,
      lodges: [
        {
          name: "Voi Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Historic lodge with waterhole views and comfortable accommodations.",
          priceRange: "$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Tsavo East Wilderness Experience",
          description:
            "Explore Kenya's largest park with its unique red elephants.",
          priceRange: { min: 270, max: 400 },
          duration: "3-4 days recommended",
          highlights: [
            "Red Elephants",
            "Mudanda Rock",
            "Wilderness Experience",
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Tsavo West",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Features Mzima Springs, volcanic landscapes, and diverse wildlife.",
      route: "/tsavowest",
      highlights: [
        "Mzima Springs",
        "Volcanic Cones",
        "Rhino Sanctuary",
        "Underwater Hippo Viewing",
        "Shetani Lava Flow",
      ],
      bestTime: "All Year Round",
      wildlife: "Hippos, Crocodiles, Rhinos, Elephants, Lions, Leopards",
      size: "9,065 km² - Diverse landscapes and ecosystems",
      specialFeature: "Mzima Springs with underwater hippo and fish viewing",
      pricePerDay: 260,
      lodges: [
        {
          name: "Kilaguni Serena Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "First lodge in Kenya's national park system with waterhole views.",
          priceRange: "$$$",
        },
      ],
      safariRoutes: [
        {
          id: 1,
          name: "Tsavo West Springs & Wildlife",
          description:
            "Discover Mzima Springs and the diverse wildlife of Tsavo West.",
          priceRange: { min: 260, max: 390 },
          duration: "3-4 days recommended",
          highlights: [
            "Mzima Springs",
            "Rhino Sanctuary",
            "Volcanic Landscapes",
          ],
        },
      ],
    },
  ];

  const generateItinerary = (park, days) => {
    const baseItineraries = {
      "Maasai Mara": [
        "Day 1: Arrival in Nairobi, transfer to Maasai Mara, evening game drive",
        "Day 2: Full day game drive in Maasai Mara, visit Maasai village",
        "Day 3: Morning game drive, return to Nairobi",
      ],
      Amboseli: [
        "Day 1: Arrival, transfer to Amboseli, evening game drive with Kilimanjaro views",
        "Day 2: Full day exploring Amboseli's elephant herds and swamps",
        "Day 3: Morning game drive, visit observation hill, return to Nairobi",
      ],
      Samburu: [
        "Day 1: Drive to Samburu, afternoon game drive along Ewaso Nyiro River",
        "Day 2: Full day searching for the Special Five",
        "Day 3: Morning game drive, cultural visit, return to Nairobi",
      ],
      Nakuru: [
        "Day 1: Drive to Lake Nakuru, afternoon bird watching and game drive",
        "Day 2: Full day exploring the park, visit the rhino sanctuary",
        "Day 3: Morning game drive, return to Nairobi",
      ],
      "Tsavo East": [
        "Day 1: Arrival at Tsavo East, afternoon game drive viewing red elephants",
        "Day 2: Full day exploring Mudanda Rock and Aruba Dam",
        "Day 3: Morning game drive, return to Nairobi",
      ],
      "Tsavo West": [
        "Day 1: Arrival at Tsavo West, visit Mzima Springs for hippo viewing",
        "Day 2: Full day exploring rhino sanctuary and volcanic landscapes",
        "Day 3: Morning game drive, return to Nairobi",
      ],
    };

    let itinerary = baseItineraries[park] || baseItineraries["Maasai Mara"];

    // Extend itinerary based on selected days
    if (days > 3) {
      for (let i = 4; i <= days; i++) {
        itinerary.push(
          `Day ${i}: Extended exploration and specialized activities`
        );
      }
    }

    return itinerary;
  };

  const calculatePrice = (park, days, travelers) => {
    const parkData = parks.find((p) => p.name === park);
    const basePrice = parkData ? parkData.pricePerDay : 300;
    return basePrice * days * travelers;
  };

  const handleParkSelect = (park) => {
    // If park has a dedicated route, navigate to it
    if (park.route) {
      navigate(park.route);
    } else {
      // Otherwise show modal with park details
      setSelectedPark(park);
      setSelectedLodge(null);
      setShowParkModal(true);
    }
  };

  const handleDaysSelect = (days) => {
    setSelectedDays(days);
    setShowItineraryModal(true);
  };

  const handleBooking = () => {
    setShowItineraryModal(false);
    setShowBookingModal(true);
  };

  const handleFormChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitBooking = () => {
    const totalPrice = calculatePrice(
      selectedPark.name,
      selectedDays,
      bookingForm.travelers
    );
    const itinerary = generateItinerary(selectedPark.name, selectedDays);

    const bookingDetails = {
      park: selectedPark.name,
      lodge: selectedLodge?.name || "Standard Accommodation",
      days: selectedDays,
      travelers: bookingForm.travelers,
      totalPrice: totalPrice,
      contactInfo: {
        name: bookingForm.fullName,
        email: bookingForm.email,
        phone: bookingForm.phone,
      },
      itinerary: itinerary,
      startDate: bookingForm.startDate,
      message: bookingForm.message,
    };

    // Store complete booking data
    localStorage.setItem("completeBooking", JSON.stringify(bookingDetails));

    if (bookingForm.contactMethod === "whatsapp") {
      const message = `Safari Booking Request:%0A%0A
Park: ${selectedPark.name}%0A
Lodge: ${selectedLodge?.name || "Standard Accommodation"}%0A
Duration: ${selectedDays} days%0A
Travelers: ${bookingForm.travelers}%0A
Start Date: ${bookingForm.startDate}%0A
Total Price: $${totalPrice}%0A%0A
Contact Information:%0A
Name: ${bookingForm.fullName}%0A
Email: ${bookingForm.email}%0A
Phone: ${bookingForm.phone}%0A%0A
Message: ${bookingForm.message}`;

      window.open(`https://wa.me/27743545012?text=${message}`, "_blank");
    } else {
      const subject = `Safari Booking - ${selectedPark.name} - ${selectedDays} days`;
      const body = `Dear Joztembo Tours,

I would like to book a safari with the following details:

Park: ${selectedPark.name}
Lodge: ${selectedLodge?.name || "Standard Accommodation"}
Duration: ${selectedDays} days
Number of Travelers: ${bookingForm.travelers}
Preferred Start Date: ${bookingForm.startDate}
Total Price: $${totalPrice}

My Contact Information:
Full Name: ${bookingForm.fullName}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}

Additional Message:
${bookingForm.message}

Please contact me to confirm this booking.

Best regards,
${bookingForm.fullName}`;

      window.open(
        `mailto:info@joztembotours.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`
      );
    }

    setShowBookingModal(false);
    setSelectedPark(null);
    setSelectedLodge(null);
    localStorage.removeItem("currentBooking");
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
          Safari Packages
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {autoOpenPark
            ? `Continue your ${autoOpenPark} booking experience. Select your preferred safari duration.`
            : "Explore our curated safari experiences across Kenya's most iconic national parks. Choose your destination and discover unforgettable wildlife adventures."}
        </p>

        {/* Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {parks.map((park) => (
            <div
              key={park.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border-2 ${
                autoOpenPark === park.name
                  ? "border-amber-500"
                  : "border-transparent"
              }`}
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
                  <p className="text-amber-200 text-sm mt-1">
                    From ${park.pricePerDay}/day
                  </p>
                </div>
                {park.route && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Detailed Page
                  </div>
                )}
                {autoOpenPark === park.name && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Selected
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{park.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {park.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 group-hover:bg-amber-700">
                  {park.route ? `Explore ${park.name}` : "View Safari Options"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Park Details Modal - For parks without dedicated pages */}
        {showParkModal && selectedPark && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedPark.image}
                  alt={selectedPark.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setShowParkModal(false)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
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
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-3xl font-bold">{selectedPark.name}</h2>
                  <p className="text-amber-200">{selectedPark.description}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Park Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    About {selectedPark.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Park Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPark.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Best Time to Visit
                      </h4>
                      <p className="text-amber-600">{selectedPark.bestTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Wildlife
                      </h4>
                      <p className="text-gray-700">{selectedPark.wildlife}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Special Feature
                      </h4>
                      <p className="text-gray-700">
                        {selectedPark.specialFeature}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Available Lodges */}
                {selectedPark.lodges && selectedPark.lodges.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Available Lodges
                    </h3>
                    <div className="space-y-4">
                      {selectedPark.lodges.map((lodge, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex flex-col md:flex-row gap-4">
                            <img
                              src={lodge.image}
                              alt={lodge.name}
                              className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-800 mb-2">
                                {lodge.name}
                              </h4>
                              <p className="text-gray-600 mb-3">
                                {lodge.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="text-amber-600 font-semibold">
                                  {lodge.priceRange}
                                </span>
                                <button
                                  onClick={() => {
                                    setSelectedLodge(lodge);
                                    setShowItineraryModal(true);
                                  }}
                                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                                >
                                  Select Lodge
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Safari Packages */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Choose Your Safari Duration
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[2, 3, 4, 5, 6, 7].map((days) => (
                      <button
                        key={days}
                        onClick={() => handleDaysSelect(days)}
                        className="bg-amber-100 hover:bg-amber-200 text-amber-800 py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-center"
                      >
                        {days} Days
                        <div className="text-sm font-normal mt-1">
                          ${selectedPark.pricePerDay * days}/person
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedLodge && (
                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-amber-800 mb-2">
                      Selected Lodge:
                    </h4>
                    <p className="text-amber-700">{selectedLodge.name}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Itinerary Modal */}
        {showItineraryModal && selectedPark && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedDays} Days {selectedPark.name} Safari Itinerary
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Daily Plan:
                  </h3>
                  <div className="space-y-3">
                    {generateItinerary(selectedPark.name, selectedDays).map(
                      (day, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                            {index + 1}
                          </div>
                          <p className="text-gray-700">{day}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    Price Summary:
                  </h4>
                  <p className="text-amber-700">
                    ${selectedPark.pricePerDay} × {selectedDays} days =
                    <span className="font-bold">
                      {" "}
                      ${selectedPark.pricePerDay * selectedDays} per person
                    </span>
                  </p>
                  {selectedLodge && (
                    <p className="text-amber-700 text-sm mt-1">
                      Including accommodation at {selectedLodge.name}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowItineraryModal(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBooking}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Proceed to Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Modal */}
        {showBookingModal && selectedPark && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Complete Your Booking
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={bookingForm.fullName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={bookingForm.travelers}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Person" : "People"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={bookingForm.startDate}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={bookingForm.contactMethod === "whatsapp"}
                          onChange={handleFormChange}
                          className="mr-2"
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
                          className="mr-2"
                        />
                        Email
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={bookingForm.message}
                      onChange={handleFormChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Any special requirements or questions..."
                    />
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">
                      Booking Summary:
                    </h4>
                    <p>
                      <strong>Park:</strong> {selectedPark.name}
                    </p>
                    <p>
                      <strong>Duration:</strong> {selectedDays} days
                    </p>
                    <p>
                      <strong>Lodge:</strong>{" "}
                      {selectedLodge?.name || "Standard Accommodation"}
                    </p>
                    <p>
                      <strong>Travelers:</strong> {bookingForm.travelers}
                    </p>
                    <p>
                      <strong>Total Price:</strong> $
                      {calculatePrice(
                        selectedPark.name,
                        selectedDays,
                        bookingForm.travelers
                      )}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={submitBooking}
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                    >
                      {bookingForm.contactMethod === "whatsapp"
                        ? "Send via WhatsApp"
                        : "Send via Email"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Safaris;
