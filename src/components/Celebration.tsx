import { haptics } from '../utils/haptics';

interface CelebrationProps {
  onContinue: () => void;
}

const messages = [
  "YAY 🥹",
  "You just made me really happy.",
  "I wish I could be there with you.",
  "But until then..."
];

export const Celebration = ({ onContinue }: CelebrationProps) => {
  const handleContinue = () => {
    haptics.medium();
    onContinue();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-6">
          {messages.map((msg, idx) => (
            <p key={idx} className="text-2xl font-light text-gray-800 leading-relaxed">
              {msg}
            </p>
          ))}
        </div>
        
        <button
          onClick={handleContinue}
          className="mt-12 px-8 py-4 bg-rose-500 text-white rounded-full text-lg font-medium shadow-lg active:scale-95 transition-transform"
        >
          I made something for you
        </button>
      </div>
    </div>
  );
};
