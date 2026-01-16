import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
    const navigate = useNavigate();

    const buttons = [
        {
            id: 'btn-neu',
            title: 'Neumorphic Press',
            description: 'A soft, pressed button with neumorphic design',
            code: `<button className="px-8 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0b0b,-5px_-5px_10px_#252525] active:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#0b0b0b,inset_-5px_-5px_10px_#252525] text-neutral-600 dark:text-neutral-300 font-semibold transition-all active:scale-95 cursor-pointer">
    Press Me
</button>`,
            cssCode: `.neumorphic-button {
    padding: 0.75rem 2rem;
    background-color: #f5f5f5;
    border-radius: 9999px;
    box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
    color: #525252;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.neumorphic-button:active {
    box-shadow: inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff;
    transform: scale(0.95);
}

@media (prefers-color-scheme: dark) {
    .neumorphic-button {
        background-color: #262626;
        box-shadow: 5px 5px 10px #0b0b0b, -5px -5px 10px #252525;
        color: #d4d4d4;
    }
    
    .neumorphic-button:active {
        box-shadow: inset 5px 5px 10px #0b0b0b, inset -5px -5px 10px #252525;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0b0b,-5px_-5px_10px_#252525] active:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#0b0b0b,inset_-5px_-5px_10px_#252525] text-neutral-600 dark:text-neutral-300 font-semibold transition-all active:scale-95 cursor-pointer">
                    Press Me
                </button>
            )
        },
        {
            id: 'btn-shine',
            title: 'Gradient Shine',
            description: 'A gradient button with shine effect on hover',
            code: `<button className="relative px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold overflow-hidden group cursor-pointer shadow-lg shadow-primary-500/30">
    <span className="relative z-10">Hover Me</span>
    <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
</button>`,
            cssCode: `.gradient-shine-button {
    position: relative;
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    background: linear-gradient(to right, #7400ff, #9333ea);
    color: white;
    font-weight: 700;
    overflow: hidden;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(116, 0, 255, 0.3);
}

.gradient-shine-button::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    transform: scale(0);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.2);
}

.gradient-shine-button:hover::before {
    transform: scale(1);
}`,
            preview: (
                <button className="relative px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold overflow-hidden group cursor-pointer shadow-lg shadow-primary-500/30">
                    <span className="relative z-10">Hover Me</span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
                </button>
            )
        },
        {
            id: 'btn-glow',
            title: 'Neon Border',
            description: 'A button with glowing neon border effect',
            code: `<button className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-xl hover:shadow-[0_0_20px_rgba(98,0,217,0.5)] hover:bg-primary-500 hover:text-white transition-all duration-300 font-bold cursor-pointer">
    Neon Glow
</button>`,
            cssCode: `.neon-glow-button {
    padding: 0.75rem 2rem;
    background: transparent;
    border: 2px solid #7400ff;
    border-radius: 0.75rem;
    color: #7400ff;
    font-weight: 700;
    transition: all 0.3s ease;
    cursor: pointer;
}

.neon-glow-button:hover {
    box-shadow: 0 0 20px rgba(98, 0, 217, 0.5);
    background-color: #7400ff;
    color: white;
}`,
            preview: (
                <button className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-xl hover:shadow-[0_0_20px_rgba(98,0,217,0.5)] hover:bg-primary-500 hover:text-white transition-all duration-300 font-bold cursor-pointer">
                    Neon Glow
                </button>
            )
        },
        {
            id: 'btn-slide',
            title: 'Slide Arrow',
            description: 'Button with sliding arrow animation',
            code: `<button className="flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white rounded-lg hover:gap-4 transition-all duration-300 font-medium cursor-pointer">
    <span>Next Step</span>
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
</button>`,
            cssCode: `.slide-arrow-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    background-color: #171717;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.slide-arrow-button:hover {
    gap: 1rem;
}

.slide-arrow-button svg {
    width: 1rem;
    height: 1rem;
}

@media (prefers-color-scheme: dark) {
    .slide-arrow-button {
        background-color: white;
        color: #171717;
    }
}`,
            preview: (
                <button className="flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white rounded-lg hover:gap-4 transition-all duration-300 font-medium cursor-pointer">
                    <span>Next Step</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            )
        },
        {
            id: 'btn-liquid',
            title: 'Liquid Fill',
            description: 'Button with liquid fill animation on hover',
            code: `<button className="relative px-8 py-3 border border-neutral-800 dark:border-white rounded-lg overflow-hidden group text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-900 transition-colors duration-300 font-bold cursor-pointer">
    <span className="relative z-10">Liquid Fill</span>
    <div className="absolute inset-0 bg-neutral-800 dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</button>`,
            cssCode: `.liquid-fill-button {
    position: relative;
    padding: 0.75rem 2rem;
    border: 1px solid #262626;
    border-radius: 0.5rem;
    overflow: hidden;
    color: #262626;
    font-weight: 700;
    transition: color 0.3s ease;
    cursor: pointer;
    background: transparent;
}

.liquid-fill-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #262626;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 0;
}

.liquid-fill-button span {
    position: relative;
    z-index: 10;
}

.liquid-fill-button:hover {
    color: white;
}

.liquid-fill-button:hover::before {
    transform: translateY(0);
}

@media (prefers-color-scheme: dark) {
    .liquid-fill-button {
        border-color: white;
        color: white;
    }
    
    .liquid-fill-button::before {
        background-color: white;
    }
    
    .liquid-fill-button:hover {
        color: #171717;
    }
}`,
            preview: (
                <button className="relative px-8 py-3 border border-neutral-800 dark:border-white rounded-lg overflow-hidden group text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-900 transition-colors duration-300 font-bold cursor-pointer">
                    <span className="relative z-10">Liquid Fill</span>
                    <div className="absolute inset-0 bg-neutral-800 dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </button>
            )
        },
        {
            id: 'btn-3d',
            title: '3D Bounce',
            description: 'A 3D button with bounce effect on click',
            code: `<button className="px-8 py-3 bg-blue-500 text-white rounded-xl border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-[6px] transition-all font-bold cursor-pointer">
    Click Me
</button>`,
            cssCode: `.bounce-3d-button {
    padding: 0.75rem 2rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.75rem;
    border-bottom: 6px solid #1d4ed8;
    font-weight: 700;
    transition: all 0.1s ease;
    cursor: pointer;
    border-top: none;
    border-left: none;
    border-right: none;
}

.bounce-3d-button:active {
    border-bottom-width: 0;
    transform: translateY(6px);
}`,
            preview: (
                <button className="px-8 py-3 bg-blue-500 text-white rounded-xl border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-[6px] transition-all font-bold cursor-pointer">
                    Click Me
                </button>
            )
        },
        {
            id: 'btn-ripple',
            title: 'Ripple Effect',
            description: 'Button with ripple animation on click',
            code: `<button className="relative px-8 py-3 bg-blue-500 text-white rounded-lg overflow-hidden font-medium cursor-pointer group">
    <span className="relative z-10">Click Me</span>
    <span className="absolute inset-0 bg-white/30 rounded-full scale-0 group-active:scale-100 transition-transform duration-500 origin-center"></span>
</button>`,
            cssCode: `.ripple-button {
    position: relative;
    padding: 0.75rem 2rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    font-weight: 500;
    cursor: pointer;
    border: none;
}

.ripple-button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.5s ease;
    transform-origin: center;
}

.ripple-button:active::after {
    transform: scale(1);
}`,
            preview: (
                <button className="relative px-8 py-3 bg-blue-500 text-white rounded-lg overflow-hidden font-medium cursor-pointer group">
                    <span className="relative z-10">Click Me</span>
                    <span className="absolute inset-0 bg-white/30 rounded-full scale-0 group-active:scale-100 transition-transform duration-500 origin-center"></span>
                </button>
            )
        },
        {
            id: 'btn-glass',
            title: 'Glassmorphic',
            description: 'Glass effect button with blur background',
            code: `<button className="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-neutral-800 dark:text-white font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-all cursor-pointer shadow-lg">
    Glass Button
</button>`,
            cssCode: `.glass-button {
    padding: 0.75rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.75rem;
    color: #262626;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
}

@media (prefers-color-scheme: dark) {
    .glass-button {
        background: rgba(255, 255, 255, 0.05);
        color: white;
    }
    
    .glass-button:hover {
        background: rgba(255, 255, 255, 0.1);
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-neutral-800 dark:text-white font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-all cursor-pointer shadow-lg">
                    Glass Button
                </button>
            )
        },
        {
            id: 'btn-pulse',
            title: 'Pulsing',
            description: 'Button with continuous pulse animation',
            code: `<button className="px-8 py-3 bg-green-500 text-white rounded-full font-medium cursor-pointer animate-pulse hover:animate-none hover:bg-green-600 transition-colors shadow-lg shadow-green-500/50">
    Pulsing
</button>`,
            cssCode: `.pulse-button {
    padding: 0.75rem 2rem;
    background-color: #22c55e;
    color: white;
    border-radius: 9999px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.5);
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.pulse-button:hover {
    background-color: #16a34a;
    animation: none;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.8;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-green-500 text-white rounded-full font-medium cursor-pointer animate-pulse hover:animate-none hover:bg-green-600 transition-colors shadow-lg shadow-green-500/50">
                    Pulsing
                </button>
            )
        },
        {
            id: 'btn-outline',
            title: 'Outline Hover',
            description: 'Outline button that fills on hover',
            code: `<button className="px-8 py-3 bg-transparent border-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white rounded-lg hover:bg-neutral-800 dark:hover:bg-white hover:text-white dark:hover:text-neutral-800 transition-all font-medium cursor-pointer">
    Outline
</button>`,
            cssCode: `.outline-button {
    padding: 0.75rem 2rem;
    background: transparent;
    border: 2px solid #262626;
    color: #262626;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
}

.outline-button:hover {
    background-color: #262626;
    color: white;
}

@media (prefers-color-scheme: dark) {
    .outline-button {
        border-color: white;
        color: white;
    }
    
    .outline-button:hover {
        background-color: white;
        color: #171717;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-transparent border-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white rounded-lg hover:bg-neutral-800 dark:hover:bg-white hover:text-white dark:hover:text-neutral-800 transition-all font-medium cursor-pointer">
                    Outline
                </button>
            )
        },
        {
            id: 'btn-shadow',
            title: 'Raised Shadow',
            description: 'Button with elevated shadow effect',
            code: `<button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
    Raised
</button>`,
            cssCode: `.raised-shadow-button {
    padding: 0.75rem 2rem;
    background-color: #10b981;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.raised-shadow-button:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-4px);
}`,
            preview: (
                <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Raised
                </button>
            )
        },
        {
            id: 'btn-icon',
            title: 'Icon Button',
            description: 'Button with animated icon',
            code: `<button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium cursor-pointer hover:bg-indigo-700 transition-all group">
    <span>Download</span>
    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
</button>`,
            cssCode: `.icon-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    background-color: #4f46e5;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.icon-button:hover {
    background-color: #4338ca;
}

.icon-button svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
}

.icon-button:hover svg {
    transform: translateY(4px);
}`,
            preview: (
                <button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium cursor-pointer hover:bg-indigo-700 transition-all group">
                    <span>Download</span>
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
            )
        },
        {
            id: 'btn-split',
            title: 'Split Color',
            description: 'Button with split color effect',
            code: `<button className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
    <span className="relative z-10">Split Color</span>
    <div className="absolute inset-0 bg-gradient-to-l from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>`,
            cssCode: `.split-color-button {
    position: relative;
    padding: 0.75rem 2rem;
    background: linear-gradient(to right, #ec4899, #f97316);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    overflow: hidden;
}

.split-color-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to left, #ec4899, #f97316);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.split-color-button:hover::before {
    opacity: 1;
}

.split-color-button span {
    position: relative;
    z-index: 10;
}`,
            preview: (
                <button className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                    <span className="relative z-10">Split Color</span>
                    <div className="absolute inset-0 bg-gradient-to-l from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            )
        },
        {
            id: 'btn-flip',
            title: 'Flip Card',
            description: 'Button that flips on hover',
            code: `<button className="relative px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium cursor-pointer perspective-1000 group h-12 overflow-hidden">
    <span className="block transition-transform duration-500 group-hover:-rotate-y-180">Hover Me</span>
    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 rotate-y-180 group-hover:rotate-y-0">Flipped!</span>
</button>`,
            cssCode: `.flip-button {
    position: relative;
    padding: 0.75rem 2rem;
    background-color: #06b6d4;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    height: 3rem;
    overflow: hidden;
    perspective: 1000px;
}

.flip-button span {
    display: block;
    transition: transform 0.5s ease;
}

.flip-button span:last-child {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(180deg);
}

.flip-button:hover span:first-child {
    transform: rotateY(180deg);
}

.flip-button:hover span:last-child {
    transform: rotateY(0);
}`,
            preview: (
                <button className="relative px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium cursor-pointer h-12 overflow-hidden group">
                    <span className="block transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">Hover Me</span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">Flipped!</span>
                </button>
            )
        },
        {
            id: 'btn-minimal',
            title: 'Minimalist',
            description: 'Clean minimal button design',
            code: `<button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
    Minimal
</button>`,
            cssCode: `.minimal-button {
    padding: 0.75rem 2rem;
    background-color: #171717;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
}

.minimal-button:hover {
    background-color: #262626;
}

@media (prefers-color-scheme: dark) {
    .minimal-button {
        background-color: white;
        color: #171717;
    }
    
    .minimal-button:hover {
        background-color: #f5f5f5;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                    Minimal
                </button>
            )
        },
        {
            id: 'btn-ghost',
            title: 'Ghost',
            description: 'Transparent ghost button',
            code: `<button className="px-8 py-3 bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
    Ghost
</button>`,
            cssCode: `.ghost-button {
    padding: 0.75rem 2rem;
    background: transparent;
    border: 1px solid #d4d4d4;
    color: #404040;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.ghost-button:hover {
    background-color: #f5f5f5;
}

@media (prefers-color-scheme: dark) {
    .ghost-button {
        border-color: #525252;
        color: #d4d4d4;
    }
    
    .ghost-button:hover {
        background-color: #262626;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    Ghost
                </button>
            )
        },
        {
            id: 'btn-pill',
            title: 'Pill Shape',
            description: 'Fully rounded pill button',
            code: `<button className="px-8 py-3 bg-violet-600 text-white rounded-full font-bold cursor-pointer hover:bg-violet-700 transition-colors shadow-lg">
    Pill Button
</button>`,
            cssCode: `.pill-button {
    padding: 0.75rem 2rem;
    background-color: #7c3aed;
    color: white;
    border-radius: 9999px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.pill-button:hover {
    background-color: #6d28d9;
}`,
            preview: (
                <button className="px-8 py-3 bg-violet-600 text-white rounded-full font-bold cursor-pointer hover:bg-violet-700 transition-colors shadow-lg">
                    Pill Button
                </button>
            )
        },
        {
            id: 'btn-emboss',
            title: 'Embossed',
            description: 'Button with embossed effect',
            code: `<button className="px-8 py-3 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-white rounded-lg font-medium cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] transition-all">
    Embossed
</button>`,
            cssCode: `.embossed-button {
    padding: 0.75rem 2rem;
    background-color: #e5e5e5;
    color: #262626;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;
}

.embossed-button:active {
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (prefers-color-scheme: dark) {
    .embossed-button {
        background-color: #404040;
        color: white;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-white rounded-lg font-medium cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] transition-all">
                    Embossed
                </button>
            )
        },
        {
            id: 'btn-rainbow',
            title: 'Rainbow Gradient',
            description: 'Button with rainbow color gradient',
            code: `<button className="px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white rounded-lg font-bold cursor-pointer hover:scale-105 transition-transform shadow-lg">
    Rainbow
</button>`,
            cssCode: `.rainbow-button {
    padding: 0.75rem 2rem;
    background: linear-gradient(to right, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7);
    color: white;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.rainbow-button:hover {
    transform: scale(1.05);
}`,
            preview: (
                <button className="px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white rounded-lg font-bold cursor-pointer hover:scale-105 transition-transform shadow-lg">
                    Rainbow
                </button>
            )
        },
        {
            id: 'btn-shimmer',
            title: 'Shimmer',
            description: 'Button with shimmer animation',
            code: `<button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
    <span className="relative z-10">Shimmer</span>
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
</button>`,
            cssCode: `.shimmer-button {
    position: relative;
    padding: 0.75rem 2rem;
    background: linear-gradient(to right, #2563eb, #9333ea);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    overflow: hidden;
}

.shimmer-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: translateX(-100%);
    transition: transform 1s ease;
}

.shimmer-button:hover::before {
    transform: translateX(100%);
}

.shimmer-button span {
    position: relative;
    z-index: 10;
}`,
            preview: (
                <button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                    <span className="relative z-10">Shimmer</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
            )
        },
        {
            id: 'btn-border-anim',
            title: 'Animated Border',
            description: 'Button with animated border',
            code: `<button className="relative px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-lg font-medium cursor-pointer overflow-hidden group">
    <span className="relative z-10">Animated Border</span>
    <div className="absolute inset-0 border-2 border-transparent bg-primary-500 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
</button>`,
            cssCode: `.animated-border-button {
    position: relative;
    padding: 0.75rem 2rem;
    background: transparent;
    border: 2px solid #7400ff;
    color: #7400ff;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;
}

.animated-border-button::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    background: #7400ff;
    transform: scale(0);
    transition: transform 0.3s ease;
    transform-origin: center;
    z-index: 0;
}

.animated-border-button:hover::before {
    transform: scale(1);
}

.animated-border-button span {
    position: relative;
    z-index: 10;
}`,
            preview: (
                <button className="relative px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-lg font-medium cursor-pointer overflow-hidden group">
                    <span className="relative z-10">Animated Border</span>
                    <div className="absolute inset-0 border-2 border-transparent bg-primary-500 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </button>
            )
        },
        {
            id: 'btn-social',
            title: 'Social Circle',
            description: 'Circular social media button',
            code: `<button className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:scale-110 transition-all shadow-lg">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
</button>`,
            cssCode: `.social-circle-button {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.social-circle-button:hover {
    background-color: #2563eb;
    transform: scale(1.1);
}

.social-circle-button svg {
    width: 1.5rem;
    height: 1.5rem;
}`,
            preview: (
                <button className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:scale-110 transition-all shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </button>
            )
        },
        {
            id: 'btn-progress',
            title: 'Progress Button',
            description: 'Button with progress indicator',
            code: `<button className="relative px-8 py-3 bg-teal-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
    <span className="relative z-10">Upload</span>
    <div className="absolute inset-0 bg-teal-700 w-0 group-hover:w-full transition-all duration-1000"></div>
</button>`,
            cssCode: `.progress-button {
    position: relative;
    padding: 0.75rem 2rem;
    background-color: #0d9488;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    overflow: hidden;
}

.progress-button::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #0f766e;
    width: 0;
    transition: width 1s ease;
}

.progress-button:hover::before {
    width: 100%;
}

.progress-button span {
    position: relative;
    z-index: 10;
}`,
            preview: (
                <button className="relative px-8 py-3 bg-teal-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                    <span className="relative z-10">Upload</span>
                    <div className="absolute inset-0 bg-teal-700 w-0 group-hover:w-full transition-all duration-1000"></div>
                </button>
            )
        },
        {
            id: 'btn-retro',
            title: 'Retro Pixel',
            description: 'Retro pixelated button style',
            code: `<button className="px-8 py-3 bg-yellow-400 border-4 border-yellow-600 text-yellow-900 font-bold cursor-pointer hover:bg-yellow-300 active:border-yellow-800 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] active:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px]">
    RETRO
</button>`,
            cssCode: `.retro-button {
    padding: 0.75rem 2rem;
    background-color: #facc15;
    border: 4px solid #ca8a04;
    color: #854d0e;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;
}

.retro-button:hover {
    background-color: #fde047;
}

.retro-button:active {
    border-color: #a16207;
    box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
    transform: translate(2px, 2px);
}`,
            preview: (
                <button className="px-8 py-3 bg-yellow-400 border-4 border-yellow-600 text-yellow-900 font-bold cursor-pointer hover:bg-yellow-300 active:border-yellow-800 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] active:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px]">
                    RETRO
                </button>
            )
        },
        {
            id: 'btn-angled',
            title: 'Angled Sides',
            description: 'Button with angled/slanted sides',
            code: `<button className="px-8 py-3 bg-rose-600 text-white font-medium cursor-pointer hover:bg-rose-700 transition-colors shadow-lg" style={{clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'}}>
    Angled
</button>`,
            cssCode: `.angled-button {
    padding: 0.75rem 2rem;
    background-color: #e11d48;
    color: white;
    font-weight: 500;
    cursor: pointer;
    border: none;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.angled-button:hover {
    background-color: #be123c;
}`,
            preview: (
                <button className="px-8 py-3 bg-rose-600 text-white font-medium cursor-pointer hover:bg-rose-700 transition-colors shadow-lg" style={{clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'}}>
                    Angled
                </button>
            )
        },
        {
            id: 'btn-bevel',
            title: 'Beveled Edge',
            description: 'Button with beveled glossy edge',
            code: `<button className="px-8 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg font-medium cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all shadow-[0_4px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:shadow-[0_2px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:translate-y-[2px]">
    Beveled
</button>`,
            cssCode: `.beveled-button {
    padding: 0.75rem 2rem;
    background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: 0 4px 0 0 #1e40af, inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.1s ease;
}

.beveled-button:hover {
    background: linear-gradient(to bottom, #2563eb, #1e3a8a);
}

.beveled-button:active {
    box-shadow: 0 2px 0 0 #1e40af, inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(2px);
}`,
            preview: (
                <button className="px-8 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg font-medium cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all shadow-[0_4px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:shadow-[0_2px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:translate-y-[2px]">
                    Beveled
                </button>
            )
        },
        {
            id: 'btn-sketch',
            title: 'Hand Drawn',
            description: 'Hand-drawn sketch style button',
            code: `<button className="px-8 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white rounded-lg font-medium cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors" style={{borderRadius: '15px 5px 15px 5px / 5px 15px 5px 15px'}}>
    Sketch
</button>`,
            cssCode: `.sketch-button {
    padding: 0.75rem 2rem;
    background-color: white;
    border: 2px solid #171717;
    color: #171717;
    border-radius: 15px 5px 15px 5px / 5px 15px 5px 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sketch-button:hover {
    background-color: #fafafa;
}

@media (prefers-color-scheme: dark) {
    .sketch-button {
        background-color: #262626;
        border-color: white;
        color: white;
    }
    
    .sketch-button:hover {
        background-color: #404040;
    }
}`,
            preview: (
                <button className="px-8 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white rounded-lg font-medium cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors" style={{borderRadius: '15px 5px 15px 5px / 5px 15px 5px 15px'}}>
                    Sketch
                </button>
            )
        },
        {
            id: 'btn-magnetic',
            title: 'Magnetic',
            description: 'Button that follows cursor',
            code: `<button className="px-8 py-3 bg-fuchsia-600 text-white rounded-full font-medium cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg shadow-fuchsia-500/50">
    Magnetic
</button>`,
            cssCode: `.magnetic-button {
    padding: 0.75rem 2rem;
    background-color: #c026d3;
    color: white;
    border-radius: 9999px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(192, 38, 211, 0.5);
    transition: all 0.3s ease;
}

.magnetic-button:hover {
    transform: scale(1.1) rotate(3deg);
}`,
            preview: (
                <button className="px-8 py-3 bg-fuchsia-600 text-white rounded-full font-medium cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg shadow-fuchsia-500/50">
                    Magnetic
                </button>
            )
        },
        {
            id: 'btn-gradient-3d',
            title: 'Gradient 3D',
            description: '3D button with gradient',
            code: `<button className="px-8 py-3 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white rounded-xl font-bold cursor-pointer hover:shadow-[0_20px_25px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all border-b-4 border-purple-700 active:border-b-2 active:translate-y-1">
    Gradient 3D
</button>`,
            cssCode: `.gradient-3d-button {
    padding: 0.75rem 2rem;
    background: linear-gradient(to bottom right, #a855f7, #ec4899, #ef4444);
    color: white;
    border-radius: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    border-bottom: 4px solid #6b21a8;
    transition: all 0.3s ease;
}

.gradient-3d-button:hover {
    box-shadow: 0 20px 25px -5px rgba(168, 85, 247, 0.4);
    transform: translateY(-4px);
}

.gradient-3d-button:active {
    border-bottom-width: 2px;
    transform: translateY(4px);
}`,
            preview: (
                <button className="px-8 py-3 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white rounded-xl font-bold cursor-pointer hover:shadow-[0_20px_25px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all border-b-4 border-purple-700 active:border-b-2 active:translate-y-1">
                    Gradient 3D
                </button>
            )
        },
        {
            id: 'btn-lift',
            title: 'Lift Shadow',
            description: 'Button with lifting shadow effect',
            code: `<button className="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
    Lift Up
</button>`,
            cssCode: `.lift-button {
    padding: 0.75rem 2rem;
    background-color: #475569;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.lift-button:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: translateY(-8px);
}`,
            preview: (
                <button className="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                    Lift Up
                </button>
            )
        },
        {
            id: 'btn-cyber',
            title: 'Cyber Neon',
            description: 'Cyberpunk neon style button',
            code: `<button className="px-8 py-3 bg-black border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold cursor-pointer hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all">
    CYBER
</button>`,
            cssCode: `.cyber-button {
    padding: 0.75rem 2rem;
    background-color: #000;
    border: 2px solid #22d3ee;
    color: #22d3ee;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cyber-button:hover {
    background-color: #22d3ee;
    color: #000;
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
}`,
            preview: (
                <button className="px-8 py-3 bg-black border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold cursor-pointer hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all">
                    CYBER
                </button>
            )
        },
        {
            id: 'btn-morph',
            title: 'Morphing',
            description: 'Button that morphs shape on hover',
            code: `<button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium cursor-pointer hover:rounded-full transition-all duration-500">
    Morph
</button>`,
            cssCode: `.morph-button {
    padding: 0.75rem 2rem;
    background-color: #f97316;
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: border-radius 0.5s ease;
}

.morph-button:hover {
    border-radius: 9999px;
}`,
            preview: (
                <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium cursor-pointer hover:rounded-full transition-all duration-500">
                    Morph
                </button>
            )
        },
        {
            id: 'btn-glow-text',
            title: 'Glowing Text',
            description: 'Button with glowing text effect',
            code: `<button className="px-8 py-3 bg-neutral-900 text-lime-400 rounded-lg font-bold cursor-pointer hover:text-lime-300 hover:shadow-[0_0_10px_rgba(132,204,22,0.8)] transition-all">
    GLOW
</button>`,
            cssCode: `.glow-text-button {
    padding: 0.75rem 2rem;
    background-color: #171717;
    color: #84cc16;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    text-shadow: 0 0 10px rgba(132, 204, 22, 0.5);
    transition: all 0.3s ease;
}

.glow-text-button:hover {
    color: #a3e635;
    text-shadow: 0 0 10px rgba(132, 204, 22, 0.8);
    box-shadow: 0 0 10px rgba(132, 204, 22, 0.8);
}`,
            preview: (
                <button className="px-8 py-3 bg-neutral-900 text-lime-400 rounded-lg font-bold cursor-pointer hover:text-lime-300 hover:shadow-[0_0_10px_rgba(132,204,22,0.8)] transition-all">
                    GLOW
                </button>
            )
        }
    ];

    const handleButtonClick = (buttonId: string) => {
        const buttonData = buttons.map(b => ({
            id: b.id,
            title: b.title,
            description: b.description,
            code: b.code,
            cssCode: b.cssCode
        }));
        localStorage.setItem('buttonData', JSON.stringify(buttonData));
        setTimeout(() => {
            navigate(`/buttons/${buttonId}`);
        }, 50);
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Animated <span className="font-serif italic text-gradient">Buttons</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        A collection of modern, interactive button styles.
                        <br />Click on any button to see the code and details.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleButtonClick(button.id);
                            }}
                            className="group relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors text-left w-full flex flex-col gap-4 items-center justify-center"
                        >
                            {/* Copy indicator */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mb-6 min-h-[80px] flex items-center justify-center pointer-events-none">
                                <div className="pointer-events-auto">
                                    {button.preview}
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{button.title}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{button.description}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Buttons;
