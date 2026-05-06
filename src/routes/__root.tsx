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
            { charSet: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
            { name: 'og:title', content: 'PadowYT2' },
            { name: 'theme-color', content: '#256091' },
            { name: 'og:image', content: '/padow.png' },
            { name: 'og:type', content: 'website' },
        ],
        links: [{ rel: 'icon', type: 'image/png', size: '128x128', href: '/padow.png' }],
    }),
    shellComponent: Root,
});
