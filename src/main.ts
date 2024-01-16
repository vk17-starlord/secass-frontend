import router from '@/router/index';
import "@formkit/themes/genesis";
import { defaultConfig, plugin } from '@formkit/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';


const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)

// @ts-ignore
app.use(plugin, defaultConfig({
    iconLoader: (iconName) => {

        return fetch(
            `https://cdn.jsdelivr.net/npm/heroicons/outline/${iconName}.svg`
        )
            .then(async (r) => {
                const icon = await r.text()
                if (icon.startsWith('<svg')) {
                    return icon
                }
                return undefined
            })
            .catch((e) => {
                console.error(e)
                return undefined
            })
    },
}))

app.mount('#app');
