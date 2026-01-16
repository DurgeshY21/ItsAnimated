import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// We'll need to import interactions data - for now using localStorage approach
const InteractionDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tailwind' | 'css'>('css');
    const [copied, setCopied] = useState(false);
    const [interaction, setInteraction] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    // State for interactive components
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(42);
    const [bookmarked, setBookmarked] = useState(false);
    const [notifications, setNotifications] = useState(3);
    const [following, setFollowing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [starRating, setStarRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [progress, setProgress] = useState(45);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [activeTabState, setActiveTabState] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const [modalOpen, setModalOpen] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [chipSelected, setChipSelected] = useState<string[]>([]);
    const [avatarStatus, setAvatarStatus] = useState(true);
    const [rippleActive, setRippleActive] = useState(false);
    const [floatingLabelFocused, setFloatingLabelFocused] = useState(false);
    const [floatingLabelValue, setFloatingLabelValue] = useState('');
    const [toastVisible, setToastVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(true);
    const [paginationPage, setPaginationPage] = useState(1);
    const [breadcrumbActive, setBreadcrumbActive] = useState('home');
    const [fabOpen, setFabOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [stepperStep, setStepperStep] = useState(1);

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        // Load interaction data from localStorage
        const savedData = localStorage.getItem('interactionData');
        console.log('Loading interaction detail, id:', id);
        console.log('Saved data:', savedData);
        
        if (savedData) {
            try {
                const interactions = JSON.parse(savedData);
                console.log('Parsed interactions:', interactions);
                const found = interactions.find((i: any) => i.id === id);
                console.log('Found interaction:', found);
                
                if (found) {
                    setInteraction(found);
                    setLoading(false);
                } else {
                    console.error('Interaction not found with id:', id);
                    setError('Interaction not found');
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error parsing interaction data:', error);
                setError('Error loading interaction data');
                setLoading(false);
            }
        } else {
            console.error('No interaction data in localStorage');
            setError('No interaction data found');
            setLoading(false);
        }
    }, [id]);

    const generateCSSFromTailwind = (tailwindCode: string): string => {
        // Simple CSS generation - you can enhance this
        return `/* CSS equivalent for ${interaction?.name || 'Component'} */\n\n` +
               `/* Note: This is a simplified conversion. For full Tailwind to CSS conversion, use a tool like tailwindcss.com */\n\n` +
               `/* Component styles would go here based on the Tailwind classes used */\n\n` +
               `/* Example utility classes: */\n` +
               `.flex { display: flex; }\n` +
               `.items-center { align-items: center; }\n` +
               `.justify-center { justify-content: center; }\n` +
               `.rounded-xl { border-radius: 0.75rem; }\n` +
               `.transition-all { transition: all 0.3s ease; }\n` +
               `.duration-300 { transition-duration: 300ms; }\n` +
               `.cursor-pointer { cursor: pointer; }\n` +
               `.font-medium { font-weight: 500; }\n` +
               `.bg-primary-600 { background-color: rgb(116, 0, 255); }\n` +
               `.text-white { color: rgb(255, 255, 255); }\n` +
               `.hover\\:bg-primary-700:hover { background-color: rgb(75, 0, 166); }\n`;
    };

    const handleCopy = () => {
        const codeToCopy = activeTab === 'tailwind' 
            ? interaction?.code 
            : (interaction?.cssCode || generateCSSFromTailwind(interaction?.code || ''));
        if (codeToCopy) {
            navigator.clipboard.writeText(codeToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const renderPreview = () => {
        if (!interaction) return null;
        
        // Recreate preview based on interaction ID
        switch (interaction.id) {
            case 'like-button':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); handleLike(); }}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                                liked ? 'bg-red-50 text-red-500 scale-105' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
                            }`}
                        >
                            <svg className={`w-5 h-5 transition-all duration-300 ${liked ? 'scale-125 fill-red-500' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="tabular-nums">{likeCount}</span>
                        </button>
                    </div>
                );
            case 'loading':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setButtonLoading(true);
                                setTimeout(() => setButtonLoading(false), 2000);
                            }}
                            disabled={buttonLoading}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {buttonLoading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Loading...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                );
            case 'notification':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setNotifications(notifications > 0 ? 0 : 3);
                            }}
                            className="relative p-3 bg-neutral-100 dark:bg-neutral-700 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300 group"
                        >
                            <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                                    {notifications}
                                </span>
                            )}
                        </button>
                    </div>
                );
            case 'bookmark':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setBookmarked(!bookmarked); }}
                            className={`p-3 rounded-xl transition-all duration-300 ${
                                bookmarked
                                    ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600'
                                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                            }`}
                        >
                            <svg
                                className={`w-6 h-6 transition-all duration-500 ${bookmarked ? 'scale-110 fill-primary-600' : 'fill-none'}`}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </button>
                    </div>
                );
            case 'follow':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setFollowing(!following); }}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                                following
                                    ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30'
                                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
                            }`}
                        >
                            {following ? 'Following' : 'Follow'}
                        </button>
                    </div>
                );
            case 'expand':
                return (
                    <div className="w-full px-4">
                        <div className="bg-neutral-100 dark:bg-neutral-700 rounded-xl overflow-hidden">
                            <button
                                onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
                                className="w-full px-4 py-3 flex items-center justify-between"
                            >
                                <span className="font-medium text-neutral-800 dark:text-white">Click to expand</span>
                                <svg
                                    className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-24' : 'max-h-0'}`}>
                                <div className="px-4 pb-3 text-neutral-600 dark:text-neutral-400 text-sm">
                                    This content smoothly expands and collapses with CSS transitions.
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'dropdown':
                return (
                    <div className="flex justify-center relative">
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                                className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                            >
                                <span className="text-neutral-700 dark:text-neutral-200 font-medium">Options</span>
                                <svg
                                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`absolute top-full left-0 mt-2 w-40 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-200 origin-top ${menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                                {['Edit', 'Duplicate', 'Archive', 'Delete'].map((item, i) => (
                                    <button
                                        key={item}
                                        onClick={(e) => e.stopPropagation()}
                                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors ${i === 3 ? 'text-red-500' : 'text-neutral-700 dark:text-neutral-200'}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'share':
                return (
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={(e) => e.stopPropagation()} className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.874L4.935 21.75H1.627l7.801-8.91L2.25 2.25h3.308l5.379 7.11L18.244 2.25z" /></svg>
                        </button>
                        <button onClick={(e) => e.stopPropagation()} className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </button>
                        <button onClick={(e) => e.stopPropagation()} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                        <button onClick={(e) => e.stopPropagation()} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                        </button>
                    </div>
                );
            case 'reaction':
                return (
                    <div className="flex justify-center gap-1">
                        {['👍', '❤️', '😂', '😮', '😢', '😡'].map((emoji, i) => (
                            <button
                                key={i}
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 flex items-center justify-center text-xl hover:scale-150 hover:-translate-y-2 transition-all duration-200"
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                );
            case 'toggle':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setToggled(!toggled); }}
                            className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                                toggled ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'
                            }`}
                        >
                            <span
                                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${
                                    toggled ? 'translate-x-7' : 'translate-x-0'
                                }`}
                            />
                        </button>
                    </div>
                );
            case 'star-rating':
                return (
                    <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={(e) => { e.stopPropagation(); setStarRating(star); }}
                                className="text-2xl transition-all duration-200 hover:scale-125"
                            >
                                <span className={star <= (hoveredStar || starRating) ? 'text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'}>
                                    ★
                                </span>
                            </button>
                        ))}
                    </div>
                );
            case 'progress':
                return (
                    <div className="w-full px-4 pointer-events-auto">
                        <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between mt-2">
                            <button
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    setProgress(Math.max(0, progress - 10)); 
                                }}
                                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
                            >
                                -10%
                            </button>
                            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{progress}%</span>
                            <button
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    setProgress(Math.min(100, progress + 10)); 
                                }}
                                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
                            >
                                +10%
                            </button>
                        </div>
                    </div>
                );
            case 'tooltip':
                return (
                    <div className="flex justify-center relative">
                        <button
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Hover me
                        </button>
                        {tooltipVisible && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
                                This is a tooltip!
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900 dark:border-t-neutral-800" />
                            </div>
                        )}
                    </div>
                );
            case 'modal':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all hover:scale-105"
                        >
                            Open Modal
                        </button>
                        {modalOpen && (
                            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setModalOpen(false)}>
                                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Modal Title</h3>
                                        <button
                                            onClick={() => setModalOpen(false)}
                                            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">This is a modal dialog with smooth animations.</p>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 'search':
                return (
                    <div className="w-full px-4">
                        <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
                            <input
                                type="text"
                                placeholder="Search..."
                                onFocus={(e) => { e.stopPropagation(); setSearchFocused(true); }}
                                onBlur={() => setSearchFocused(false)}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full px-4 py-3 pl-10 bg-neutral-100 dark:bg-neutral-700 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none transition-all duration-300 text-neutral-900 dark:text-white placeholder-neutral-400"
                            />
                            <svg
                                className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                                    searchFocused ? 'text-primary-500' : 'text-neutral-400'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                );
            case 'tabs':
                return (
                    <div className="w-full px-4">
                        <div className="flex gap-1 bg-neutral-100 dark:bg-neutral-700 p-1 rounded-xl">
                            {['Home', 'About', 'Contact'].map((tab, index) => (
                                <button
                                    key={tab}
                                    onClick={(e) => { e.stopPropagation(); setActiveTabState(index); }}
                                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        activeTabState === index
                                            ? 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 shadow-sm'
                                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'slider':
                return (
                    <div className="w-full px-4">
                        <div className="relative">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={(e) => { e.stopPropagation(); setSliderValue(Number(e.target.value)); }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, rgb(116, 0, 255) 0%, rgb(116, 0, 255) ${sliderValue}%, rgb(229, 229, 229) ${sliderValue}%, rgb(229, 229, 229) 100%)`
                                }}
                            />
                            <div className="flex justify-between mt-2">
                                <span className="text-xs text-neutral-500 dark:text-neutral-400">0</span>
                                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{sliderValue}</span>
                                <span className="text-xs text-neutral-500 dark:text-neutral-400">100</span>
                            </div>
                        </div>
                    </div>
                );
            case 'checkbox':
                return (
                    <div className="flex justify-center">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    checked={checkboxChecked}
                                    onChange={(e) => { e.stopPropagation(); setCheckboxChecked(!checkboxChecked); }}
                                    className="sr-only"
                                />
                                <div className={`w-6 h-6 border-2 rounded transition-all duration-300 ${checkboxChecked ? 'bg-primary-600 border-primary-600' : 'border-neutral-300 dark:border-neutral-600'}`}>
                                    {checkboxChecked && (
                                        <svg className="w-5 h-5 text-white absolute top-0.5 left-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-200">Accept terms</span>
                        </label>
                    </div>
                );
            case 'radio':
                return (
                    <div className="flex justify-center gap-4">
                        {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name="radio-group"
                                        checked={radioValue === `option${index + 1}`}
                                        onChange={(e) => { e.stopPropagation(); setRadioValue(`option${index + 1}`); }}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 border-2 rounded-full transition-all duration-300 ${radioValue === `option${index + 1}` ? 'border-primary-600' : 'border-neutral-300 dark:border-neutral-600'}`}>
                                        {radioValue === `option${index + 1}` && (
                                            <div className="w-3 h-3 bg-primary-600 rounded-full absolute top-1 left-1" />
                                        )}
                                    </div>
                                </div>
                                <span className="text-sm text-neutral-700 dark:text-neutral-200">{option}</span>
                            </label>
                        ))}
                    </div>
                );
            case 'chip':
                return (
                    <div className="flex justify-center gap-2 flex-wrap">
                        {['React', 'Vue', 'Angular', 'Svelte'].map((chip) => (
                            <button
                                key={chip}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setChipSelected(prev => 
                                        prev.includes(chip) 
                                            ? prev.filter(c => c !== chip)
                                            : [...prev, chip]
                                    );
                                }}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    chipSelected.includes(chip)
                                        ? 'bg-primary-600 text-white scale-105'
                                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                                }`}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                );
            case 'avatar':
                return (
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                                JD
                            </div>
                            <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-800 transition-all ${avatarStatus ? 'bg-green-500' : 'bg-neutral-400'}`} />
                        </div>
                    </div>
                );
            case 'ripple':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setRippleActive(true);
                                setTimeout(() => setRippleActive(false), 600);
                            }}
                            className="relative px-6 py-3 bg-primary-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:bg-primary-700"
                        >
                            Click Me
                            {rippleActive && (
                                <span className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
                            )}
                        </button>
                    </div>
                );
            case 'floating-label':
                return (
                    <div className="w-full px-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={floatingLabelValue}
                                onChange={(e) => { e.stopPropagation(); setFloatingLabelValue(e.target.value); }}
                                onFocus={(e) => { e.stopPropagation(); setFloatingLabelFocused(true); }}
                                onBlur={() => setFloatingLabelFocused(floatingLabelValue.length > 0)}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full px-4 pt-6 pb-2 bg-neutral-100 dark:bg-neutral-700 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-800 focus:outline-none transition-all text-neutral-900 dark:text-white"
                            />
                            <label className={`absolute left-4 transition-all duration-300 ${floatingLabelFocused || floatingLabelValue ? 'top-2 text-xs text-primary-600 dark:text-primary-400' : 'top-4 text-sm text-neutral-500'}`}>
                                Email Address
                            </label>
                        </div>
                    </div>
                );
            case 'toast':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setToastVisible(true);
                                setTimeout(() => setToastVisible(false), 3000);
                            }}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Show Toast
                        </button>
                        {toastVisible && (
                            <div className="fixed bottom-4 right-4 bg-neutral-900 dark:bg-neutral-800 text-white px-6 py-4 rounded-xl shadow-lg z-50">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Action completed successfully!</span>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 'alert':
                return (
                    <div className="w-full px-4">
                        {alertVisible && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-blue-800 dark:text-blue-200">This is an informational alert message.</span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); setAlertVisible(false); }}
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                );
            case 'skeleton':
                return (
                    <div className="w-full px-4">
                        <div className="space-y-3">
                            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '100%' }} />
                            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '80%' }} />
                            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '60%' }} />
                        </div>
                    </div>
                );
            case 'pagination':
                return (
                    <div className="flex justify-center gap-1">
                        <button
                            onClick={(e) => { e.stopPropagation(); setPaginationPage(Math.max(1, paginationPage - 1)); }}
                            disabled={paginationPage === 1}
                            className="px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        >
                            ←
                        </button>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                onClick={(e) => { e.stopPropagation(); setPaginationPage(page); }}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    paginationPage === page
                                        ? 'bg-primary-600 text-white'
                                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={(e) => { e.stopPropagation(); setPaginationPage(Math.min(5, paginationPage + 1)); }}
                            disabled={paginationPage === 5}
                            className="px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        >
                            →
                        </button>
                    </div>
                );
            case 'breadcrumb':
                return (
                    <div className="flex justify-center items-center gap-2 text-sm">
                        {['Home', 'Products', 'Category'].map((item, index) => (
                            <div key={item} className="flex items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setBreadcrumbActive(item.toLowerCase()); }}
                                    className={`transition-colors ${breadcrumbActive === item.toLowerCase() ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'}`}
                                >
                                    {item}
                                </button>
                                {index < ['Home', 'Products', 'Category'].length - 1 && (
                                    <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case 'fab':
                return (
                    <div className="flex justify-center relative">
                        <div className="relative">
                            <button
                                onClick={(e) => { e.stopPropagation(); setFabOpen(!fabOpen); }}
                                className="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-110 flex items-center justify-center"
                            >
                                <svg className={`w-6 h-6 transition-transform duration-300 ${fabOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                            {fabOpen && (
                                <div className="absolute bottom-16 right-0 flex flex-col gap-2">
                                    {['Edit', 'Share', 'Delete'].map((action, i) => (
                                        <button
                                            key={action}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-12 h-12 bg-neutral-800 text-white rounded-full shadow-lg hover:bg-neutral-700 transition-all"
                                            style={{ animationDelay: `${i * 50}ms` }}
                                        >
                                            {action[0]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'drawer':
                return (
                    <div className="flex justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); setDrawerOpen(true); }}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Open Drawer
                        </button>
                        {drawerOpen && (
                            <>
                                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setDrawerOpen(false)} />
                                <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-neutral-800 shadow-xl z-50">
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Menu</h3>
                                            <button onClick={() => setDrawerOpen(false)} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <nav className="space-y-2">
                                            {['Home', 'About', 'Contact'].map((item) => (
                                                <a key={item} href="#" className="block px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200">
                                                    {item}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                );
            case 'popover':
                return (
                    <div className="flex justify-center relative">
                        <button
                            onClick={(e) => { e.stopPropagation(); setPopoverOpen(!popoverOpen); }}
                            className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                        >
                            Open Popover
                        </button>
                        {popoverOpen && (
                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 w-48 z-50">
                                <div className="space-y-2">
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200">
                                        Option 1
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200">
                                        Option 2
                                    </button>
                                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 text-red-500">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case 'file-upload':
                return (
                    <div className="w-full px-4">
                        <div
                            onClick={(e) => { e.stopPropagation(); setFileUploaded(true); }}
                            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                                fileUploaded
                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                    : 'border-neutral-300 dark:border-neutral-600 hover:border-primary-500 dark:hover:border-primary-500'
                            }`}
                        >
                            {fileUploaded ? (
                                <div className="flex flex-col items-center gap-2">
                                    <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium text-green-600 dark:text-green-400">File uploaded!</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-2">
                                    <svg className="w-12 h-12 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">Drag and drop or click to upload</span>
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'stepper':
                return (
                    <div className="w-full px-4">
                        <div className="flex items-center justify-between">
                            {[1, 2, 3, 4].map((step, index) => (
                                <div key={step} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                                            step < stepperStep
                                                ? 'bg-green-500 text-white'
                                                : step === stepperStep
                                                ? 'bg-primary-600 text-white scale-110'
                                                : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'
                                        }`}>
                                            {step < stepperStep ? (
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                step
                                            )}
                                        </div>
                                        <span className="text-xs mt-2 text-neutral-600 dark:text-neutral-400">Step {step}</span>
                                    </div>
                                    {index < 3 && (
                                        <div className={`flex-1 h-1 mx-2 transition-all ${
                                            step < stepperStep ? 'bg-green-500' : 'bg-neutral-200 dark:bg-neutral-700'
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2 mt-6">
                            <button
                                onClick={(e) => { e.stopPropagation(); setStepperStep(Math.max(1, stepperStep - 1)); }}
                                disabled={stepperStep === 1}
                                className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setStepperStep(Math.min(4, stepperStep + 1)); }}
                                disabled={stepperStep === 4}
                                className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                        <p className="text-sm">{interaction.name}</p>
                    </div>
                );
        }
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    if (loading) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-neutral-600 dark:text-neutral-400">Loading interaction...</p>
                </div>
            </div>
        );
    }

    if (error || !interaction) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Interaction not found'}</p>
                    <button
                        onClick={() => navigate('/interactions')}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Back to Interactions
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <button
                    onClick={() => navigate('/interactions')}
                    className="mb-8 flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Interactions
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Component Preview */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-12 flex items-center justify-center min-h-[400px] relative overflow-hidden group">
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

                            <div className="relative z-10">
                                {renderPreview()}
                            </div>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{interaction.name}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">Category: <span className="font-medium text-primary-600 dark:text-primary-400">Interface</span></p>
                        </div>
                    </div>

                    {/* Right Column: Code & Actions */}
                    <div className="flex flex-col h-full">
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex flex-col h-full overflow-hidden shadow-sm">
                            {/* Tabs */}
                            <div className="flex border-b border-neutral-200 dark:border-neutral-700">
                                <button
                                    className={`flex-1 py-4 text-sm font-medium transition-colors relative cursor-pointer ${activeTab === 'tailwind'
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
                                    className={`flex-1 py-4 text-sm font-medium transition-colors relative cursor-pointer ${activeTab === 'css'
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
                                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
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
                                            whiteSpace: 'pre-wrap',
                                            wordBreak: 'break-word',
                                        }}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                    >
                                        {activeTab === 'tailwind' 
                                            ? (interaction.code || '') 
                                            : (interaction.cssCode || generateCSSFromTailwind(interaction.code || ''))}
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

export default InteractionDetail;

