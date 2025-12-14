import React, { useState } from "react";
import Swal from "sweetalert2";

const Nakuru = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDays, setSelectedDays] = useState(3);
  const [showItineraryModal, setShowItineraryModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: 1,
    message: "",
    startDate: "",
  });

  const parkInfo = {
    id: 6,
    name: "Lake Nakuru National Park",
    image: "/assets/nakuru-ntp.png",
    fallbackImage: "/assets/nakuru-page.jpg",
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

  // Lake Nakuru Gallery Images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/fla-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Pink Flamingo Sea",
      description:
        "Millions of flamingos creating a pink ribbon around the lake",
      category: "birds",
    },
    {
      id: 2,
      src: "/assets/nakuru-ntp.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Black Rhino",
      description: "Endangered black rhino in the protected sanctuary",
      category: "wildlife",
    },
    {
      id: 3,
      src: "/assets/cli-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Baboon Cliff View",
      description: "Panoramic views from the famous Baboon Cliff",
      category: "landscape",
    },
    {
      id: 4,
      src: "/assets/peli-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Great White Pelicans",
      description: "Large flocks of pelicans fishing in the lake",
      category: "birds",
    },
    {
      id: 5,
      src: "/assets/gir-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Rothschild's Giraffe",
      description: "Endangered giraffe species found in the park",
      category: "wildlife",
    },
    {
      id: 6,
      src: "/assets/mak-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Makalia Falls",
      description: "Beautiful waterfall within the park",
      category: "landscape",
    },
    {
      id: 7,
      src: "/assets/lion-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Tree-Climbing Lions",
      description: "Lions resting in acacia trees",
      category: "wildlife",
    },
    {
      id: 8,
      src: "/assets/sun-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Lake Sunset",
      description: "Stunning sunset over Lake Nakuru",
      category: "landscape",
    },
    {
      id: 9,
      src: "/assets/bird-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Bird Watching",
      description: "Over 450 bird species recorded in the park",
      category: "birds",
    },
    {
      id: 10,
      src: "/assets/ri-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "White Rhino",
      description: "White rhino grazing in the sanctuary",
      category: "wildlife",
    },
    {
      id: 11,
      src: "/assets/re-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Rift Valley View",
      description: "Spectacular views of the Great Rift Valley",
      category: "landscape",
    },
    {
      id: 12,
      src: "/assets/leo-nakuru.png",
      fallback: "/assets/nakuru-gallery/default-gallery.jpg",
      title: "Leopard Sighting",
      description: "Elusive leopard in the acacia woodlands",
      category: "wildlife",
    },
  ];

  // Lake Nakuru Attractions
  const attractions = [
    {
      id: 1,
      name: "Baboon Cliff",
      image: "/assets/babo-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Spectacular viewpoint overlooking the entire lake",
      bestTime: "Sunrise or sunset",
      highlight: "Panoramic lake views",
    },
    {
      id: 2,
      name: "Makalia Falls",
      image: "/assets/mka-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Beautiful waterfall in the southern part of the park",
      bestTime: "After rainy season",
      highlight: "Refreshing waterfall",
    },
    {
      id: 3,
      name: "Rhino Sanctuary",
      image: "/assets/ rino-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Protected area for both black and white rhinos",
      bestTime: "Early morning or late afternoon",
      highlight: "Rhino conservation",
    },
    {
      id: 4,
      name: "Lion Hill",
      image: "/assets/hill-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Viewpoint with excellent game viewing opportunities",
      bestTime: "Morning",
      highlight: "Predator sightings",
    },
    {
      id: 5,
      name: "Lake Shore Drive",
      image: "/assets/shore-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Scenic drive along the flamingo-filled shoreline",
      bestTime: "Any time of day",
      highlight: "Flamingo congregations",
    },
    {
      id: 6,
      name: "Out of Africa Lookout",
      image: "/assets/pic-nakuru.png",
      fallback: "/assets/nakuru-attractions/default-attraction.jpg",
      description: "Historic viewpoint made famous by the movie",
      bestTime: "Morning",
      highlight: "Cinematic views",
    },
  ];

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
      console.log("📤 Sending Lake Nakuru booking to backend...", bookingData);

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
LAKE NAKURU NATIONAL PARK SAFARI BOOKING DETAILS:

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

🦩 PARK HIGHLIGHTS:
${parkInfo.highlights.map((highlight) => `• ${highlight}`).join("\n")}

🐦 WILDLIFE: ${parkInfo.wildlife}
📏 SIZE: ${parkInfo.size}

📧 This booking was made from the Lake Nakuru National Park page.
    `.trim();

    window.open(
      `mailto:tembo4401@gmail.com?subject=Lake Nakuru Safari Booking: ${
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
        title: "No Route Selected",
        text: "Please select a safari route first.",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    setIsSubmitting(true);

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
      parkSize: parkInfo.size,
      lodgeDescription: selectedRoute.description,
      itinerary: itinerary.join("\n"),

      // Additional info for tracking
      bookingSource: "Lake Nakuru Park Page",
      route: selectedRoute.name,
    };

    console.log("📝 Lake Nakuru booking data:", bookingData);

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
            <p class="mb-2">Your Lake Nakuru safari booking request has been submitted.</p>
            <div class="bg-blue-50 p-3 rounded-lg my-3">
              <p class="text-sm"><strong>Route:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Travelers:</strong> ${bookingForm.travelers}</p>
              <p class="text-sm"><strong>Total:</strong> $${totalPrice}</p>
            </div>
            <p class="text-sm text-gray-600">Check your email for confirmation and further details.</p>
          </div>
        `,
        confirmButtonColor: "#2563eb",
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
            <div class="bg-blue-50 p-3 rounded-lg">
              <p class="text-sm"><strong>Route:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Total Price:</strong> $${totalPrice}</p>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
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
          confirmButtonColor: "#2563eb",
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
      setShowGalleryModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={parkInfo.image}
          alt={parkInfo.name}
          className="w-full h-full object-cover"
          onError={(e) => handleImageError(e, parkInfo.fallbackImage)}
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
              pink ribbon around the lake. The park is also a key rhino
              sanctuary and home to the endangered Rothschild's giraffe.
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
                    the lake - one of Africa's greatest wildlife spectacles.
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
                    species in a protected sanctuary.
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
                    Over 450 bird species including pelicans, rare migrants, and
                    endemic species.
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
                    woodland, cliff viewpoints to waterfalls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Lake Nakuru Gallery
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Experience the stunning pink spectacle of Lake Nakuru through our
            collection of images showcasing flamingos, wildlife, and scenic
            landscapes.
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
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openGalleryModal(0)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Full Gallery ({galleryImages.length} images)
            </button>
          </div>
        </div>

        {/* NEW: Attractions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Top Attractions in Lake Nakuru
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-100"
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
                        className="w-4 h-4 text-blue-600 mr-2"
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
                        className="w-4 h-4 text-blue-600 mr-2"
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

        {/* Flamingo & Rhino Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            Flamingo Spectacle & Rhino Conservation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                The Pink Lake
              </h3>
              <p className="text-gray-700 mb-4">
                Lake Nakuru's alkaline waters support massive blooms of
                blue-green algae, which attract up to 1.5 million lesser
                flamingos. When conditions are right, the lake surface appears
                pink as far as the eye can see. The flamingo population
                fluctuates based on water levels and algae availability,
                creating a dynamic and ever-changing spectacle.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <strong>Lesser Flamingos:</strong> 1-1.5 million during peak
                  season
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <strong>Greater Flamingos:</strong> Thousands feed alongside
                  their smaller cousins
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <strong>Best Viewing:</strong> Southern and eastern shores of
                  the lake
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <strong>Water Levels:</strong> Fluctuating levels affect
                  flamingo numbers
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Rhino Sanctuary Success
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <span className="text-blue-600 font-bold">🦏</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Both Species Protected
                    </p>
                    <p className="text-sm text-gray-600">
                      Home to both endangered black rhinos and white rhinos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <span className="text-blue-600 font-bold">📈</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Conservation Success
                    </p>
                    <p className="text-sm text-gray-600">
                      Rhino population steadily increasing through protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <span className="text-blue-600 font-bold">🌳</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Giraffe Conservation
                    </p>
                    <p className="text-sm text-gray-600">
                      Important sanctuary for endangered Rothschild's giraffe
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
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
                      ? "border-blue-500"
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
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
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
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={bookingForm.startDate}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Any special requirements, bird watching interests, photography preferences, or questions about flamingo viewing..."
                  ></textarea>
                </div>

                {/* Booking Summary */}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
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
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none mt-6 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
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

export default Nakuru;
