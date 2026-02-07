import { useState } from 'react';
import { haptics } from '../utils/haptics';

interface BuildupProps {
  onComplete: () => void;
}

const messages = [
  "Being far from you isn't easy.",
  "But loving you is💕",
  "So I wanted to ask you something..."
];

export const Buildup = ({ onComplete }: BuildupProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTap = () => {
    haptics.light();
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div 
      onClick={handleTap}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-6 cursor-pointer"
    >
      <div className="text-center max-w-md">
        <p className="text-2xl font-light text-gray-800 leading-relaxed">
          {messages[currentIndex]}
        </p>
        <p className="text-sm text-gray-500 mt-8">Tap to continue</p>
      </div>
    </div>
  );
};
