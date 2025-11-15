import React, { useState } from "react";

const Accommodation = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hotels = [
    {
      id: 1,
      name: "Turtle Bay Beach Club",
      location: "watamu",
      area: "Watamu",
      price: "$180/night",
      description:
        "Family-friendly beach resort with stunning ocean views, multiple pools, and direct beach access. Perfect for families and couples.",
      amenities: [
        "Swimming Pool",
        "Spa",
        "Beach Access",
        "Restaurant",
        "Kids Club",
        "WiFi",
      ],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example1",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hemmingways Watamu",
      location: "watamu",
      area: "Watamu",
      price: "$320/night",
      description:
        "Luxurious beachfront resort offering world-class service, fine dining, and exceptional water sports facilities.",
      amenities: [
        "Private Beach",
        "Fine Dining",
        "Diving Center",
        "Spa",
        "Fitness Center",
        "Bar",
      ],
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example2",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Diamond Beach Village",
      location: "malindi",
      area: "Malindi",
      price: "$120/night",
      description:
        "Charming beachfront property with traditional Swahili architecture, lush gardens, and authentic local cuisine.",
      amenities: [
        "Beachfront",
        "Garden",
        "Restaurant",
        "Cultural Shows",
        "Pool",
        "WiFi",
      ],
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example3",
      rating: 4.2,
    },
    {
      id: 4,
      name: "African Pearl Hotel",
      location: "malindi",
      area: "Malindi",
      price: "$90/night",
      description:
        "Comfortable and affordable accommodation with friendly service, located close to Malindi's main attractions.",
      amenities: [
        "Central Location",
        "Pool",
        "Restaurant",
        "Bar",
        "Air Conditioning",
        "WiFi",
      ],
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example4",
      rating: 4.0,
    },
    {
      id: 5,
      name: "Sarova Whitesands Beach Resort",
      location: "mombasa",
      area: "Mombasa",
      price: "$220/night",
      description:
        "Premier beach resort offering extensive facilities, multiple dining options, and entertainment for all ages.",
      amenities: [
        "Multiple Pools",
        "Spa",
        "Beach Access",
        "5 Restaurants",
        "Kids Club",
        "Sports Facilities",
      ],
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example5",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Severin Sea Lodge",
      location: "mombasa",
      area: "Mombasa",
      price: "$190/night",
      description:
        "Tranquil beachfront resort with beautiful tropical gardens, offering a perfect blend of relaxation and adventure.",
      amenities: [
        "Beachfront",
        "Pool",
        "Spa",
        "Diving School",
        "Restaurant",
        "Tropical Gardens",
      ],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example6",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Tsavo Safari Camp",
      location: "safari",
      area: "Tsavo National Park",
      price: "$280/night",
      description:
        "Authentic safari experience with luxury tented accommodation, offering incredible wildlife viewing opportunities.",
      amenities: [
        "Game Drives",
        "Bush Dining",
        "Pool",
        "Guided Walks",
        "Campfire",
        "Wildlife Viewing",
      ],
      images: [
        "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example7",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Amboseli Luxury Lodge",
      location: "safari",
      area: "Amboseli National Park",
      price: "$350/night",
      description:
        "Exclusive lodge with breathtaking views of Mount Kilimanjaro, offering premium safari experiences and luxury amenities.",
      amenities: [
        "Kilimanjaro Views",
        "Luxury Tents",
        "Spa",
        "Game Drives",
        "Fine Dining",
        "Swimming Pool",
      ],
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      googleMapsLink: "https://goo.gl/maps/example8",
      rating: 4.9,
    },
  ];

  const filteredHotels =
    selectedLocation === "all"
      ? hotels
      : hotels.filter((hotel) => hotel.location === selectedLocation);

  const openHotelDetail = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentImageIndex(0);
  };

  const closeHotelDetail = () => {
    setSelectedHotel(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedHotel.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedHotel.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            JozTembo Tours Accommodation
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Discover our carefully selected partner hotels in Watamu, Malindi,
            Mombasa, and exclusive safari lodges
          </p>
        </div>

        {/* Location Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedLocation("all")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedLocation === "all"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            All Locations
          </button>
          <button
            onClick={() => setSelectedLocation("watamu")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedLocation === "watamu"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            Watamu
          </button>
          <button
            onClick={() => setSelectedLocation("malindi")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedLocation === "malindi"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            Malindi
          </button>
          <button
            onClick={() => setSelectedLocation("mombasa")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedLocation === "mombasa"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            Mombasa
          </button>
          <button
            onClick={() => setSelectedLocation("safari")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedLocation === "safari"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-700 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            Safari Lodges
          </button>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => openHotelDetail(hotel)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {hotel.area}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-lg">
                  <span className="text-amber-700 font-bold">
                    {hotel.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-amber-900">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center bg-amber-100 px-2 py-1 rounded">
                    <svg
                      className="w-4 h-4 text-amber-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-amber-700 font-semibold">
                      {hotel.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded">
                      +{hotel.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-amber-600 font-semibold hover:text-amber-800 transition-colors">
                    View Details
                  </button>
                  <a
                    href={hotel.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-amber-600 hover:text-amber-800 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hotel Detail Modal */}
        {selectedHotel && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Image Gallery */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={selectedHotel.images[currentImageIndex]}
                    alt={selectedHotel.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-amber-700"
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
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-amber-700"
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

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedHotel.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeHotelDetail}
                    className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <svg
                      className="w-6 h-6 text-amber-700"
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

                {/* Hotel Details */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-amber-900 mb-2">
                        {selectedHotel.name}
                      </h2>
                      <div className="flex items-center text-amber-700 mb-4">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">
                          {selectedHotel.area}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-100 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-amber-700">
                          {selectedHotel.price}
                        </span>
                      </div>
                      <div className="flex items-center bg-amber-100 px-3 py-2 rounded-lg">
                        <svg
                          className="w-5 h-5 text-amber-500 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-amber-700 font-bold text-lg">
                          {selectedHotel.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-6">
                    {selectedHotel.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">
                      Amenities
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedHotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-amber-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedHotel.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View on Google Maps
                    </a>
                    <button className="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                      Book This Accommodation
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

export default Accommodation;
