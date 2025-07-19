module.exports = {
  theme: {
    extend: {
      fontSize: {
        '32': '3.2rem',
      },
      colors: {
        'gradient-start': '#6601e8',
        'gradient-end': '#ac00d7',
      },
      screens: {
        'max-479': { 'max': '479px' },
        'max-767': { 'max': '767px' },
        'max-991': { 'max': '991px' },
      },
      variants: {
        extend: {
          darkMode: ['dark', '.dark *'],
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(90deg, #1126a0, #241ab4 34%, var(--midnight-blue))',
      }

    }
  }
}
