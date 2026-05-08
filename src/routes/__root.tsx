import geist from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import { PropsWithChildren } from 'react';
import '@/assets/app.css';

const Root = ({ children }: PropsWithChildren) => (
    <html lang='en' className='dark' suppressHydrationWarning>
        <head>
            <HeadContent />
        </head>
        <body className='bg-background mx-auto min-h-screen w-auto'>
            {children}
            <Scripts />
        </body>
    </html>
);

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { title: 'PadowYT2' },
            { name: 'description', content: 'Personal website of PadowYT2' },
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'theme-color', content: '#256091' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://padow.dev' },
            { property: 'og:title', content: 'PadowYT2' },
            { property: 'og:description', content: 'Personal website of PadowYT2' },
            { property: 'og:image', content: 'https://padow.dev/padow.png' },
        ],
        links: [
            { rel: 'icon', type: 'image/png', size: '128x128', href: '/padow.png' },
            { rel: 'canonical', href: 'https://padow.dev' },
            { rel: 'preload', as: 'font', type: 'font/woff2', href: geist, crossOrigin: 'anonymous' },
        ],
    }),
    shellComponent: Root,
});
