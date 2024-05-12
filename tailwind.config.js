/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1b1b",
        contrast: "#FFFFFF",
        notice: "rgb(var(--color-accent) / <alpha-value>)",
        shopPay: "rgb(var(--color-shop-pay) / <alpha-value>)",
        subtle: "#F3F3F3",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"IBMPlexSerif"', "Palatino", "ui-serif"],
        roboto: ["roboto"],
      },
      fontSize: {
        display: ["var(--font-size-display)", "1.1"],
        heading: ["var(--font-size-heading)", "1.25"],
        lead: ["32px", "1.333"],
        copy: ["var(--font-size-copy)", "1.5"],
        fine: ["var(--font-size-fine)", "1.333"],
      },
      maxWidth: {
        "prose-narrow": "45ch",
        "prose-wide": "80ch",
      },
      boxShadow: {
        border: "inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)",
        darkHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)",
        lightHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)",
      },
    },
  },
  plugins: [],
};
