import { useState } from 'react';
import { EnvelopeCard } from './EnvelopeCard';
import { LetterModal } from './LetterModal';
import { envelopes } from '../data/envelopes';
import type { Envelope } from '../types';

export const EnvelopeHub = () => {
  const [selectedEnvelope, setSelectedEnvelope] = useState<Envelope | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-6 pb-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-light text-gray-800 mb-2">
            7 letters. One for each day. 💌
          </h1>
          <p className="text-gray-600">
            Open them whenever you want.
          </p>
        </div>

        <div className="space-y-4">
          {envelopes.map((envelope) => (
            <EnvelopeCard
              key={envelope.day}
              day={envelope.day}
              title={envelope.title}
              onOpen={() => setSelectedEnvelope(envelope)}
            />
          ))}
        </div>
      </div>

      {selectedEnvelope && (
        <LetterModal
          envelope={selectedEnvelope}
          onClose={() => setSelectedEnvelope(null)}
        />
      )}
    </div>
  );
};
