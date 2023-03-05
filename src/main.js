import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import 'vuetify/styles';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';


const vuetify = createVuetify({
    components,
    directives,
    aliases,
    sets: {
        mdi
    }
});

const app = createApp(App)

app.use(vuetify).use(router)
app.mount('#app')
