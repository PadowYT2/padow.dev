import { ForwardRefExoticComponent, SVGProps } from 'react';
import { cn } from '@/lib/utils';

const baseClass =
    'size-12 @lg:size-14 p-3.5 @lg:p-4 flex items-center justify-center rounded-full bg-background/90 border border-foreground/10 hover:border-foreground/40 transition-all duration-300';

export const SocialIcon = ({
    icon: Icon,
    link,
    callback,
    className,
}: {
    icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
    link?: string;
    callback?: () => void;
    className?: string;
}) => {
    if (link)
        return (
            <a className={cn(baseClass, className)} href={link} target='_blank' rel='noopener nofollow noreferrer'>
                <Icon className='size-8 @lg:size-10' />
            </a>
        );

    return (
        <button type='button' className={cn(baseClass, 'cursor-pointer', className)} onClick={callback}>
            <Icon className='size-8 @lg:size-10' />
        </button>
    );
};
