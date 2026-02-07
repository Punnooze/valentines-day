import { useState } from 'react';
import { haptics } from '../utils/haptics';
import { isEnvelopeUnlocked } from '../utils/timeLogic';

interface EnvelopeCardProps {
  day: number;
  title: string;
  onOpen: () => void;
}

export const EnvelopeCard = ({ day, title, onOpen }: EnvelopeCardProps) => {
  const [isShaking, setIsShaking] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const unlocked = isEnvelopeUnlocked(day);

  const handleTap = () => {
    if (unlocked) {
      haptics.medium();
      onOpen();
    } else {
      haptics.light();
      setIsShaking(true);
      setShowToast(true);
      setTimeout(() => {
        setIsShaking(false);
        setShowToast(false);
      }, 500);
    }
  };

  return (
    <>
      <div
        onClick={handleTap}
        className={`relative bg-white rounded-2xl p-6 shadow-lg active:scale-95 transition-transform ${
          isShaking ? 'shake' : ''
        } ${!unlocked ? 'opacity-60' : ''}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Day {day}</div>
            <div className="text-lg font-medium text-gray-800">{title}</div>
          </div>
          <div className="text-4xl">
            {unlocked ? '💌' : '🔒'}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50">
          Not yet! 💕
        </div>
      )}
    </>
  );
};
