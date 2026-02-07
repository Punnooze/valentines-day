# 💌 Valentine Website - Time-Locked Love Letters

A beautiful, mobile-first Valentine's Day website featuring time-locked love letters that unlock one per day.

## Features

- 🎯 Mobile-first, touch-optimized design
- 💘 Interactive Valentine's Day proposal with confetti
- 📬 7 envelopes that unlock one per day
- 📱 Haptic feedback (on supported devices)
- 🎊 Confetti animations for special moments
- 💾 Persistent state (returns to envelope hub on revisit)
- 🔓 Once unlocked, envelopes remain accessible forever

## Getting Started

### 1. Set Your Start Date

Edit `src/utils/timeLogic.ts` and change the `START_DATE`:

```typescript
export const START_DATE = new Date('2026-02-07'); // Change this to your desired start date
```

### 2. Customize the Letters

Edit `src/data/envelopes.ts` to personalize each letter's content.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## How It Works

### Flow

1. **Intro** - Personal greeting
2. **Buildup** - Emotional progression (tap to advance)
3. **Valentine Question** - The big question (with a playful "No" button)
4. **Celebration** - Confetti and happiness
5. **Envelope Hub** - 7 time-locked letters

### Time Logic

- Envelopes unlock based on the `START_DATE` you set
- Day 1 unlocks on the start date
- Day 2 unlocks the next day, and so on
- Once unlocked, envelopes stay accessible forever
- Locked envelopes show a shake animation and toast message when tapped

### Return Visits

The site remembers if the Valentine question was accepted and skips directly to the envelope hub on return visits.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- canvas-confetti
- localStorage for persistence

## Customization Tips

- **Colors**: Edit Tailwind classes in components (currently using pink/rose theme)
- **Messages**: Update `src/data/envelopes.ts` for letter content
- **Haptics**: Adjust durations in `src/utils/haptics.ts`
- **Animations**: Modify CSS animations in `src/index.css`

---

Made with ❤️ for someone special
