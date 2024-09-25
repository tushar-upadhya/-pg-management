/** @type {import('tailwindcss').Config} */


export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }, keyframes: {
      blink: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
    },
    animation: {
      blink: 'blink 2s infinite',
    },

    extend: {
      // Extending default border-radius to support dynamic radius values based on CSS variables.
      borderRadius: {
        lg: 'var(--radius)', // Large radius, controlled via a CSS variable for flexibility.
        md: 'calc(var(--radius) - 2px)', // Medium radius, slightly smaller.
        sm: 'calc(var(--radius) - 4px)', // Small radius, even smaller for fine control.
      },

      // Custom color palette: add custom colors for brand identity or UI themes.
      colors: {
        primary: '#1FCFF1',   // Custom brand color for primary elements.
        success: '#40C26C',   // Success color, often used for success messages or buttons.
        danger: '#E21A23',    // Danger color, used for error states, alerts, or delete buttons.
        neutral: '#2E2E2E',   // Neutral background color, often used for dark mode or backgrounds.
        lightGray: '#E6ECF5', // Light gray for subtle UI elements.
      },

      // Custom spacing, padding, and margin utilities.
      spacing: {
        '72': '18rem', // Custom large spacing value (e.g., 72 for use in padding or margin).
        '84': '21rem', // Additional large spacing.
        '96': '24rem', // Suitable for sections with more space between elements.
      },

      // Custom animations and keyframes for sophisticated transitions.
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out', // Example custom fade-in animation.
        slideIn: 'slideIn 0.5s ease-in-out', // Example slide-in animation for UI elements.
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      // Custom shadow utility for building modern UI.
      boxShadow: {
        subtle: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards or containers.
        intense: '0 10px 15px rgba(0, 0, 0, 0.2)', // Strong shadow for modal dialogs or raised components.
      },

      // Extend font families for custom typography.
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // System-based sans-serif for modern web typography.
        mono: ['"Fira Code"', 'ui-monospace'], // Monospaced font for code blocks or technical displays.
      },

      // Extend width/height utilities for responsive design.
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
      },
      height: {
        'half-screen': '50vh',
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ]
}
