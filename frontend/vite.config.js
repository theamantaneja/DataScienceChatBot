import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/ask': {
                target: 'http://localhost:5000',  // Flask backend
                changeOrigin: true,
            },
        },
    },
});
