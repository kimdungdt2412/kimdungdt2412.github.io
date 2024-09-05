/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./**/*.{html,js}"
    ],
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        black: '#000000',
        cyan_bluish_gray: '#abb8c3',
        white: '#ffffff',
        pale_pink: '#f78da7',
        vivid_red: '#cf2e2e',
        luminous_vivid_orange: '#ff6900',
        luminous_vivid_amber: '#fcb900',
        light_green_cyan: '#7bdcb5',
        vivid_green_cyan: '#00d084',
        pale_cyan_blue: '#8ed1fc',
        vivid_cyan_blue: '#0693e3',
        vivid_purple: '#9b51e0',
        background: '#F6F6EA',
        foreground: '#202C4B',
        dark_blue: '#202C4B',
        blue: '#1D3D91',
        light_blue: '#EEFAFD',
        pink: '#FAE8FF',
        gray_pink: '#FDF8FF',
        green: '#86FFC5',
        yellow: '#FAFF0E',
        whte: '#ffffff',
        gray: '#F3F3F3',
        almost_black: '#111224',
        transparent: 'transparent',
      },
      fontFamily: {
        morion: ['"Morion"', 'Georgia', 'Times', 'serif'],
        inter: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif']
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 50px, 0)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
      },
      animation: {
      },
      boxShadow: {
        shadow_natural: '6px 6px 9px rgba(0, 0, 0, 0.2)',
        shadow_deep: '12px 12px 50px rgba(0, 0, 0, 0.4)',
        shadow_sharp: '6px 6px 0px rgba(0, 0, 0, 0.2)',
        shadow_outlined: '6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      extend: {
        backgroundImage: {
            gradient_vivid_cyan_blue_to_vivid_purple: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
            gradient_light_green_cyan_to_vivid_green_cyan: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
            gradient_luminous_vivid_amber_to_luminous_vivid_orange: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
            gradient_luminous_vivid_orange_to_vivid_red: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
            gradient_very_light_gray_to_cyan_bluish_gray: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
            gradient_cool_to_warm_spectrum: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
            gradient_blush_light_purple: 'linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)',
            gradient_blush_bordeaux: 'linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)',
            gradient_luminous_dusk: 'linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)',
            gradient_pale_ocean: 'linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)',
            gradient_electric_grass: 'linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)',
            gradient_midnight: 'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)',
            gradient_transparent_to_black: 'linear-gradient(180deg, rgba(17, 17, 18, 0) 47.92%, #111112 86.71%)',
            gradient_black_to_transparent_horizontal: 'linear-gradient(90deg, #111112 26.6%, rgba(17, 17, 18, 0) 98.78%)',
        },
      },
    },
    plugins: []
  }