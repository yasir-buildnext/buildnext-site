// styles/theme.js
// Centralized styling configuration for BuildNext website
// Change colors and styles here to update across all pages

export const theme = {
  // Color Palette
  colors: {
    // Background colors
    bg: {
      primary: 'bg-slate-900',         // Main background
      secondary: 'bg-slate-800/50',    // Semi-transparent cards
      tertiary: 'bg-slate-700/50',     // Semi-transparent inputs
    },
    // Text colors
    text: {
      primary: 'text-white',
      secondary: 'text-slate-400',
      tertiary: 'text-slate-300',
      muted: 'text-slate-500',
    },
    // Border colors
    border: {
      primary: 'border-slate-700/50',
      secondary: 'border-slate-600/50',
      hover: 'border-slate-500/50',
    },
    // Accent colors (for highlights, icons, etc.)
    accent: {
      primary: 'text-slate-400',
      secondary: 'bg-slate-700/50',
    },
  },

  // Button Styles
  buttons: {
    primary: 'bg-slate-700 hover:bg-slate-600 text-white',
    secondary: 'bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-600/50',
    outline: 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50',
  },

  // Component Styles
  components: {
    // Navigation
    nav: {
      container: 'border-b border-slate-700/30 bg-slate-900/80 backdrop-blur-md',
      link: 'text-slate-400 hover:text-slate-200 transition',
      linkActive: 'text-white hover:text-slate-200 transition',
    },
    
    // Cards - with subtle backdrop blur
    card: {
      primary: 'bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl hover:border-slate-600/40 transition',
      secondary: 'bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:border-slate-600/40 transition',
    },
    
    // Form inputs
    input: {
      base: 'w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500/70 focus:bg-slate-800/70 transition',
      label: 'block text-white font-semibold mb-2',
    },
    
    // Icons
    icon: {
      container: 'bg-slate-700/40 backdrop-blur-sm rounded-xl flex items-center justify-center',
      color: 'text-slate-300',
    },
    
    // Footer
    footer: {
      container: 'border-t border-slate-700/30',
      text: 'text-slate-500',
      link: 'hover:text-slate-300 transition',
    },
  },

  // Typography
  typography: {
    h1: 'text-5xl md:text-7xl font-bold text-white',
    h2: 'text-4xl font-bold text-white',
    h3: 'text-2xl font-bold text-white',
    body: 'text-xl text-slate-300',
    bodyLarge: 'text-xl md:text-2xl text-slate-300',
  },

  // Spacing
  spacing: {
    section: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-6',
  },
};

// Helper function to combine theme classes
export const cn = (...classes) => classes.filter(Boolean).join(' ');