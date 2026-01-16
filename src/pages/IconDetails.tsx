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
                <button
                    onClick={() => navigate('/icons')}
                    className="mb-8 flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Icons
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Icon Preview */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-12 flex items-center justify-center min-h-[400px] relative overflow-hidden group">
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

                            <div className="relative z-10 scale-[3] text-neutral-800 dark:text-neutral-200">
                                {icon.icon}
                            </div>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{icon.name}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">Category: <span className="font-medium text-primary-600 dark:text-primary-400">{icon.category}</span></p>
                        </div>
                    </div>

                    {/* Right Column: Code & Actions */}
                    <div className="flex flex-col h-full">
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col h-full overflow-hidden shadow-sm">
                            {/* Tabs */}
                            <div className="flex border-b border-neutral-200 dark:border-neutral-700">
                                <button
                                    className={`flex-1 py-4 text-sm font-medium transition-colors relative ${activeTab === 'tailwind'
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                                        }`}
                                    onClick={() => setActiveTab('tailwind')}
                                >
                                    Tailwind CSS
                                    {activeTab === 'tailwind' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" />
                                    )}
                                </button>
                                <button
                                    className={`flex-1 py-4 text-sm font-medium transition-colors relative ${activeTab === 'css'
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                                        }`}
                                    onClick={() => setActiveTab('css')}
                                >
                                    Vanilla CSS
                                    {activeTab === 'css' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" />
                                    )}
                                </button>
                            </div>

                            {/* Code Block */}
                            <div className="relative flex-grow bg-[#1e1e1e] group">
                                <div className="absolute top-4 right-4 z-10">
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/10"
                                        title="Copy code"
                                    >
                                        {copied ? (
                                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="h-full overflow-auto custom-scrollbar">
                                    <SyntaxHighlighter
                                        language={activeTab === 'tailwind' ? 'jsx' : 'css'}
                                        style={vscDarkPlus}
                                        customStyle={{
                                            margin: 0,
                                            padding: '1.5rem',
                                            height: '100%',
                                            fontSize: '0.9rem',
                                            lineHeight: '1.5',
                                            background: 'transparent',
                                            whiteSpace: 'pre-wrap',       // Force text wrapping
                                            wordBreak: 'break-word',      // Break long words if necessary
                                        }}
                                        wrapLines={true}
                                        wrapLongLines={true}
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
