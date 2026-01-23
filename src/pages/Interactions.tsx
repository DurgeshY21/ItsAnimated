import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Interactions = () => {
    const [_copiedId, _setCopiedId] = useState<string | null>(null);
    const [_searchQuery, _setSearchQuery] = useState('');
    const [_selectedCategory, _setSelectedCategory] = useState('All');

    // Mock states for previews
    const [_likeActive, _setLikeActive] = useState(false);
    const [_bookmarkActive, _setBookmarkActive] = useState(false);
    const [_notificationCount, _setNotificationCount] = useState(3);
    const [_toggleActive, _setToggleActive] = useState(false);
    const [_avatarStatus, _setAvatarStatus] = useState(true);
    const [_buttonLoading, _setButtonLoading] = useState(false);
    const [_expandedAccordion, _setExpandedAccordion] = useState<number | null>(null);
    const [_uploadProgress, _setUploadProgress] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [_dragActive, _setDragActive] = useState(false);
    const [_skeletonLoading, _setSkeletonLoading] = useState(true);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(42);
    const [bookmarked, setBookmarked] = useState(false);
    const [notifications, setNotifications] = useState(3);
    const [following, setFollowing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [starRating, setStarRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [progress, setProgress] = useState(45);
    const [loading, setLoading] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [chipSelected, setChipSelected] = useState<string[]>([]);
    const [avatarStatus] = useState(true);
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
    const navigate = useNavigate();






    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(prev => liked ? prev - 1 : prev + 1);
    };

    const interactions = [
        {
            id: 'like-button',
            name: 'Like Button',
            description: 'Animated heart with counter',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); handleLike(); }}
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${liked
                            ? 'bg-red-50 text-red-500 scale-105'
                            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
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
                </div>
            ),
            code: `const [liked, setLiked] = useState(false);
const [likeCount, setLikeCount] = useState(42);

const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
};

<button
    onClick={handleLike}
    className={\`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 \${
        liked
            ? 'bg-red-50 text-red-500 scale-105'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
    }\`}
>
    <svg
        className={\`w-5 h-5 transition-all duration-300 \${liked ? 'scale-125 fill-red-500' : 'fill-none'}\`}
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
    <span className="tabular-nums">{likeCount}</span>
</button>`,
        },
        {
            id: 'bookmark',
            name: 'Bookmark Button',
            description: 'Toggle bookmark with fill animation',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); setBookmarked(!bookmarked); }}
                        className={`p-3 rounded-xl transition-all duration-300 cursor-pointer ${bookmarked
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
            ),
            code: `const [bookmarked, setBookmarked] = useState(false);

<button
    onClick={() => setBookmarked(!bookmarked)}
    className={\`p-3 rounded-xl transition-all duration-300 \${
        bookmarked
            ? 'bg-primary-100 text-primary-600'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
    }\`}
>
    <svg
        className={\`w-6 h-6 transition-all duration-500 \${bookmarked ? 'scale-110 fill-primary-600' : 'fill-none'}\`}
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
</button>`,
        },
        {
            id: 'notification',
            name: 'Notification Bell',
            description: 'Bell with badge and wiggle animation',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); setNotifications(notifications > 0 ? 0 : 3); }}
                        className="relative p-3 bg-neutral-100 dark:bg-neutral-700 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-300 cursor-pointer group"
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
            ),
            code: `const [notifications, setNotifications] = useState(3);

<button
    onClick={() => setNotifications(0)}
    className="relative p-3 bg-neutral-100 rounded-xl hover:bg-neutral-200 transition-all duration-300 group"
>
    <svg className="w-6 h-6 text-neutral-600 group-hover:animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
    {notifications > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            {notifications}
        </span>
    )}
</button>`,
        },
        {
            id: 'follow',
            name: 'Follow Button',
            description: 'Follow/Unfollow with state change',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); setFollowing(!following); }}
                        className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${following
                            ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30'
                            : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
                            }`}
                    >
                        {following ? 'Following' : 'Follow'}
                    </button>
                </div>
            ),
            code: `const [following, setFollowing] = useState(false);

<button
    onClick={() => setFollowing(!following)}
    className={\`px-6 py-2.5 rounded-full font-medium transition-all duration-300 \${
        following
            ? 'bg-neutral-200 text-neutral-700 hover:bg-red-100 hover:text-red-600'
            : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/30'
    }\`}
>
    {following ? 'Following' : 'Follow'}
</button>`,
        },
        {
            id: 'expand',
            name: 'Expand/Collapse',
            description: 'Accordion with smooth animation',
            preview: (
                <div className="w-full px-4">
                    <div className="bg-neutral-100 dark:bg-neutral-700 rounded-xl overflow-hidden">
                        <button
                            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
                            className="w-full px-4 py-3 flex items-center justify-between cursor-pointer"
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
            ),
            code: `const [expanded, setExpanded] = useState(false);

<div className="bg-neutral-100 rounded-xl overflow-hidden">
    <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between"
    >
        <span className="font-medium">Click to expand</span>
        <svg
            className={\`w-5 h-5 transition-transform duration-300 \${expanded ? 'rotate-180' : ''}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div className={\`overflow-hidden transition-all duration-300 \${expanded ? 'max-h-24' : 'max-h-0'}\`}>
        <div className="px-4 pb-3 text-neutral-600 text-sm">
            Expanded content here...
        </div>
    </div>
</div>`,
        },
        {
            id: 'dropdown',
            name: 'Dropdown Menu',
            description: 'Animated dropdown with options',
            preview: (
                <div className="flex justify-center relative">
                    <div className="relative">
                        <button
                            onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                            className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
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
                                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors ${i === 3 ? 'text-red-500' : 'text-neutral-700 dark:text-neutral-200'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ),
            code: `const [menuOpen, setMenuOpen] = useState(false);

<div className="relative">
    <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="px-4 py-2.5 bg-neutral-100 rounded-xl flex items-center gap-2"
    >
        <span>Options</span>
        <svg
            className={\`w-4 h-4 transition-transform duration-200 \${menuOpen ? 'rotate-180' : ''}\`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
    <div className={\`absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-200 origin-top \${menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}\`}>
        {['Edit', 'Duplicate', 'Archive', 'Delete'].map((item) => (
            <button key={item} className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-100">
                {item}
            </button>
        ))}
    </div>
</div>`,
        },
        {
            id: 'share',
            name: 'Share Button',
            description: 'Share with expanding options',
            preview: (
                <div className="flex justify-center items-center gap-2">
                    <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.874L4.935 21.75H1.627l7.801-8.91L2.25 2.25h3.308l5.379 7.11L18.244 2.25z" /></svg>
                    </button>
                    <button className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </button>
                    <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </button>
                    <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                    </button>
                </div>
            ),
            code: `<div className="flex items-center gap-2">
    <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300">
        <!-- Twitter/X Icon -->
    </button>
    <button className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 hover:scale-110 transition-all duration-300">
        <!-- Instagram Icon -->
    </button>
    <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300">
        <!-- Facebook Icon -->
    </button>
    <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <!-- WhatsApp Icon -->
    </button>
</div>`,
        },
        {
            id: 'reaction',
            name: 'Reaction Picker',
            description: 'Emoji reactions with hover effect',
            preview: (
                <div className="flex justify-center gap-1">
                    {['👍', '❤️', '😂', '😮', '😢', '😡'].map((emoji, i) => (
                        <button
                            key={i}
                            className="w-10 h-10 flex items-center justify-center text-xl hover:scale-150 hover:-translate-y-2 transition-all duration-200 cursor-pointer"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            ),
            code: `{['👍', '❤️', '😂', '😮', '😢', '😡'].map((emoji, i) => (
    <button
        key={i}
        className="w-10 h-10 flex items-center justify-center text-xl hover:scale-150 hover:-translate-y-2 transition-all duration-200"
    >
        {emoji}
    </button>
))}`,
        },
        {
            id: 'toggle',
            name: 'Toggle Switch',
            description: 'Animated on/off toggle',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); setToggled(!toggled); }}
                        className={`relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer ${toggled ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-600'
                            }`}
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${toggled ? 'translate-x-7' : 'translate-x-0'
                                }`}
                        />
                    </button>
                </div>
            ),
            code: `const [toggled, setToggled] = useState(false);

<button
    onClick={() => setToggled(!toggled)}
    className={\`relative w-14 h-7 rounded-full transition-all duration-300 \${
        toggled ? 'bg-primary-600' : 'bg-neutral-300'
    }\`}
>
    <span
        className={\`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md \${
            toggled ? 'translate-x-7' : 'translate-x-0'
        }\`}
    />
</button>`,
        },
        {
            id: 'star-rating',
            name: 'Star Rating',
            description: 'Interactive star rating system',
            preview: (
                <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onMouseEnter={() => setHoveredStar(star)}
                            onMouseLeave={() => setHoveredStar(0)}
                            onClick={(e) => { e.stopPropagation(); setStarRating(star); }}
                            className="text-2xl transition-all duration-200 cursor-pointer hover:scale-125"
                        >
                            <span className={star <= (hoveredStar || starRating) ? 'text-yellow-400' : 'text-neutral-300 dark:text-neutral-600'}>
                                ★
                            </span>
                        </button>
                    ))}
                </div>
            ),
            code: `const [starRating, setStarRating] = useState(0);
const [hoveredStar, setHoveredStar] = useState(0);

{[1, 2, 3, 4, 5].map((star) => (
    <button
        key={star}
        onMouseEnter={() => setHoveredStar(star)}
        onMouseLeave={() => setHoveredStar(0)}
        onClick={() => setStarRating(star)}
        className="text-2xl transition-all duration-200 hover:scale-125"
    >
        <span className={star <= (hoveredStar || starRating) ? 'text-yellow-400' : 'text-neutral-300'}>
            ★
        </span>
    </button>
))}`,
        },
        {
            id: 'progress',
            name: 'Progress Bar',
            description: 'Animated progress indicator',
            preview: (
                <div className="w-full px-4">
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); setProgress(Math.max(0, progress - 10)); }}
                            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                        >
                            -10%
                        </button>
                        <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{progress}%</span>
                        <button
                            onClick={(e) => { e.stopPropagation(); setProgress(Math.min(100, progress + 10)); }}
                            className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                        >
                            +10%
                        </button>
                    </div>
                </div>
            ),
            code: `const [progress, setProgress] = useState(45);

<div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
    <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500"
        style={{ width: \`\${progress}%\` }}
    />
</div>`,
        },
        {
            id: 'loading',
            name: 'Loading Button',
            description: 'Button with loading state',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLoading(true);
                            setTimeout(() => setLoading(false), 2000);
                        }}
                        disabled={loading}
                        className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                    >
                        {loading ? (
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
            ),
            code: `const [loading, setLoading] = useState(false);

<button
    onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    }}
    disabled={loading}
    className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium disabled:opacity-70"
>
    {loading ? (
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
</button>`,
        },
        {
            id: 'tooltip',
            name: 'Tooltip',
            description: 'Hover tooltip with animation',
            preview: (
                <div className="flex justify-center relative">
                    <button
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors cursor-pointer"
                    >
                        Hover me
                    </button>
                    {tooltipVisible && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                            This is a tooltip!
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900 dark:border-t-neutral-800" />
                        </div>
                    )}
                </div>
            ),
            code: `const [tooltipVisible, setTooltipVisible] = useState(false);

<button
    onMouseEnter={() => setTooltipVisible(true)}
    onMouseLeave={() => setTooltipVisible(false)}
    className="px-4 py-2 bg-primary-600 text-white rounded-lg"
>
    Hover me
</button>
{tooltipVisible && (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 text-white text-sm rounded-lg shadow-lg">
        This is a tooltip!
    </div>
)}`,
        },
        {
            id: 'modal',
            name: 'Modal Trigger',
            description: 'Button that opens modal',
            preview: (
                <div className="flex justify-center">
                    <button
                        onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                        className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all hover:scale-105 cursor-pointer"
                    >
                        Open Modal
                    </button>
                    {modalOpen && (
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setModalOpen(false)}>
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl animate-in zoom-in-95" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Modal Title</h3>
                                    <button
                                        onClick={() => setModalOpen(false)}
                                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4">This is a modal dialog with smooth animations.</p>
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ),
            code: `const [modalOpen, setModalOpen] = useState(false);

<button onClick={() => setModalOpen(true)}>
    Open Modal
</button>
{modalOpen && (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setModalOpen(false)}>
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h3>Modal Title</h3>
            <p>Modal content...</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
        </div>
    </div>
)}`,
        },
        {
            id: 'search',
            name: 'Search Input',
            description: 'Animated search with focus effect',
            preview: (
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
                            className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${searchFocused ? 'text-primary-500' : 'text-neutral-400'
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            ),
            code: `const [searchFocused, setSearchFocused] = useState(false);

<div className={\`relative transition-all duration-300 \${searchFocused ? 'scale-105' : ''}\`}>
    <input
        type="text"
        placeholder="Search..."
        onFocus={() => setSearchFocused(true)}
        onBlur={() => setSearchFocused(false)}
        className="w-full px-4 py-3 pl-10 bg-neutral-100 border-2 border-transparent rounded-xl focus:border-primary-500 focus:bg-white focus:outline-none transition-all"
    />
    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400">
        <!-- Search icon -->
    </svg>
</div>`,
        },
        {
            id: 'tabs',
            name: 'Tab Switcher',
            description: 'Animated tab navigation',
            preview: (
                <div className="w-full px-4">
                    <div className="flex gap-1 bg-neutral-100 dark:bg-neutral-700 p-1 rounded-xl">
                        {['Home', 'About', 'Contact'].map((tab, index) => (
                            <button
                                key={tab}
                                onClick={(e) => { e.stopPropagation(); setActiveTab(index); }}
                                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === index
                                    ? 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 shadow-sm'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            ),
            code: `const [activeTab, setActiveTab] = useState(0);

<div className="flex gap-1 bg-neutral-100 p-1 rounded-xl">
    {['Home', 'About', 'Contact'].map((tab, index) => (
        <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={\`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 \${
                activeTab === index
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
            }\`}
        >
            {tab}
        </button>
    ))}
</div>`,
        },
        {
            id: 'slider',
            name: 'Range Slider',
            description: 'Interactive value slider',
            preview: (
                <div className="w-full px-4">
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => { e.stopPropagation(); setSliderValue(Number(e.target.value)); }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer slider"
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
            ),
            code: `const [sliderValue, setSliderValue] = useState(50);

<input
    type="range"
    min="0"
    max="100"
    value={sliderValue}
    onChange={(e) => setSliderValue(Number(e.target.value))}
    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
    style={{
        background: \`linear-gradient(to right, rgb(116, 0, 255) 0%, rgb(116, 0, 255) \${sliderValue}%, rgb(229, 229, 229) \${sliderValue}%, rgb(229, 229, 229) 100%)\`
    }}
/>`,
        },
        {
            id: 'checkbox',
            name: 'Animated Checkbox',
            description: 'Checkbox with smooth animation',
            preview: (
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
            ),
            code: `const [checked, setChecked] = useState(false);

<label className="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="sr-only" />
    <div className={\`w-6 h-6 border-2 rounded transition-all \${checked ? 'bg-primary-600 border-primary-600' : 'border-neutral-300'}\`}>
        {checked && <svg className="w-5 h-5 text-white">...</svg>}
    </div>
    <span>Label</span>
</label>`,
        },
        {
            id: 'radio',
            name: 'Radio Button Group',
            description: 'Animated radio buttons',
            preview: (
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
            ),
            code: `const [value, setValue] = useState('option1');

{['Option 1', 'Option 2'].map((option, index) => (
    <label key={index}>
        <input type="radio" checked={value === \`option\${index+1}\`} onChange={() => setValue(\`option\${index+1}\`)} />
        {option}
    </label>
))}`,
        },
        {
            id: 'chip',
            name: 'Chip/Tag Selector',
            description: 'Selectable chips with animation',
            preview: (
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
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${chipSelected.includes(chip)
                                ? 'bg-primary-600 text-white scale-105'
                                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                                }`}
                        >
                            {chip}
                        </button>
                    ))}
                </div>
            ),
            code: `const [selected, setSelected] = useState([]);

{['Tag1', 'Tag2'].map((tag) => (
    <button
        onClick={() => setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
        className={\`px-4 py-1.5 rounded-full \${selected.includes(tag) ? 'bg-primary-600 text-white' : 'bg-neutral-100'}\`}
    >
        {tag}
    </button>
))}`,
        },
        {
            id: 'avatar',
            name: 'Avatar with Status',
            description: 'User avatar with online status',
            preview: (
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl">
                            JD
                        </div>
                        <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-neutral-800 transition-all ${avatarStatus ? 'bg-green-500' : 'bg-neutral-400'}`} />
                    </div>
                </div>
            ),
            code: `<div className="relative">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700">
        JD
    </div>
    <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white bg-green-500" />
</div>`,
        },
        {
            id: 'ripple',
            name: 'Ripple Effect Button',
            description: 'Button with material design ripple',
            preview: (
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
            ),
            code: `<button className="relative px-6 py-3 bg-primary-600 text-white rounded-lg overflow-hidden">
    Click Me
    {ripple && <span className="absolute inset-0 bg-white/30 rounded-full animate-ping" />}
</button>`,
        },
        {
            id: 'floating-label',
            name: 'Floating Label Input',
            description: 'Input with animated floating label',
            preview: (
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
            ),
            code: `const [focused, setFocused] = useState(false);
const [value, setValue] = useState('');

<div className="relative">
    <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value.length > 0)}
        className="w-full px-4 pt-6 pb-2"
    />
    <label className={\`absolute left-4 \${focused || value ? 'top-2 text-xs' : 'top-4 text-sm'}\`}>
        Label
    </label>
</div>`,
        },
        {
            id: 'toast',
            name: 'Toast Notification',
            description: 'Animated toast message',
            preview: (
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
                        <div className="fixed bottom-4 right-4 bg-neutral-900 dark:bg-neutral-800 text-white px-6 py-4 rounded-xl shadow-lg animate-in slide-in-from-bottom-4 z-50">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Action completed successfully!</span>
                            </div>
                        </div>
                    )}
                </div>
            ),
            code: `const [toastVisible, setToastVisible] = useState(false);

<button onClick={() => { setToastVisible(true); setTimeout(() => setToastVisible(false), 3000); }}>
    Show Toast
</button>
{toastVisible && (
    <div className="fixed bottom-4 right-4 bg-neutral-900 text-white px-6 py-4 rounded-xl">
        Toast message
    </div>
)}`,
        },
        {
            id: 'alert',
            name: 'Alert Banner',
            description: 'Dismissible alert message',
            preview: (
                <div className="w-full px-4">
                    {alertVisible && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 flex items-center justify-between animate-in slide-in-from-top-4">
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
            ),
            code: `const [visible, setVisible] = useState(true);

{visible && (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
        <span>Alert message</span>
        <button onClick={() => setVisible(false)}>×</button>
    </div>
)}`,
        },
        {
            id: 'skeleton',
            name: 'Skeleton Loader',
            description: 'Animated loading skeleton',
            preview: (
                <div className="w-full px-4">
                    <div className="space-y-3">
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '100%' }} />
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '80%' }} />
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" style={{ width: '60%' }} />
                    </div>
                </div>
            ),
            code: `<div className="space-y-3">
    <div className="h-4 bg-neutral-200 rounded animate-pulse" style={{ width: '100%' }} />
    <div className="h-4 bg-neutral-200 rounded animate-pulse" style={{ width: '80%' }} />
    <div className="h-4 bg-neutral-200 rounded animate-pulse" style={{ width: '60%' }} />
</div>`,
        },
        {
            id: 'pagination',
            name: 'Pagination',
            description: 'Page navigation with numbers',
            preview: (
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
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${paginationPage === page
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
            ),
            code: `const [page, setPage] = useState(1);

<div className="flex gap-1">
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>←</button>
    {[1, 2, 3].map((p) => (
        <button key={p} onClick={() => setPage(p)} className={\`\${page === p ? 'bg-primary-600 text-white' : ''}\`}>
            {p}
        </button>
    ))}
    <button onClick={() => setPage(page + 1)}>→</button>
</div>`,
        },
        {
            id: 'breadcrumb',
            name: 'Breadcrumb Navigation',
            description: 'Navigation breadcrumb trail',
            preview: (
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
            ),
            code: `{['Home', 'Products', 'Category'].map((item, index) => (
    <div key={item} className="flex items-center gap-2">
        <a href="#" className="text-neutral-600">{item}</a>
        {index < items.length - 1 && <span>/</span>}
    </div>
))}`,
        },
        {
            id: 'fab',
            name: 'Floating Action Button',
            description: 'Expandable FAB menu',
            preview: (
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
                                        className="w-12 h-12 bg-neutral-800 text-white rounded-full shadow-lg hover:bg-neutral-700 transition-all animate-in fade-in slide-in-from-bottom-2"
                                        style={{ animationDelay: `${i * 50}ms` }}
                                    >
                                        {action[0]}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ),
            code: `const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)} className="w-14 h-14 bg-primary-600 rounded-full">
    +
</button>
{open && (
    <div className="absolute bottom-16">
        {/* Action buttons */}
    </div>
)}`,
        },
        {
            id: 'drawer',
            name: 'Side Drawer',
            description: 'Slide-out drawer menu',
            preview: (
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
                            <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-neutral-800 shadow-xl z-50 animate-in slide-in-from-left">
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
            ),
            code: `const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Open Drawer</button>
{open && (
    <>
        <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <div className="fixed left-0 top-0 h-full w-64 bg-white">
            {/* Drawer content */}
        </div>
    </>
)}`,
        },
        {
            id: 'popover',
            name: 'Popover',
            description: 'Contextual popover menu',
            preview: (
                <div className="flex justify-center relative">
                    <button
                        onClick={(e) => { e.stopPropagation(); setPopoverOpen(!popoverOpen); }}
                        className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                        Open Popover
                    </button>
                    {popoverOpen && (
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-4 w-48 z-50 animate-in fade-in slide-in-from-top-2">
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
            ),
            code: `const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)}>Open</button>
{open && (
    <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg p-4">
        {/* Popover content */}
    </div>
)}`,
        },
        {
            id: 'file-upload',
            name: 'File Upload',
            description: 'Drag and drop file upload',
            preview: (
                <div className="w-full px-4">
                    <div
                        onClick={(e) => { e.stopPropagation(); setFileUploaded(true); }}
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${fileUploaded
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
            ),
            code: `const [uploaded, setUploaded] = useState(false);

<div className="border-2 border-dashed rounded-xl p-8 text-center">
    {uploaded ? (
        <div>File uploaded!</div>
    ) : (
        <div>Drag and drop or click to upload</div>
    )}
</div>`,
        },
        {
            id: 'stepper',
            name: 'Stepper/Steps',
            description: 'Multi-step progress indicator',
            preview: (
                <div className="w-full px-4">
                    <div className="flex items-center justify-between">
                        {[1, 2, 3, 4].map((step, index) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${step < stepperStep
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
                                    <div className={`flex-1 h-1 mx-2 transition-all ${step < stepperStep ? 'bg-green-500' : 'bg-neutral-200 dark:bg-neutral-700'
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
            ),
            code: `const [step, setStep] = useState(1);

<div className="flex items-center">
    {[1, 2, 3, 4].map((s) => (
        <div key={s} className={\`w-10 h-10 rounded-full \${s <= step ? 'bg-primary-600' : 'bg-neutral-200'}\`}>
            {s}
        </div>
    ))}
</div>`,
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                        Animated <span className="font-serif italic text-gradient">Interactions</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Engaging micro-interactions for better user experience.
                        <br />Click any component to copy the code.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interactions.map((interaction) => (
                        <button
                            key={interaction.id}
                            onClick={(e) => {
                                // Prevent default button behavior
                                e.preventDefault();
                                e.stopPropagation();

                                // Save interaction data to localStorage for detail page
                                const interactionData = interactions.map(i => ({
                                    id: i.id,
                                    name: i.name,
                                    code: i.code,
                                    description: i.description
                                }));

                                console.log('Saving interaction data:', interactionData);
                                console.log('Current interaction:', interaction);
                                console.log('Navigating to:', `/interactions/${interaction.id}`);

                                localStorage.setItem('interactionData', JSON.stringify(interactionData));

                                // Small delay to ensure localStorage is set
                                setTimeout(() => {
                                    navigate(`/interactions/${interaction.id}`);
                                }, 50);
                            }}
                            className="group relative bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 cursor-pointer hover:border-primary-300 dark:hover:border-primary-600 transition-colors text-left w-full"
                        >
                            {/* Copy indicator */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="mb-6 min-h-[80px] flex items-center justify-center pointer-events-none">
                                <div className="pointer-events-auto">
                                    {interaction.preview}
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{interaction.name}</h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{interaction.description}</p>

                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Interactions;


