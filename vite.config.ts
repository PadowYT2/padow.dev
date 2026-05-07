import tailwindcss from '@tailwindcss/vite';

import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tanstackStart({ prerender: { enabled: true, autoStaticPathsDiscovery: true } }),
        react(),
        tailwindcss(),
        icons({ compiler: 'jsx', jsx: 'react' }),
    ],

    resolve: {
        tsconfigPaths: true,
    },
});
