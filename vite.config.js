import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        https: true,
        host: '0.0.0.0',
    },
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    base: process.env.NODE_ENV === 'production' ? 'https://hackatonmisaelcarlosywalter-production.up.railway.app/' : '/',
});