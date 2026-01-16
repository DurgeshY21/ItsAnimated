import { useState } from 'react';

const Cards = () => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (id: string, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const cards = [
        {
            id: 'flip',
            name: 'Flip Card',
            description: 'Hover to flip and reveal content',
            preview: (
                <div className="group w-full h-40 [perspective:1000px] cursor-pointer">
                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center [backface-visibility:hidden]">
                            <span className="text-white font-bold">Hover me!</span>
                        </div>
                        <div className="absolute inset-0 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <span className="text-neutral-800 font-bold">🎉 Flipped!</span>
                        </div>
                    </div>
                </div>
            ),
            code: `<div className="group w-full h-40 [perspective:1000px] cursor-pointer">
    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center [backface-visibility:hidden]">
            <span className="text-white font-bold">Front</span>
        </div>
        <div className="absolute inset-0 bg-white border rounded-2xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span>Back</span>
        </div>
    </div>
</div>`,
        },
        {
            id: 'lift',
            name: 'Lift Card',
            description: 'Hover to lift with shadow',
            preview: (
                <div className="w-full h-40 bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-3 hover:border-primary-200 transition-all duration-500 cursor-pointer">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="font-semibold text-neutral-800">Lift Card</span>
                </div>
            ),
            code: `<div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-2xl hover:-translate-y-3 hover:border-primary-200 transition-all duration-500 cursor-pointer">
    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-3">
        <!-- Icon -->
    </div>
    <span className="font-semibold">Lift Card</span>
</div>`,
        },
        {
            id: 'glow',
            name: 'Glow Card',
            description: 'Hover for glow effect',
            preview: (
                <div className="w-full h-40 bg-neutral-900 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-[0_0_30px_rgba(116,0,255,0.5)] transition-all duration-500 cursor-pointer group">
                    <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    </div>
                    <span className="font-semibold text-white">Glow Effect</span>
                </div>
            ),
            code: `<div className="bg-neutral-900 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(116,0,255,0.5)] transition-all duration-500 cursor-pointer group">
    <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 mb-3 group-hover:scale-110 transition-transform">
        <!-- Icon -->
    </div>
    <span className="text-white">Glow Effect</span>
</div>`,
        },
        {
            id: 'tilt',
            name: 'Tilt Card',
            description: 'Hover for tilt rotation',
            preview: (
                <div className="w-full h-40 bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 hover:rotate-2 transition-all duration-500 cursor-pointer">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <span className="font-semibold text-neutral-800">Tilt Card</span>
                </div>
            ),
            code: `<div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-xl hover:-translate-y-2 hover:rotate-2 transition-all duration-500 cursor-pointer">
    Content
</div>`,
        },
        {
            id: 'border',
            name: 'Border Animate',
            description: 'Hover for animated border',
            preview: (
                <div className="w-full h-40 bg-white rounded-2xl border-2 border-neutral-200 p-6 flex flex-col items-center justify-center hover:border-primary-500 transition-all duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-600 mb-3 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">Border Animate</span>
                </div>
            ),
            code: `<div className="bg-white rounded-2xl border-2 border-neutral-200 p-6 hover:border-primary-500 transition-all duration-300 cursor-pointer group">
    <div className="group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
        <!-- Icon -->
    </div>
    <span className="group-hover:text-primary-600 transition-colors">Border Animate</span>
</div>`,
        },
        {
            id: 'scale',
            name: 'Scale Card',
            description: 'Hover to scale up',
            preview: (
                <div className="w-full h-40 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-primary-500/30">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </div>
                    <span className="font-semibold text-white">Scale Card</span>
                </div>
            ),
            code: `<div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg shadow-primary-500/30">
    Content
</div>`,
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Animated <span className="font-serif italic text-gradient">Cards</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Beautiful card components with hover animations.
                        <br />Click any card to copy the code.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleCopy(card.id, card.code)}
                            className="group relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                        >
                            {/* Copy indicator */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mb-4">
                                {card.preview}
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{card.name}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{card.description}</p>

                            {/* Copied overlay */}
                            {copiedId === card.id && (
                                <div className="absolute inset-0 bg-primary-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <span className="text-white font-bold flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Copied!
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;


