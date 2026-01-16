const HowItWorks = () => {
    const steps = [
        {
            num: '01',
            title: 'Browse Components',
            description: 'Explore our library of 200+ animated components. Filter by category or animation type.',
        },
        {
            num: '02',
            title: 'Customize',
            description: 'Adjust colors, timing, and behavior. Make it truly yours with our editor.',
        },
        {
            num: '03',
            title: 'Copy & Ship',
            description: 'One click to copy. Works with React, Vue, Svelte, and vanilla JS.',
        },
    ];

    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-50 dark:from-neutral-900 to-transparent"></div>
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 dark:from-neutral-900 to-transparent"></div>
                
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 dark:bg-primary-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 dark:bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        How it <span className="font-serif italic text-gradient">works</span>
                    </h2>
                    <p className="text-neutral-500 dark:text-white/50 text-lg">Get started in three simple steps</p>
                </div>

                {/* Steps - Clean horizontal layout */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connection line */}
                    <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800"></div>
                    
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            {/* Number circle */}
                            <div className="flex justify-center mb-8">
                                <div className="w-24 h-24 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center border-2 border-primary-100 dark:border-primary-800 group-hover:border-primary-400 transition-colors">
                                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{step.num}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-500 dark:text-white/50 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button className="group px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                        <span className="flex items-center gap-2">
                            Start Building
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

