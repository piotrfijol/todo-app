import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export function initVuetify() {

    const vuetify = createVuetify({
        components,
        directives,
    });

    return vuetify;
    
};
