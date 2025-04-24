import { useState } from "react";
import { ArrowRight, Wand2 } from "lucide-react";

import EditableText from "../ui/EditableText";
import { generateRandomContent } from "../../utils/randomizer.js";
import heroContentData from "../../data/heroContent.json";

const HeroSection = ()=>{
    const {defaultContent} = heroContentData;
    const [headline,setHeadline] = useState(defaultContent.headline);
    const [subheadline, setSubHeadLine] = useState(defaultContent.subheadline);
    const [image, setImage] = useState(defaultContent.image);
    const [buttonText, setButtonText] = useState(defaultContent.buttonText);

    const regenerateContent = ()=>{
        const newContent = generateRandomContent(heroContentData);
        setHeadline(newContent.headline);
        setSubHeadLine(newContent.subheadline)
        setImage(newContent.image);
    }
    return (
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 min-h-screen">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <EditableText content={headline} onUpdate={setHeadline} />
              </h1>
              <p className="Text-xl text-gray-700 max-w-lg">
                <EditableText content={subheadline} onUpdate={setSubHeadLine} />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all shadow-lg hover:shadow-xl group">
                  <EditableText content={buttonText} onUpdate={setButtonText}/>
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
                 
              <button 
                onClick={regenerateContent}
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all"
              >
                <Wand2 className="mr-2" size={18} />
                Regenerate with AI
              </button>
            </div>
            <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-20"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={image} 
                  alt="Platform Demo" 
                  className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
              </div>
            </div>
         </div>
        </section>
    );
}
export default HeroSection;