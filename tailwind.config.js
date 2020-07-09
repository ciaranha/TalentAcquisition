module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Sans-serif']
    },
    extend: {
      colors: {
        'gray': {
          100: '#F5F4F5',
          200: '#E8E7E4',
          300: '#CFCFCF',
          400: '#ACACAC',
          500: '#888888',
          600: '#7A7A7A',
          700: '#525252',
          800: '#3D3D3D',
          900: '#292929',
        },
        'regal-blue': '#C6D7E4',
        'keppel': {
          100: '#EDF7F5',
          200: '#D1EAE5',
          300: '#B6DED6',
          400: '#7FC5B7',
          500: '#48AC98',
          600: '#419B89',
          700: '#2B675B',
          800: '#204D44',
          900: '#16342E',
        },
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ]
  }
}
