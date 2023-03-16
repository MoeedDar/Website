/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'neutral-100',
    'neutral-500',
    'red-500',
    'orange-500',
    'yellow-500',
    'green-500',
    'blue-500',
    'indigo-500',
    'violet-500',
  ]
}
