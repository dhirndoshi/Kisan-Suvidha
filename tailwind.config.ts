import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { fontFamily: { sans:['Inter','ui-sans-serif','system-ui'] }, colors:{ forest:'#0d5c3a', leaf:'#1f8f55', mint:'#eaf7ef', ink:'#10231a', gold:'#d7a83f' }, boxShadow:{ soft:'0 12px 40px rgba(16,35,26,.08)' } } },
  plugins: []
};
export default config;
