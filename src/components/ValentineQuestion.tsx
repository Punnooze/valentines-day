import { useState } from 'react';
import confetti from 'canvas-confetti';
import { haptics } from '../utils/haptics';

interface ValentineQuestionProps {
  onYes: () => void;
}

export const ValentineQuestion = ({ onYes }: ValentineQuestionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(false);

  const handleYes = () => {
    haptics.strong();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 200);
    onYes();
  };

  const handleNo = () => {
    haptics.light();
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-6">
      <div className="text-center space-y-12 max-w-md">
        <h1 className="text-4xl font-light text-gray-800">
          Will you be my Valentine? 🩷
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={handleYes}
            className="w-full px-8 py-4 bg-rose-500 text-white rounded-full text-xl font-medium shadow-lg active:scale-95 transition-transform"
          >
            YES 💖
          </button>
          
          <button
            onClick={handleNo}
            style={{
              position: noButtonPosition.x || noButtonPosition.y ? 'fixed' : 'relative',
              left: noButtonPosition.x || undefined,
              top: noButtonPosition.y || undefined,
            }}
            className="w-full px-8 py-4 bg-gray-300 text-gray-700 rounded-full text-xl font-medium shadow-lg active:scale-95 transition-transform"
          >
            No
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg w-[200px]">
          Excuse mee! Nice try
        </div>
      )}
    </div>
  );
};
