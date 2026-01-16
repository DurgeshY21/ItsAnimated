const CTA = () => {
    const stats = [
        { value: '200+', label: 'Components' },
        { value: '50K+', label: 'Developers' },
        { value: '4.9★', label: 'Rating' },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-950">
                {/* Gradient mesh */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-400 rounded-full blur-[120px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-fuchsia-600 rounded-full blur-[150px]"></div>
                </div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                {/* Top & bottom fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-900 dark:from-neutral-950 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 dark:from-neutral-950 to-transparent"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <img src="/src/assets/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                </div>

                {/* Heading */}
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-6">
                    Ready to bring your UI to <span className="text-gradient font-serif italic">life</span>?
                </h2>

                {/* Subtext */}
                <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-10">
                    Join thousands of developers and designers creating delightful experiences with itsanimated.fun
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="group px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2">
                        Start Animating Now
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm">
                        View Pricing
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-white/50 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTA;

