export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0b0b0c',
          850: '#111113',
          800: '#18181b',
          700: '#26262b',
          600: '#3a3a41',
        },
        accent: {
          DEFAULT: '#34d399',
          strong: '#10b981',
          soft: '#34d39926',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
