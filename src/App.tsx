"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Gift, Sparkles, Camera, Star, X } from "lucide-react";

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [confettiBursts, setConfettiBursts] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowConfetti(true), 800);
    const timer2 = setTimeout(() => setShowMessage(true), 1200);
    const timer3 = setTimeout(() => setShowGallery(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const confettiColors = [
    "bg-pink-400",
    "bg-purple-400",
    "bg-amber-400",
    "bg-red-400",
    "bg-fuchsia-400",
    "bg-rose-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-violet-400",
  ];

  const photoPlaceholders = [
    { id: 1, src: "/1.1.png", description: "Motu 1" },
    { id: 4, src: "/4.png", description: "Chipkali" },
    { id: 3, src: "/3.png", description: "Aankhein sahi kar" },
    { id: 2, src: "/2.png", description: "Yeh achi photo hai" },
    { id: 5, src: "/5.png", description: "Motu 2" },
  ];

  const handleImageClick = (photo: any) => {
    const index = photoPlaceholders.findIndex((p) => p.id === photo.id);
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photoPlaceholders.length - 1 : prevIndex - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photoPlaceholders.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
          {Array.from({ length: 80 * (confettiBursts + 1) }).map((_, i) => (
            <div
              key={`confetti-${i}`}
              className={`absolute confetti-piece ${
                confettiColors[i % confettiColors.length]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                animationDuration: `${3 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 3}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="fixed top-8 left-8 animate-bounce">
        <div className="w-20 h-24 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full relative shadow-lg">
          <div className="absolute top-2 left-4 w-8 h-6 bg-teal-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-gray-400 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div
        className="fixed top-12 right-12 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-18 h-22 bg-gradient-to-b from-coral-400 to-coral-500 rounded-full relative shadow-lg">
          <div className="absolute top-2 left-3 w-6 h-4 bg-coral-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gray-400 transform -translate-x-1/2"></div>
        </div>
      </div>

      <div
        className="fixed top-16 left-1/3 animate-bounce"
        style={{ animationDelay: "3s" }}
      >
        <div className="w-16 h-20 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-full relative shadow-lg">
          <div className="absolute top-2 left-3 w-6 h-4 bg-emerald-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-18 bg-gray-400 transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
          <div
            className={`relative transition-all duration-1500 ease-out ${
              showMessage
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-75 opacity-0 translate-y-8"
            }`}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-lg border-0 shadow-2xl rounded-3xl hover:shadow-3xl transition-shadow duration-300">
              <div className="relative">
                <div
                  className="w-56 h-56 mx-auto mb-6 bg-gradient-to-br from-pink-200 via-purple-200 to-amber-200 rounded-full flex items-center justify-center border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    handleImageClick({
                      id: 0,
                      title: "Aanchal - Birthday Queen",
                      src: "/1.png",
                    })
                  }
                >
                  <img
                    src="/1.png"
                    alt="Aanchal - Birthday Queen"
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`transition-all duration-1500 delay-300 ease-out ${
              showMessage
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <Star className="w-8 h-8 text-amber-400 animate-pulse" />
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 bg-clip-text text-transparent tracking-tight">
                  Happy Birthday
                </h1>
                <Star className="w-8 h-8 text-amber-400 animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Aanchal!
              </h2>

              <div className="flex items-center justify-center gap-3 mt-8">
                <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
                <p className="text-2xl md:text-3xl font-semibold text-pink-700">
                  To my amazing best friend
                </p>
                <Heart
                  className="w-8 h-8 text-pink-500 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1500 delay-500 ease-out ${
              showMessage
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <Card className="p-8 max-w-3xl bg-gradient-to-br from-white/90 to-teal-50/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl">
              <div className="space-y-6">
                <div className="flex justify-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
                  <Sparkles
                    className="w-8 h-8 text-amber-500 animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <Sparkles
                    className="w-6 h-6 text-amber-500 animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  />
                </div>

                <p className="text-xl md:text-2xl text-amber-800 leading-relaxed font-medium">
                  Ek saal phirse sooraj ka chakkar lga liya par phir bhi height 5th std waali he hai🤭🤭
                </p>

                <p className="text-lg md:text-xl text-amber-700 leading-relaxed">
                  Par height se nhi badi par dil se phele se bohot badi hai (kitna acha likh leta hu mai)
                  You're the only person I'm so close to, and I hope it stays that way.🐷
                  Aur thoda kum kaam kiya kar itna busy rehti hai hatt kabhi baat he na krti😡😡😡
                </p>

                <p className="text-base md:text-lg text-emerald-600 leading-relaxed italic">
                  May this new year bring you endless happiness, exciting
                  adventures, and all your dreams coming true! 🎂✨
                  Aur Aryan se mehnge mehnge gift leliyo 😡😡 
                </p>
              </div>
            </Card>
          </div>

          <div
            className={`transition-all duration-1500 delay-700 ease-out ${
              showGallery
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <Card className="p-8 bg-white/80 backdrop-blur-lg border-0 shadow-2xl rounded-3xl">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Camera className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-teal-700">
                  Our Memory Gallery
                </h3>
                <Camera className="w-6 h-6 text-teal-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {photoPlaceholders.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group cursor-pointer animate-pulse hover:animate-none"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onClick={() => handleImageClick(photo)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                      <img
                        src={photo.src}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white/80 text-xs">
                            {photo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div
            className={`transition-all duration-1500 delay-900 ease-out ${
              showMessage
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                onClick={() => setConfettiBursts(confettiBursts + 1)}
              >
                <Gift className="w-5 h-5 mr-2" />
                More Celebration! 🎊
              </Button>
            </div>
          </div>

          <div className="fixed bottom-12 left-12 animate-bounce">
            <div className="text-6xl opacity-80">🎂</div>
          </div>

          <div
            className="fixed bottom-20 right-16 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-5xl opacity-80">🎁</div>
          </div>

          <div
            className="fixed top-1/3 right-8 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            <div className="text-4xl opacity-80">🌟</div>
          </div>

          <div
            className="fixed top-1/2 left-8 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="text-5xl opacity-80">💖</div>
          </div>

          <div
            className="fixed top-24 left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{ animationDelay: "3s" }}
          >
            <div className="text-3xl opacity-80">✨</div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-black rounded-full "
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-black rounded-full"
              onClick={goToPreviousPhoto}
            >
              {"<"}
            </Button>
            <div className="bg-white rounded-2xl p-4 shadow-2xl w-full">
              <img
                src={
                  photoPlaceholders[currentPhotoIndex].src ||
                  `/abstract-geometric-shapes.png?height=600&width=800&query=${photoPlaceholders[currentPhotoIndex].description} friendship memories`
                }
                alt={photoPlaceholders[currentPhotoIndex].description}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-pink-700 mb-2">
                  {photoPlaceholders[currentPhotoIndex].description}
                </h3>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-black rounded-full"
              onClick={goToNextPhoto}
            >
              {">"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
