import React, { useState } from "react";

const Maasaimara = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    message: "",
    startDate: "",
  });

  const parkInfo = {
    id: 4,
    name: "Maasai Mara National Reserve",
    image: "/assets/parks/maasai-mara.jpg",
    fallbackImage: "/assets/maasaimara-page.jpg",
    description:
      "Home to the Great Migration and abundant big cat populations, offering Africa's most spectacular wildlife spectacle.",
    highlights: [
      "The Great Wildebeest Migration",
      "Big Five sightings",
      "Maasai cultural experiences",
      "Hot air balloon safaris",
      "River crossings at Mara River",
    ],
    bestTime: "July to October for Migration, Year-round for wildlife",
    wildlife:
      "Lions, Cheetahs, Leopards, Elephants, Rhinos, Buffaloes, Wildebeest, Zebras",
    size: "1,510 km² - World's most famous wildlife reserve",
    specialFeature: "Annual Great Migration of over 1.5 million wildebeest",
  };

  // Maasai Mara Gallery Images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/wildbeast-maraa.jpg",
      fallback: "/assets/wildbeast-maraa2.jpg",
      title: "Great Wildebeest Migration",
      description: "Over 1.5 million wildebeest crossing the Mara River",
      category: "wildlife",
    },
    {
      id: 2,
      src: "/assets/lionpride-mara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Lion Pride",
      description: "Maasai Mara has one of Africa's highest lion densities",
      category: "wildlife",
    },
    {
      id: 3,
      src: "/assets/hot-air-ballooning-maara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Hot Air Balloon Safari",
      description: "Spectacular sunrise views over the savannah",
      category: "activities",
    },
    {
      id: 4,
      src: "/assets/maasai-tribe-mara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Maasai Village Visit",
      description: "Experience traditional Maasai culture and traditions",
      category: "culture",
    },
    {
      id: 5,
      src: "/assets/cheetah-gallary-maara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Cheetah Hunting",
      description: "Witness the world's fastest land animal in action",
      category: "wildlife",
    },
    {
      id: 6,
      src: "/assets/maara-river.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Mara River",
      description: "Famous for dramatic wildebeest river crossings",
      category: "landscape",
    },
    {
      id: 7,
      src: "/assets/leopard-mara-accasia.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Leopard in Acacia Tree",
      description: "Spot leopards resting in tree branches",
      category: "wildlife",
    },
    {
      id: 8,
      src: "/assets/sunset-maara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "African Sunset",
      description: "Breathtaking sunsets over the Mara plains",
      category: "landscape",
    },
    {
      id: 9,
      src: "/assets/elephants-maara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Elephant Herd",
      description: "Large herds of African elephants roaming freely",
      category: "wildlife",
    },
    {
      id: 10,
      src: "/assets/Nile-crocodile.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Nile Crocodiles",
      description: "Giant crocodiles waiting at river crossings",
      category: "wildlife",
    },
    {
      id: 11,
      src: "/assets/rhino-maara.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Black Rhino",
      description: "Rare sightings of endangered black rhinos",
      category: "wildlife",
    },
    {
      id: 12,
      src: "/assets/maasai-worio.jpg",
      fallback: "/assets/mara-gallery/default-gallery.jpg",
      title: "Maasai Warriors Dance",
      description: "Traditional jumping dance (Adumu) performances",
      category: "culture",
    },
  ];

  // Maasai Mara Attractions
  const attractions = [
    {
      id: 1,
      name: "Mara River Crossings",
      image: "/assets/wildebeest-migration-maara.jpg",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description: "Witness the most dramatic event of the Great Migration",
      bestTime: "July to October",
      highlight: "Nature's greatest spectacle",
    },
    {
      id: 2,
      name: "Maasai Cultural Village",
      image: "/assets/tribe-maara2.png",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description:
        "Visit authentic Maasai manyattas and learn about traditions",
      bestTime: "Year-round",
      highlight: "Cultural immersion",
    },
    {
      id: 3,
      name: "Hot Air Balloon Safari",
      image: "/assets/Hor-baloon.png",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description: "Sunrise balloon ride with champagne breakfast",
      bestTime: "Year-round (weather permitting)",
      highlight: "Aerial views of wildlife",
    },
    {
      id: 4,
      name: "Oloololo Escarpment",
      image: "/assets/Oloololo Escarpment.png",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description: "Spectacular views over the entire Maasai Mara",
      bestTime: "Year-round",
      highlight: "Panoramic vistas",
    },
    {
      id: 5,
      name: "Mara Triangle",
      image: "/assets/Mara Triangle .png",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description: "Less crowded area with excellent wildlife viewing",
      bestTime: "July to October",
      highlight: "Premium game viewing",
    },
    {
      id: 6,
      name: "Sand River",
      image: "/assets/sand river.png",
      fallback: "/assets/mara-attractions/default-attraction.jpg",
      description: "Great spot for predator sightings and bird watching",
      bestTime: "Year-round",
      highlight: "Lion and leopard territory",
    },
  ];

  const safariRoutes = [
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
    {
      id: 3,
      name: "Maasai Mara Luxury Safari",
      description:
        "Premium experience with luxury accommodations, hot air balloon rides, and private guides.",
      priceRange: { min: 500, max: 800 },
      duration: "4-7 days recommended",
      highlights: ["Balloon Safari", "Luxury Lodges", "Private Guides"],
    },
  ];

  const generateItinerary = (days, route) => {
    const itineraries = [];
    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        itineraries.push(
          `Day ${i}: Arrival at Maasai Mara, check-in and afternoon game drive in search of big cats`
        );
      } else if (i === days) {
        itineraries.push(
          `Day ${i}: Final morning game drive, breakfast, and departure from ${route
            .split("→")
            .pop()
            .trim()}`
        );
      } else {
        const parksInRoute = route.split("→").map((park) => park.trim());
        const currentParkIndex = Math.min(i - 2, parksInRoute.length - 1);
        if (parksInRoute[currentParkIndex] === "Maasai Mara") {
          itineraries.push(
            `Day ${i}: Full day in Maasai Mara with picnic lunch, searching for the Great Migration`
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
    const avgPrice = (priceRange.min + priceRange.max) / 2;
    return Math.round(avgPrice * days);
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

  // Function to handle image errors
  const handleImageError = (e, fallbackImage) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = fallbackImage;
  };

  // Function to open gallery modal
  const openGalleryModal = (index) => {
    setActiveGalleryImage(index);
    setShowGalleryModal(true);
  };

  // Function to navigate gallery
  const nextGalleryImage = () => {
    setActiveGalleryImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = () => {
    setActiveGalleryImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Function to send booking to backend
  const sendBookingToBackend = async (bookingData) => {
    try {
      console.log("📤 Sending Maasai Mara booking to backend...", bookingData);

      const response = await fetch("http://localhost:5000/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.status === 400) {
        console.error("Backend validation error:", result);
        return { success: false, error: result.error };
      }

      if (result.success) {
        alert(
          "✅ Booking request sent successfully! Check your email for confirmation."
        );
        return { success: true, data: result };
      } else {
        console.error("Backend error:", result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error("Error sending to backend:", error);
      return { success: false, error: error.message };
    }
  };

  // Function to send direct email (fallback)
  const sendDirectEmail = (bookingData) => {
    const emailBody = `
MAASAI MARA SAFARI BOOKING DETAILS:

📍 PARK: ${bookingData.park}
🚗 ROUTE/ITINERARY: ${bookingData.route}
📅 DURATION: ${bookingData.days} days
👥 TRAVELERS: ${bookingData.travelers}
💰 ESTIMATED TOTAL PRICE: $${bookingData.totalPrice}
📝 ITINERARY TYPE: ${bookingData.route}

📋 ITINERARY:
${bookingData.itinerary.map((day, index) => `${index + 1}. ${day}`).join("\n")}

👤 PERSONAL INFORMATION:
- Full Name: ${bookingData.fullName}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}
- Start Date: ${bookingData.startDate || "Flexible"}

💬 ADDITIONAL MESSAGE:
${bookingData.message || "No additional message"}

📧 This booking was made from the Maasai Mara National Reserve page.
    `.trim();

    window.open(
      `mailto:tembo4401@gmail.com?subject=Maasai Mara Safari Booking: ${
        bookingData.route
      } - ${bookingData.fullName}&body=${encodeURIComponent(emailBody)}`
    );
  };

  // Main submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRoute) {
      alert("Please select a safari route first.");
      return;
    }

    const totalPrice = calculatePrice(selectedDays, selectedRoute.priceRange);
    const itinerary = generateItinerary(selectedDays, selectedRoute.name);

    // Prepare booking data to match backend's expected fields
    const bookingData = {
      // REQUIRED FIELDS by backend:
      park: parkInfo.name,
      lodge: selectedRoute.name, // Backend expects 'lodge', using route name
      days: selectedDays,
      travelers: bookingForm.travelers,
      totalPrice: totalPrice,
      fullName: bookingForm.fullName,
      email: bookingForm.email,
      phone: bookingForm.phone,

      // OPTIONAL FIELDS that backend also accepts:
      startDate: bookingForm.startDate || "Flexible",
      message: bookingForm.message || "",
      parkHighlights: parkInfo.highlights.join(", "),
      bestTime: parkInfo.bestTime,
      wildlife: parkInfo.wildlife,
      specialFeature: parkInfo.specialFeature,
      lodgeDescription: selectedRoute.description,
      itinerary: itinerary.join("\n"),

      // Additional info for tracking
      bookingSource: "Maasai Mara Park Page",
      route: selectedRoute.name,
    };

    console.log("📝 Maasai Mara booking data:", bookingData);

    // Try to send to backend first
    const result = await sendBookingToBackend(bookingData);

    if (!result.success) {
      // If backend fails, use direct email fallback
      console.log("⚠️ Backend failed, using fallback email...");
      alert("⚠️ Using fallback email method...");
      sendDirectEmail({
        ...bookingData,
        route: selectedRoute.name,
      });
    }

    // Reset form and close modals
    setShowBookingModal(false);
    setShowItineraryModal(false);
    setBookingForm({
      fullName: "",
      email: "",
      phone: "",
      travelers: 1,
      message: "",
      startDate: "",
    });
  };

  // Close modals when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowItineraryModal(false);
      setShowBookingModal(false);
      setShowGalleryModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-red-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={parkInfo.image}
          alt={parkInfo.name}
          className="w-full h-full object-cover"
          onError={(e) => handleImageError(e, parkInfo.fallbackImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-red-600/40"></div>
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
              Discover Maasai Mara
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The Maasai Mara National Reserve is Kenya's most famous wildlife
              sanctuary. Famous for the annual Great Migration, where over 1.5
              million wildebeest, zebras, and antelopes cross from the
              Serengeti, the Mara offers unparalleled game viewing. The reserve
              is also home to the Maasai people, known for their distinctive red
              dress and rich cultural heritage.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Park Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {parkInfo.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
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
                    Reserve Size
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

          <div className="bg-white rounded-xl shadow-lg p-6 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Maasai Mara?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    The Great Migration
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Witness one of nature's greatest spectacles with river
                    crossings.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Big Cat Capital
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Highest density of lions, cheetahs, and leopards in Africa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Cultural Experience
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Visit Maasai villages and learn about traditional culture.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <span className="text-red-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Balloon Safaris
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Spectacular hot air balloon rides over the savannah at
                    sunrise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Maasai Mara Gallery
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore the breathtaking beauty and wildlife of Maasai Mara through
            our collection of images showcasing the park's most spectacular
            moments.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openGalleryModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => handleImageError(e, image.fallback)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white">
                    <h4 className="font-semibold text-sm">{image.title}</h4>
                    <p className="text-xs opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openGalleryModal(0)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Full Gallery ({galleryImages.length} images)
            </button>
          </div>
        </div>

        {/* NEW: Attractions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Top Attractions in Maasai Mara
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-red-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => handleImageError(e, attraction.fallback)}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {attraction.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Best: {attraction.bestTime}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Highlight: {attraction.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safari Routes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
            Maasai Mara Safari Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-red-200"
                onClick={() => handleRouteSelect(route)}
              >
                <div className="h-48 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {route.name.split("→")[0].trim()}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mb-2"></div>
                    <p className="text-red-100">Starting Point</p>
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
                          className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-red-600 font-bold text-lg">
                      ${route.priceRange.min} - ${route.priceRange.max} / day
                    </span>
                    <span className="text-sm text-gray-500 bg-red-50 px-2 py-1 rounded">
                      {route.duration}
                    </span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-red-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            The Great Migration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Nature's Greatest Spectacle
              </h3>
              <p className="text-gray-700 mb-4">
                The Great Migration is a continuous, clockwise movement of over
                1.5 million wildebeest, 200,000 zebras, and 300,000 Thomson's
                gazelles across the Serengeti-Mara ecosystem.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <strong>July-October:</strong> Migration in Maasai Mara
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <strong>River Crossings:</strong> Most dramatic at Mara River
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <strong>Predator Action:</strong> Lions and crocodiles follow
                  the herds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <strong>Calving Season:</strong> January-February in Southern
                  Serengeti
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Migration Calendar
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Jan-Feb:</span>
                  <span className="text-red-600 font-semibold">
                    Calving Season
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mar-May:</span>
                  <span className="text-red-600 font-semibold">
                    Long Rains Movement
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Jun-Jul:</span>
                  <span className="text-red-600 font-semibold">
                    Mara River Crossing
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Aug-Oct:</span>
                  <span className="text-red-600 font-semibold">
                    Peak in Maasai Mara
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Nov-Dec:</span>
                  <span className="text-red-600 font-semibold">
                    Return to Serengeti
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-red-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Plan Your Maasai Mara Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Choose Your Package
              </h3>
              <p className="text-gray-600 text-sm">
                Select from our curated Maasai Mara safari routes and durations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Customize Itinerary
              </h3>
              <p className="text-gray-600 text-sm">
                Tailor your safari days and activities to your preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">3</span>
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

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button
              onClick={() => setShowGalleryModal(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 z-10 transition-colors"
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

            {/* Navigation Buttons */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 z-10 transition-colors"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 z-10 transition-colors"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Main Image */}
            <div className="h-[70vh] flex items-center justify-center">
              <img
                src={galleryImages[activeGalleryImage].src}
                alt={galleryImages[activeGalleryImage].title}
                className="max-h-full max-w-full object-contain rounded-lg"
                onError={(e) =>
                  handleImageError(
                    e,
                    galleryImages[activeGalleryImage].fallback
                  )
                }
              />
            </div>

            {/* Image Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4 text-white">
              <h3 className="text-xl font-bold mb-2">
                {galleryImages[activeGalleryImage].title}
              </h3>
              <p className="mb-2">
                {galleryImages[activeGalleryImage].description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm bg-red-600 px-3 py-1 rounded-full">
                  {galleryImages[activeGalleryImage].category}
                </span>
                <span className="text-sm">
                  {activeGalleryImage + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex overflow-x-auto gap-2 mt-4 pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveGalleryImage(index)}
                  className={`flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg border-2 transition-all ${
                    index === activeGalleryImage
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, image.fallback)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Itinerary Modal */}
      {showItineraryModal && selectedRoute && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
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
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400"
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
                        className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200"
                      >
                        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{day}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Price Estimate */}
              <div className="bg-red-100 p-4 rounded-lg mb-6 border border-red-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Estimated Total Price:
                  </span>
                  <span className="text-2xl font-bold text-red-600">
                    ${calculatePrice(selectedDays, selectedRoute.priceRange)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ({selectedDays} days × ${selectedRoute.priceRange.min}-$
                  {selectedRoute.priceRange.max}/day per person)
                </p>
              </div>

              <button
                onClick={handleBookingConfirm}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirm & Book Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Book Your Maasai Mara Safari
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
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
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={bookingForm.startDate}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Any special requirements, preferred travel dates for migration viewing, or questions about your Maasai Mara safari..."
                  ></textarea>
                </div>

                {/* Booking Summary */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Booking Summary
                  </h3>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Route:</span>{" "}
                    {selectedRoute?.name}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Duration:</span>{" "}
                    {selectedDays} days
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Estimated Total Price:</span>{" "}
                    $
                    {calculatePrice(
                      selectedDays,
                      selectedRoute?.priceRange || { min: 0, max: 0 }
                    )}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    All booking details will be sent to tembo4401@gmail.com
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Booking Request
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your booking details will be sent to tembo4401@gmail.com
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Maasaimara;
