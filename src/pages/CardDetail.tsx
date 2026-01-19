import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import avatar1 from '../assets/avatars/avatar_1_1768328154540.png';
import avatar2 from '../assets/avatars/avatar_2_1768328171146.png';
import avatar3 from '../assets/avatars/avatar_3_1768328187334.png';
import avatar4 from '../assets/avatars/avatar_4_1768328203649.png';

const CardDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tailwind' | 'css'>('tailwind');
    const [copied, setCopied] = useState(false);
    const [card, setCard] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        const savedData = localStorage.getItem('cardData');
        if (savedData) {
            try {
                const cards = JSON.parse(savedData);
                const found = cards.find((c: any) => c.id === id);
                if (found) {
                    setCard(found);
                } else {
                    setError('Card not found.');
                }
            } catch (e) {
                setError('Failed to parse card data.');
            }
        } else {
            setError('No card data found in local storage.');
        }
        setLoading(false);
    }, [id]);

    const generateCSSFromTailwind = (tailwindCode: string): string => {
        if (card?.cssCode) {
            return card.cssCode;
        }
        return `/* CSS equivalent for ${card?.name || 'Card'} */\n\n` +
               `/* Note: This is a simplified conversion. For full Tailwind to CSS conversion, use a tool like tailwindcss.com */\n\n` +
               `.card {\n` +
               `  /* Add your custom styles here based on the Tailwind classes */\n` +
               `  border-radius: 1rem;\n` +
               `  padding: 1.5rem;\n` +
               `  transition: all 0.3s ease;\n` +
               `}\n\n` +
               `.card:hover {\n` +
               `  /* Hover styles */\n` +
               `}\n`;
    };

    const handleCopy = () => {
        const codeToCopy = activeTab === 'tailwind' 
            ? card?.code 
            : (card?.cssCode || generateCSSFromTailwind(card?.code || ''));
        if (codeToCopy) {
            navigator.clipboard.writeText(codeToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const renderPreview = () => {
        if (!card) return null;
        
        switch (card.id) {
            case 'profile-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300 pointer-events-auto">
                        <div className="h-20 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                        <div className="px-6 pb-6 -mt-10">
                            <div className="w-20 h-20 rounded-full border-4 border-white dark:border-neutral-800 mx-auto mb-4 overflow-hidden">
                                <img src={avatar1} alt="Sarah Smith" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-center font-bold text-neutral-900 dark:text-white mb-1">Sarah Smith</h3>
                            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-4">Freelance Web Designer</p>
                            <div className="flex justify-around border-t border-neutral-200 dark:border-neutral-700 pt-4">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-neutral-900 dark:text-white">2k</div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Followers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-neutral-900 dark:text-white">10k</div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Following</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-neutral-900 dark:text-white">15</div>
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'blog-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 pointer-events-auto">
                        <div className="relative h-40 bg-gradient-to-br from-orange-200 to-pink-200">
                            <span className="absolute top-3 right-3 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">Cooking</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">Simplest Salad Recipe ever</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>6 mins ago</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    <span>39 Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'product-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all duration-300 group pointer-events-auto">
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white dark:bg-neutral-700 rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                            </div>
                            <button className="absolute top-3 right-3 p-2 bg-white dark:bg-neutral-700 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Premium Package</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">High quality product</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">$99</span>
                                    <span className="text-sm text-neutral-500 line-through ml-2">$149</span>
                                </div>
                                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold cursor-pointer">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                );
            case 'stats-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg transition-all pointer-events-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full">+12.5%</span>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Total Revenue</p>
                            <p className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">$45,231</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">vs $40,123 last month</p>
                        </div>
                    </div>
                );
            case 'testimonial-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-xl transition-all pointer-events-auto">
                        <div className="flex items-center gap-1 mb-4">
                            {[1,2,3,4,5].map(i => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            ))}
                        </div>
                        <p className="text-neutral-700 dark:text-neutral-300 mb-4 italic">"This is an amazing product! It has completely transformed my workflow."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src={avatar3} alt="John Doe" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-semibold text-neutral-900 dark:text-white">John Doe</p>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400">CEO, Company</p>
                            </div>
                        </div>
                    </div>
                );
            case 'feature-card':
                return (
                    <div className="w-full bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 p-6 hover:shadow-lg hover:scale-105 transition-all pointer-events-auto">
                        <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-4">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">Lightning Fast</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">Built with performance in mind. Experience blazing fast load times.</p>
                    </div>
                );
            case 'pricing-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border-2 border-primary-500 dark:border-primary-600 p-6 hover:shadow-2xl transition-all relative overflow-hidden pointer-events-auto">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-primary-600 text-white text-xs font-semibold">Popular</div>
                        <div className="mt-4 mb-6">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Pro Plan</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-neutral-900 dark:text-white">$29</span>
                                <span className="text-neutral-500 dark:text-neutral-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {['10 Projects', 'Unlimited Storage', 'Priority Support', 'Advanced Analytics'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors cursor-pointer">Get Started</button>
                    </div>
                );
            case 'glassmorphism-card':
                return (
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-white/20 p-6 hover:bg-gradient-to-br hover:from-purple-500/30 hover:to-pink-500/30 transition-all pointer-events-auto">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Glassmorphism</h3>
                        <p className="text-white/80 text-sm">Modern glass effect design</p>
                    </div>
                );
            case 'social-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all pointer-events-auto">
                        <div className="p-4 flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-700">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src={avatar4} alt="Alex Johnson" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-neutral-900 dark:text-white text-sm">Alex Johnson</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">2 hours ago</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">Just launched my new project! Check it out 🚀</p>
                            <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-4"></div>
                            <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        <span className="text-sm">1.2k</span>
                                    </button>
                                    <button className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        <span className="text-sm">89</span>
                                    </button>
                                </div>
                                <button className="hover:text-primary-600 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'event-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-all pointer-events-auto">
                        <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                            <div className="absolute top-4 left-4 bg-white dark:bg-neutral-800 rounded-lg px-3 py-2 text-center">
                                <div className="text-2xl font-bold text-neutral-900 dark:text-white">15</div>
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 uppercase">Mar</div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">Tech Conference 2024</h3>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm cursor-pointer">Register Now</button>
                        </div>
                    </div>
                );
            case 'team-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all pointer-events-auto">
                        <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-neutral-800 shadow-lg overflow-hidden">
                            <img src={avatar2} alt="Michael Chen" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-neutral-900 dark:text-white mb-1 text-lg">Michael Chen</h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">Lead Developer</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Passionate about building amazing user experiences</p>
                        <div className="flex justify-center gap-3">
                            <button className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors cursor-pointer">
                                <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </button>
                            <button className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors cursor-pointer">
                                <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </button>
                            <button className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors cursor-pointer">
                                <svg className="w-4 h-4 text-neutral-600 dark:text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </button>
                        </div>
                    </div>
                );
            case 'notification-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-5 hover:shadow-lg transition-all pointer-events-auto">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-1">
                                    <h4 className="font-semibold text-neutral-900 dark:text-white">New Message</h4>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">2m ago</span>
                                </div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">You have a new message from Sarah</p>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-semibold hover:bg-primary-700 transition-colors cursor-pointer">View</button>
                                    <button className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors cursor-pointer">Dismiss</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'image-overlay-card':
                return (
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer pointer-events-auto">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-2">Category</span>
                            <h3 className="font-bold text-xl mb-2">Amazing Title</h3>
                            <p className="text-sm text-white/90">Beautiful description text that overlays the image</p>
                        </div>
                    </div>
                );
            case 'dashboard-card':
                return (
                    <div className="w-full bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg transition-all pointer-events-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Active Users</p>
                                <p className="text-2xl font-bold text-neutral-900 dark:text-white">1,234</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                        </div>
                        <div className="h-20 bg-gradient-to-t from-green-100 to-transparent dark:from-green-900/20 rounded-lg flex items-end justify-between px-2 pb-2">
                            {[40, 60, 45, 80, 55, 70, 65].map((h, i) => (
                                <div key={i} className="w-6 bg-green-500 rounded-t" style={{height: `${h}%`}}></div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                        <p className="text-sm">{card.name}</p>
                    </div>
                );
        }
    };

    if (loading) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-neutral-600 dark:text-neutral-400">Loading card...</p>
                </div>
            </div>
        );
    }

    if (error || !card) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Card not found'}</p>
                    <button 
                        onClick={() => navigate('/cards')}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Back to Cards
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
                    onClick={() => navigate('/cards')}
                    className="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Cards</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Preview */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{card.name}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">{card.description}</p>
                        </div>
                        
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg">
                            <div className="pointer-events-none">
                                {renderPreview()}
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
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        activeTab === 'tailwind'
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                    }`}
                                >
                                    Tailwind React
                                </button>
                                <button
                                    onClick={() => setActiveTab('css')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        activeTab === 'css'
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
                                        <span className="text-xs text-neutral-400">{activeTab === 'tailwind' ? 'Card.tsx' : 'card.css'}</span>
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
                                    onScroll={(e) => {
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
                                            ? (card.code || '') 
                                            : (card.cssCode || generateCSSFromTailwind(card.code || ''))}
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

export default CardDetail;

