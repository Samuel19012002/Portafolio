import { Icon } from '@iconify/react';

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/tuusuario',
        icon: 'mdi:github',
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/tuusuario',
        icon: 'mdi:instagram',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/tuusuario',
        icon: 'mdi:linkedin',
    },
];

export default function Socials() {
    return (
        <div className="flex flex-col items-center gap-6">
            {/* Línea superior */}
            <div className="w-px h-24 bg-gray-400 " />

            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#06B6D4] transition"
                    aria-label={social.name}
                >
                    <Icon icon={social.icon} width="28" height="28" />
                </a>
            ))}

            {/* Línea inferior */}
            <div className="w-px h-24 bg-gray-400" />
        </div>
    );
}
