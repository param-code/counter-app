/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	safelist: [
	  'animate-pulse',
	  'animate-shimmer',
	  'animate-spin-slow',
	  'animate-fade-in',
	  'animate-bounce-in'
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))'
		  }
		},
		animation: {
		  'spin-slow': 'spin 3s linear infinite',
		  'shimmer': 'shimmer 2s linear infinite',
		  'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
		  'fade-in': 'fadeIn 0.5s ease-out',
		  'bounce-in': 'bounceIn 0.5s ease-out'
		},
		keyframes: {
		  shimmer: {
			'0%': { transform: 'translateX(-100%)' },
			'100%': { transform: 'translateX(100%)' }
		  },
		  pulse: {
			'0%, 100%': { opacity: 1 },
			'50%': { opacity: 0.5 }
		  },
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 }
		  },
		  bounceIn: {
			'0%': { transform: 'scale(0.9)', opacity: 0 },
			'50%': { transform: 'scale(1.03)', opacity: 1 },
			'100%': { transform: 'scale(1)', opacity: 1 }
		  }
		},
		spacing: {
		  '128': '32rem',
		  '144': '36rem',
		},
		fontFamily: {
		  sans: ['Inter var', 'sans-serif'],
		},
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  color: theme('colors.gray.700'),
			  a: {
				color: theme('colors.blue.500'),
				'&:hover': {
				  color: theme('colors.blue.700'),
				},
			  },
			},
		  },
		}),
	  }
	},
	plugins: [
	//   require('tailwindcss-animate'),
	//   require('@tailwindcss/typography'),
	//   require('@tailwindcss/forms'),
	//   require('@tailwindcss/aspect-ratio'),
	],
  }