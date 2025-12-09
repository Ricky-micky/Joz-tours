// components/Safaris.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Safaris = () => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedLodge, setSelectedLodge] = useState(null);
  const [step, setStep] = useState(1); // 1: Park, 2: Lodge, 3: Options, 4: Booking
  const [bookingForm, setBookingForm] = useState({
    days: 3,
    travelers: 1,
    startDate: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Add the parks data (copy from your Home.js or create separate data file)
  const parks = [
    {
      id: 1,
      name: "Maasai Mara",
      slug: "maasai-mara",
      path: "/maasaimara",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      description: "Witness the Great Wildebeest Migration",
      pricePerDay: 350,
      highlights: ["Great Migration", "Big Cats", "Maasai Culture"],
      bestTime: "July to October",
      wildlife: "Lions, Cheetahs, Leopards, Elephants, Rhinos, Buffaloes",
      specialFeature: "Annual Great Migration of over 1.5 million wildebeest",
      lodges: [
        {
          name: "Sweet Acacia Camp",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
          description:
            "Luxurious tented camp offering intimate wildlife experiences",
        },
        {
          name: "Mara Serena Safari Lodge",
          image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
          description: "Award-winning lodge with panoramic views",
        },
      ],
    },
    {
      id: 2,
      name: "Lake Nakuru National Park",
      slug: "lake-nakuru",
      path: "/lake-nakuru",
      image: "https://images.unsplash.com/photo-1549317336-206009e0c0d3",
      description: "Famous for flamingos and rhino sanctuary",
      pricePerDay: 250,
      highlights: ["Flamingos", "Rhino Sanctuary", "Bird Watching"],
      bestTime: "June to March",
      wildlife: "Flamingos, Rhinos, Lions, Leopards, Waterbucks",
      specialFeature:
        "Sometimes over a million flamingos coloring the lake pink",
      lodges: [
        {
          name: "Lake Nakuru Lodge",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
          description: "Modern lodge with stunning lake views",
        },
      ],
    },
    {
      id: 3,
      name: "Tsavo East",
      slug: "tsavo-east",
      path: "/tsavoeast",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: "Vast wilderness with red elephants",
      pricePerDay: 270,
      highlights: ["Red Elephants", "Mudanda Rock", "Lugard Falls"],
      bestTime: "April to October & January to February",
      wildlife: "Red Elephants, Lions, Buffaloes, Giraffes, Antelopes",
      specialFeature: "Famous 'red elephants' dusted in red volcanic soil",
      lodges: [
        {
          name: "Voi Safari Lodge",
          image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
          description: "Overlooking waterhole with excellent game viewing",
        },
      ],
    },
    {
      id: 4,
      name: "Tsavo West",
      slug: "tsavo-west",
      path: "/tsavowest",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
      description: "Diverse landscapes and Mzima Springs",
      pricePerDay: 260,
      highlights: ["Mzima Springs", "Volcanic Cones", "Rhino Sanctuary"],
      bestTime: "April to October & January to February",
      wildlife: "Hippos, Crocodiles, Rhinos, Elephants, Lions, Leopards",
      specialFeature: "Mzima Springs with underwater hippo and fish viewing",
      lodges: [
        {
          name: "Kilaguni Serena Lodge",
          image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
          description: "First lodge built in a Kenyan national park",
        },
      ],
    },
    {
      id: 5,
      name: "Amboseli",
      slug: "amboseli",
      path: "/amboseli",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      description: "Elephants with Mount Kilimanjaro backdrop",
      pricePerDay: 300,
      highlights: ["Elephant Herds", "Mount Kilimanjaro", "Big Five"],
      bestTime: "June to October & January to February",
      wildlife: "Elephants, Lions, Cheetahs, Buffaloes, Hippos, Giraffes",
      specialFeature: "Large elephant herds with Kilimanjaro backdrop",
      lodges: [
        {
          name: "Hunters Manor",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
          description: "Boutique lodge with Kilimanjaro views",
        },
        {
          name: "Kilima Safari Camp",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
          description: "Eco-friendly camp at Kilimanjaro's foot",
        },
      ],
    },
    {
      id: 6,
      name: "Taita Hills",
      slug: "taita-hills",
      path: "/taitahills",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      description: "Lush green hills and unique ecosystem",
      pricePerDay: 240,
      highlights: ["Mountain Views", "Unique Ecosystem", "Bird Watching"],
      bestTime: "All year round",
      wildlife: "Elephants, Buffaloes, Antelopes, Bird Species",
      specialFeature:
        "Lush green hills serving as wildlife corridor between Tsavo parks",
      lodges: [
        {
          name: "Taita Hills Safari Resort",
          image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
          description: "Luxurious resort with stunning hill views",
        },
      ],
    },
    {
      id: 7,
      name: "Salt Lick Sanctuary",
      slug: "salt-lick",
      path: "/park/salt-lick",
      image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
      description: "Famous tree-top lodge and wildlife",
      pricePerDay: 280,
      highlights: ["Tree-top Lodge", "Salt Licks", "Night Game Drives"],
      bestTime: "All year round",
      wildlife: "Elephants, Buffaloes, Antelopes, Bird Species",
      specialFeature: "Iconic tree-top lodge overlooking salt licks",
      lodges: [
        {
          name: "Salt Lick Safari Lodge",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
          description: "Iconic tree-top lodge overlooking salt licks",
        },
      ],
    },
  ];

  useEffect(() => {
    // Check for data from Home page or URL
    const params = new URLSearchParams(location.search);
    const parkSlug = params.get("park");
    const lodgeName = params.get("lodge");

    // Get stored booking data
    const storedBooking = localStorage.getItem("safariBooking");

    if (storedBooking) {
      const data = JSON.parse(storedBooking);
      setSelectedPark(data.park);
      setSelectedLodge(data.lodge);
      setStep(3); // Skip to options step
    } else if (parkSlug) {
      // Find park by slug
      const foundPark = parks.find((p) => p.slug === parkSlug);
      if (foundPark) {
        setSelectedPark(foundPark);
        setStep(1);
      }
    }
  }, [location]);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // UPDATED: Connect to your backend
  const handleSubmitBooking = async () => {
    try {
      // Calculate total price
      const totalPrice =
        selectedPark.pricePerDay * bookingForm.days * bookingForm.travelers;

      // Create itinerary
      const itinerary = `Safari to ${selectedPark.name} for ${
        bookingForm.days
      } days 
Day 1: Arrival and check-in at ${selectedLodge.name}
Day 2-${bookingForm.days - 1}: Game drives and wildlife viewing
Day ${bookingForm.days}: Departure`;

      // Prepare data for your backend
      const bookingData = {
        park: selectedPark.name,
        lodge: selectedLodge.name,
        days: bookingForm.days,
        travelers: bookingForm.travelers,
        totalPrice: totalPrice,
        fullName: bookingForm.fullName,
        email: bookingForm.email,
        phone: bookingForm.phone,
        startDate: bookingForm.startDate || "Flexible",
        message: bookingForm.message || "",
        parkHighlights: selectedPark.highlights?.join(", ") || "N/A",
        bestTime: selectedPark.bestTime || "N/A",
        wildlife: selectedPark.wildlife || "N/A",
        specialFeature: selectedPark.specialFeature || "N/A",
        lodgeDescription: selectedLodge.description || "N/A",
        itinerary: itinerary,
      };

      console.log("📤 Sending booking to backend...", bookingData);

      // Send to your Flask backend
      const response = await fetch("http://localhost:5000/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "✅ Booking request sent successfully! Check your email for confirmation."
        );

        // Clear storage
        localStorage.removeItem("safariBooking");

        // Navigate home
        navigate("/");
      } else {
        // If backend fails, use fallback email
        sendDirectEmail(bookingData);
      }
    } catch (error) {
      console.error("Error sending booking to backend:", error);

      // Fallback to direct email
      const totalPrice =
        selectedPark.pricePerDay * bookingForm.days * bookingForm.travelers;
      const fallbackData = {
        park: selectedPark.name,
        lodge: selectedLodge.name,
        days: bookingForm.days,
        travelers: bookingForm.travelers,
        totalPrice: totalPrice,
        fullName: bookingForm.fullName,
        email: bookingForm.email,
        phone: bookingForm.phone,
        startDate: bookingForm.startDate || "Flexible",
        message: bookingForm.message || "",
      };

      sendDirectEmail(fallbackData);
    }
  };

  // Fallback email function
  const sendDirectEmail = (data) => {
    const emailBody = `
Safari Booking Details:

PARK: ${data.park}
LODGE: ${data.lodge}
DURATION: ${data.days} days
TRAVELERS: ${data.travelers}
START DATE: ${data.startDate}
TOTAL PRICE: $${data.totalPrice}

CUSTOMER DETAILS:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}

MESSAGE: ${data.message || "No additional message"}

Thank you for choosing Joztembo Tours!
    `.trim();

    window.open(
      `mailto:tembo4401@gmail.com?subject=Safari Booking: ${
        data.park
      }&body=${encodeURIComponent(emailBody)}`
    );

    // Clear storage
    localStorage.removeItem("safariBooking");

    // Show confirmation
    alert(
      "📧 Booking request sent via email! Check your inbox for confirmation."
    );
    navigate("/");
  };

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Steps */}
        <div className="flex justify-between mb-12">
          {["Park", "Lodge", "Options", "Booking"].map((stepName, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? "bg-green-500"
                    : step === index + 1
                    ? "bg-amber-600"
                    : "bg-gray-300"
                } text-white font-bold`}
              >
                {step > index + 1 ? "✓" : index + 1}
              </div>
              <span className="mt-2 text-sm">{stepName}</span>
            </div>
          ))}
        </div>

        {/* Step 1: Park Selection */}
        {step === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Select Your Safari Park</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {parks.map((park) => (
                <button
                  key={park.id}
                  onClick={() => {
                    setSelectedPark(park);
                    handleNextStep();
                  }}
                  className="text-left p-4 border rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-800">{park.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {park.description}
                  </p>
                  <p className="text-amber-600 text-sm mt-2 font-medium">
                    From ${park.pricePerDay}/day
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Lodge Selection */}
        {step === 2 && selectedPark && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Select Lodge in {selectedPark.name}
            </h2>
            <div className="space-y-4">
              {selectedPark.lodges.map((lodge, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedLodge(lodge);
                    handleNextStep();
                  }}
                  className="w-full text-left p-4 border rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={lodge.image}
                      alt={lodge.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">{lodge.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {lodge.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={handleBackStep}
              className="mt-6 text-amber-600 hover:text-amber-700 font-medium"
            >
              ← Back to Parks
            </button>
          </div>
        )}

        {/* Step 3: Options */}
        {step === 3 && selectedPark && selectedLodge && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Customize Your Safari</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Days
                </label>
                <select
                  name="days"
                  value={bookingForm.days}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {[2, 3, 4, 5, 6, 7].map((d) => (
                    <option key={d} value={d}>
                      {d} days
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Travelers
                </label>
                <select
                  name="travelers"
                  value={bookingForm.travelers}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((t) => (
                    <option key={t} value={t}>
                      {t} traveler{t !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={bookingForm.startDate}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Summary */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Booking Summary
                </h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="font-medium">Park:</span>{" "}
                    {selectedPark.name}
                  </p>
                  <p>
                    <span className="font-medium">Lodge:</span>{" "}
                    {selectedLodge.name}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span>{" "}
                    {bookingForm.days} days
                  </p>
                  <p>
                    <span className="font-medium">Estimated Total:</span> $
                    {selectedPark.pricePerDay *
                      bookingForm.days *
                      bookingForm.travelers}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleBackStep}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-1 py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
                >
                  Continue to Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Final Booking */}
        {step === 4 && selectedPark && selectedLodge && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Complete Your Booking</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={bookingForm.fullName}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="+254 XXX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleFormChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  rows="4"
                  placeholder="Any special requirements, dietary restrictions, or specific requests..."
                />
              </div>

              {/* Final Summary */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Final Booking Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Park:</span>
                    <span className="font-medium">{selectedPark.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lodge:</span>
                    <span className="font-medium">{selectedLodge.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{bookingForm.days} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers:</span>
                    <span className="font-medium">
                      {bookingForm.travelers} people
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start Date:</span>
                    <span className="font-medium">
                      {bookingForm.startDate || "Flexible"}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-amber-300">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Price:</span>
                      <span className="text-amber-700">
                        $
                        {selectedPark.pricePerDay *
                          bookingForm.days *
                          bookingForm.travelers}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleBackStep}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmitBooking}
                  className="flex-1 py-3 px-6 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Safaris;
