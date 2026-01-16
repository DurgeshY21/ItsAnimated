import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { iconsData } from '../data/icons';

const Icons = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredIcons = iconsData.filter(icon =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        icon.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Animated <span className="font-serif italic text-gradient">Icons</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
                        A curated collection of micro-animations to bring your interface to life.
                        <br />Click any icon to view details and code.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-neutral-400 group-focus-within:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search icons (e.g., 'heart', 'cog')..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-neutral-800 border-2 border-neutral-100 dark:border-neutral-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 outline-none transition-all shadow-sm text-neutral-900 dark:text-white placeholder-neutral-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid */}
                {filteredIcons.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {filteredIcons.map((icon) => (
                            <button
                                key={icon.id}
                                onClick={() => navigate(`/icons/${icon.id}`)}
                                className="hover-glow cursor-pointer group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 aspect-square text-left"
                            >
                                <div className="text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors scale-125 mb-4">
                                    {icon.icon}
                                </div>
                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                    {icon.name}
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-400">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">No icons found</h3>
                        <p className="text-neutral-500">Try searching for something else.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Icons;
