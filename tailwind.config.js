tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e3a8a',
                secondary: '#1e40af',
                accent: '#d97706',
                gold: '#f59e0b',
                'gold-light': '#fbbf24',
                'blue-dark': '#172554',
                'blue-light': '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'slide-in': 'slideIn 0.6s ease-out forwards',
                'counter': 'counter 2s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(217, 119, 6, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 40px rgba(217, 119, 6, 0.4)' },
                }
            }
        }
    }
}