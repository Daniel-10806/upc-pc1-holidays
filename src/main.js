import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true, theme: {
        preset: Aura, options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component('pv-toolvar', Toolbar);
app.component('pv-card', Card);

app.mount('#app');