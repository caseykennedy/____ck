// Theme / Design system:

// Types
// ___________________________________________________________________

type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: number | number[]
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  strokeWidth: string
  maxWidth: number
  siteWidth: string
  grid: {
    [key: string]: string
  }
  sidebarWidth: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  root: {
    mouseX: string
    mouseY: string
    space: string
    font: {
      [key: string]: string
    }
  }
}

// Begin theme
// ___________________________________________________________________

const breakpoints: string[] = ['380px', '770px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    small: `(min-width: calc(${breakpoints[0]} + 1px))`,
    medium: `(min-width: calc(${breakpoints[1]} + 1px))`
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: 'black',
    background: 'gainsboro',
    
    primary: 'goldenrod',
    secondary: 'black',
    tertiary: '#999999',

    accent: 'goldenrod',

    black: '#000000',
    white: '#ffffff',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0',          // 0
    '0.25rem',    // 1
    '0.5rem',     // 2
    '1rem',       // 3
    '1.5rem',     // 4
    '2rem',       // 5
    '4rem',       // 6
    '8rem',       // 7
    '10rem',      // 8
    '12rem',      // 9
    '14rem',      // 10
    '16rem',      // 11
    '18rem'       // 12
  ],

  // Main section x-axis gutter
  gutter: 3,

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"Falster", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"Falster", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `"Menlo", Consolas, "Liberation Mono", Menlo, Courier, monospace`
  },

  fontSizes: [
    'var(--text-xs)',         // 0
    'var(--text-sm)',         // 1
    'var(--text-base-size)',  // 2
    'var(--text-md)',         // 3
    'var(--text-lg)',         // 4
    'var(--text-xl)',         // 5
    'var(--text-xxl)',        // 6
    'var(--text-xxxl)',       // 7
  ],

  Heading: {
  },

  fontWeights: {
    light: 300,
    regular: 400,
    bold: 600,
    black: 700
  },

  strokeWidth: '2px',

  // Base
  // ___________________________________________________________________

  maxWidth: 1680,
  siteWidth: '100vw',

  grid: {
    gap: '0.5rem'
  },

  sidebarWidth: {
    collapsed: '56px',
    expanded: '70vw'
  },

  transition: {
    all: 'all 0.333s ease-in-out'
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 16, 16)',
      to: 'matrix(1, 0, 0, 1, 0, 0)'
    }
  },

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    space: 'var(--root-size)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',
  
      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',
  
      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    }
  }
}

export default theme
