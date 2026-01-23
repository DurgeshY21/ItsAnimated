import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { iconsData } from '../data/icons';

const IconDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tailwind' | 'css'>('tailwind');
    const [copied, setCopied] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const icon = iconsData.find((i) => i.id === id);

    useEffect(() => {
        if (!icon) {
            navigate('/icons');
        }
    }, [icon, navigate]);

    if (!icon) return null;

    const handleCopy = () => {
        const codeToCopy = activeTab === 'tailwind' ? icon.code : icon.cssCode;
        if (codeToCopy) {
            navigator.clipboard.writeText(codeToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/icons')}
                    className="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Icons</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Preview */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{icon.name}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">Category: <span className="font-medium text-primary-600 dark:text-primary-400">{icon.category}</span></p>
                        </div>

                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg">
                            <div className="flex items-center justify-center min-h-[400px] relative overflow-hidden">
                                {/* Background decorative elements */}
                                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                                <div className="relative z-10 scale-[3] text-neutral-800 dark:text-neutral-200">
                                    {icon.icon}
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
                                        <span className="text-xs text-neutral-400">{activeTab === 'tailwind' ? 'Icon.tsx' : 'icon.css'}</span>
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
                                        {activeTab === 'tailwind' ? (icon.code || '') : (icon.cssCode || '')}
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

export default IconDetails;
