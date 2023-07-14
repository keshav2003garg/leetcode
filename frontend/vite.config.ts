import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const srcPath = path.resolve('./src');

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@/components': `${srcPath}/components`,
        },
    },
});
