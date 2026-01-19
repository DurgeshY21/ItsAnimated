import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inputs = () => {
    const navigate = useNavigate();
    
    // State for various inputs
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
    const [formEmail, setFormEmail] = useState('');
    const [formPhone, setFormPhone] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formSelect, setFormSelect] = useState('');
    const [formDate, setFormDate] = useState('');
    
    const [sliderValue, setSliderValue] = useState(50);
    const [toggleOn, setToggleOn] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
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

    const handleInputClick = (inputId: string) => {
        const inputData = inputs.map(i => ({
            id: i.id,
            name: i.name,
            description: i.description,
            code: i.code,
            category: i.category
        }));
        localStorage.setItem('inputData', JSON.stringify(inputData));
        setTimeout(() => {
            navigate(`/inputs/${inputId}`);
        }, 50);
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

    const inputs = [
        // Basic Category
        {
            category: 'Basic',
            id: 'basic-text',
            name: 'Text Input',
            description: 'Simple text input field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="text"
                        value={basicText}
                        onChange={(e) => setBasicText(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="text"
    placeholder="Enter your name"
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Basic',
            id: 'basic-email',
            name: 'Email Input',
            description: 'Email input with validation',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="email"
                        value={basicEmail}
                        onChange={(e) => setBasicEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="email"
    placeholder="your.email@example.com"
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Basic',
            id: 'basic-password',
            name: 'Password Input',
            description: 'Secure password field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="password"
                        value={basicPassword}
                        onChange={(e) => setBasicPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="password"
    placeholder="Enter password"
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Basic',
            id: 'basic-number',
            name: 'Number Input',
            description: 'Numeric input field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="number"
                        value={basicNumber}
                        onChange={(e) => setBasicNumber(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="number"
    placeholder="Enter amount"
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Basic',
            id: 'basic-textarea',
            name: 'Textarea',
            description: 'Multi-line text input',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <textarea
                        value={basicTextarea}
                        onChange={(e) => setBasicTextarea(e.target.value)}
                        placeholder="Enter your message..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    />
                </div>
            ),
            code: `<textarea
    placeholder="Enter your message..."
    rows={4}
    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
/>`,
        },
        
        // Animated Category
        {
            category: 'Animated',
            id: 'animated-focus',
            name: 'Animated Focus',
            description: 'Input with animated focus border',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `const [focused, setFocused] = useState(false);

<div className="relative">
    <input
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Type here..."
        className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-transparent focus:border-primary-500 focus:bg-white outline-none transition-all duration-300"
    />
    <div className={\`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 \${focused ? 'w-full' : 'w-0'}\`}></div>
</div>`,
        },
        {
            category: 'Animated',
            id: 'floating-label',
            name: 'Floating Label',
            description: 'Label that floats on focus',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                        <input
                            type="text"
                            value={floatingLabel}
                            onChange={(e) => setFloatingLabel(e.target.value)}
                            onFocus={() => setFloatingFocused(true)}
                            onBlur={() => setFloatingFocused(false)}
                            className="w-full px-4 pt-6 pb-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        />
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            floatingFocused || floatingLabel 
                                ? 'top-2 text-xs text-primary-600 dark:text-primary-400' 
                                : 'top-3.5 text-sm text-neutral-500 dark:text-neutral-400'
                        }`}>
                            Full Name
                        </label>
                    </div>
                </div>
            ),
            code: `const [value, setValue] = useState('');
const [focused, setFocused] = useState(false);

<div className="relative">
    <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
    />
    <label className={\`absolute left-4 transition-all duration-300 pointer-events-none \${focused || value ? 'top-2 text-xs text-primary-600' : 'top-3.5 text-sm text-neutral-500'}\`}>
        Full Name
    </label>
</div>`,
        },
        {
            category: 'Animated',
            id: 'search-input',
            name: 'Search Input',
            description: 'Animated search field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `<div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <input
        type="text"
        placeholder="Search..."
        className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
    />
</div>`,
        },
        
        // Form Category
        {
            category: 'Form',
            id: 'form-name',
            name: 'Name Field',
            description: 'Form input with icon',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `<label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
<div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
    <input
        type="text"
        placeholder="John Doe"
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
    />
</div>`,
        },
        {
            category: 'Form',
            id: 'form-select',
            name: 'Select Dropdown',
            description: 'Styled select input',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `<label className="block text-sm font-medium text-neutral-700 mb-2">Country</label>
<div className="relative">
    <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
    </select>
    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </div>
</div>`,
        },
        {
            category: 'Form',
            id: 'form-date',
            name: 'Date Picker',
            description: 'Date input field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `<label className="block text-sm font-medium text-neutral-700 mb-2">Date of Birth</label>
<div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
    <input
        type="date"
        className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
    />
</div>`,
        },
        
        // Interactive Category
        {
            category: 'Interactive',
            id: 'interactive-slider',
            name: 'Range Slider',
            description: 'Interactive range input',
            preview: (
                <div className="w-full px-4" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `const [value, setValue] = useState(50);

<input
    type="range"
    min="0"
    max="100"
    value={value}
    onChange={(e) => setValue(Number(e.target.value))}
    className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-600/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
/>`,
        },
        {
            category: 'Interactive',
            id: 'interactive-toggle',
            name: 'Toggle Switch',
            description: 'Animated toggle switch',
            preview: (
                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setToggleOn(!toggleOn)}
                        className={`w-16 h-9 rounded-full p-1 transition-all duration-300 cursor-pointer ${
                            toggleOn ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'
                        }`}
                    >
                        <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
                            toggleOn ? 'translate-x-7' : 'translate-x-0'
                        }`}></div>
                    </button>
                </div>
            ),
            code: `const [toggleOn, setToggleOn] = useState(false);

<button
    onClick={() => setToggleOn(!toggleOn)}
    className={\`w-16 h-9 rounded-full p-1 transition-all duration-300 \${toggleOn ? 'bg-primary-600' : 'bg-neutral-300'}\`}
>
    <div className={\`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 \${toggleOn ? 'translate-x-7' : 'translate-x-0'}\`}></div>
</button>`,
        },
        {
            category: 'Interactive',
            id: 'interactive-checkbox',
            name: 'Checkbox',
            description: 'Custom styled checkbox',
            preview: (
                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="sr-only"
                            checked={checkboxChecked}
                            onChange={() => setCheckboxChecked(!checkboxChecked)}
                        />
                        <div className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 ${
                            checkboxChecked
                                ? 'bg-primary-600 border-primary-600'
                                : 'bg-white dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 group-hover:border-primary-400'
                        }`}>
                            <svg
                                className={`w-4 h-4 text-white transition-all duration-300 ${
                                    checkboxChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                            checkboxChecked ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-300'
                        }`}>
                            Accept terms and conditions
                        </span>
                    </label>
                </div>
            ),
            code: `const [checked, setChecked] = useState(false);

<label className="flex items-center gap-3 cursor-pointer group">
    <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={() => setChecked(!checked)}
    />
    <div className={\`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 \${checked ? 'bg-primary-600 border-primary-600' : 'bg-white border-neutral-300 group-hover:border-primary-400'}\`}>
        <svg className={\`w-4 h-4 text-white transition-all duration-300 \${checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}\`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    </div>
    <span>Accept terms and conditions</span>
</label>`,
        },
        {
            category: 'Interactive',
            id: 'interactive-rating',
            name: 'Star Rating',
            description: 'Interactive star rating',
            preview: (
                <div className="flex gap-1 justify-center" onClick={(e) => e.stopPropagation()}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={(e) => { e.stopPropagation(); setRating(star); }}
                            className="p-1 transition-all duration-200 cursor-pointer hover:scale-125"
                        >
                            <svg
                                className={`w-8 h-8 transition-all duration-300 ${
                                    star <= rating
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
            ),
            code: `const [rating, setRating] = useState(0);

{[1, 2, 3, 4, 5].map((star) => (
    <button
        key={star}
        onClick={() => setRating(star)}
        className="p-1 transition-all duration-200 hover:scale-125"
    >
        <svg
            className={\`w-8 h-8 transition-all duration-300 \${star <= rating ? 'text-yellow-400 fill-yellow-400 scale-110' : 'text-neutral-300 fill-none hover:text-yellow-300'}\`}
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    </button>
))}`,
        },
        {
            category: 'Interactive',
            id: 'interactive-chips',
            name: 'Chip Selector',
            description: 'Selectable chip buttons',
            preview: (
                <div className="flex flex-wrap gap-2 justify-center" onClick={(e) => e.stopPropagation()}>
                    {['Design', 'Development', 'Marketing', 'Sales'].map((chip) => (
                        <button
                            key={chip}
                            onClick={() => handleChipToggle(chip)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedChip.includes(chip)
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                            }`}
                        >
                            {chip}
                        </button>
                    ))}
                </div>
            ),
            code: `const [selected, setSelected] = useState<string[]>([]);

const handleToggle = (chip: string) => {
    setSelected(prev => 
        prev.includes(chip) 
            ? prev.filter(c => c !== chip)
            : [...prev, chip]
    );
};

{['Design', 'Development', 'Marketing'].map((chip) => (
    <button
        key={chip}
        onClick={() => handleToggle(chip)}
        className={\`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 \${selected.includes(chip) ? 'bg-primary-600 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}\`}
    >
        {chip}
    </button>
))}`,
        },
        
        // Smart Category
        {
            category: 'Smart',
            id: 'smart-search',
            name: 'Smart Search',
            description: 'Search with suggestions',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `const [search, setSearch] = useState('');

<div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </div>
    <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
    {search && (
        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    )}
</div>`,
        },
        {
            category: 'Smart',
            id: 'smart-password',
            name: 'Password Toggle',
            description: 'Password with show/hide',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `const [password, setPassword] = useState('');
const [visible, setVisible] = useState(false);

<div className="relative">
    <input
        type={visible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full px-4 py-3 pr-12 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
    <button
        onClick={() => setVisible(!visible)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
    >
        {visible ? (
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
</div>`,
        },
        {
            category: 'Smart',
            id: 'smart-currency',
            name: 'Currency Input',
            description: 'Formatted currency field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `<label className="block text-sm font-medium text-neutral-700 mb-2">Amount</label>
<div className="relative">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 font-medium">$</div>
    <input
        type="text"
        onChange={(e) => {
            const value = e.target.value.replace(/[^0-9.]/g, '');
            setValue(value);
        }}
        placeholder="0.00"
        className="w-full pl-8 pr-4 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
</div>`,
        },
        {
            category: 'Smart',
            id: 'smart-tags',
            name: 'Tag Input',
            description: 'Add and remove tags',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
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
            ),
            code: `const [tags, setTags] = useState<string[]>([]);
const [input, setInput] = useState('');

const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
        setTags([...tags, input.trim()]);
        setInput('');
    }
};

const handleRemove = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
};

<div className="min-h-[60px] px-3 py-2 rounded-lg border border-neutral-300 bg-white flex flex-wrap gap-2 items-center">
    {tags.map((tag, i) => (
        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
            {tag}
            <button onClick={() => handleRemove(tag)}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </span>
    ))}
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAdd}
        placeholder="Add tags..."
        className="flex-1 min-w-[120px] outline-none bg-transparent"
    />
</div>`,
        },
        
        // Dark Mode Category
        {
            category: 'Dark Mode',
            id: 'dark-text',
            name: 'Dark Text Input',
            description: 'Optimized for dark theme',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="text"
                        value={darkText}
                        onChange={(e) => setDarkText(e.target.value)}
                        placeholder="Enter text..."
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="text"
    placeholder="Enter text..."
    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Dark Mode',
            id: 'dark-email',
            name: 'Dark Email Input',
            description: 'Dark themed email field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="email"
                        value={darkEmail}
                        onChange={(e) => setDarkEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="email"
    placeholder="email@example.com"
    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Dark Mode',
            id: 'dark-password',
            name: 'Dark Password Input',
            description: 'Secure dark password field',
            preview: (
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="password"
                        value={darkPassword}
                        onChange={(e) => setDarkPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
            ),
            code: `<input
    type="password"
    placeholder="Enter password"
    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
/>`,
        },
        {
            category: 'Dark Mode',
            id: 'dark-toggle',
            name: 'Dark Toggle',
            description: 'Dark mode toggle switch',
            preview: (
                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setDarkToggle(!darkToggle)}
                        className={`w-16 h-9 rounded-full p-1 transition-all duration-300 cursor-pointer ${
                            darkToggle ? 'bg-primary-500' : 'bg-neutral-700'
                        }`}
                    >
                        <div className={`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
                            darkToggle ? 'translate-x-7' : 'translate-x-0'
                        }`}></div>
                    </button>
                </div>
            ),
            code: `const [toggleOn, setToggleOn] = useState(false);

<button
    onClick={() => setToggleOn(!toggleOn)}
    className={\`w-16 h-9 rounded-full p-1 transition-all duration-300 \${toggleOn ? 'bg-primary-500' : 'bg-neutral-700'}\`}
>
    <div className={\`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 \${toggleOn ? 'translate-x-7' : 'translate-x-0'}\`}></div>
</button>`,
        },
    ];

    const categories = ['Basic', 'Animated', 'Form', 'Interactive', 'Smart', 'Dark Mode'];
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredInputs = selectedCategory === 'All' 
        ? inputs 
        : inputs.filter(input => input.category === selectedCategory);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Real-World <span className="font-serif italic text-gradient">Inputs</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
                        Production-ready input components for modern applications.
                        <br />Click any input to view details and code.
                    </p>
                    
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                selectedCategory === 'All'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                            }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredInputs.map((input) => (
                        <div
                            key={input.id}
                            onClick={() => handleInputClick(input.id)}
                            className="group relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                        >
                            {/* Copy indicator */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mb-6 min-h-[100px] flex items-center justify-center mt-8">
                                {input.preview}
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{input.name}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{input.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inputs;
