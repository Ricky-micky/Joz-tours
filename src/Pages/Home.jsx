import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Slideshow images data
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Journey Into the Wild Heart of Kenya",
      subtitle: "Premium Safari Experiences in Kenya's Most Iconic Parks",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Witness the Great Migration",
      subtitle: "Experience Nature's Greatest Spectacle in Maasai Mara",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Elephants Against Kilimanjaro",
      subtitle: "Iconic Views in Amboseli National Park",
    },
  ];

  // Parks data with additional details
  const parks = [
    {
      id: 1,
      name: "Maasai Mara",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Witness the Great Wildebeest Migration",
      details:
        "The Maasai Mara National Reserve is one of Africa's most famous wildlife conservation areas. Known for its exceptional population of lions, leopards, and cheetahs, and the annual migration of zebra, Thomson's gazelle, and wildebeest.",
      bestTime: "July to October",
      highlights: ["Great Migration", "Big Five", "Maasai Culture"],
      lodges: [
        {
          name: "Mara Serena Safari Lodge",
          image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Luxurious lodge overlooking the Mara River with premium game viewing opportunities and authentic Maasai cultural experiences.",
          gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
        {
          name: "Basecamp Explorer",
          image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Eco-friendly tented camp offering intimate wildlife encounters and community-based tourism initiatives.",
          gallery: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Samburu National Park",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Home to the rare tree-climbing lions",
      details:
        "Samburu National Reserve is a wildlife paradise in northern Kenya. It's famous for its unique wildlife species not found in other Kenyan parks, including the Grevy's zebra, Somali ostrich, and reticulated giraffe.",
      bestTime: "June to October & December to March",
      highlights: [
        "Tree-climbing Lions",
        "Unique Species",
        "Ewaso Nyiro River",
      ],
      lodges: [
        {
          name: "Samburu Intrepids Club",
          image:
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Luxurious tented camp along the Ewaso Nyiro River with guided nature walks and cultural visits to Samburu villages.",
          gallery: [
            "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Nakuru",
      image:
        "https://images.unsplash.com/photo-1549317336-206009e0c0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Famous for flamingos and rhino sanctuary",
      details:
        "Lake Nakuru National Park is known for its incredible birdlife, including flocks of flamingos that color the lake pink. The park also hosts one of Kenya's largest rhino sanctuaries.",
      bestTime: "June to March",
      highlights: ["Flamingos", "Rhino Sanctuary", "Bird Watching"],
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
      id: 4,
      name: "Amboseli",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Elephants with Mount Kilimanjaro backdrop",
      details:
        "Amboseli National Park is famous for its large elephant herds and spectacular views of Mount Kilimanjaro. The park offers some of the best opportunities to see African wildlife against the backdrop of the continent's highest peak.",
      bestTime: "June to October & January to February",
      highlights: ["Elephant Herds", "Mount Kilimanjaro Views", "Big Five"],
      lodges: [
        {
          name: "Ol Tukai Lodge",
          image:
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
          description:
            "Award-winning lodge with the best views of Mount Kilimanjaro, luxury accommodations, and exceptional elephant viewing.",
          gallery: [
            "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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

  const handleParkClick = (park) => {
    setSelectedPark(park);
    setShowModal(true);
  };

  const handleBookNow = (lodge) => {
    navigate("/safaris", {
      state: {
        park: selectedPark,
        lodge: lodge,
      },
    });
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPark(null);
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
                onClick={() => handleParkClick(park)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 border border-amber-100"
              >
                <div className="relative h-64 overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Park Details Modal */}
      {showModal && selectedPark && (
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
                <h2 className="text-3xl font-bold">{selectedPark.name}</h2>
                <p className="text-amber-200">{selectedPark.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Park Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  About {selectedPark.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedPark.details}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Best Time to Visit
                    </h4>
                    <p className="text-amber-600">{selectedPark.bestTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Highlights
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
                </div>
              </div>

              {/* Lodges Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Featured Lodges
                </h3>
                <div className="space-y-6">
                  {selectedPark.lodges.map((lodge, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <img
                            src={lodge.image}
                            alt={lodge.name}
                            className="w-full h-48 object-cover rounded-lg"
                          />

                          {/* Lodge Gallery */}
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            {lodge.gallery.map((image, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={image}
                                alt={`${lodge.name} ${imgIndex + 1}`}
                                className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-80"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="md:w-2/3">
                          <h4 className="text-xl font-bold text-gray-800 mb-3">
                            {lodge.name}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {lodge.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => handleBookNow(lodge)}
                              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex-1 text-center"
                            >
                              Book Now - Choose Nights
                            </button>

                            <div className="flex gap-2 flex-1">
                              <a
                                href="https://wa.me/27743545012"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 flex-1"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
                                </svg>
                                WhatsApp
                              </a>

                              <a
                                href={`mailto:info@joztembotours.com?subject=Inquiry about ${lodge.name} in ${selectedPark.name}&body=Hello, I'm interested in booking ${lodge.name} in ${selectedPark.name}. Please send me more information.`}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 flex-1"
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
                                Email
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              href="https://wa.me/27743545012"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-3 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
              </svg>
              Chat on WhatsApp
            </a>

            <a
              href="mailto:info@joztembotours.com"
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
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
