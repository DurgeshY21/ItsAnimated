import { useState } from 'react';

const WhatIs = () => {
    const [activeDemo, setActiveDemo] = useState(0);
    
    // Interactive states
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(42);
    const [bookmarked, setBookmarked] = useState(false);
    const [toggleOn, setToggleOn] = useState(false);
    const [sliderValue, setSliderValue] = useState(50);
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [notifications, setNotifications] = useState(3);
    const [rating, setRating] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);
    const [checkboxes, setCheckboxes] = useState([false, false, false]);
    const [copiedIcon, setCopiedIcon] = useState<number | null>(null);
    const [clickedIcon, setClickedIcon] = useState<number | null>(null);

    const handleIconClick = (idx: number) => {
        setClickedIcon(idx);
        setCopiedIcon(idx);
        setTimeout(() => {
            setClickedIcon(null);
            setCopiedIcon(null);
        }, 1000);
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    const demos = [
        {
            name: 'Interactions',
            component: (
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    {/* Like Button */}
                    <button 
                        onClick={handleLike}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                            liked 
                                ? 'bg-red-50 text-red-500 scale-105' 
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                        }`}
                    >
                        <svg 
                            className={`w-5 h-5 transition-all duration-300 ${liked ? 'scale-125 fill-red-500' : 'fill-none'}`} 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="tabular-nums">{likeCount}</span>
                    </button>

                    {/* Bookmark */}
                    <button 
                        onClick={() => setBookmarked(!bookmarked)}
                        className={`p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                            bookmarked 
                                ? 'bg-primary-100 text-primary-600' 
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
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

                    {/* Toggle Switch */}
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

                    {/* Notification Bell */}
                    <button 
                        onClick={() => setNotifications(0)}
                        className="relative p-3 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-all duration-300 cursor-pointer group"
                    >
                        <svg className="w-6 h-6 text-neutral-600 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        {notifications > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                                {notifications}
                            </span>
                        )}
                    </button>
                </div>
            )
        },
        {
            name: 'Icons',
            component: (
                <div className="flex flex-col gap-6 items-center">
                    {/* Icon Grid */}
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                        {[
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />, anim: 'hover:scale-125 hover:text-red-500' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />, anim: 'hover:rotate-180 hover:text-yellow-500' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />, anim: 'hover:animate-wiggle' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />, anim: 'hover:animate-spin hover:text-primary-600' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />, anim: 'hover:scale-110' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />, anim: 'hover:-translate-y-1' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />, anim: 'hover:scale-110 hover:text-blue-500' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />, anim: 'hover:animate-bounce' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />, anim: 'hover:scale-110' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />, anim: 'hover:rotate-6 hover:scale-110' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4L5.5 20.5a1 1 0 001 1.5h11a1 1 0 001-1.5L17 4" />, anim: 'hover:animate-shake hover:text-red-500' },
                            { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, anim: 'hover:rotate-12' },
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleIconClick(idx)}
                                className={`relative w-14 h-14 bg-white rounded-2xl border border-neutral-100 shadow-sm flex items-center justify-center text-neutral-600 transition-all duration-300 cursor-pointer ${item.anim} ${
                                    clickedIcon === idx ? 'ring-2 ring-primary-500 ring-offset-2' : ''
                                }`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {item.icon}
                                </svg>
                                {copiedIcon === idx && (
                                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary-600 text-white text-[10px] rounded-full animate-bounce">
                                        Copied!
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    <p className="text-sm text-neutral-400">Click any icon to copy • Hover to preview animation</p>
                </div>
            )
        },
        {
            name: 'Buttons',
            component: (
                <div className="flex flex-wrap gap-4 justify-center items-center">
                    {/* Counter Button */}
                    <div className="flex items-center gap-0 bg-neutral-100 rounded-xl overflow-hidden">
                        <button 
                            onClick={() => setCount(Math.max(0, count - 1))}
                            className="px-4 py-3 text-neutral-600 hover:bg-neutral-200 active:scale-90 transition-all duration-200 cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
                        </button>
                        <span className="px-4 py-3 font-bold text-lg tabular-nums min-w-[60px] text-center">{count}</span>
                        <button 
                            onClick={() => setCount(count + 1)}
                            className="px-4 py-3 text-neutral-600 hover:bg-neutral-200 active:scale-90 transition-all duration-200 cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        </button>
                    </div>

                    {/* Play/Pause Button */}
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            isPlaying 
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/40 scale-110' 
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                        }`}
                    >
                        {isPlaying ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                        ) : (
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        )}
                    </button>

                    {/* Ripple Button */}
                    <button 
                        className="relative px-6 py-3 bg-primary-600 text-white rounded-xl font-medium overflow-hidden group active:scale-95 transition-transform cursor-pointer"
                        onClick={(e) => {
                            const btn = e.currentTarget;
                            const ripple = document.createElement('span');
                            const rect = btn.getBoundingClientRect();
                            ripple.style.left = `${e.clientX - rect.left}px`;
                            ripple.style.top = `${e.clientY - rect.top}px`;
                            ripple.className = 'absolute w-0 h-0 bg-white/30 rounded-full animate-ping';
                            btn.appendChild(ripple);
                            setTimeout(() => ripple.remove(), 600);
                        }}
                    >
                        Click for Ripple
                    </button>
                </div>
            )
        },
        {
            name: 'Cards',
            component: (
                <div className="flex gap-4 justify-center">
                    {/* Flip Card */}
                    <div className="group w-36 h-44 [perspective:1000px] cursor-pointer">
                        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center [backface-visibility:hidden]">
                                <span className="text-white font-bold">Hover me!</span>
                            </div>
                            {/* Back */}
                            <div className="absolute inset-0 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                <span className="text-neutral-800 font-bold">🎉 Flipped!</span>
                            </div>
                        </div>
                    </div>

                    {/* Tilt Card */}
                    <div className="w-36 h-44 bg-white rounded-2xl border border-neutral-200 shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-3 hover:rotate-2 transition-all duration-500 cursor-pointer">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="font-semibold text-neutral-800">Lift Card</span>
                    </div>

                    {/* Glow Card */}
                    <div className="w-36 h-44 bg-neutral-900 rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-[0_0_30px_rgba(116,0,255,0.5)] transition-all duration-500 cursor-pointer group">
                        <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 mb-3 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        </div>
                        <span className="font-semibold text-white">Glow Effect</span>
                    </div>
                </div>
            )
        },
        {
            name: 'Inputs',
            component: (
                <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto">
                    {/* Star Rating */}
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
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
                        <span className="ml-2 text-neutral-500 self-center">{rating > 0 ? `${rating}/5` : 'Rate me!'}</span>
                    </div>

                    {/* Animated Slider */}
                    <div className="w-full">
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

                    {/* Segmented Control */}
                    <div className="flex bg-neutral-100 rounded-xl p-1 gap-1">
                        {['Daily', 'Weekly', 'Monthly'].map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedTab(i)}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    selectedTab === i
                                        ? 'bg-white text-neutral-900 shadow-sm'
                                        : 'text-neutral-500 hover:text-neutral-700'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Animated Checkboxes */}
                    <div className="flex gap-6">
                        {['Design', 'Code', 'Ship'].map((label, i) => (
                            <label key={i} className="flex items-center gap-2 cursor-pointer group">
                                <div 
                                    onClick={() => {
                                        const newCheckboxes = [...checkboxes];
                                        newCheckboxes[i] = !newCheckboxes[i];
                                        setCheckboxes(newCheckboxes);
                                    }}
                                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                                        checkboxes[i]
                                            ? 'bg-primary-600 border-primary-600 scale-110'
                                            : 'border-neutral-300 group-hover:border-primary-400'
                                    }`}
                                >
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
                                    checkboxes[i] ? 'text-primary-600' : 'text-neutral-600'
                                }`}>
                                    {label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary-50/50 to-transparent rounded-full blur-3xl -z-10"></div>

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                        What is <span className="text-gradient font-serif italic">itsanimated.fun</span>?
                    </h2>
                    <p className="text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                        A comprehensive library of production-ready animated UI components designed for modern web applications. From subtle micro-interactions to eye-catching animations, we provide the building blocks to create delightful user experiences. With our AI-powered animation generator, you can describe the animation you want in plain English and watch it come to life instantly.
                    </p>
                </div>

                {/* Live Preview Section */}
                <div className="mt-16">
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                            <img src="/src/assets/logo.png" alt="Logo" className="w-4 h-4 object-contain" />
                            Live Preview — Click & interact!
                        </span>
                    </div>

                    {/* Demo Tabs */}
                    <div className="flex justify-center gap-2 mb-8 flex-wrap">
                        {demos.map((demo, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveDemo(idx)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                                    activeDemo === idx
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                }`}
                            >
                                {demo.name}
                            </button>
                        ))}
                    </div>

                    {/* Preview Window */}
                    <div className="relative">
                        <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-8 min-h-[280px] flex items-center justify-center overflow-visible">
                            {/* Browser Chrome */}
                            <div className="absolute top-4 left-6 flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            {/* URL Bar */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-400">
                                itsanimated.fun/preview
                            </div>

                            {/* Demo Content */}
                            <div className="w-full pt-6">
                                {demos[activeDemo].component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIs;
