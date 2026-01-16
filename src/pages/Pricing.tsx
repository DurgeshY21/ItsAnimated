import { useState } from 'react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for side projects and learning.',
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: ['50+ Free Icons', 'Community Support', 'Basic Components', 'MIT License'],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Pro',
            description: 'For professional developers and teams.',
            monthlyPrice: 19,
            yearlyPrice: 190,
            features: ['All 200+ Animations', 'Priority Support', 'Figma Assets', 'Commercial License', 'Advanced Components'],
            cta: 'Go Pro',
            popular: true,
        },
        {
            name: 'Enterprise',
            description: 'For large scale applications.',
            monthlyPrice: 49,
            yearlyPrice: 490,
            features: ['Unlimited Projects', 'Dedicated Support', 'Custom Animations', 'SLA', 'Team Access'],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Simple <span className="font-serif italic text-gradient">Pricing</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center gap-4 p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all cursor-pointer ${
                                !isYearly 
                                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm' 
                                    : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all cursor-pointer flex items-center gap-2 ${
                                isYearly 
                                    ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm' 
                                    : 'text-neutral-500 dark:text-neutral-400'
                            }`}
                        >
                            Yearly
                            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">
                                -17%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        plan.popular ? (
                            /* Pro Plan - Special Design */
                            <div key={plan.name} className="p-8 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-2xl shadow-primary-900/20 md:-translate-y-4 border border-neutral-800 dark:border-neutral-200 flex flex-col relative overflow-hidden">
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <svg className="w-32 h-32 text-primary-500 -mr-10 -mt-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8">
                                        <div className="inline-block px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-bold mb-4">MOST POPULAR</div>
                                        <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{plan.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                            <span className="opacity-70">/{isYearly ? 'year' : 'month'}</span>
                                        </div>
                                        <p className="mt-4 opacity-90">{plan.description}</p>
                                    </div>
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className="p-0.5 rounded-full bg-primary-500 text-white">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold transition-all shadow-lg hover:shadow-primary-600/50 cursor-pointer">
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Regular Plan */
                            <div key={plan.name} className="p-8 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                                <div className="mb-8">
                                    <h3 className="text-lg font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-neutral-900 dark:text-white">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                        <span className="text-neutral-500">/{isYearly ? 'year' : 'month'}</span>
                                    </div>
                                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">{plan.description}</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold hover:border-neutral-900 dark:hover:border-white transition-colors cursor-pointer">
                                    {plan.cta}
                                </button>
                            </div>
                        )
                    ))}
                </div>

                {/* FAQ Hint */}
                <div className="text-center mt-16">
                    <p className="text-neutral-500 dark:text-neutral-400">
                        Have questions? <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">Check our FAQ</a> or <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">contact support</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
