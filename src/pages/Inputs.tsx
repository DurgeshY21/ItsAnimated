import { useState } from 'react';

const Inputs = () => {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [rating, setRating] = useState(3);
    const [sliderValue, setSliderValue] = useState(50);
    const [toggleOn, setToggleOn] = useState(false);
    const [selectedSegment, setSelectedSegment] = useState('Daily');
    const [checkboxes, setCheckboxes] = useState([true, false, false]);

    const handleCopy = (id: string, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const handleCheckboxChange = (index: number) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };

    const inputs = [
        {
            id: 'star-rating',
            name: 'Star Rating',
            description: 'Interactive star rating input',
            preview: (
                <div className="flex gap-1 justify-center">
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
                                        : 'text-neutral-300 fill-none hover:text-yellow-300'
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
            className={\`w-8 h-8 transition-all duration-300 \${
                star <= rating
                    ? 'text-yellow-400 fill-yellow-400 scale-110'
                    : 'text-neutral-300 fill-none hover:text-yellow-300'
            }\`}
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    </button>
))}`,
        },
        {
            id: 'slider',
            name: 'Animated Slider',
            description: 'Custom styled range slider',
            preview: (
                <div className="w-full px-4" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-600/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
                    />
                    <div className="flex justify-between mt-2 text-sm text-neutral-500">
                        <span>0%</span>
                        <span className="font-semibold text-primary-600">{sliderValue}%</span>
                        <span>100%</span>
                    </div>
                </div>
            ),
            code: `const [sliderValue, setSliderValue] = useState(50);

<input
    type="range"
    min="0"
    max="100"
    value={sliderValue}
    onChange={(e) => setSliderValue(Number(e.target.value))}
    className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary-600/30 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-125"
/>`,
        },
        {
            id: 'toggle',
            name: 'Toggle Switch',
            description: 'Smooth animated toggle',
            preview: (
                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => setToggleOn(!toggleOn)}
                        className={`w-16 h-9 rounded-full p-1 transition-all duration-300 cursor-pointer ${
                            toggleOn ? 'bg-primary-600' : 'bg-neutral-300'
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
    className={\`w-16 h-9 rounded-full p-1 transition-all duration-300 \${
        toggleOn ? 'bg-primary-600' : 'bg-neutral-300'
    }\`}
>
    <div className={\`w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 \${
        toggleOn ? 'translate-x-7' : 'translate-x-0'
    }\`}></div>
</button>`,
        },
        {
            id: 'segmented',
            name: 'Segmented Control',
            description: 'Sliding segmented control',
            preview: (
                <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
                    <div className="relative flex p-1 bg-neutral-100 dark:bg-neutral-700 rounded-xl">
                        {['Daily', 'Weekly', 'Monthly'].map((segment) => (
                            <button
                                key={segment}
                                onClick={() => setSelectedSegment(segment)}
                                className={`relative z-10 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                                    selectedSegment === segment ? 'text-white' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                                }`}
                            >
                                {segment}
                            </button>
                        ))}
                        <span
                            className="absolute inset-y-1 left-1 w-[calc(33.333%-8px)] bg-primary-600 rounded-lg shadow-md transition-all duration-300"
                            style={{
                                transform: `translateX(${['Daily', 'Weekly', 'Monthly'].indexOf(selectedSegment) * 100}%)`
                            }}
                        ></span>
                    </div>
                </div>
            ),
            code: `const [selectedSegment, setSelectedSegment] = useState('Daily');

<div className="relative flex p-1 bg-neutral-100 rounded-xl">
    {['Daily', 'Weekly', 'Monthly'].map((segment) => (
        <button
            key={segment}
            onClick={() => setSelectedSegment(segment)}
            className={\`relative z-10 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 \${
                selectedSegment === segment ? 'text-white' : 'text-neutral-600 hover:text-neutral-900'
            }\`}
        >
            {segment}
        </button>
    ))}
    <span
        className="absolute inset-y-1 left-1 w-[calc(33.333%-8px)] bg-primary-600 rounded-lg shadow-md transition-all duration-300"
        style={{
            transform: \`translateX(\${['Daily', 'Weekly', 'Monthly'].indexOf(selectedSegment) * 100}%)\`
        }}
    ></span>
</div>`,
        },
        {
            id: 'checkbox',
            name: 'Animated Checkboxes',
            description: 'Custom styled checkboxes with animation',
            preview: (
                <div className="flex gap-4 justify-center" onClick={(e) => e.stopPropagation()}>
                    {['Design', 'Code', 'Ship'].map((label, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={checkboxes[i]}
                                onChange={() => handleCheckboxChange(i)}
                            />
                            <div className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 ${
                                checkboxes[i]
                                    ? 'bg-primary-600 border-primary-600'
                                    : 'bg-white dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 group-hover:border-primary-400'
                            }`}>
                                <svg
                                    className={`w-4 h-4 text-white transition-all duration-300 ${
                                        checkboxes[i] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className={`text-sm font-medium transition-colors duration-300 ${
                                checkboxes[i] ? 'text-primary-600' : 'text-neutral-600 dark:text-neutral-300'
                            }`}>
                                {label}
                            </span>
                        </label>
                    ))}
                </div>
            ),
            code: `const [checked, setChecked] = useState(false);

<label className="flex items-center gap-2 cursor-pointer group">
    <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={() => setChecked(!checked)}
    />
    <div className={\`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-all duration-300 \${
        checked
            ? 'bg-primary-600 border-primary-600'
            : 'bg-white border-neutral-300 group-hover:border-primary-400'
    }\`}>
        <svg
            className={\`w-4 h-4 text-white transition-all duration-300 \${
                checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
    </div>
    <span>Label</span>
</label>`,
        },
        {
            id: 'focus-input',
            name: 'Focus Input',
            description: 'Input with animated focus state',
            preview: (
                <div className="w-full px-4" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type something..."
                            className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-700 border-2 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-neutral-800 outline-none transition-all duration-300 text-neutral-900 dark:text-white"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            ),
            code: `<input
    type="text"
    placeholder="Type something..."
    className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-2 border-transparent focus:border-primary-500 focus:bg-white outline-none transition-all duration-300"
/>`,
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Animated <span className="font-serif italic text-gradient">Inputs</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Interactive form elements with smooth animations.
                        <br />Click any component to copy the code.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {inputs.map((input) => (
                        <div
                            key={input.id}
                            onClick={() => handleCopy(input.id, input.code)}
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
                            <div className="mb-6 min-h-[80px] flex items-center justify-center">
                                {input.preview}
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{input.name}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{input.description}</p>

                            {/* Copied overlay */}
                            {copiedId === input.id && (
                                <div className="absolute inset-0 bg-primary-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <span className="text-white font-bold flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Copied!
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inputs;


