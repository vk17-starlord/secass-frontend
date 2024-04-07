import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@blocks': fileURLToPath(new URL('./src/components/blocks', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
}
})
