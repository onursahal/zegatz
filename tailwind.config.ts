/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // use `class="dark"` to enable dark mode
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0e0c16", // deep purple-black
        surface: "#1b152b", // slightly lighter background
        primary: "#c18cfb", // glowing lavender
        secondary: "#9ec3e1", // soft blue
        accent: "#ff5e99", // pink/magenta highlight
        muted: "#6a5e80", // subtle grayish UI
        border: "#2e2b3c",
        code: {
          bg: "#1a1628",
          text: "#e1d8ff",
          keyword: "#c18cfb",
          string: "#ff9f7f",
          function: "#8bd5ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },
      typography: (theme: any) => ({
        dark: {
          css: {
            color: theme("colors.secondary"),
            a: { color: theme("colors.accent") },
            h1: { color: theme("colors.primary") },
            h2: { color: theme("colors.primary") },
            h3: { color: theme("colors.primary") },
            strong: { color: theme("colors.primary") },
            code: {
              color: theme("colors.code.text"),
              backgroundColor: theme("colors.code.bg"),
              borderRadius: "0.25rem",
              padding: "0.2em 0.4em",
            },
            pre: {
              color: theme("colors.code.text"),
              backgroundColor: theme("colors.code.bg"),
              padding: "1rem",
              borderRadius: "0.5rem",
            },
            blockquote: {
              color: theme("colors.muted"),
              borderLeftColor: theme("colors.accent"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
