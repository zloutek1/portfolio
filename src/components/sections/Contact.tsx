import React from "react";

export function Contact(): React.JSX.Element {
  const email = "tomas@example.com"; // replace with your real email
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard");
    } catch (_) {}
  };
  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-32 left-1/4 w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Let's work together! Reach out via email or GitHub.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href={`mailto:${email}?subject=${encodeURIComponent('Hello Tomas')}&body=${encodeURIComponent('Hi Tomas, ...')}`}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white font-semibold text-lg">Email Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>
          <button
            onClick={handleCopy}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300"
            aria-label="Copy email to clipboard"
          >
            <span className="relative z-10 text-white font-semibold text-lg">Copy Email</span>
          </button>
          <a 
            href="https://github.com/zloutek1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 text-white font-semibold text-lg">GitHub</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>
          </a>
        </div>
      </div>
    </section>
  );
}


