// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00bcd4',
    'primary-darken-1': '#3700B3',
    secondary: '#cddc39',
    'secondary-darken-1': '#018786',
    accent: '#3f51b5',
    error: '#f44336',
    warning: '#ffc107',
    info: '#2196f3',
    success: '#4caf50'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme
    }
  }
})
