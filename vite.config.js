import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react()
    ],
    build: {
        assetsInclude: ['resources/js/assets/**/*'],
    },
    // server: {
    //     host: '172.16.0.254',
    //     strictPort: true,
    //     port: 5173,
    //     cors: true
    // },
});
