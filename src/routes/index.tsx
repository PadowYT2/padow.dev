import { GrainGradient } from '@paper-design/shaders-react';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import bcfd from '@/assets/bcfd.png';
import cybershoke from '@/assets/cybershoke.svg';
import namelessmc from '@/assets/namelessmc.png';
import padowhost from '@/assets/padowhost.png';
import proxiedhost from '@/assets/proxiedhost.png';
import vertisan from '@/assets/vertisan.png';
import { SocialIcon } from '@/components/social';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Java from '~icons/fa7-brands/java';
import Email from '~icons/fa7-solid/at';
import Languages from '~icons/fa7-solid/code';
import Communities from '~icons/fa7-solid/people-line';
import Discord from '~icons/simple-icons/discord';
import GitHub from '~icons/simple-icons/github';
import Go from '~icons/simple-icons/go';
import Laravel from '~icons/simple-icons/laravel';
import Nix from '~icons/simple-icons/nixos';
import PHP from '~icons/simple-icons/php';
import React from '~icons/simple-icons/react';
import Steam from '~icons/simple-icons/steam';
import TailwindCSS from '~icons/simple-icons/tailwindcss';
import Telegram from '~icons/simple-icons/telegram';
import TypeScript from '~icons/simple-icons/typescript';
import YouTube from '~icons/simple-icons/youtube';

const App = () => {
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <>
            <Toaster className='pointer-events-auto' position='bottom-right' richColors theme='dark' />

            <div className='@container'>
                <div className='mx-auto transition-all duration-300 gap-16 flex flex-col'>
                    <div className='px-4 @lg:px-10 relative flex flex-col items-center justify-center min-h-screen text-center gap-8 pt-8 transition-all duration-300'>
                        <GrainGradient
                            className='absolute inset-0 opacity-20 -z-10'
                            colors={['#7b68ee', '#256091']}
                            softness={1}
                            intensity={0.7}
                            noise={0.5}
                            shape='corners'
                            speed={reduceMotion ? 0 : 1}
                            rotation={68}
                        />

                        <div className='size-28 @lg:size-32 border border-muted-foreground/30 rounded-xl flex items-center justify-center transform-3d hover:rotate-5 active:rotate-5 transition-all duration-300 overflow-hidden'>
                            <img src='/padow.png' alt='PadowYT2' className='w-full h-full object-cover' />
                        </div>

                        <span className='text-6xl @lg:text-7xl font-medium transition-all duration-300'>PadowYT2</span>

                        <div className='grid grid-cols-4 @lg:grid-cols-6 gap-4 transition-all duration-300'>
                            <SocialIcon className='text-white' icon={GitHub} link='https://github.com/PadowYT2' />
                            <SocialIcon
                                className='text-[#5865f2]'
                                icon={Discord}
                                callback={async () => {
                                    await navigator.clipboard.writeText('padowyt2');
                                    toast.success('Copied the username to clipboard');
                                }}
                            />
                            <SocialIcon className='text-[#26a5e4]' icon={Telegram} link='https://t.me/padowyt2' />
                            <SocialIcon className='text-[#db2d54]' icon={Email} link='mailto:me@padow.ru' />
                            <SocialIcon
                                className='col-start-2 @lg:col-auto text-[#ff0000]'
                                icon={YouTube}
                                link='https://youtube.com/@padowyt2'
                            />
                            <SocialIcon
                                className='text-white'
                                icon={Steam}
                                link='https://steamcommunity.com/id/PadowYT2'
                            />
                        </div>
                    </div>

                    <div className='px-4 @lg:px-10 flex flex-col gap-4 w-full max-w-5xl mx-auto'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2'>
                                <div className='p-2 rounded-lg bg-blue-500/20 text-blue-500'>
                                    <Communities className='size-5' />
                                </div>
                                <span className='text-2xl font-medium my-auto'>Experience</span>
                            </div>
                            <Separator className='h-px w-full' />
                        </div>

                        <div className='flex flex-col md:block md:columns-2 gap-4 md:space-y-4'>
                            <Card className='break-inside-avoid order-1'>
                                <CardHeader className='flex gap-3'>
                                    <div className='size-12 shrink-0 rounded-xl overflow-hidden'>
                                        <img src={vertisan} alt='Vertisan' className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>Vertisan</CardTitle>
                                        <CardDescription>June 2021 - Current</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    Started as a member, then helped users, contributed to projects, and eventually
                                    maintained some - including{' '}
                                    <a
                                        className='hover:text-blue-600 hover:underline transition-colors duration-200'
                                        href='https://builtbybit.com/unix'
                                        target='_blank'
                                        rel='noopener nofollow noreferrer'
                                    >
                                        Unix
                                    </a>
                                    ,{' '}
                                    <a
                                        className='hover:text-blue-600 hover:underline transition-colors duration-200'
                                        href='https://pterodactylmarket.com/resource/336'
                                        target='_blank'
                                        rel='noopener nofollow noreferrer'
                                    >
                                        Billing Module
                                    </a>
                                    ,{' '}
                                    <a
                                        className='hover:text-blue-600 hover:underline transition-colors duration-200'
                                        href='https://namelessmc.com/resources/resource/162'
                                        target='_blank'
                                        rel='noopener nofollow noreferrer'
                                    >
                                        Nexus
                                    </a>
                                    , and{' '}
                                    <a
                                        className='text-[#c27c0e] hover:underline transition-colors duration-200'
                                        href='https://wemx.net'
                                        target='_blank'
                                        rel='noopener nofollow noreferrer'
                                    >
                                        WemX
                                    </a>
                                    . Also built Quantum - a Pterodactyl theme, now being succeeded by a new Quantum for
                                    Calagopus.
                                </CardContent>
                            </Card>

                            <Card className='break-inside-avoid order-3'>
                                <CardHeader className='flex gap-3'>
                                    <div className='size-12 shrink-0 rounded-xl overflow-hidden'>
                                        <img src={namelessmc} alt='NamelessMC' className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>NamelessMC</CardTitle>
                                        <CardDescription>June 2021 - May 2026</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    Maintained themes and modules, made contributions to the project itself, and helped
                                    users with their own website.
                                </CardContent>
                            </Card>

                            <Card className='break-inside-avoid order-5'>
                                <CardHeader className='flex gap-3'>
                                    <div className='relative size-12 shrink-0 rounded-xl overflow-hidden group'>
                                        <img
                                            src='/padow.png'
                                            alt='padow.host'
                                            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100 group-hover:opacity-0'
                                        />

                                        <img
                                            src={padowhost}
                                            alt=''
                                            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-0 group-hover:opacity-100'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>padow.host</CardTitle>
                                        <CardDescription>August 2021 - April 2023</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    Ran a hosting off a personal PC - first experience with Linux and server
                                    administration.
                                </CardContent>
                            </Card>

                            <Card className='break-inside-avoid order-2'>
                                <CardHeader className='flex gap-3'>
                                    <div className='size-12 shrink-0 rounded-xl overflow-hidden'>
                                        <img
                                            src={proxiedhost}
                                            alt='proxied.host'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>proxied.host</CardTitle>
                                        <CardDescription>April 2023 - Current</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    A public hosting for Minecraft servers and Discord bots. Went private after a drive
                                    failure in October 2025 that couldn't be recovered.
                                </CardContent>
                            </Card>

                            <Card className='break-inside-avoid order-4'>
                                <CardHeader className='flex gap-3'>
                                    <div className='size-12 shrink-0 rounded-xl overflow-hidden'>
                                        <img src={cybershoke} alt='CYBERSHOKE' className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>CYBERSHOKE</CardTitle>
                                        <CardDescription>December 2025 - May 2026</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    Played CS2 Jail servers as a moderator - handling reports, punishing rulebreakers,
                                    and keeping the atmosphere active. On the project since 2023.
                                </CardContent>
                            </Card>

                            <Card className='break-inside-avoid order-6'>
                                <CardHeader className='flex gap-3'>
                                    <div className='size-12 shrink-0 rounded-xl overflow-hidden'>
                                        <img src={bcfd} alt='BCFD' className='w-full h-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-0.5 w-full my-auto'>
                                        <CardTitle>BCFD</CardTitle>
                                        <CardDescription>July 2020 - April 2023</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground'>
                                    Helped out with community support, brought Russian localization to the project, and
                                    rewrote the Discord bot for the server.
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className='px-4 @lg:px-10 flex flex-col gap-4 pb-8 w-full max-w-5xl mx-auto'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2'>
                                <div className='p-2 rounded-lg bg-emerald-500/20 text-emerald-500'>
                                    <Languages className='size-5' />
                                </div>
                                <span className='text-2xl font-medium my-auto'>Tools & technologies</span>
                            </div>
                            <Separator className='h-px w-full' />
                        </div>

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <TypeScript className='size-8 text-[#3178c6]' />
                                <span className='font-medium'>TypeScript</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <React className='size-8 text-[#61dafb]' />
                                <span className='font-medium'>React</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <TailwindCSS className='size-8 text-[#06b6d4]' />
                                <span className='font-medium'>TailwindCSS</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <PHP className='size-8 text-[#777bb4]' />
                                <span className='font-medium'>PHP</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <Laravel className='size-8 text-[#ff2d20]' />
                                <span className='font-medium'>Laravel</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <Nix className='size-8 text-[#5277c3]' />
                                <span className='font-medium'>Nix</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <Java className='size-8 text-[#f89820]' />
                                <span className='font-medium'>Java</span>
                            </Card>

                            <Card className='flex flex-row items-center gap-4 p-4'>
                                <Go className='size-8 text-[#00add8]' />
                                <span className='font-medium'>Go</span>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Route = createFileRoute('/')({ component: App });
