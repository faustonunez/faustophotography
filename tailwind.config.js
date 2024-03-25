/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
 
    container: {
      center: true,
      padding: "2rem",

    },
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/envelope-pattern.svg')",
      },
      screens: {
        'xsm': '375px',
        '3xl': '2511px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
    
          light: {
            'text-dark': '#061018',
            'text-medium': '#082E3C',
            'text-light': '#155268',
            'divider': '#C1E3F7',
            'outline': '#64C5F0',
            'background': '#EAF6FE',
            'primary': '#D56D0D', 
          },
   
          dark: {
            'text-dark': '#B8DDF2',
            'text-medium': '#93CEED',
            'text-light': '#2E97BE',
            'divider': '#082E3C',
            'outline': '#155268',
            'background': '#061018',
            'primary': '#D56D0D', 
          },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}