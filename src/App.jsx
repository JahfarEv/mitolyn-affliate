import { useState } from "react";
import mitolynImage from "/mitolynImage.jpg"; // adjust path as needed

const MetolynLanding = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);
//   const [email, setEmail] = useState("");

//   console.log(email, "email");
//   const [isLoading, setIsLoading] = useState(false); // Add loading state

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsLoading(true); // Activate loading state

//   const formData = new FormData();
//   formData.append("email", email);

//   try {
//     const res = await fetch(
//       "https://script.google.com/macros/s/AKfycbwe2YvZ1JkaG5mDaT3b7mtIlElyqF-vP1CtZE7YRguNkqmPWvFlVpvTaRATN9s6-bJd/exec",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (!res.ok) throw new Error("Network response was not ok");

//     console.log("Success!");
//     setEmailSubmitted(true);
//   } catch (err) {
//     console.error("Failed to save email", err);
//   } finally {
//     setIsLoading(false); // Always deactivate loading
//   }
// };

// if (!emailSubmitted) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-900 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//         <div className="text-center mb-6">
//           {/* Logo */}
//           <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
//             <span className="text-white font-bold text-xl">M</span>
//           </div>
          
//           {/* Header */}
//           <h2 className="text-2xl font-bold text-gray-800">
//             GET EXCLUSIVE ACCESS
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Enter your email to unlock the full Metolyn experience and special
//             offers
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               required
//               value={email}
//               disabled={isLoading} // Disable during loading
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition disabled:opacity-75"
//               placeholder="your@email.com"
//             />
//           </div>

//           {/* Submit Button with Spinner */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-lg transition flex justify-center items-center disabled:opacity-75 disabled:cursor-not-allowed"
//           >
//             {isLoading ? (
//               // Spinner SVG
//               <svg 
//                 className="animate-spin h-5 w-5 text-white" 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24"
//               >
//                 <circle 
//                   className="opacity-25" 
//                   cx="12" 
//                   cy="12" 
//                   r="10" 
//                   stroke="currentColor" 
//                   strokeWidth="4"
//                 ></circle>
//                 <path 
//                   className="opacity-75" 
//                   fill="currentColor" 
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//             ) : (
//               "CONTINUE TO SITE"
//             )}
//           </button>

//           <p className="text-xs text-gray-500 text-center">
//             We respect your privacy. Your information is safe with us.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



const [emailSubmitted, setEmailSubmitted] = useState(false);
const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  const formData = new FormData();
  formData.append("email", email);

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwe2YvZ1JkaG5mDaT3b7mtIlElyqF-vP1CtZE7YRguNkqmPWvFlVpvTaRATN9s6-bJd/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Network response was not ok");

    setEmailSubmitted(true);
  } catch (err) {
    console.error("Failed to save email", err);
  } finally {
    setIsLoading(false);
  }
};

if (!emailSubmitted) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-900 p-4 relative">
      {/* Global Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
            <p className="mt-4 text-white text-lg font-semibold">Processing...</p>
          </div>
        </div>
      )}

      <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full ${isLoading ? 'opacity-50' : ''}`}>
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800">
            GET EXCLUSIVE ACCESS
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email to unlock the full Metolyn experience and special
            offers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition disabled:opacity-75"
              placeholder="your@email.com"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-75 disabled:cursor-not-allowed"
          >
            CONTINUE TO SITE
          </button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </div>
    </div>
  );
}
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl w-12 h-12 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h1
              className="ml-3 text-2xl font-bold cursor-pointer "
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              METOLYN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#benefits"
                  className="hover:text-amber-300 transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#ingredients"
                  className="hover:text-amber-300 transition-colors"
                >
                  Ingredients
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="hover:text-amber-300 transition-colors"
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-amber-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-amber-300 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition flex items-center cursor-pointer"
            onClick={() =>
              window.open(
                "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            ORDER NOW
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() =>
              window.open(
                "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-amber-400 text-blue-900 py-1 px-4 rounded-full inline-block mb-4 text-sm font-bold">
              June 2025 - New Scientific Discovery
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Harvard Scientists Discover Shocking New Cause Of Slow
              Metabolism...
              <span className="block mt-3 text-amber-300">
                And It's Not What You Think...
              </span>
            </h1>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Harvard scientists have identified a key metabolic trigger that
              affects energy levels and weight management. This breakthrough
              discovery has led to the development of Metolyn - a revolutionary
              formula designed to activate your body's natural metabolic power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-3 px-6 rounded-full transition transform hover:scale-105 flex items-center cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                  )
                }
              >
                UNLOCK YOUR METABOLISM
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-full transition cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                  )
                }
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 flex justify-center cursor-pointer"
            onClick={() =>
              window.open(
                "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
              )
            }
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-[24rem] h-[24rem] flex items-center justify-center shadow-2xl">
                <img
                  src={mitolynImage}
                  alt="Mitolyn Bottle"
                  className="w-[22rem] h-[22rem] rounded-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-blue-900 py-3 px-6 rounded-lg shadow-lg font-bold">
                NEW FORMULA!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section id="benefits" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            What We've Created...
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-4xl font-bold mb-6 text-indigo-800">METOLYN</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Metolyn is unlike anything you've ever tried. This revolutionary
              formula combines 6 rare, scientifically-proven ingredients to
              activate your body's calorie-burning mitochondria and unlock your
              metabolic potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto cursor-pointer">
            <div
              className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition hover:-translate-y-2"
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-indigo-800">
                Boosts Metabolism
              </h4>
              <p className="text-gray-700">
                Activates your body's natural fat-burning mechanisms for 24/7
                calorie burn.
              </p>
            </div>
            <div
              className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition hover:-translate-y-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-indigo-800">
                Increases Energy
              </h4>
              <p className="text-gray-700">
                Supports mitochondrial function for sustained energy throughout
                the day.
              </p>
            </div>
            <div
              className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 transform transition hover:-translate-y-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-indigo-800">
                Enhances Vitality
              </h4>
              <p className="text-gray-700">
                Promotes overall wellness and supports healthy aging at the
                cellular level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section
        id="ingredients"
        className="py-16 px-6 bg-gradient-to-b from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              The Revolutionary Formula
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Inside every Metolyn capsule you'll find a unique proprietary
              blend of 6 rare ingredients that promote calorie-burning
              mitochondria!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ingredient 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6">
                <h3 className="text-2xl font-bold text-white">Maqui Berry</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Maqui Berry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      "Theory: Theories of Life"
                    </h4>
                    <p className="text-sm text-gray-600">
                      Rare Amazonian superfruit
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Powerful antioxidants</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Metabolic boosters</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Natural Energy Enhancers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Theobroma Cacao
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/7450070/pexels-photo-7450070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Maqui Berry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      "Theobromine Cacao"{" "}
                    </h4>
                    <p className="text-sm text-gray-600">Pure cacao extract</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Enhances mitochondrial function</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Supports healthy metabolism</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Rich in antioxidants</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-6">
                <h3 className="text-2xl font-bold text-white">Amla</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4 overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/29180993/pexels-photo-29180993/free-photo-of-close-up-of-amla-fruits-hanging-on-tree-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Amla Fruit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">
                      "Nature’s Vitamin C Powerhouse"
                    </h4>
                    <p className="text-sm text-gray-600">
                      Indian gooseberry superfruit
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Boosts immunity naturally</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Improves digestion and gut health</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Rich source of Vitamin C & antioxidants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              className="bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105"
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              DISCOVER MORE INGREDIENTS
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Real Metolyn Users. Real Life-Changing Results.
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 transform transition hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Peggy S."
                  className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Peggy S.</h3>
                  <div className="flex text-amber-400">★ ★ ★ ★ ★</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I used to be self-conscious about my weight, especially in
                social situations. After trying Metolyn, I've lost 29 lbs and
                gained so much confidence. I feel like myself again!"
              </p>
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center py-3 rounded-lg font-bold">
                Lost 29 lbs in 3 months
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 transform transition hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Robert T."
                  className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">Robert T.</h3>
                  <div className="flex text-amber-400">★ ★ ★ ★ ★</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I've dropped 40 pounds with Metolyn! Now I can play with my
                kids without feeling exhausted. My energy levels are through the
                roof and I feel healthier than I have in years."
              </p>
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center py-3 rounded-lg font-bold">
                Lost 40 lbs in 5 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16 px-6 bg-gradient-to-b from-indigo-900 to-blue-900 text-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Claim Your Discounted Metolyn
            </h2>
            <h3 className="text-2xl text-amber-400 font-bold">
              Below For Huge Savings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden transform transition hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6">
                <h3 className="text-2xl font-bold">1 BOTTLE</h3>
                <p className="text-blue-100">30 Day Supply</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-900 mb-4">$79</div>
                <div className="text-gray-500 mb-8 line-through">$99</div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>30-day supply</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Free shipping</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>90-day money-back guarantee</span>
                  </li>
                </ul>
                <button
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-full w-full transition transform hover:scale-105 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                    )
                  }
                >
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Package 2 - Popular */}
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden relative transform transition hover:-translate-y-2">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 font-bold rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-6">
                <h3 className="text-2xl font-bold">6 BOTTLES</h3>
                <p className="text-amber-100">180 Day Supply</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-900 mb-4">
                  $294
                </div>
                <div className="text-gray-500 mb-8 line-through">$594</div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>180-day supply</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>Free shipping</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>90-day money-back guarantee</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>FREE Metabolic Guide eBook</span>
                  </li>
                </ul>
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full w-full transition transform hover:scale-105 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                    )
                  }
                >
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden transform transition hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6">
                <h3 className="text-2xl font-bold">3 BOTTLES</h3>
                <p className="text-blue-100">90 Day Supply</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-900 mb-4">
                  $177
                </div>
                <div className="text-gray-500 mb-8 line-through">$297</div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>90-day supply</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Free shipping</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>90-day money-back guarantee</span>
                  </li>
                </ul>
                <button
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-full w-full transition transform hover:scale-105 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                    )
                  }
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-full w-32 h-32 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl font-bold">90</div>
                    <div className="text-lg font-bold">DAY</div>
                    <div className="text-sm">GUARANTEE</div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  100% SATISFACTION
                </h2>
                <h3 className="text-2xl text-amber-600 font-bold mb-6">
                  90-DAY MONEY BACK GUARANTEE
                </h3>
                <p className="text-gray-700">
                  We stand behind Metolyn with our 90-day money-back guarantee.
                  If you're not completely satisfied with your results, simply
                  return the bottles (even if empty) within 90 days for a full
                  refund. No questions asked. Your satisfaction is our top
                  priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-16 px-6 bg-gradient-to-b from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200 py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h3 className="text-xl font-bold">
                Common Questions About Metolyn
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {/* FAQ Item 1 */}
              <div className="p-6 hover:bg-blue-50 transition">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Is Metolyn right for me?
                  </h4>
                  <span className="text-amber-500 font-bold">✓</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Metolyn is designed for adults looking to support their
                  metabolism and energy levels. If you're experiencing low
                  energy, difficulty maintaining a healthy weight, or simply
                  want to optimize your metabolic health, Metolyn may be right
                  for you.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="p-6 hover:bg-blue-50 transition">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Is Metolyn safe?
                  </h4>
                  <span className="text-amber-500 font-bold">✓</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Absolutely. Metolyn is made with natural ingredients and
                  manufactured in a GMP-certified facility. It's free from
                  artificial additives, fillers, and common allergens. As with
                  any supplement, consult with your healthcare provider if you
                  have specific health concerns.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="p-6 hover:bg-blue-50 transition">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    How many bottles should I order?
                  </h4>
                  <span className="text-amber-500 font-bold">✓</span>
                </div>
                <p className="mt-2 text-gray-600">
                  For best results, we recommend a 3-6 month supply. Our
                  6-bottle package offers the best value and ensures you have
                  enough to experience the full benefits. Most users start
                  noticing significant results within 30-60 days.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="p-6 hover:bg-blue-50 transition">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    What if Metolyn doesn't work for me?
                  </h4>
                  <span className="text-amber-500 font-bold">✓</span>
                </div>
                <p className="mt-2 text-gray-600">
                  We're confident in Metolyn, which is why we offer a 90-day
                  money-back guarantee. If you're not satisfied for any reason,
                  simply return the bottles (even if empty) within 90 days for a
                  full refund.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              className="bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://52a327dfgx1vs9ebph3b-a5nc0.hop.clickbank.net"
                )
              }
            >
              ORDER METOLYN NOW
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h2 className="ml-3 text-2xl font-bold">METOLYN</h2>
              </div>
              <p className="mt-4 text-blue-200 max-w-md">
                Unlock your metabolic potential with Metolyn - the revolutionary
                formula developed from Harvard research to activate your body's
                natural calorie-burning power.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
              <p className="text-blue-300">
                © 2025 Metolyn. All rights reserved.
              </p>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
            <p>
              Disclaimer: These statements have not been evaluated by the Food
              and Drug Administration. This product is not intended to diagnose,
              treat, cure, or prevent any disease. Results may vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MetolynLanding;
