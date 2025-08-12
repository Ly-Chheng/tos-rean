import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                customBlue: '#0A96A4',
                customBlue100: '#077a85ff',
                gray400:'#888888ff',
                gray500:'#646464ff'
            },
        },
         keyframes: {
        flip: {
          '0%': { transform: 'rotateY(90deg)', opacity: 0 },
          '100%': { transform: 'rotateY(0deg)', opacity: 1 },
        },
      },
      animation: {
        flip: 'flip 0.6s ease-in-out',
      },
    },

    plugins: [
        forms,
        require('tailwind-scrollbar-hide'),
    ],
};
