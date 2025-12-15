import React, { useState } from "react";
import Swal from "sweetalert2";

const Taitahills = () => {
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
    id: 7,
    name: "Taita Hills Wildlife Sanctuary",
    image: "/assets/parks/taita-hills.jpg",
    fallbackImage: "/assets/taita-hills-page.jpg",
    description:
      "A hidden gem in the Taita-Taveta County, featuring unique cloud forests, endemic species, and dramatic landscapes rising from the Tsavo plains.",
    highlights: [
      "Endemic Taita species found nowhere else",
      "Ancient cloud forests with moss-covered trees",
      "Spectacular views from Ngangao and Mbololo forests",
      "Historic World War I sites",
      "Bird watching paradise with rare species",
    ],
    bestTime: "Year-round, but April-May & October-November for bird watching",
    wildlife:
      "Taita Thrush, Taita White-eye, Taita Apalis, African Elephant, Buffalo, Leopard, Bushbuck, Sykes Monkey",
    size: "28,000 hectares - Kenya's most important biodiversity hotspot",
    specialFeature:
      "Home to 13 globally threatened bird species and Africa's most fragmented cloud forests",
  };

  // Taita Hills Gallery Images
  const galleryImages = [
    {
      id: 1,
      src: "/assets/Cloud-Forest .png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Cloud Forest Canopy",
      description: "Misty cloud forests with ancient trees covered in moss",
      category: "landscape",
    },
    {
      id: 2,
      src: "/assets/thrush-taita.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Taita Thrush",
      description: "Critically endangered bird found only in Taita Hills",
      category: "wildlife",
    },
    {
      id: 3,
      src: "/assets/panomic.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Panoramic View",
      description: "Spectacular views overlooking the Tsavo plains",
      category: "landscape",
    },
    {
      id: 4,
      src: "/assets/white-eyes.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Taita White-eye",
      description: "Endangered bird species with less than 1000 individuals",
      category: "wildlife",
    },
    {
      id: 5,
      src: "/assets/frorest-hking.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Forest Hiking Trails",
      description: "Guided hikes through ancient cloud forest paths",
      category: "activities",
    },
    {
      id: 6,
      src: "/assets/water-fall.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Forest Waterfall",
      description: "Crystal clear waterfalls within the cloud forests",
      category: "landscape",
    },
    {
      id: 7,
      src: "/assets/bird.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Bird Watching",
      description: "Spotting rare endemic bird species with expert guides",
      category: "activities",
    },
    {
      id: 8,
      src: "/assets/forest.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Moss-Covered Trees",
      description: "Ancient trees draped in thick moss and epiphytes",
      category: "landscape",
    },
    {
      id: 9,
      src: "/assets/apils.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Taita Apalis",
      description: "One of the world's rarest birds, confined to Taita Hills",
      category: "wildlife",
    },
    {
      id: 10,
      src: "joz/public/assets/consavation .png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Conservation Research",
      description: "Scientific research and conservation activities",
      category: "conservation",
    },
    {
      id: 11,
      src: "/assets/sunrise.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Sunrise Over Hills",
      description: "Breathtaking sunrise over the Taita Hills",
      category: "landscape",
    },
    {
      id: 12,
      src: "/assets/canopy.png",
      fallback: "/assets/taita-gallery/default-gallery.jpg",
      title: "Canopy Walk",
      description: "Exploring the forest from elevated walkways",
      category: "activities",
    },
  ];

  // Taita Hills Attractions
  const attractions = [
    {
      id: 1,
      name: "Ngangao Forest",
      image: "/assets/taita-forest.png",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description: "Largest forest fragment with best-preserved cloud forest",
      bestTime: "Year-round",
      highlight: "Primary habitat for endemic birds",
    },
    {
      id: 2,
      name: "Mbololo Forest",
      image: "/assets/mbololo.png",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description: "Highest peak with spectacular panoramic views",
      bestTime: "June-September (drier trails)",
      highlight: "360-degree views of Tsavo plains",
    },
    {
      id: 3,
      name: "Chawia Forest",
      image: "/assets/cha-forest.png",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description: "Small but important forest fragment for conservation",
      bestTime: "Year-round",
      highlight: "Easy access and good birding",
    },
    {
      id: 4,
      name: "Taita Hills Sanctuary Lodge",
      image: "/assets/lodge-taita.png",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description:
        "Luxury eco-lodge with stunning views and conservation focus",
      bestTime: "Year-round",
      highlight: "Sustainable luxury accommodation",
    },
    {
      id: 5,
      name: "World War I Sites",
      image: "/assets/ww1-sites.jpg",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description: "Historical sites from the East African campaign",
      bestTime: "Year-round",
      highlight: "Historical significance",
    },
    {
      id: 6,
      name: "Bird Watching Towers",
      image: "/assets/tower-taita.png",
      fallback: "/assets/taita-attractions/default-attraction.jpg",
      description: "Strategic towers for observing endemic bird species",
      bestTime: "Early morning",
      highlight: "Rare bird sightings",
    },
  ];

  const safariRoutes = [
    {
      id: 1,
      name: "Taita Hills → Tsavo West → Mzima Springs",
      description:
        "Explore the biodiversity hotspot of Taita Hills combined with the volcanic landscapes of Tsavo West.",
      priceRange: { min: 270, max: 370 },
      duration: "4-6 days recommended",
      highlights: ["Endemic Species", "Cloud Forests", "Volcanic Landscapes"],
    },
    {
      id: 2,
      name: "Taita Hills Birding Special",
      description:
        "Focused bird watching tour targeting Taita's endemic and rare bird species with expert guides.",
      priceRange: { min: 240, max: 340 },
      duration: "3-5 days recommended",
      highlights: ["Endemic Birds", "Forest Hiking", "Conservation Focus"],
    },
    {
      id: 3,
      name: "Taita Hills Luxury Conservation Experience",
      description:
        "Premium safari combining luxury accommodation with conservation activities and scientific insights.",
      priceRange: { min: 350, max: 500 },
      duration: "3-4 days recommended",
      highlights: ["Luxury Lodges", "Conservation Tours", "Private Guides"],
    },
  ];

  const endemicSpecies = [
    {
      name: "Taita Thrush",
      scientific: "Turdus helleri",
      status: "Critically Endangered",
      habitat: "Cloud forests above 1400m",
      description: "Found only in three forest fragments in Taita Hills",
    },
    {
      name: "Taita White-eye",
      scientific: "Zosterops silvanus",
      status: "Endangered",
      habitat: "Forest canopy",
      description:
        "One of Africa's rarest birds with less than 1000 individuals",
    },
    {
      name: "Taita Apalis",
      scientific: "Apalis fuscigularis",
      status: "Critically Endangered",
      habitat: "Forest undergrowth",
      description: "World's population confined to Taita Hills",
    },
    {
      name: "Taita Hills Warty Frog",
      scientific: "Callulina sp.",
      status: "Endangered",
      habitat: "Forest floor",
      description:
        "Unique amphibian species adapted to cloud forest conditions",
    },
  ];

  const generateItinerary = (days, route) => {
    const itineraries = [];
    for (let i = 1; i <= days; i++) {
      if (i === 1) {
        itineraries.push(
          `Day ${i}: Arrival at Taita Hills, check-in at lodge and afternoon nature walk in the cloud forest`
        );
      } else if (i === days) {
        itineraries.push(
          `Day ${i}: Morning bird watching for endemic species, breakfast, and departure from ${route
            .split("→")
            .pop()
            .trim()}`
        );
      } else {
        const parksInRoute = route.split("→").map((park) => park.trim());
        const currentParkIndex = Math.min(i - 2, parksInRoute.length - 1);
        if (parksInRoute[currentParkIndex].includes("Taita")) {
          itineraries.push(
            `Day ${i}: Full day exploring Taita Hills with forest hikes, endemic species tracking, and conservation activities`
          );
        } else {
          itineraries.push(
            `Day ${i}: Full day exploration of ${parksInRoute[currentParkIndex]} with wildlife viewing and scenic experiences`
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
      console.log("📤 Sending Taita Hills booking to backend...", bookingData);

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
TAITA HILLS WILDLIFE SANCTUARY BOOKING DETAILS:

📍 SANCTUARY: ${bookingData.park}
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

🌿 SANCTUARY HIGHLIGHTS:
${parkInfo.highlights.map((highlight) => `• ${highlight}`).join("\n")}

🐦 ENDEMIC SPECIES: ${parkInfo.wildlife}
📏 SIZE: ${parkInfo.size}
🎯 SPECIAL FEATURE: ${parkInfo.specialFeature}

📧 This booking was made from the Taita Hills Wildlife Sanctuary page.
    `.trim();

    window.open(
      `mailto:tembo4401@gmail.com?subject=Taita Hills Safari Booking: ${
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
        confirmButtonColor: "#059669",
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
      bookingSource: "Taita Hills Sanctuary Page",
      route: selectedRoute.name,
    };

    console.log("📝 Taita Hills booking data:", bookingData);

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
            <p class="mb-2">Your Taita Hills safari booking request has been submitted.</p>
            <div class="bg-emerald-50 p-3 rounded-lg my-3">
              <p class="text-sm"><strong>Route:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Travelers:</strong> ${bookingForm.travelers}</p>
              <p class="text-sm"><strong>Total:</strong> $${totalPrice}</p>
            </div>
            <p class="text-sm text-gray-600">Check your email for confirmation and further details.</p>
          </div>
        `,
        confirmButtonColor: "#059669",
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
            <div class="bg-emerald-50 p-3 rounded-lg">
              <p class="text-sm"><strong>Route:</strong> ${selectedRoute.name}</p>
              <p class="text-sm"><strong>Duration:</strong> ${selectedDays} days</p>
              <p class="text-sm"><strong>Total Price:</strong> $${totalPrice}</p>
            </div>
          </div>
        `,
        showCancelButton: true,
        confirmButtonColor: "#059669",
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
          confirmButtonColor: "#059669",
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={parkInfo.image}
          alt={parkInfo.name}
          className="w-full h-full object-cover"
          onError={(e) => handleImageError(e, parkInfo.fallbackImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-emerald-600/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 font-serif">
              {parkInfo.name}
            </h1>
            <p className="text-xl max-w-2xl">{parkInfo.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-600/80 rounded-full text-sm">
                🌿 Biodiversity Hotspot
              </span>
              <span className="px-3 py-1 bg-emerald-600/80 rounded-full text-sm">
                🦜 Endemic Species
              </span>
              <span className="px-3 py-1 bg-emerald-600/80 rounded-full text-sm">
                ☁️ Cloud Forests
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Park Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
              Discover Taita Hills
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              The Taita Hills Wildlife Sanctuary is one of Kenya's most
              important biodiversity conservation areas. These ancient cloud
              forests rise dramatically from the Tsavo plains, creating isolated
              "sky islands" that have evolved unique species found nowhere else
              on Earth. The sanctuary protects the last remnants of Eastern Arc
              mountain forests in Kenya, hosting critically endangered birds and
              rare plants.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Sanctuary Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {parkInfo.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
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
                    Sanctuary Size
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

          <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Why Choose Taita Hills?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Unique Endemic Species
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Home to species found nowhere else on Earth, including
                    critically endangered birds.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Ancient Cloud Forests
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Experience misty forests with moss-covered trees dating back
                    millions of years.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Conservation Focus
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Support critical conservation efforts for globally
                    threatened species.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Dramatic Landscapes
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Spectacular views from forested peaks overlooking the vast
                    Tsavo plains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Taita Hills Gallery
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Explore the breathtaking beauty and unique biodiversity of Taita
            Hills through our collection of images showcasing the sanctuary's
            cloud forests, endemic species, and conservation efforts.
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
                  <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => openGalleryModal(0)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Full Gallery ({galleryImages.length} images)
            </button>
          </div>
        </div>

        {/* NEW: Attractions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Top Attractions in Taita Hills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-emerald-100"
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
                        className="w-4 h-4 text-emerald-600 mr-2"
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
                        className="w-4 h-4 text-emerald-600 mr-2"
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

        {/* Endemic Species Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-emerald-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            Endemic & Threatened Species
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {endemicSpecies.map((species, index) => (
              <div
                key={index}
                className="bg-emerald-50 rounded-lg p-6 border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{species.name}</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      species.status === "Critically Endangered"
                        ? "bg-red-100 text-red-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {species.status}
                  </span>
                </div>
                <p className="text-sm text-emerald-700 italic mb-2">
                  {species.scientific}
                </p>
                <p className="text-sm text-gray-600 mb-3">{species.habitat}</p>
                <p className="text-sm text-gray-700">{species.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">
              Conservation Importance
            </h3>
            <p className="text-gray-700">
              Taita Hills is recognized as an Important Bird Area (IBA) and a
              Key Biodiversity Area (KBA). The sanctuary's cloud forests are
              among the world's most threatened ecosystems, with less than 1% of
              original forest cover remaining. Conservation efforts focus on
              habitat restoration, community engagement, and scientific research
              to protect these unique species.
            </p>
          </div>
        </div>

        {/* Forest Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-emerald-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
            Cloud Forest Ecosystems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Forest Fragments
              </h3>
              <p className="text-gray-700 mb-4">
                The Taita Hills consist of three main forest fragments: Ngangao
                (120 ha), Chawia (86 ha), and Mbololo (220 ha). These "sky
                islands" create unique microclimates that support specialized
                flora and fauna. The forests receive moisture from the Indian
                Ocean, creating constant mist and cloud cover that sustains the
                ecosystem.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <strong>Elevation:</strong> 1,400 - 2,200 meters above sea
                  level
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <strong>Rainfall:</strong> 1,200 - 2,000 mm annually
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <strong>Temperature:</strong> 15-25°C year-round
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  <strong>Forest Age:</strong> Over 30 million years old
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Forest Activities
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded mr-3">
                    <span className="text-emerald-600 font-bold">🌳</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Forest Hiking Trails
                    </p>
                    <p className="text-sm text-gray-600">
                      Well-marked trails through ancient forests with guided
                      interpretation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded mr-3">
                    <span className="text-emerald-600 font-bold">🔭</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Bird Watching Platforms
                    </p>
                    <p className="text-sm text-gray-600">
                      Strategic viewing points for observing endemic bird
                      species
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded mr-3">
                    <span className="text-emerald-600 font-bold">📚</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Conservation Education
                    </p>
                    <p className="text-sm text-gray-600">
                      Learn about ongoing research and conservation efforts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safari Routes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-serif">
            Taita Hills Safari Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-emerald-200"
                onClick={() => handleRouteSelect(route)}
              >
                <div className="h-48 bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {route.name.split("→")[0].trim()}
                    </h3>
                    <div className="w-12 h-1 bg-white mx-auto mb-2"></div>
                    <p className="text-emerald-100">Starting Point</p>
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
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-emerald-600 font-bold text-lg">
                      ${route.priceRange.min} - ${route.priceRange.max} / day
                    </span>
                    <span className="text-sm text-gray-500 bg-emerald-50 px-2 py-1 rounded">
                      {route.duration}
                    </span>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-emerald-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
            Plan Your Taita Hills Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Choose Your Package
              </h3>
              <p className="text-gray-600 text-sm">
                Select from our curated Taita Hills safari routes and durations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Customize Itinerary
              </h3>
              <p className="text-gray-600 text-sm">
                Tailor your safari days and conservation activities to your
                interests.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">3</span>
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
                <span className="text-sm bg-emerald-600 px-3 py-1 rounded-full">
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
                      ? "border-emerald-500"
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
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-gray-700 border-gray-300 hover:border-emerald-400"
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
                        className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200"
                      >
                        <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{day}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Price Estimate */}
              <div className="bg-emerald-100 p-4 rounded-lg mb-6 border border-emerald-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">
                    Estimated Total Price:
                  </span>
                  <span className="text-2xl font-bold text-emerald-600">
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
                  Book Your Taita Hills Safari
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="Any special requirements, conservation interests, bird watching preferences, or questions about endemic species..."
                  ></textarea>
                </div>

                {/* Booking Summary */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none mt-6 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
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

export default Taitahills;
