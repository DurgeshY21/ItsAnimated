import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InputDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tailwind' | 'css'>('tailwind');
    const [copied, setCopied] = useState(false);
    const [input, setInput] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    // State for all input types
    const [basicText, setBasicText] = useState('');
    const [basicEmail, setBasicEmail] = useState('');
    const [basicPassword, setBasicPassword] = useState('');
    const [basicNumber, setBasicNumber] = useState('');
    const [basicTextarea, setBasicTextarea] = useState('');
    const [animatedText, setAnimatedText] = useState('');
    const [animatedFocused, setAnimatedFocused] = useState(false);
    const [floatingLabel, setFloatingLabel] = useState('');
    const [floatingFocused, setFloatingFocused] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [formName, setFormName] = useState('');
    const [formSelect, setFormSelect] = useState('');
    const [formDate, setFormDate] = useState('');
    const [sliderValue, setSliderValue] = useState(50);
    const [toggleOn, setToggleOn] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [rating, setRating] = useState(0);
    const [selectedChip, setSelectedChip] = useState<string[]>([]);
    const [smartSearch, setSmartSearch] = useState('');
    const [smartPassword, setSmartPassword] = useState('');
    const [smartPasswordVisible, setSmartPasswordVisible] = useState(false);
    const [smartCurrency, setSmartCurrency] = useState('');
    const [smartTags, setSmartTags] = useState<string[]>([]);
    const [smartTagInput, setSmartTagInput] = useState('');
    const [darkText, setDarkText] = useState('');
    const [darkEmail, setDarkEmail] = useState('');
    const [darkPassword, setDarkPassword] = useState('');
    const [darkToggle, setDarkToggle] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const savedData = localStorage.getItem('inputData');
        if (savedData) {
            try {
                const inputs = JSON.parse(savedData);
                const found = inputs.find((i: any) => i.id === id);
                if (found) {
                    setInput(found);
                } else {
                    setError('Input not found.');
                }
            } catch (e) {
                setError('Failed to parse input data.');
            }
        } else {
            setError('No input data found in local storage.');
        }
        setLoading(false);
    }, [id]);

    const generateCSSFromTailwind = (_tailwindCode: string): string => {
        if (input?.cssCode) {
            return input.cssCode;
        }
        return `/* CSS equivalent for ${input?.name || 'Input'} */\n\n` +
            `/* Note: This is a simplified conversion. For full Tailwind to CSS conversion, use a tool like tailwindcss.com */\n\n` +
            `.input {\n` +
            `  /* Add your custom styles here based on the Tailwind classes */\n` +
            `  padding: 0.75rem 1rem;\n` +
            `  border-radius: 0.5rem;\n` +
            `  border: 1px solid #d1d5db;\n` +
            `  transition: all 0.3s ease;\n` +
            `}\n\n` +
            `.input:focus {\n` +
            `  outline: none;\n` +
            `  border-color: #7400ff;\n` +
            `  box-shadow: 0 0 0 3px rgba(116, 0, 255, 0.1);\n` +
            `}\n`;
    };

    const handleCopy = () => {
        const codeToCopy = activeTab === 'tailwind'
            ? input?.code
            : (input?.cssCode || generateCSSFromTailwind(input?.code || ''));
        if (codeToCopy) {
            navigator.clipboard.writeText(codeToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleChipToggle = (chip: string) => {
        setSelectedChip(prev =>
            prev.includes(chip)
                ? prev.filter(c => c !== chip)
                : [...prev, chip]
        );
    };

    const handleTagAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && smartTagInput.trim()) {
            setSmartTags([...smartTags, smartTagInput.trim()]);
            setSmartTagInput('');
        }
    };

    const handleTagRemove = (tag: string) => {
        setSmartTags(smartTags.filter(t => t !== tag));
    };

    const renderPreview = () => {
        if (!input) return null;

        switch (input.id) {
            case 'basic-text':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            value={basicText}
                            onChange={(e) => setBasicText(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'basic-email':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="email"
                            value={basicEmail}
                            onChange={(e) => setBasicEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'basic-password':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="password"
                            value={basicPassword}
                            onChange={(e) => setBasicPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'basic-number':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="number"
                            value={basicNumber}
                            onChange={(e) => setBasicNumber(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'basic-textarea':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <textarea
                            value={basicTextarea}
                            onChange={(e) => setBasicTextarea(e.target.value)}
                            placeholder="Enter your message..."
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>
                );
            case 'animated-focus':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <input
                                type="text"
                                value={animatedText}
                                onChange={(e) => setAnimatedText(e.target.value)}
                                onFocus={() => setAnimatedFocused(true)}
                                onBlur={() => setAnimatedFocused(false)}
                                placeholder="Type here..."
                                className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-700 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-800 outline-none transition-all duration-300 text-neutral-900 dark:text-white"
                            />
                            <div className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${animatedFocused ? 'w-full' : 'w-0'}`}></div>
                        </div>
                    </div>
                );
            case 'floating-label':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <input
                                type="text"
                                value={floatingLabel}
                                onChange={(e) => setFloatingLabel(e.target.value)}
                                onFocus={() => setFloatingFocused(true)}
                                onBlur={() => setFloatingFocused(false)}
                                className="w-full px-4 pt-6 pb-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                            />
                            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${floatingFocused || floatingLabel
                                ? 'top-2 text-xs text-primary-600 dark:text-primary-400'
                                : 'top-3.5 text-sm text-neutral-500 dark:text-neutral-400'
                                }`}>
                                Full Name
                            </label>
                        </div>
                    </div>
                );
            case 'search-input':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                );
            case 'form-name':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                );
            case 'form-select':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Country</label>
                        <div className="relative">
                            <select
                                value={formSelect}
                                onChange={(e) => setFormSelect(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                            >
                                <option value="">Select a country</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                                <option value="au">Australia</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            case 'form-date':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Date of Birth</label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                type="date"
                                value={formDate}
                                onChange={(e) => setFormDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                );
            case 'interactive-slider':
                return (
                    <div className="w-full px-4 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="mb-2 flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
                            <span>0</span>
                            <span className="font-semibold text-primary-600 dark:text-primary-400">{sliderValue}</span>
                            <span>100</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-600/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
                        />
                    </div>
                );
            case 'interactive-toggle':
                return (
                    <div className="flex justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setToggleOn(!toggleOn)}
                            className={`w-16 h-9 rounded-full p-1 transition-all duration-300 cursor-pointer ${toggleOn ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'
                                }`}
                        >
                            <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${toggleOn ? 'translate-x-7' : 'translate-x-0'
                                }`}></div>
                        </button>
                    </div>
                );
            case 'interactive-checkbox':
                return (
                    <div className="flex justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={checkboxChecked}
                                onChange={() => setCheckboxChecked(!checkboxChecked)}
                            />
                            <div className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 ${checkboxChecked
                                ? 'bg-primary-600 border-primary-600'
                                : 'bg-white dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 group-hover:border-primary-400'
                                }`}>
                                <svg
                                    className={`w-4 h-4 text-white transition-all duration-300 ${checkboxChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className={`text-sm font-medium transition-colors duration-300 ${checkboxChecked ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-300'
                                }`}>
                                Accept terms and conditions
                            </span>
                        </label>
                    </div>
                );
            case 'interactive-rating':
                return (
                    <div className="flex gap-1 justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={(e) => { e.stopPropagation(); setRating(star); }}
                                className="p-1 transition-all duration-200 cursor-pointer hover:scale-125"
                            >
                                <svg
                                    className={`w-8 h-8 transition-all duration-300 ${star <= rating
                                        ? 'text-yellow-400 fill-yellow-400 scale-110'
                                        : 'text-neutral-300 dark:text-neutral-600 fill-none hover:text-yellow-300'
                                        }`}
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                );
            case 'interactive-chips':
                return (
                    <div className="flex flex-wrap gap-2 justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        {['Design', 'Development', 'Marketing', 'Sales'].map((chip) => (
                            <button
                                key={chip}
                                onClick={() => handleChipToggle(chip)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedChip.includes(chip)
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                                    }`}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                );
            case 'smart-search':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={smartSearch}
                                onChange={(e) => setSmartSearch(e.target.value)}
                                placeholder="Search products, users, orders..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                            {smartSearch && (
                                <button
                                    onClick={() => setSmartSearch('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                );
            case 'smart-password':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                            <input
                                type={smartPasswordVisible ? 'text' : 'password'}
                                value={smartPassword}
                                onChange={(e) => setSmartPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 pr-12 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                            <button
                                onClick={() => setSmartPasswordVisible(!smartPasswordVisible)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                            >
                                {smartPasswordVisible ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                );
            case 'smart-currency':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Amount</label>
                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 font-medium">$</div>
                            <input
                                type="text"
                                value={smartCurrency}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^0-9.]/g, '');
                                    setSmartCurrency(value);
                                }}
                                placeholder="0.00"
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>
                );
            case 'smart-tags':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="min-h-[60px] px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-transparent transition-all">
                            {smartTags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                                >
                                    {tag}
                                    <button
                                        onClick={() => handleTagRemove(tag)}
                                        className="hover:text-primary-900 dark:hover:text-primary-100"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </span>
                            ))}
                            <input
                                type="text"
                                value={smartTagInput}
                                onChange={(e) => setSmartTagInput(e.target.value)}
                                onKeyDown={handleTagAdd}
                                placeholder={smartTags.length === 0 ? "Add tags..." : ""}
                                className="flex-1 min-w-[120px] outline-none bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400"
                            />
                        </div>
                    </div>
                );
            case 'dark-text':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="text"
                            value={darkText}
                            onChange={(e) => setDarkText(e.target.value)}
                            placeholder="Enter text..."
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'dark-email':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="email"
                            value={darkEmail}
                            onChange={(e) => setDarkEmail(e.target.value)}
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'dark-password':
                return (
                    <div className="w-full pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <input
                            type="password"
                            value={darkPassword}
                            onChange={(e) => setDarkPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                    </div>
                );
            case 'dark-toggle':
                return (
                    <div className="flex justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setDarkToggle(!darkToggle)}
                            className={`w-16 h-9 rounded-full p-1 transition-all duration-300 cursor-pointer ${darkToggle ? 'bg-primary-500' : 'bg-neutral-700'
                                }`}
                        >
                            <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${darkToggle ? 'translate-x-7' : 'translate-x-0'
                                }`}></div>
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                        <p className="text-sm">{input.name}</p>
                    </div>
                );
        }
    };

    if (loading) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-neutral-600 dark:text-neutral-400">Loading input...</p>
                </div>
            </div>
        );
    }

    if (error || !input) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 dark:text-red-400 mb-4">{error || 'Input not found'}</p>
                    <button
                        onClick={() => navigate('/inputs')}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Back to Inputs
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
                    onClick={() => navigate('/inputs')}
                    className="mb-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Inputs</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Preview */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{input.name}</h1>
                            <p className="text-neutral-600 dark:text-neutral-400">{input.description}</p>
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
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'tailwind'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                        }`}
                                >
                                    Tailwind React
                                </button>
                                <button
                                    onClick={() => setActiveTab('css')}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'css'
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
                                        <span className="text-xs text-neutral-400">{activeTab === 'tailwind' ? 'Input.tsx' : 'input.css'}</span>
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
                                    onScroll={(_e) => {
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
                                            ? (input.code || '')
                                            : (input.cssCode || generateCSSFromTailwind(input.code || ''))}
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

export default InputDetail;

