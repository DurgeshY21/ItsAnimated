import { useState } from 'react';

const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Buttons', 'Icons', 'Cards', 'Loaders', 'Inputs'];

    const components = [
        { name: 'Pulse Button', category: 'Buttons', preview: '🔘' },
        { name: 'Bounce Icon', category: 'Icons', preview: '⭐' },
        { name: 'Flip Card', category: 'Cards', preview: '🃏' },
        { name: 'Spinner', category: 'Loaders', preview: '🔄' },
    ];

    const filteredComponents = components.filter(comp => {
        const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/50 to-transparent -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6">
                            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-sm font-medium text-primary-600">Search & Explore</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                            Find it,
                            <br />
                            <span className="font-serif italic text-gradient">and use it instantly</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                            Browse our extensive library with powerful search. Find the perfect animated component in seconds, preview it live, and copy the code directly into your project.
                        </p>

                        {/* Steps */}
                        <div className="space-y-6">
                            {[
                                { num: '1', title: 'Search or browse', desc: 'Use filters to find exactly what you need' },
                                { num: '2', title: 'Preview live', desc: 'See the animation in action before copying' },
                                { num: '3', title: 'Copy and use', desc: 'Ready-to-use code in your framework' },
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center flex-shrink-0">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">{step.title}</h4>
                                        <p className="text-neutral-500 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Search Interface */}
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-[32px] blur-2xl -z-10"></div>

                        {/* Card */}
                        <div className="bg-white rounded-3xl shadow-2xl shadow-primary-900/10 border border-neutral-100 overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-4">
                                <h3 className="text-white font-semibold flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    Component Library
                                </h3>
                            </div>

                            {/* Search */}
                            <div className="p-6 border-b border-neutral-100">
                                <div className="relative">
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search components..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Category Pills */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${selectedCategory === cat
                                                    ? 'bg-primary-600 text-white'
                                                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div className="p-4">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {filteredComponents.map((comp, idx) => (
                                        <div
                                            key={idx}
                                            className="group p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-md transition-all cursor-pointer text-center"
                                        >
                                            <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                                                {comp.preview}
                                            </div>
                                            <h4 className="font-medium text-neutral-800 text-xs">{comp.name}</h4>
                                        </div>
                                    ))}
                                </div>

                                {filteredComponents.length === 0 && (
                                    <div className="text-center py-6 text-neutral-400">
                                        No components found
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
                                <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    Browse All Components
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;

