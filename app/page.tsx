'use client'
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('About Me');
  const [images, setImages] = useState<string[]>([
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop'
  ]);

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const tabContent: Record<string, string> = {
    'About Me': `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
    Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. 
    I've been working at this awesome company for 3 years now.
    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
    Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.`,
    'Experiences': `With over 3 years at Salesforce, I've helped numerous clients transform their sales processes and achieve remarkable growth.

My experience includes enterprise solutions, CRM implementations, and strategic consulting. I specialize in helping teams maximize their potential through technology.`,
    'Recommended': `I highly recommend exploring our latest Salesforce features and tools that can help streamline your workflow.

Check out our new AI-powered insights and automation capabilities that are transforming how sales teams operate.`
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const result = event.target?.result;
          if (typeof result === 'string') {
            setImages([...images, result]);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    const gallery = document.getElementById('gallery');
    const scrollAmount = 300;
    if (gallery) {
      if (direction === 'left') {
        gallery.scrollLeft -= scrollAmount;
      } else {
        gallery.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#373E44] to-[#191B1F] flex p-4 lg:p-8 gap-4 lg:gap-8 overflow-hidden">
      <style jsx>{`
        .tabs-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .tabs-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
          margin: 4px;
        }
        .tabs-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #4A5568, #96BEE7);
          border-radius: 10px;
        }
        .tabs-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #5A6578, #A6CEF7);
        }
        .content-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .content-scrollbar::-webkit-scrollbar-track {
          border-radius: 10px;
        }
        .content-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #888989, #4A4E54);
          border-radius: 10px;
        }
        .content-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #5A6578, #999999);
        }
        #gallery::-webkit-scrollbar {
          display: none;
        }
        @keyframes slideRight {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
      `}</style>

      {/* Left half - Empty */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="bg-[#616161D1] backdrop-blur-sm rounded-3xl shadow-2xl h-full border border-[#96BEE7]">
        </div>
      </div>

      {/* Right half - Widgets */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 overflow-hidden">
        {/* About Me Widget */}
        <div className="bg-[#363C43] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 flex-1 flex flex-col min-h-0">
          <div className="flex flex-col h-full">
            {/* Tabs */}
            <div className="flex gap-2 px-4 lg:px-6 pt-4 lg:pt-6 flex-shrink-0">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center"><img src="/images/questionmark.png" alt="questionmark" /></div>
              </div>
              <div className='bg-[#171717] shadow-[4px_5px_30px_5px_rgba(0,0,0,0.7)] p-2 rounded-2xl overflow-x-auto tabs-scrollbar w-[calc(100%-60px)]'>
                <div className="flex gap-2 min-w-min justify-between">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-12 lg:px-12 py-2 lg:py-3 rounded-2xl text-sm lg:text-lg font-medium transition-all duration-300 overflow-hidden whitespace-nowrap
                        ${activeTab === tab
                          ? 'bg-[#28292F] text-white shadow-lg'
                          : 'text-gray-400'
                        }`}
                      style={{
                        background: activeTab === tab 
                          ? '#28292F' 
                          : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (activeTab !== tab) {
                          e.currentTarget.style.background = 'linear-gradient(to right, transparent 0%, #28292F 50%, transparent 100%)';
                          e.currentTarget.style.backgroundSize = '200% 100%';
                          e.currentTarget.style.backgroundPosition = '0% 0%';
                          e.currentTarget.style.animation = 'slideRight 0.3s ease-in-out forwards';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== tab) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.animation = 'none';
                        }
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 lg:px-6 pt-4 pb-4 lg:pb-6 flex flex-1 min-h-0">
              <div className="w-6 lg:w-8 flex-shrink-0">
                <div className="w-full h-24"><img src="/images/widget.png" alt="widget" className='w-16 h-12'/></div>
              </div>
              <div className="p-3 lg:p-6 flex-1 overflow-y-auto content-scrollbar">
                <p className="text-[#969696] text-base lg:text-xl leading-relaxed whitespace-pre-line">
                  {tabContent[activeTab]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bar line */}
        <div className="w-full px-4 lg:px-8 flex-shrink-0">
          <div 
            className="h-1 rounded-[2.46px]"
            style={{
              backdropFilter: 'blur(9.84px)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.33)',
              background: `
                linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
              `
            }}
          ></div>
        </div>

        {/* Gallery Widget */}
        <div className="bg-[#363C43] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 flex-1 flex flex-col min-h-0">
         
          <div className="p-4 lg:p-8 pb-4 flex-shrink-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex gap-2 lg:gap-4 items-center">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm"><img src="/images/questionmark.png" alt="questionmark" /></div>
                </div>
                <h2 className="text-white text-sm lg:text-xl font-semibold bg-[#171717] px-4 lg:px-12 py-2 lg:py-4 rounded-2xl">Gallery</h2>
              </div>
              <div className="flex items-center gap-2 lg:gap-4">
                <button
                  onClick={handleAddImage}
                  className="flex items-center gap-1 lg:gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-full text-white text-xs lg:text-sm font-extrabold transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(104.56px)',
                    boxShadow: `
                      0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset,
                      0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) inset,
                      9px 10px 7.1px 0px rgba(0, 0, 0, 0.4),
                      -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)
                    `
                  }}
                >
                  <Plus size={14} className="lg:w-4 lg:h-4" />
                  <span className="hidden sm:inline">ADD IMAGE</span>
                  <span className="sm:hidden">ADD</span>
                </button>
                <div className='flex gap-2'>
                  <button
                    onClick={() => scrollGallery('left')}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#171717] shadow-[4px_5px_30px_5px_#101213,_-5px_-3px_30px_-10px_#96BEE7] hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-white"><img src="/images/left.png" alt="left" /></span>
                  </button>
                  <button
                    onClick={() => scrollGallery('right')}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#171717] shadow-[4px_5px_30px_5px_#101213,_-5px_-3px_30px_-10px_#96BEE7] hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-white"><img src="/images/right.png" alt="right" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery images */}
          <div className="px-4 lg:px-6 pb-4 lg:pb-8 flex items-center overflow-hidden flex-1 min-h-0">
            <div className="w-6 lg:w-8 flex-shrink-0">
              <div className="w-full h-24"><img src="/images/widget.png" alt="widget" className='w-16 h-12'/></div>
            </div>
            <div
              id="gallery"
              className="flex gap-3 lg:gap-4 overflow-x-auto px-3 lg:px-8 scroll-smooth flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 my-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl shadow-lg hover:-rotate-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar line */}
        <div className="w-full px-4 lg:px-8 flex-shrink-0">
          <div 
            className="h-1 rounded-[2.46px]"
            style={{
              backdropFilter: 'blur(9.84px)',
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.33)',
              background: `
                linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
              `
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

