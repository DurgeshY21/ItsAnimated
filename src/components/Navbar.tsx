import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
    { name: 'Icons', path: '/icons' },
    { name: 'Buttons', path: '/buttons' },
    { name: 'Cards', path: '/cards' },
    { name: 'Inputs', path: '/inputs' },
    { name: 'Interactions', path: '/interactions' },
    { name: 'Showcase', path: '/showcase' },
    { name: 'Pricing', path: '/pricing' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    const NavLink = ({ to, children, className = '' }: { to: string, children: React.ReactNode, className?: string }) => (
        <Link
            to={to}
            className={`font-medium transition-colors cursor-pointer ${location.pathname === to
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                } ${className}`}
        >
            {children}
        </Link>
    );

    const ThemeToggle = () => (
        <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
        >
            <svg className="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg className="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </button>
    );

    const GetStartedButton = ({ className = '' }: { className?: string }) => (
        <button className={`bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all hover:shadow-lg hover:shadow-neutral-500/20 active:scale-95 cursor-pointer ${className}`}>
            Get Started
        </button>
    );

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'glass shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer z-50 relative">
                    <img src="/src/assets/logo.png" alt="ItsAnimated Logo" className="w-10 h-10 object-contain" />
                    <span className="font-bold text-xl text-neutral-800 dark:text-white tracking-tight">
                        ItsAnimated
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    {NAV_LINKS.map(link => (
                        <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
                    ))}
                </div>

                {/* Action Button & Theme Toggle (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <ThemeToggle />
                    <GetStartedButton />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden z-[60] relative">
                    <button
                        className="text-neutral-800 dark:text-white p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 z-40 bg-white dark:bg-neutral-900 h-screen w-screen transition-all duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 gap-4 ${mobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col gap-1 w-full overflow-y-auto">
                        <NavLink to="/" className="text-base font-medium py-2 border-b border-neutral-100 dark:border-neutral-800 text-neutral-900 dark:text-white">Home</NavLink>
                        {NAV_LINKS.map(link => (
                            <NavLink key={link.path} to={link.path} className="text-base font-medium py-2 border-b border-neutral-100 dark:border-neutral-800 text-neutral-900 dark:text-white">
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 mt-auto mb-6 flex-shrink-0">
                        <div className="flex items-center justify-between text-base text-neutral-900 dark:text-white font-medium p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl">
                            <span>Dark Mode</span>
                            <ThemeToggle />
                        </div>
                        <GetStartedButton className="w-full py-3 text-base" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
