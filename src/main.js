import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router
import HomeView from './views/Home.vue';

const router = createRouter({
  history: createWebHistory(), //import.meta.env.BASE_URL
  routes: [
    { path: '/a', name: 'Home', component: HomeView },
  ]
})
// MDI
import '@mdi/font/css/materialdesignicons.css'
//theme

export const JGUTheme = {
  dark: false,
  colors: {
    primary: '#b20e10', // Red
    secondary: '#4d4d4d', // Dark Gray
    accent: '#cc1214', // Red
    error: '#ff1100', // Red
    info: '#4d4d4d', // Dark Gray
    success: '#4d4d4d', // Dark Gray
    warning: '#b20e10', // Red
    background: '#f8f8f8', // Light Gray
    text: '#000000', // Black
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'JGUTheme',
    themes: { JGUTheme },
  },
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')