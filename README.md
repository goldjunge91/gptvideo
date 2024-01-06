# GPT Video - Reproducing the Gemini demo using GPT 4 Vision

## 🌌 Overview

After seeing the 'gemini' video, I asked myself: Could the 'gemini' experience showcased by Google be more than just a scripted demo?
This project is a fun experiment to explore the feasibility of real-time AI interactions similar to those portrayed in 'gemini'.

## ✨ Demo


## 🚀 Getting Started

You can provide the `OPENAI_API_KEY`` environment variable or let the user provide its own API key in the UI.
### Setup process
'
* befor install:* 
    Miniconda
    Flutter
    Node.js (windows nvm)
'
then new folder 
`npx create-next-app@latest --ts --tailwind --eslint
    >`Name: "gpt-vision"
    >`yes/yes/No`y
    >`cd "app name  "`
    >`npm install ai openai silence-aware-recorder @wmik/use-media-recorder merge-images --force`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🔧 Constants

Some constants are fixed at the top of `/src/app/page.js`. You may want to tweak these :

```js
const INTERVAL = 250;
const IMAGE_WIDTH = 512;
const IMAGE_QUALITY = 0.6;
const COLUMNS = 4;
const MAX_SCREENSHOTS = 60;
const SILENCE_DURATION = 2500;
const SILENT_THRESHOLD = -30;
```
