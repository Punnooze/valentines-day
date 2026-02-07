import { useState, useEffect } from 'react';
import { Intro } from './components/Intro';
import { Buildup } from './components/Buildup';
import { ValentineQuestion } from './components/ValentineQuestion';
import { Celebration } from './components/Celebration';
import { EnvelopeHub } from './components/EnvelopeHub';
import { hasAcceptedValentine, setValentineAccepted } from './utils/storage';

type Phase = 'intro' | 'buildup' | 'question' | 'celebration' | 'hub';

function App() {
  const [phase, setPhase] = useState<Phase>('intro');

  useEffect(() => {
    if (hasAcceptedValentine()) {
      setPhase('hub');
    }
  }, []);

  const handleValentineAccepted = () => {
    setValentineAccepted();
    setPhase('celebration');
  };

  return (
    <>
      {phase === 'intro' && <Intro onContinue={() => setPhase('buildup')} />}
      {phase === 'buildup' && <Buildup onComplete={() => setPhase('question')} />}
      {phase === 'question' && <ValentineQuestion onYes={handleValentineAccepted} />}
      {phase === 'celebration' && <Celebration onContinue={() => setPhase('hub')} />}
      {phase === 'hub' && <EnvelopeHub />}
    </>
  );
}

export default App;
