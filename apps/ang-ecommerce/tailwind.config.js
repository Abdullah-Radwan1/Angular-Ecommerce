const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
// options : ['light', 'dark', 'cupcake',
//  'bumblebee', 'retro', 'cyber', 'valentine',
//  'halloween', 'garden', 'forest', 'aqua', 'pastel',
//  'fantasy', 'ghost', 'haunted', 'luxury', 'mystic',
// 'jailbreak', 'spin', 'acid'],
