import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ButtonDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tailwind' | 'css'>('css');
    const [copied, setCopied] = useState(false);
    const [button, setButton] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const savedData = localStorage.getItem('buttonData');
        if (savedData) {
            try {
                const buttons = JSON.parse(savedData);
                const found = buttons.find((b: any) => b.id === id);
                if (found) {
                    setButton(found);
                } else {
                    setError('Button not found.');
                }
            } catch (e) {
                setError('Failed to parse button data.');
            }
        } else {
            setError('No button data found in local storage.');
        }
        setLoading(false);
    }, [id]);

    const generateCSSFromTailwind = (_tailwindCode: string): string => {
        // If cssCode is already provided, use it
        if (button?.cssCode) {
            return button.cssCode;
        }
        // Otherwise return a generic CSS template
        return `/* CSS equivalent for ${button?.title || 'Button'} */\n\n` +
            `/* Note: This is a simplified conversion. For full Tailwind to CSS conversion, use a tool like tailwindcss.com */\n\n` +
            `.button {\n` +
            `  /* Add your custom styles here based on the Tailwind classes */\n` +
            `  padding: 0.75rem 2rem;\n` +
            `  border-radius: 0.5rem;\n` +
            `  font-weight: 500;\n` +
            `  transition: all 0.3s ease;\n` +
            `  cursor: pointer;\n` +
            `}\n\n` +
            `.button:hover {\n` +
            `  /* Hover styles */\n` +
            `}\n\n` +
            `.button:active {\n` +
            `  /* Active styles */\n` +
            `}\n`;
    };

    const handleCopy = () => {
        const codeToCopy = activeTab === 'tailwind'
            ? button?.code
            : (button?.cssCode || generateCSSFromTailwind(button?.code || ''));
        if (codeToCopy) {
            navigator.clipboard.writeText(codeToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const renderPreview = () => {
        if (!button) return null;

        switch (button.id) {
            case 'btn-neu':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#0b0b0b,-5px_-5px_10px_#252525] active:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] dark:active:shadow-[inset_5px_5px_10px_#0b0b0b,inset_-5px_-5px_10px_#252525] text-neutral-600 dark:text-neutral-300 font-semibold transition-all active:scale-95 cursor-pointer">
                            Press Me
                        </button>
                    </div>
                );
            case 'btn-shine':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold overflow-hidden group cursor-pointer shadow-lg shadow-primary-500/30">
                            <span className="relative z-10">Hover Me</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
                        </button>
                    </div>
                );
            case 'btn-glow':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-xl hover:shadow-[0_0_20px_rgba(98,0,217,0.5)] hover:bg-primary-500 hover:text-white transition-all duration-300 font-bold cursor-pointer">
                            Neon Glow
                        </button>
                    </div>
                );
            case 'btn-slide':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white rounded-lg hover:gap-4 transition-all duration-300 font-medium cursor-pointer">
                            <span>Next Step</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                );
            case 'btn-liquid':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 border border-neutral-800 dark:border-white rounded-lg overflow-hidden group text-neutral-800 dark:text-white hover:text-white dark:hover:text-neutral-900 transition-colors duration-300 font-bold cursor-pointer">
                            <span className="relative z-10">Liquid Fill</span>
                            <div className="absolute inset-0 bg-neutral-800 dark:bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        </button>
                    </div>
                );
            case 'btn-3d':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-blue-500 text-white rounded-xl border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-[6px] transition-all font-bold cursor-pointer">
                            Click Me
                        </button>
                    </div>
                );
            case 'btn-ripple':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-blue-500 text-white rounded-lg overflow-hidden font-medium cursor-pointer group">
                            <span className="relative z-10">Click Me</span>
                            <span className="absolute inset-0 bg-white/30 rounded-full scale-0 group-active:scale-100 transition-transform duration-500 origin-center"></span>
                        </button>
                    </div>
                );
            case 'btn-glass':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-neutral-800 dark:text-white font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-all cursor-pointer shadow-lg">
                            Glass Button
                        </button>
                    </div>
                );
            case 'btn-pulse':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-green-500 text-white rounded-full font-medium cursor-pointer animate-pulse hover:animate-none hover:bg-green-600 transition-colors shadow-lg shadow-green-500/50">
                            Pulsing
                        </button>
                    </div>
                );
            case 'btn-outline':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-transparent border-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white rounded-lg hover:bg-neutral-800 dark:hover:bg-white hover:text-white dark:hover:text-neutral-800 transition-all font-medium cursor-pointer">
                            Outline
                        </button>
                    </div>
                );
            case 'btn-shadow':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                            Raised
                        </button>
                    </div>
                );
            case 'btn-icon':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium cursor-pointer hover:bg-indigo-700 transition-all group">
                            <span>Download</span>
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>
                );
            case 'btn-split':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                            <span className="relative z-10">Split Color</span>
                            <div className="absolute inset-0 bg-gradient-to-l from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </div>
                );
            case 'btn-flip':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-cyan-500 text-white rounded-lg font-medium cursor-pointer h-12 overflow-hidden group">
                            <span className="block transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">Hover Me</span>
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">Flipped!</span>
                        </button>
                    </div>
                );
            case 'btn-minimal':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                            Minimal
                        </button>
                    </div>
                );
            case 'btn-ghost':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-transparent border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg font-medium cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                            Ghost
                        </button>
                    </div>
                );
            case 'btn-pill':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-violet-600 text-white rounded-full font-bold cursor-pointer hover:bg-violet-700 transition-colors shadow-lg">
                            Pill Button
                        </button>
                    </div>
                );
            case 'btn-emboss':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-white rounded-lg font-medium cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] transition-all">
                            Embossed
                        </button>
                    </div>
                );
            case 'btn-rainbow':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white rounded-lg font-bold cursor-pointer hover:scale-105 transition-transform shadow-lg">
                            Rainbow
                        </button>
                    </div>
                );
            case 'btn-shimmer':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                            <span className="relative z-10">Shimmer</span>
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    </div>
                );
            case 'btn-border-anim':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-500 rounded-lg font-medium cursor-pointer overflow-hidden group">
                            <span className="relative z-10">Animated Border</span>
                            <div className="absolute inset-0 border-2 border-transparent bg-primary-500 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                        </button>
                    </div>
                );
            case 'btn-social':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:scale-110 transition-all shadow-lg">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                    </div>
                );
            case 'btn-progress':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="relative px-8 py-3 bg-teal-600 text-white rounded-lg font-medium cursor-pointer overflow-hidden group">
                            <span className="relative z-10">Upload</span>
                            <div className="absolute inset-0 bg-teal-700 w-0 group-hover:w-full transition-all duration-1000"></div>
                        </button>
                    </div>
                );
            case 'btn-retro':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-yellow-400 border-4 border-yellow-600 text-yellow-900 font-bold cursor-pointer hover:bg-yellow-300 active:border-yellow-800 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] active:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px]">
                            RETRO
                        </button>
                    </div>
                );
            case 'btn-angled':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-rose-600 text-white font-medium cursor-pointer hover:bg-rose-700 transition-colors shadow-lg" style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                            Angled
                        </button>
                    </div>
                );
            case 'btn-bevel':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-lg font-medium cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-all shadow-[0_4px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:shadow-[0_2px_0_0_#1e40af,inset_0_1px_0_rgba(255,255,255,0.3)] active:translate-y-[2px]">
                            Beveled
                        </button>
                    </div>
                );
            case 'btn-sketch':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-white dark:bg-neutral-800 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white rounded-lg font-medium cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors" style={{ borderRadius: '15px 5px 15px 5px / 5px 15px 5px 15px' }}>
                            Sketch
                        </button>
                    </div>
                );
            case 'btn-magnetic':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-fuchsia-600 text-white rounded-full font-medium cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg shadow-fuchsia-500/50">
                            Magnetic
                        </button>
                    </div>
                );
            case 'btn-gradient-3d':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white rounded-xl font-bold cursor-pointer hover:shadow-[0_20px_25px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all border-b-4 border-purple-700 active:border-b-2 active:translate-y-1">
                            Gradient 3D
                        </button>
                    </div>
                );
            case 'btn-lift':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-slate-700 text-white rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                            Lift Up
                        </button>
                    </div>
                );
            case 'btn-cyber':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-black border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold cursor-pointer hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all">
                            CYBER
                        </button>
                    </div>
                );
            case 'btn-morph':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium cursor-pointer hover:rounded-full transition-all duration-500">
                            Morph
                        </button>
                    </div>
                );
            case 'btn-glow-text':
                return (
                    <div className="flex justify-center pointer-events-auto">
                        <button className="px-8 py-3 bg-neutral-900 text-lime-400 rounded-lg font-bold cursor-pointer hover:text-lime-300 hover:shadow-[0_0_10px_rgba(132,204,22,0.8)] transition-all">
                            GLOW
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                        <p className="text-sm">{button.title}</p>
                    </div>
                );
        }
    };

    if (loading) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-neutral-600 dark:text-neutral-400">Loading button...</p>
                </div>
            </div>
        );
    }

    if (error || !button) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 mb-4">{error || 'Button not found'}</p>
                    <button
                        onClick={() => navigate('/buttons')}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Back to Buttons
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-neutral-600 dark:text-neutral-400">Loading button...</p>
                </div>
            </div>
        );
    }

    if (error || !button) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Button not found'}</p>
                    <button
                        onClick={() => navigate('/buttons')}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Back to Buttons
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/buttons')}
                    className="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Buttons</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Preview */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{button.title}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">{button.description}</p>
                        </div>

                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg">
                            <div className="pointer-events-none flex items-center justify-center min-h-[400px] relative overflow-hidden">
                                {/* Background decorative elements */}
                                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                                <div className="relative z-10 pointer-events-auto">
                                    {renderPreview()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Code Editor */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Code</h2>

                            {/* Tabs */}
                            <div className="flex gap-2 mb-4">
                                <button
                                    onClick={() => setActiveTab('tailwind')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'tailwind'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                        }`}
                                >
                                    Tailwind React
                                </button>
                                <button
                                    onClick={() => setActiveTab('css')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'css'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                        }`}
                                >
                                    Normal CSS
                                </button>
                            </div>

                            {/* MacBook-style Code Editor */}
                            <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl">
                                {/* MacBook Top Bar */}
                                <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2 border-b border-neutral-700">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 text-center">
                                        <span className="text-xs text-neutral-400">{activeTab === 'tailwind' ? 'Button.tsx' : 'button.css'}</span>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="ml-auto px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-xs text-white transition-colors flex items-center gap-2"
                                    >
                                        {copied ? (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Code Content */}
                                <div
                                    className={`p-4 overflow-x-auto max-h-[600px] overflow-y-auto card-scrollbar ${isScrolling ? 'scrolling' : ''}`}
                                    onScroll={(_e) => {
                                        setIsScrolling(true);
                                        clearTimeout((window as any).scrollTimeout);
                                        (window as any).scrollTimeout = setTimeout(() => {
                                            setIsScrolling(false);
                                        }, 1500);
                                    }}
                                    onMouseEnter={() => setIsScrolling(true)}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            if (!(window as any).scrollTimeout) {
                                                setIsScrolling(false);
                                            }
                                        }, 500);
                                    }}
                                >
                                    <SyntaxHighlighter
                                        language={activeTab === 'tailwind' ? 'tsx' : 'css'}
                                        style={vscDarkPlus}
                                        customStyle={{
                                            margin: 0,
                                            padding: 0,
                                            background: 'transparent',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {activeTab === 'tailwind'
                                            ? (button.code || '')
                                            : (button.cssCode || generateCSSFromTailwind(button.code || ''))}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonDetail;

