import { useState, useEffect, useRef } from 'react';

const Showcase = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Animated counter
    const [counts, setCounts] = useState({ users: 0, downloads: 0, rating: 0, components: 0 });
    
    useEffect(() => {
        const targets = { users: 50000, downloads: 120000, rating: 4.9, components: 200 };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
                users: Math.floor(targets.users * progress),
                downloads: Math.floor(targets.downloads * progress),
                rating: Math.round(targets.rating * progress * 10) / 10,
                components: Math.floor(targets.components * progress),
            });
            if (step >= steps) clearInterval(timer);
        }, interval);
        
        return () => clearInterval(timer);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Frontend Developer @ Google",
            avatar: "/src/assets/avatars/avatar_1_1768328154540.png",
            content: "ItsAnimated has completely transformed how I build UIs. The animations are buttery smooth and the code is so clean!",
            rating: 5
        },
        {
            name: "Alex Rivera",
            role: "Design Lead @ Spotify",
            avatar: "/src/assets/avatars/avatar_2_1768328171146.png",
            content: "Finally, a component library that understands design. Every animation feels intentional and polished.",
            rating: 5
        },
        {
            name: "Marcus Johnson",
            role: "Indie Hacker",
            avatar: "/src/assets/avatars/avatar_3_1768328187334.png",
            content: "Shipped my SaaS landing page in 2 hours instead of 2 days. These components are pure gold!",
            rating: 5
        }
    ];

    const faqs = [
        { q: "Is ItsAnimated free to use?", a: "Yes! We offer a generous free tier with 50+ components. Pro plans unlock the full library of 200+ components." },
        { q: "Can I use it with Next.js?", a: "Absolutely! ItsAnimated works seamlessly with Next.js, Vite, Create React App, and any React-based framework." },
        { q: "Do I need to install any dependencies?", a: "Just Tailwind CSS! All animations are built with pure CSS and Tailwind utilities. No JavaScript animation libraries needed." },
        { q: "Can I customize the animations?", a: "100%! Every component is fully customizable. Change colors, timing, easing, and more with simple Tailwind classes." },
    ];

    const team = [
        { name: "Emma Wilson", role: "Founder & CEO", avatar: "/src/assets/avatars/avatar_1_1768328154540.png" },
        { name: "David Park", role: "Lead Developer", avatar: "/src/assets/avatars/avatar_2_1768328171146.png" },
        { name: "Sophie Taylor", role: "Design Director", avatar: "/src/assets/avatars/avatar_3_1768328187334.png" },
        { name: "James Lee", role: "Animation Expert", avatar: "/src/assets/avatars/avatar_4_1768328203649.png" },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        UI <span className="font-serif italic text-gradient">Showcase</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Beautiful UI blocks built with our animated components.
                        <br />Get inspired and build amazing interfaces.
                    </p>
                </div>

                <div className="space-y-24">

                    {/* Hero Example */}
                    <div className="p-8 md:p-12 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                    </span>
                                    v2.0 Released
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
                                    Build faster with <span className="text-gradient">Animated</span> UI
                                </h2>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                    Seamlessly integrate beautiful animations into your React projects.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <button className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-500/30 cursor-pointer">
                                        Get Started
                                    </button>
                                    <button className="px-8 py-3 bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-neutral-900 dark:text-white rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-all cursor-pointer">
                                        View Docs
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-lg">
                                <div 
                                    className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 bg-neutral-900 cursor-pointer group"
                                    onClick={handlePlayVideo}
                                >
                                    <video 
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
                                    >
                                        <source src="https://cdn.pixabay.com/video/2022/07/24/125310-733056270_large.mp4" type="video/mp4" />
                                    </video>
                                    
                                    {/* Play/Pause Overlay */}
                                    <div className={`absolute inset-0 flex items-center justify-center bg-neutral-900/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                                        <div className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${isPlaying ? 'scale-90' : 'scale-100'}`}>
                                            {isPlaying ? (
                                                <svg className="w-8 h-8 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                                </svg>
                                            ) : (
                                                <svg className="w-8 h-8 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-900/60 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Counter */}
                    <div className="relative p-12 rounded-3xl bg-neutral-900 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
                        
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {counts.users.toLocaleString()}+
                                </div>
                                <div className="text-neutral-400">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {counts.downloads.toLocaleString()}+
                                </div>
                                <div className="text-neutral-400">Downloads</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {counts.rating}<span className="text-yellow-400">★</span>
                                </div>
                                <div className="text-neutral-400">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {counts.components}+
                                </div>
                                <div className="text-neutral-400">Components</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "⚡", title: "Lightning Fast", desc: "60fps animations optimized for performance" },
                            { icon: "🎨", title: "Fully Customizable", desc: "Tailwind CSS powered, easy to modify" },
                            { icon: "📋", title: "Copy & Paste", desc: "Zero config, just copy and use" },
                        ].map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{f.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <div className="relative bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 overflow-hidden">
                        <div className="absolute top-8 left-8 text-primary-100 dark:text-primary-900/30">
                            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">What Developers Say</h2>
                            
                            <div className="min-h-[180px] flex flex-col justify-center">
                                {testimonials.map((t, idx) => (
                                    <div 
                                        key={idx}
                                        className={`transition-all duration-500 ${activeTestimonial === idx ? 'opacity-100' : 'opacity-0 absolute'}`}
                                    >
                                        {activeTestimonial === idx && (
                                            <div className="text-center">
                                                <div className="flex gap-1 mb-4 justify-center">
                                                    {[...Array(t.rating)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-xl text-neutral-700 dark:text-neutral-200 mb-6 max-w-2xl mx-auto">"{t.content}"</p>
                                                <div className="flex items-center gap-3 justify-center">
                                                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                                    <div className="text-left">
                                                        <div className="font-bold text-neutral-900 dark:text-white">{t.name}</div>
                                                        <div className="text-neutral-500 text-sm">{t.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                            activeTestimonial === idx ? 'bg-primary-600 w-6' : 'bg-neutral-300 dark:bg-neutral-600'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {team.map((member, idx) => (
                                <div key={idx} className="group text-center">
                                    <div className="relative mb-4 mx-auto w-24 h-24">
                                        <img 
                                            src={member.avatar} 
                                            alt={member.name}
                                            className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <h4 className="font-bold text-neutral-900 dark:text-white">{member.name}</h4>
                                    <p className="text-sm text-neutral-500">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">FAQ</h2>
                        <div className="max-w-2xl mx-auto space-y-3">
                            {faqs.map((faq, idx) => (
                                <div 
                                    key={idx}
                                    className={`rounded-xl border transition-all ${
                                        activeFaq === idx ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/10' : 'border-neutral-200 dark:border-neutral-700'
                                    }`}
                                >
                                    <button
                                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                        className="w-full px-5 py-4 flex items-center justify-between cursor-pointer"
                                    >
                                        <span className={`font-medium text-left ${activeFaq === idx ? 'text-primary-600' : 'text-neutral-900 dark:text-white'}`}>
                                            {faq.q}
                                        </span>
                                        <svg className={`w-5 h-5 transition-transform ${activeFaq === idx ? 'rotate-180 text-primary-600' : 'text-neutral-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all ${activeFaq === idx ? 'max-h-32' : 'max-h-0'}`}>
                                        <p className="px-5 pb-4 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter CTA */}
                    <div className="relative p-12 rounded-3xl bg-neutral-900 overflow-hidden text-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px]"></div>
                        
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Stay in the <span className="text-gradient">Loop</span></h2>
                            <p className="text-neutral-400 mb-8 max-w-md mx-auto">Get notified when we release new components and updates.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-neutral-500 outline-none focus:border-primary-500/50"
                                />
                                <button className="px-6 py-3 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all cursor-pointer">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Showcase;
