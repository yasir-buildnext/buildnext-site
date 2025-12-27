export const theme = {
  colors: {
    bg: {
      primary: 'bg-slate-950',
      secondary: 'bg-slate-900/60',
      tertiary: 'bg-slate-800/50',
      glow: 'bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-violet-500/10',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-slate-300',
      tertiary: 'text-slate-400',
      muted: 'text-slate-500',
      gradient:
        'bg-gradient-to-r from-indigo-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent',
    },
    border: {
      primary: 'border-slate-800/60',
      hover: 'border-indigo-500/40',
    },
    accent: {
      primary: 'text-cyan-400',
    },
  },

  buttons: {
    primary:
      'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/20',
    secondary:
      'bg-slate-900/60 hover:bg-slate-800/60 border border-slate-700/60',
  },

  components: {
    nav: {
      container:
        'sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/40',
      link: 'text-slate-400 hover:text-white',
      linkActive: 'text-white',
    },

    card: {
      primary:
        'relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/60 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10',
      secondary:
        'bg-slate-900/40 backdrop-blur-lg border border-slate-800/50 rounded-xl',
    },

    icon: {
      container:
        'bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center',
      color: 'text-cyan-300',
    },

    footer: {
      container: 'border-t border-slate-800/60',
      text: 'text-slate-500',
      link: 'hover:text-slate-300',
    },
  },

  typography: {
    h1: 'text-5xl md:text-7xl font-extrabold tracking-tight',
    h2: 'text-4xl font-bold',
    h3: 'text-2xl font-semibold',
    body: 'text-lg text-slate-300',
    bodyLarge: 'text-xl md:text-2xl text-slate-300',
  },

  spacing: {
    container: 'max-w-7xl mx-auto px-6',
    section: 'py-24',
  },
};

export const cn = (...classes) => classes.filter(Boolean).join(' ');
