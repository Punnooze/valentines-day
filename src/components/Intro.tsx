import { haptics } from '../utils/haptics';

interface IntroProps {
  onContinue: () => void;
}

export const Intro = ({ onContinue }: IntroProps) => {
  const handleContinue = () => {
    haptics.light();
    onContinue();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <p className="text-3xl font-light text-gray-800">Hey babe!</p>
          <p className="text-2xl font-light text-gray-700">So, I wanted to do something for you</p>
        </div>
        
        <button
          onClick={handleContinue}
          className="mt-12 px-8 py-4 bg-rose-500 text-white rounded-full text-lg font-medium shadow-lg active:scale-95 transition-transform"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
