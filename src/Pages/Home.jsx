import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLodgeModal, setShowLodgeModal] = useState(false);
  const [showParkModal, setShowParkModal] = useState(false);
  const navigate = useNavigate();

  // Updated Slideshow images data with your provided images
  const slides = [
    {
      id: 1,
      image:
        "https://trips4africa.com/wp-content/uploads/2024/05/15-Interesting-Facts-About-The-Serengeti1.jpg",
      title: "Discover Kenya's Wildlife Wonders",
      subtitle:
        "Experience the vast plains and incredible wildlife of Kenya's most famous parks",
    },
    {
      id: 2,
      image:
        "https://images.pond5.com/blue-wildebeest-connochaetes-taurinus-crossing-footage-106445999_iconl.jpeg",
      title: "Witness the Great Migration",
      subtitle:
        "Marvel at the spectacular wildebeest river crossings in Maasai Mara",
    },
    {
      id: 3,
      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/c8/2d/58.jpg",
      title: "Authentic Cultural Experiences",
      subtitle: "Immerse yourself in rich Maasai traditions and heritage",
    },
  ];

  // Updated Parks data with your specific requirements
  const parks = [
    {
      id: 1,
      name: "Maasai Mara",
      slug: "maasai-mara",
      path: "/maasaimara", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Witness the Great Wildebeest Migration",
      details:
        "The Maasai Mara National Reserve is one of Africa's most famous wildlife conservation areas. Known for its exceptional population of lions, leopards, and cheetahs, and the annual migration of zebra, Thomson's gazelle, and wildebeest.",
      bestTime: "July to October",
      highlights: [
        "Great Migration",
        "Big Five",
        "Maasai Culture",
        "Balloon Safaris",
      ],
      wildlife:
        "Lions, Cheetahs, Leopards, Elephants, Rhinos, Buffaloes, Wildebeest, Zebras",
      specialFeature: "Annual Great Migration of over 1.5 million wildebeest",
      lodges: [
        {
          name: "Sweet Acacia Camp",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Luxurious tented camp offering intimate wildlife experiences with personalized service and stunning Mara River views.",
          gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "AA Lodge Mara",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Family-friendly lodge with spacious accommodations, excellent dining, and prime location for migration viewing.",
          gallery: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Mara Serena Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Award-winning lodge built on a hill with panoramic views, offering luxury accommodations and world-class service.",
          gallery: [
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Lake Nakuru National Park",
      slug: "lake-nakuru",
      path: "/lakenakuru", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1549317336-206009e0c0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Famous for flamingos and rhino sanctuary",
      details:
        "Lake Nakuru National Park is known for its incredible birdlife, including flocks of flamingos that color the lake pink. The park also hosts one of Kenya's largest rhino sanctuaries and supports a wide variety of wildlife.",
      bestTime: "June to March",
      wildlife: "Flamingos, Rhinos, Lions, Leopards, Waterbucks, Giraffes",
      specialFeature:
        "Sometimes over a million flamingos coloring the lake pink",
      highlights: [
        "Flamingos",
        "Rhino Sanctuary",
        "Bird Watching",
        "Baboon Cliff",
      ],
      lodges: [
        {
          name: "Lake Nakuru Lodge",
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Modern lodge with stunning lake views, swimming pool, and easy access to the rhino sanctuary and flamingo colonies.",
          gallery: [
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Tsavo East",
      slug: "tsavo-east",
      path: "/tsavoeast", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Vast wilderness with red elephants",
      details:
        "Tsavo East National Park is one of the oldest and largest parks in Kenya. Famous for its 'red' elephants that dust-bathe in the red volcanic soil, the park offers vast wilderness experiences and diverse wildlife.",
      bestTime: "April to October & January to February",
      wildlife:
        "Red Elephants, Lions, Buffaloes, Giraffes, Antelopes, Bird Species",
      specialFeature: "Famous 'red elephants' dusted in red volcanic soil",
      highlights: [
        "Red Elephants",
        "Mudanda Rock",
        "Lugard Falls",
        "Wilderness",
      ],
      lodges: [
        {
          name: "Voi Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Strategically located lodge overlooking a waterhole, offering excellent game viewing opportunities and comfortable accommodations.",
          gallery: [
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Voi Wildlife Lodge",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Eco-friendly lodge with stunning views of the park, offering guided walks and excellent bird watching opportunities.",
          gallery: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Tsavo West",
      slug: "tsavo-west",
      path: "/tsavowest", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Diverse landscapes and Mzima Springs",
      details:
        "Tsavo West National Park features more diverse scenery and volcanic landscapes than its eastern counterpart. Famous for Mzima Springs, underwater hippo viewing, and the Ngulia Rhino Sanctuary.",
      bestTime: "April to October & January to February",
      wildlife: "Hippos, Crocodiles, Rhinos, Elephants, Lions, Leopards",
      specialFeature: "Mzima Springs with underwater hippo and fish viewing",
      highlights: [
        "Mzima Springs",
        "Rhino Sanctuary",
        "Volcanic Cones",
        "Hippo Viewing",
      ],
      lodges: [
        {
          name: "Ngulia Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Lodge perched on the edge of the Rift Valley with spectacular views and excellent rhino viewing opportunities.",
          gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Kilaguni Serena Lodge",
          image:
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "First lodge to be built in a Kenyan national park, offering stunning views of Mount Kilimanjaro and waterhole game viewing.",
          gallery: [
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Amboseli",
      slug: "amboseli",
      path: "/amboseli", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Elephants with Mount Kilimanjaro backdrop",
      details:
        "Amboseli National Park is famous for its large elephant herds and spectacular views of Mount Kilimanjaro. The park offers some of the best opportunities to see African wildlife against the backdrop of the continent's highest peak.",
      bestTime: "June to October & January to February",
      wildlife:
        "Elephants, Lions, Cheetahs, Buffaloes, Hippos, Giraffes, Zebras",
      specialFeature: "Large elephant herds with Kilimanjaro backdrop",
      highlights: [
        "Elephant Herds",
        "Mount Kilimanjaro",
        "Big Five",
        "Swamp Ecosystems",
      ],
      lodges: [
        {
          name: "Hunters Manor",
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Exclusive boutique lodge offering personalized service with stunning Kilimanjaro views and luxury accommodations.",
          gallery: [
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Penety House",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Intimate lodge offering personalized service with excellent views of Mount Kilimanjaro and guided nature walks.",
          gallery: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Kilima Safari Camp",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Eco-friendly camp nestled at the foot of Kilimanjaro, offering authentic safari experiences with modern comforts.",
          gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "AA Lodge Amboseli",
          image:
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Comfortable family lodge with excellent facilities, perfect for both first-time and experienced safari-goers.",
          gallery: [
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Taita Hills",
      slug: "taita-hills",
      path: "/taita-hills", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Lush green hills and unique ecosystem",
      details:
        "The Taita Hills Wildlife Sanctuary offers a unique ecosystem with lush green hills, diverse wildlife, and stunning landscapes. It serves as a corridor for wildlife moving between Tsavo East and West National Parks.",
      bestTime: "All year round",
      wildlife: "Elephants, Buffaloes, Antelopes, Bird Species",
      specialFeature:
        "Lush green hills serving as wildlife corridor between Tsavo parks",
      highlights: [
        "Mountain Views",
        "Unique Ecosystem",
        "Bird Watching",
        "Hiking",
      ],
      lodges: [
        {
          name: "Taita Hills Safari Resort",
          image:
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Luxurious resort with stunning views of the Taita Hills, offering comfortable accommodations and excellent game viewing.",
          gallery: [
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Salt Lick Sanctuary",
      slug: "salt-lick",
      path: "/salt-lick", // Changed to individual park page
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Famous tree-top lodge and wildlife",
      details:
        "Salt Lick Sanctuary is renowned for its unique tree-top lodge and abundant wildlife that gathers at the natural salt licks. The sanctuary offers incredible opportunities for wildlife photography and close animal encounters.",
      bestTime: "All year round",
      wildlife: "Elephants, Buffaloes, Antelopes, Bird Species",
      specialFeature: "Iconic tree-top lodge overlooking salt licks",
      highlights: [
        "Tree-top Lodge",
        "Salt Licks",
        "Night Game Drives",
        "Wildlife Photography",
      ],
      lodges: [
        {
          name: "Salt Lick Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Iconic tree-top lodge offering unique elevated views of wildlife at the salt licks and waterholes.",
          gallery: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToParks = () => {
    document
      .getElementById("parks-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // When user clicks on park card (shows lodge modal)
  const handleParkClick = (park) => {
    setSelectedPark(park);
    setShowLodgeModal(true);
  };

  // When user clicks "View Park Details" button (shows park details modal)
  const handleShowParkDetails = (park) => {
    setSelectedPark(park);
    setShowParkModal(true);
  };

  // When user clicks "Explore More" or wants to go to individual park page
  const handleExplorePark = (parkPath) => {
    navigate(parkPath);
  };

  // When user selects a lodge from the modal
  const handleSelectLodge = (lodge) => {
    // Store booking data in localStorage to carry to safaris page
    const bookingData = {
      park: selectedPark,
      lodge: lodge,
      step: "lodge_selected",
    };
    localStorage.setItem("safariBooking", JSON.stringify(bookingData));

    // Navigate to safaris page with the selected park pre-loaded
    navigate(
      `/safaris?park=${selectedPark.slug}&lodge=${lodge.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    );
    setShowLodgeModal(false);
  };

  const closeModal = () => {
    setShowLodgeModal(false);
    setSelectedPark(null);
  };

  const closeParkModal = () => {
    setShowParkModal(false);
    setSelectedPark(null);
  };

  // Function to send email with user's lodge selection
  const sendLodgeInquiry = (lodge) => {
    const subject = `Inquiry about ${lodge.name} in ${selectedPark.name}`;
    const body = `Dear Joztembo Tours,

I am interested in ${lodge.name} located in ${selectedPark.name}.

Park Information:
- Park: ${selectedPark.name}
- Best Time to Visit: ${selectedPark.bestTime}
- Highlights: ${selectedPark.highlights.join(", ")}

Lodge Details:
- Lodge Name: ${lodge.name}
- Description: ${lodge.description}

Please send me more information about availability, pricing, and booking options.

Thank you,
[Your Name]`;

    window.open(
      `mailto:tembo4401@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              {slides[currentSlide].subtitle}
            </p>
            <button
              onClick={scrollToParks}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              Explore Our Parks
            </button>
          </div>
        </div>

        {/* Slideshow indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-amber-500"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Parks Section */}
      <section id="parks-section" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-serif">
            Kenya's Premier Safari Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parks.map((park) => (
              <div
                key={park.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 border border-amber-100"
              >
                {/* Card click area - shows lodges */}
                <div
                  className="relative h-64 overflow-hidden"
                  onClick={() => handleParkClick(park)}
                >
                  <img
                    src={park.image}
                    alt={park.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{park.name}</h3>
                    <p className="text-amber-200 font-medium">
                      {park.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {park.lodges.length} Lodges
                    </span>
                  </div>
                </div>
                <div className="p-4 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowParkDetails(park);
                    }}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    View Park Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExplorePark(park.path);
                    }}
                    className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Explore Park
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Others Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
            <div className="text-center">
              <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                Other Amazing Destinations
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Discover more incredible safari experiences including Samburu
                National Reserve, Meru National Park, and private conservancies
                for exclusive wildlife encounters.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Samburu",
                  "Meru",
                  "Laikipia",
                  "Aberdare",
                  "Private Conservancies",
                ].map((destination) => (
                  <span
                    key={destination}
                    className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-amber-200"
                  >
                    {destination}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lodge Selection Modal */}
      {showLodgeModal && selectedPark && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedPark.image}
                alt={selectedPark.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
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
                <h2 className="text-3xl font-bold">
                  {selectedPark.name} Lodges
                </h2>
                <p className="text-amber-200 text-lg">
                  Select a lodge or explore park details
                </p>
              </div>
            </div>

            {/* Modal Content - Only Lodges */}
            <div className="p-6">
              {/* Lodges Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Available Lodges in {selectedPark.name}
                </h3>
                <div className="space-y-6">
                  {selectedPark.lodges.map((lodge, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-6 bg-white shadow-lg"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/3">
                          <img
                            src={lodge.image}
                            alt={lodge.name}
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                        </div>

                        <div className="lg:w-2/3">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">
                            {lodge.name}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {lodge.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => handleSelectLodge(lodge)}
                              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex-1"
                            >
                              Select This Lodge
                            </button>

                            <button
                              onClick={() => sendLodgeInquiry(lodge)}
                              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 flex-1"
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
                              Email Inquiry
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Back to Parks
                  </button>
                  <button
                    onClick={() => handleExplorePark(selectedPark.path)}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Explore {selectedPark.name} Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Park Details Modal (Shows when clicking "View Park Details") */}
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
                onClick={closeParkModal}
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedPark.details}
                </p>

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

              {/* Available Lodges Preview */}
              {selectedPark.lodges && selectedPark.lodges.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Available Lodges in {selectedPark.name}
                  </h3>
                  <div className="space-y-4">
                    {selectedPark.lodges.slice(0, 2).map((lodge, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-amber-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={lodge.image}
                            alt={lodge.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">
                              {lodge.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {lodge.description.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {selectedPark.lodges.length > 2 && (
                      <p className="text-center text-amber-600 font-semibold">
                        + {selectedPark.lodges.length - 2} more lodges available
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={closeParkModal}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Back to Parks
                </button>
                <button
                  onClick={() => setShowLodgeModal(true)}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Lodges
                </button>
                <button
                  onClick={() => handleExplorePark(selectedPark.path)}
                  className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Explore Park Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            Begin Your Safari Adventure
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us to book your unforgettable Kenyan safari experience.
            We'll create a custom itinerary perfect for you, tailored to your
            preferences and schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:tembo4401@gmail.com"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-3 transform hover:scale-105 shadow-lg"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us via Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
