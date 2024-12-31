/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // React components
    './src-tauri/**/*.rs',       // Tauri Rust files (optional, if injecting styles dynamically)
    './index.html',               // Main HTML entry point
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
