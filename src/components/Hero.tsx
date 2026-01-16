import Button from './ui/Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8">
            {/* Background Gradient Glows */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Left glow - warm tint */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-rose-200/30 via-transparent to-transparent"></div>
                {/* Right glow - purple tint */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-200/40 via-transparent to-transparent"></div>
                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary-100/30 via-transparent to-transparent"></div>
                {/* Subtle center light columns */}
                <div className="absolute top-0 left-[22%] w-px h-2/3 bg-gradient-to-b from-primary-300/10 via-primary-400/20 to-transparent"></div>
                <div className="absolute top-0 right-[22%] w-px h-2/3 bg-gradient-to-b from-primary-300/10 via-primary-400/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-24">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6">
                    <img src="/src/assets/logo.png" alt="Logo" className="w-5 h-5 object-contain" />
                    <span className="text-sm font-medium text-neutral-600">Premium Animated Components</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-tight mb-6">
                    Animations that
                    <br />
                    <span className="font-serif italic">bring your UI to </span>
                    <span className="text-gradient font-serif italic inline-block pr-2">life</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    A modern library of beautifully crafted animated components.
                    <br className="hidden sm:block" />
                    Copy, paste, and customize with AI-powered animation generation.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    }>
                        Browse Library
                    </Button>
                    <Button variant="outline" size="lg">
                        View Documentation
                    </Button>
                </div>

                {/* Trust indicator */}
                <div className="mt-10 flex items-center justify-center gap-4 text-sm text-neutral-500">
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden relative z-10">
                            <img src="/src/assets/avatars/avatar_1_1768328154540.png" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden relative z-20">
                            <img src="/src/assets/avatars/avatar_2_1768328171146.png" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden relative z-30">
                            <img src="/src/assets/avatars/avatar_3_1768328187334.png" alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden relative z-40">
                            <img src="/src/assets/avatars/avatar_4_1768328203649.png" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <span className='text-nowrap'>Trusted by 1000+ developers</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
