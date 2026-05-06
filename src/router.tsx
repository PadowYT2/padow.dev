import { createRouter as createTanStackRouter, Navigate } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';

export const getRouter = () =>
    createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: 'intent',
        defaultPreloadStaleTime: 0,
        defaultNotFoundComponent: () => <Navigate to='/' replace={true} />,
    });
