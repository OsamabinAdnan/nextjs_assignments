import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		
		keyframes:{
			//Hero Section text	
			slideInLeft:{
				'0%': {transform:'translateX(-100%)'},
				'100%': {transform:'translateX(0%)'}
			},
			//Hero Section Picture
			slideInBottomRight: {
				'0%': {
				  opacity: '0',
				  transform: 'translate(100%, 100%)',
				},
				'100%': {
				  opacity: '1',
				  transform: 'translate(0, 0)',
				},
			  },
			  //Hero Section Menu
			slideInFromTop: {
				'0%': {
				  opacity: '0',
				  transform: 'translateY(-100%)', // Start from above the viewport
				},
				'100%': {
				  opacity: '1',
				  transform: 'translateY(0)', // End at original position
				},
			},
		},
		animation:{
			slideInLeft:'slideInLeft 1.5s ease-out forwards',
			slideInBottomRight: 'slideInBottomRight 1.5s ease-out forwards',
			slideInFromTop: 'slideInFromTop 1.5s ease-out forwards',
		},
		boxShadow:{
			lightShadow:'0px 0px 5px 5px #0CFAF5',
			heavyShadow:'0px 0px 10px 10px #0CFAF5',
		},
		

  	},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
