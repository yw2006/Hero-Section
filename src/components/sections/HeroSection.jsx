// File: src/components/sections/HeroSection.jsx
import { useState } from "react";
import { ArrowRight, Wand2 } from "lucide-react";
import EditableText from "../ui/EditableText";
import { generateRandomContent } from "../../utils/randomizer";
import heroContentData from "../../data/heroContent.json";

const HeroSection = () => {
  const { defaultContent } = heroContentData;
  const [headline, setHeadline] = useState(defaultContent.headline);
  const [subheadline, setSubheadline] = useState(defaultContent.subheadline);
  const [buttonText, setButtonText] = useState(defaultContent.buttonText);
  const [image, setImage] = useState(defaultContent.image);

  // Function to handle regeneration
  const regenerateContent = () => {
    const newContent = generateRandomContent(heroContentData);
    setHeadline(newContent.headline);
    setSubheadline(newContent.subheadline);
    setImage(newContent.image);
  };

  return (
    <section className="bg-gradient-to-br  from-blue-50 via-indigo-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-2">
              AI-Powered Website
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              <EditableText content={headline} onUpdate={setHeadline} />
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              <EditableText content={subheadline} onUpdate={setSubheadline} />
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl group">
                <EditableText content={buttonText} onUpdate={setButtonText} />
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <button
                onClick={regenerateContent}
                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-medium flex items-center justify-center transition-all shadow-sm hover:shadow"
              >
                <Wand2 className="mr-2" size={18} />
                Regenerate with AI
              </button>
            </div>

            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                <div className="w-8 h-8 rounded-full bg-indigo-400"></div>
                <div className="w-8 h-8 rounded-full bg-purple-400"></div>
                <div className="w-8 h-8 rounded-full bg-pink-400"></div>
              </div>
              <p className="text-sm text-gray-600 ml-4">
                Join <span className="font-semibold">10,000+</span> creators
                today
              </p>
            </div>
          </div>

          {/* Image Side - Reduced size */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>

              {/* Image container with controlled dimensions */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white w-full h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-indigo-600/5"></div>
                <img
                  src={image}
                  alt="Platform Demo"
                  className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-700"
                />

                {/* Image decorations */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-10"></div>
              <div className="absolute bottom-1/3 -left-6 w-16 h-16 bg-indigo-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
