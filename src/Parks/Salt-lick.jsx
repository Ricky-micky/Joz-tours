import React, { useState } from "react";
import Swal from "sweetalert2";

const SaltLick = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    message: "",
    startDate: "",
  });

  const lodgeInfo = {
    id: 8,
    name: "Salt Lick Safari Lodge",
    tagline: "Iconic Wildlife Experience in the Heart of Tsavo West",
    mainImage: "https://www.saltlick.com/images/hero-main.jpg",
    description:
      "A world-renowned safari lodge famous for its unique stilted architecture, floodlit waterholes, and unparalleled wildlife viewing at the edge of Tsavo West National Park.",
    highlights: [
      "Famous elevated stilted architecture with wildlife viewing from your room",
      "Floodlit waterholes for 24-hour game viewing",
      "Located in the private Taita Hills Wildlife Sanctuary",
      "Direct access to Tsavo West National Park",
      "Traditional Kenyan hospitality with modern amenities",
    ],
    bestTime: "Year-round destination with peak wildlife viewing June-October",
    wildlife:
      "Elephants, Lions, Leopards, Buffalo, Rhinos, Giraffes, Zebras, Wildebeest, Antelopes",
    location:
      "Taita Hills Wildlife Sanctuary, bordering Tsavo West National Park",
    specialFeature:
      "Unique treehouse-style lodge offering wildlife viewing from private balconies",
    accommodations: {
      rooms: 96,
      types: ["Standard Rooms", "Family Suites", "Executive Suites"],
      features: ["Private Balconies", "En-suite Bathrooms", "Wildlife Views"],
    },
  };

  // Actual images from saltlick.com
  const lodgeImages = [
    {
      url: "https://www.saltlick.com/images/lodge-exterior.jpg",
      alt: "Salt Lick Lodge Exterior",
      title: "Iconic Stilted Architecture",
    },
    {
      url: "https://www.saltlick.com/images/waterhole-viewing.jpg",
      alt: "Waterhole Wildlife Viewing",
      title: "Floodlit Waterhole",
    },
    {
      url: "https://www.saltlick.com/images/room-interior.jpg",
      alt: "Lodge Room Interior",
      title: "Comfortable Accommodations",
    },
    {
      url: "https://www.saltlick.com/images/restaurant-view.jpg",
      alt: "Restaurant with View",
      title: "Dining with Wildlife",
    },
  ];

  const safariRoutes = [
    {
      id: 1,
      name: "Salt Lick → Tsavo West → Amboseli Safari",
      description:
        "Classic safari combining Salt Lick's unique waterhole viewing with Tsavo's volcanic landscapes and Amboseli's elephants.",
      priceRange: { min: 320, max: 450 },
      duration: "4-7 days recommended",
      highlights: [
        "Waterhole Viewing",
        "Volcanic Landscapes",
        "Kilimanjaro Views",
      ],
    },
    {
      id: 2,
      name: "Salt Lick Exclusive Wildlife Experience",
      description:
        "Extended stay focusing on Salt Lick's unique 24-hour wildlife viewing and private game drives.",
      priceRange: { min: 280, max: 400 },
      duration: "3-5 days recommended",
      highlights: ["24-hour Viewing", "Private Drives", "Lodge Activities"],
    },
    {
      id: 3,
      name: "Salt Lick Luxury Photographic Safari",
      description:
        "Premium experience for photographers with specialized hides, expert guides, and luxury accommodations.",
      priceRange: { min: 380, max: 550 },
      duration: "4-6 days recommended",
      highlights: ["Photography Hides", "Expert Guides", "Luxury Package"],
    },
  ];

  const lodgeFeatures = [
    {
      icon: "🦁",
      title: "24/7 Wildlife Viewing",
      description:
        "Floodlit waterholes allow wildlife observation day and night from the comfort of the lodge",
    },
    {
      icon: "🌳",
      title: "Unique Architecture",
      description:
        "Stilted treehouse-style design provides unobstructed views of the surrounding wilderness",
    },
    {
      icon: "🚙",
      title: "Game Drive Access",
      description:
        "Direct access to Tsavo West National Park for morning and evening game drives",
    },
    {
      icon: "🍽️",
      title: "Bush Dining",
      description:
        "Unique dining experiences including bush breakfasts and romantic dinners under the stars",
    },
    {
      icon: "🏊",
      title: "Swimming Pool",
      description:
        "Refresh in the lodge pool while watching wildlife at the nearby waterhole",
    },
    {
      icon: "🔥",
      title: "Campfire Evenings",
      description:
        "Traditional campfire gatherings with storytelling and stargazing",
    },
  ];

  const generateItinerary = (days, route) => {
    const itineraries = [];
    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        itineraries.push(
          `Day ${i}: Arrival at Salt Lick Safari Lodge, check-in and afternoon relaxation at the waterhole viewing deck`
        );
      } else if (i === days) {
        itineraries.push(
          `Day ${i}: Morning game drive in Tsavo West, breakfast, and departure from ${route
            .split("→")
            .pop()
            .trim()}`
        );
      } else {
        const parksInRoute = route.split("→").map((park) => park.trim());
        const currentParkIndex = Math.min(i - 2, parksInRoute.length - 1);
        if (parksInRoute[currentParkIndex].includes("Salt Lick")) {
          itineraries.push(
            `Day ${i}: Full day at Salt Lick with game drives, waterhole photography, and lodge activities`
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

  // Function to send booking to backend
  const sendBookingToBackend = async (bookingData) => {
    try {
      console.log("📤 Sending Salt Lick booking to backend...", bookingData);

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
SALT LICK SAFARI LODGE BOOKING DETAILS:

🏨 LODGE: ${bookingData.park}
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

🌟 LODGE HIGHLIGHTS:
${lodgeInfo.highlights.map((highlight) => `• ${highlight}`).join("\n")}

🐘 WILDLIFE: ${lodgeInfo.wildlife}
📍 LOCATION: ${lodgeInfo.location}

🏨 ACCOMMODATION DETAILS:
- Total Rooms: ${lodgeInfo.accommodations.rooms}
- Room Types: ${lodgeInfo.accommodations.types.join(", ")}
- Features: ${lodgeInfo.accommodations.features.join(", ")}

📧 This booking was made from the Salt Lick Safari Lodge page.
    `.trim();

    window.open(
      `mailto:tembo4401@gmail.com?subject=Salt Lick Safari Lodge Booking: ${
        bookingData.route
      } - ${bookingData.fullName}&body=${encodeURIComponent(emailBody)}`
    );
  };

  // Main submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedRoute) {
      Swal.fire({
        icon: "warning",
        title: "No Package Selected",
        text: "Please select a safari package first.",
        confirmButtonColor: "#92400e",
      });
      return;
    }

    setIsSubmitting(true);

    const totalPrice = calculatePrice(selectedDays, selectedRoute.priceRange);
    const itinerary = generateItinerary(selectedDays, selectedRoute.name);

    // Prepare booking data to match backend's expected fields
    const bookingData = {
      // REQUIRED FIELDS by backend:
      park: lodgeInfo.name,
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
      parkHighlights: lodgeInfo.highlights.join(", "),
      bestTime: lodgeInfo.bestTime,
      wildlife: lodgeInfo.wildlife,
      specialFeature: lodgeInfo.specialFeature,
      location: lodgeInfo.location,
      lodgeDescription: selectedRoute.description,
      itinerary: itinerary.join("\n"),

      // Additional info for tracking
      bookingSource: "Salt Lick Lodge Page",
      route: selectedRoute.name,
    };

    console.log("📝 Salt Lick booking data:", bookingData);

    // Try to send to backend first
    const result = await sendBookingToBackend(bookingData);

    setIsSubmitting(false);

    if (result.success) {
      // Success SweetAlert
      await Swal.fire({
        icon: "success",
        title: "Booking Request Sent!",
        html: `
          <div class="text-left">
            <p class="mb-2"><strong>✅ Success!</strong></p>
            <p class="mb-2">Your Salt Lick Safari Lodge booking request has been submitted.</p>
            <div class="bg-amber-50 p-3 rounded-lg my-3">
              <p class="text-sm"><strong>Package:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Travelers:</strong> ${bookingForm.travelers}</p>
              <p class="text-sm"><strong>Total:</strong> $${totalPrice}</p>
            </div>
            <p class="text-sm text-gray-600">Check your email for confirmation and further details.</p>
          </div>
        `,
        confirmButtonColor: "#92400e",
        confirmButtonText: "Great!",
      });
    } else {
      // If backend fails, ask user if they want to use fallback email
      const fallbackResult = await Swal.fire({
        icon: "warning",
        title: "Connection Issue",
        html: `
          <div class="text-left">
            <p class="mb-2">We're having trouble connecting to our booking system.</p>
            <p class="mb-4">Would you like to send your booking details via email instead?</p>
            <div class="bg-amber-50 p-3 rounded-lg">
              <p class="text-sm"><strong>Package:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Total Price:</strong> $${totalPrice}</p>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonColor: "#92400e",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, send via email",
        cancelButtonText: "Cancel",
      });

      if (fallbackResult.isConfirmed) {
        sendDirectEmail({
          ...bookingData,
          route: selectedRoute.name,
          itinerary: itinerary,
        });

        await Swal.fire({
          icon: "info",
          title: "Email Opened",
          text: "Please complete your booking by sending the pre-filled email.",
          confirmButtonColor: "#92400e",
        });
      }
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
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={lodgeInfo.mainImage}
          alt={lodgeInfo.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-2 font-serif">
              {lodgeInfo.name}
            </h1>
            <p className="text-2xl mb-4 font-light">{lodgeInfo.tagline}</p>
            <p className="text-xl max-w-2xl mb-6">{lodgeInfo.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-600/80 rounded-full text-sm">
                🏨 Iconic Architecture
              </span>
              <span className="px-3 py-1 bg-amber-600/80 rounded-full text-sm">
                💡 Floodlit Waterholes
              </span>
              <span className="px-3 py-1 bg-amber-600/80 rounded-full text-sm">
                🦁 24/7 Wildlife Viewing
              </span>
              <span className="px-3 py-1 bg-amber-600/80 rounded-full text-sm">
                🌳 Tsavo West Access
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Lodge Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
              Discover Salt Lick Safari Lodge
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Perched on stilts overlooking a natural waterhole in the Taita
              Hills Wildlife Sanctuary, Salt Lick Safari Lodge offers one of
              Africa's most unique wildlife experiences. The lodge's distinctive
              architecture allows guests to observe animals from the comfort of
              their rooms or from the numerous viewing decks, with floodlit
              waterholes providing 24-hour game viewing opportunities.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Lodge Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {lodgeInfo.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
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
                  <p className="text-gray-700">{lodgeInfo.bestTime}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Wildlife
                  </h4>
                  <p className="text-gray-700">{lodgeInfo.wildlife}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-700">{lodgeInfo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Special Feature
                  </h4>
                  <p className="text-gray-700">{lodgeInfo.specialFeature}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Salt Lick?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    24/7 Wildlife Viewing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Floodlit waterholes allow observation of nocturnal wildlife
                    from your room.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Unique Architecture
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Stilted design provides panoramic views and a true bush
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Photographer's Paradise
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ideal for wildlife photography with hides and perfect
                    lighting conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <span className="text-amber-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Family Friendly
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Safe environment with family suites and activities for all
                    ages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lodge Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Experience Salt Lick
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lodgeImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://images.unsplash.com/photo-${
                      1566073771259 + index
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lodge Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Lodge Features & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lodgeFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg p-6 border border-amber-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-100 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">
              Accommodation Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Room Types</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {lodgeInfo.accommodations.types.map((type, idx) => (
                    <li key={idx}>• {type}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Room Features
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {lodgeInfo.accommodations.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Capacity</h4>
                <p className="text-2xl font-bold text-amber-700">
                  {lodgeInfo.accommodations.rooms} Rooms
                </p>
                <p className="text-sm text-gray-600">
                  Comfortable accommodation for families and groups
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safari Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
            Salt Lick Safari Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-amber-200"
                onClick={() => handleRouteSelect(route)}
              >
                <div className="h-48 bg-gradient-to-r from-amber-600 to-amber-700 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {route.name.split("→")[0].trim()}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mb-2"></div>
                    <p className="text-amber-100">Starting Point</p>
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
                          className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-amber-600 font-bold text-lg">
                      ${route.priceRange.min} - ${route.priceRange.max} / day
                    </span>
                    <span className="text-sm text-gray-500 bg-amber-50 px-2 py-1 rounded">
                      {route.duration}
                    </span>
                  </div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Waterhole Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            The Waterhole Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Wildlife Spectacle
              </h3>
              <p className="text-gray-700 mb-4">
                Salt Lick's floodlit waterholes are the heart of the lodge
                experience. Animals gather throughout the day and night to
                drink, providing guests with continuous wildlife viewing
                opportunities. The strategic lighting allows for observation and
                photography without disturbing the natural behavior of the
                animals.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <strong>Daytime:</strong> Herds of elephants, buffalo, and
                  antelopes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <strong>Evening:</strong> Predators including lions and
                  leopards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <strong>Night:</strong> Nocturnal species like hyenas and
                  genets
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <strong>Photography:</strong> Perfect lighting conditions for
                  wildlife shots
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Viewing Tips</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded mr-3">
                    <span className="text-amber-600 font-bold">📸</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Best Photography Times
                    </p>
                    <p className="text-sm text-gray-600">
                      Early morning and late afternoon for golden hour lighting
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded mr-3">
                    <span className="text-amber-600 font-bold">🌙</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Night Viewing</p>
                    <p className="text-sm text-gray-600">
                      Use lodge-provided infrared viewers for nocturnal wildlife
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded mr-3">
                    <span className="text-amber-600 font-bold">🔭</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Binocular Rentals
                    </p>
                    <p className="text-sm text-gray-600">
                      High-quality binoculars available for detailed observation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-amber-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Plan Your Salt Lick Safari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Choose Your Package
              </h3>
              <p className="text-gray-600 text-sm">
                Select from our curated Salt Lick safari packages and durations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Customize Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Tailor your stay with photography options and special
                activities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Book & Confirm
              </h3>
              <p className="text-gray-600 text-sm">
                Secure your spot at this iconic safari destination.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                  Detailed Itinerary:
                </h3>
                <div className="space-y-3">
                  {generateItinerary(selectedDays, selectedRoute.name).map(
                    (day, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg border border-amber-200"
                      >
                        <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{day}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Price Estimate */}
              <div className="bg-amber-100 p-4 rounded-lg mb-6 border border-amber-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Estimated Total Price:
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
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
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
                  Book Your Salt Lick Safari
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
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={bookingForm.startDate}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Any special requirements, room preferences, photography interests, or questions about waterhole viewing..."
                  ></textarea>
                </div>

                {/* Booking Summary */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Booking Summary
                  </h3>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Package:</span>{" "}
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
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none mt-6 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
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
                  </>
                )}
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

export default SaltLick;
