import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { haptics } from '../utils/haptics';
import type { Envelope } from '../types';

interface LetterModalProps {
  envelope: Envelope;
  onClose: () => void;
}

export const LetterModal = ({ envelope, onClose }: LetterModalProps) => {
  useEffect(() => {
    if (envelope.day === 7) {
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }, 300);
    }
  }, [envelope.day]);

  const handleClose = () => {
    haptics.light();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />
      
      <div className="relative bg-amber-50 w-full sm:max-w-lg sm:mx-4 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-amber-50 p-6 pb-4 border-b border-amber-200">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-500 text-2xl leading-none"
          >
            ×
          </button>
          <h2 className="text-2xl font-medium text-gray-800 pr-8">
            {envelope.title}
          </h2>
          <div className="text-sm text-gray-500 mt-1">Day {envelope.day}</div>
        </div>
        
        <div className="p-6">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
            {envelope.content}
          </div>
        </div>
      </div>
    </div>
  );
};
