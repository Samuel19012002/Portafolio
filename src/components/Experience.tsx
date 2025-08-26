import { useState } from 'react';

interface Job {
    company: string;
    role: string;
    period: string;
    details: string[];
}

const jobs: Job[] = [
    {
        company: 'Kronio LLC',
        role: 'Mobile App Developer',
        period: 'Feb 2023 — Presente',
        details: [
            'Desarrollo de aplicación de control de asistencia con geolocalización.',
            'Migración tecnológica a Flutter para mejorar rendimiento y experiencia nativa.',
            'Implementación de arquitectura serverless con AWS Amplify y GraphQL.',
            'Publicación en Google Play, App Store y Huawei AppGallery.',
        ],
    },
    {
        company: 'KlassBlue',
        role: 'Full-Stack Developer',
        period: 'Oct 2020 — Nov 2022',
        details: [
            'Desarrollo de plataforma educativa modular con Angular y Azure Functions.',
            'Optimización de rendimiento usando lazy loading y RxJS.',
            'Diseño de formularios reactivos con validaciones y retroalimentación instantánea.',
            'CI/CD con Azure DevOps y pruebas automatizadas.',
        ],
    },
];

export default function Experience() {
    const [active, setActive] = useState(0);

    return (
        <section id="work" className="min-h-screen bg-[#1E1B29] flex items-center justify-center">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono mb-10">
                    <span className="text-gray-200">02.</span> Experiencia
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    {/* Sidebar empresas */}
                    <ul className="flex md:flex-col gap-4 md:gap-2 text-gray-400 font-mono text-sm">
                        {jobs.map((job, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => setActive(i)}
                                    className={`px-4 py-2 text-left w-full border-l-2 transition 
                                        ${
                                            active === i
                                                ? 'text-[#06B6D4] border-[#06B6D4] bg-white/5'
                                                : 'border-transparent hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {job.company}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Detalle del trabajo */}
                    <div className="flex-1 text-gray-200 flex flex-col justify-center md:text-left text-center">
                        <h3 className="text-xl font-bold text-white">
                            {jobs[active].role} <span className="text-[#06B6D4]">@ {jobs[active].company}</span>
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">{jobs[active].period}</p>
                        <ul className="list-none space-y-3">
                            {jobs[active].details.map((d, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[#10B981]">▹</span>
                                    <span>{d}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
