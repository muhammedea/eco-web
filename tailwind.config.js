/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      width: {
        25: '100px',
        29: '116px',
        63: '252px',
        'n-gap-3-33': 'calc(33.333333% - 12px)',
        'n-gap-5-33': 'calc(33.333333% - 20px)',
        'n-gap-10-33': 'calc(33.333333% - 40px)',
        'n-gap-5-25': 'calc(25.000000% - 20px)',
        'n-gap-4-25': 'calc(25.000000% - 16px)',
        'n-gap-4-50': 'calc(50.000000% - 16px)',
        'n-gap-1_5-50': 'calc(50% - 6px)',
        'n-gap-3-50': 'calc(50% - 12px)',
        'n-gap-3_5-50': 'calc(50% - 14px)',
        'n-gap-5-50': 'calc(50% - 20px)',
        'n-gap-5-58': 'calc(58% - 20px)',
        'n-gap-5-42': 'calc(42% - 20px)',
      },
      height: {
        25: '100px',
        SIDE_NAV: 'calc(100% - 80px)',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
        sm: '639.98px',
        md: '767.98px',
        navBreak: '880px',
        lg: '1023.98px',
        xl: '1279.98px',
        '2xl': '1535.98px',
      },
      maxWidth: {
        base: '1120px',
      },
      colors: {
        'Primary-Blue': '#337898',
        'Secondary-Light-Blue': '#559F62',
        'Acsen-Yellow': '#F9B20C',
        'Black-and-White-White': 'rgba(255, 255, 255, 1)',
        'Black-and-White-Black': 'rgba(8, 14, 56, 1)',
        'Black-and-White-Black-Opacity-90': 'rgba(8, 14, 56, .9)',
        'Black-and-White-Black-Opacity-50': 'rgba(8, 14, 56, .5)',
        'Grayscale-Grey-1': 'rgba(57, 62, 96, 1)',
        'Grayscale-Grey-2': 'rgba(107, 110, 136, 1)',
        'Grayscale-Grey-3': 'rgba(156, 159, 175, 1)',
        'Grayscale-Grey-4': 'rgba(230, 231, 235, 1)',
        'Grayscale-Grey-5': 'rgba(241, 242, 246, 1)',
        'Color-Code-Green': '#58CD4E',
        'Color-Code-Red': '#E14B4B',
        'Tint-Acsend-Yellow': 'rgba(255, 250, 228, 1)',
        'Tint-Brand-Primary': 'rgba(248, 249, 255, 1)',
        'Tint-Brand-Secondary': 'rgba(244, 250, 253, 1)',
        'Tint-Color-Code-Green': 'rgba(218, 245, 214, 1)',
        'Light-Slider-From': 'rgba(255, 200, 65, 1)',
        'Light-Slider-to': 'rgba(8, 14, 56, 1)',
        'Dark-Mode-Blue': '#181f52',
        'Dark-Mode-Grey': 'rgba(183, 188, 220, 1)',
        'Dark-Mode-Blue-2': 'rgba(37, 45, 103, 1)',
        'Dark-Mode-Blue-3': 'rgba(94, 113, 255, 1)',
        'Dark-Slider-From': 'rgba(255, 230, 169, 1)',
        'Dark-Slider-to': 'rgba(32, 40, 105, 1)',
        'Dark-Mode-Border': 'rgba(45, 52, 106, 1)',
      },
      fontSize: {
        logo: ['32px', '42px'],
        'base-leading-5': ['16px', '20px'],
        title: ['40px', '48px'],
        headerModal: ['44px', '68px'],
        banner: ['56px', '68px'],
        bannerDesc: ['32px', '38px'],
        companyDetailTitle: ['28px', '36px'],
      },
      boxShadow: {
        'header-bottom-border': 'inset 0px -1px 0px 0px rgba(230,231,235,1)',
        heroCard: '0px 4px 16px rgba(0, 0, 0, 0.16)',
        bannerIcon: '0px 14px 54px rgba(23, 15, 73, 0.16)',
        serviceStatisticCard: '-4px 4px 24px rgba(0, 0, 0, 0.08)',
        searchFocus: '0px 24px 56px rgba(0, 0, 0, 0.08)',
        bestChoice: '0px 4px 48px rgba(0, 0, 0, 0.12)',
      },
      dropShadow: {
        '3xl': '0px 4px 40px rgba(0, 0, 0, 0.08)',
      },
      padding: {
        2.5: '10px',
        13: '52px',
        18: '72px',
      },
      gap: {
        15: '60px',
        18: '72px',
      },
      backgroundImage: {
        'why-choose-card': 'linear-gradient(52.86deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)',
      },
      animation: {
        'ping-slow': 'ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
};
