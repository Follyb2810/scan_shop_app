/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // content: [
  //   "app/index.js",
  //   "./App.{js,jsx,ts,tsx}",
  //   "./app/**/*.{js,jsx,ts,tsx}",
  //   "./components/**/*.{js,jsx,ts,tsx}",
  //   "./context/**/*.{js,jsx,ts,tsx}"
  // ],

  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#9333EA",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
        background: "#F3F4F6",
        card: "#FFFFFF",
        textPrimary: "#111827",
        textSecondary: "#6B7280",
        fadeText: "#9ca3af",
        bg_100: "#ec4899",
        success_100: "#10b981",
        success_200: "#3b82f6",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
