
// Mock Data for the Icon Library with CSS versions
export const iconsData = [
  {
    id: 'heart',
    name: 'Heart Beat',
    category: 'Social',
    icon: <svg className="w-6 h-6 animate-[pulse_1s_ease-in-out_infinite] text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
    code: `<svg 
  className="w-6 h-6 animate-[pulse_1s_ease-in-out_infinite] text-red-500" 
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
</svg>`,
    cssCode: `/* CSS */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}
.icon-heart {
  width: 24px;
  height: 24px;
  color: #ef4444; /* red-500 */
  animation: pulse 1s ease-in-out infinite;
}

/* HTML */
<svg class="icon-heart" fill="currentColor" viewBox="0 0 24 24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
</svg>`
  },
  {
    id: 'settings',
    name: 'Spinning Cog',
    category: 'Interface',
    icon: <svg className="w-6 h-6 animate-[spin_3s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 animate-[spin_3s_linear_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.icon-settings {
  width: 24px;
  height: 24px;
  animation: spin 3s linear infinite;
}

/* HTML */
<svg class="icon-settings" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`
  },
  {
    id: 'loading',
    name: 'Loader Circle',
    category: 'Interface',
    icon: <svg className="w-6 h-6 animate-spin text-primary-600" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>,
    code: `<svg 
  className="w-6 h-6 animate-spin text-primary-600" 
  fill="none" 
  viewBox="0 0 24 24"
>
  <circle 
    className="opacity-25" 
    cx="12" 
    cy="12" 
    r="10" 
    stroke="currentColor" 
    strokeWidth="4"
  ></circle>
  <path 
    className="opacity-75" 
    fill="currentColor" 
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  ></path>
</svg>`,
    cssCode: `/* CSS */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.icon-loading {
  width: 24px;
  height: 24px;
  color: #2563eb; /* primary-600 approx */
  animation: spin 1s linear infinite;
}

/* HTML */
<svg class="icon-loading" fill="none" viewBox="0 0 24 24">
  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>`
  },
  {
    id: 'bell',
    name: 'Notification Ring',
    category: 'Interface',
    icon: <svg className="w-6 h-6 animate-[swing_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    code: `<svg 
  className="w-6 h-6 animate-[swing_2s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes swing {
  20% { transform: rotate3d(0, 0, 1, 15deg); }
  40% { transform: rotate3d(0, 0, 1, -10deg); }
  60% { transform: rotate3d(0, 0, 1, 5deg); }
  80% { transform: rotate3d(0, 0, 1, -5deg); }
  to { transform: rotate3d(0, 0, 1, 0deg); }
}
.icon-bell {
  width: 24px;
  height: 24px;
  animation: swing 2s ease-in-out infinite;
}

/* HTML */
<svg class="icon-bell" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>`
  },
  {
    id: 'arrow-right',
    name: 'Bounce Right',
    category: 'Arrows',
    icon: <svg className="w-6 h-6 animate-bounce-right" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>,
    code: `<svg 
  className="w-6 h-6 animate-bounce-right" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M14 5l7 7m0 0l-7 7m7-7H3" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes bounce-right {
  0%, 100% { transform: translateX(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateX(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}
.icon-arrow-right {
  width: 24px;
  height: 24px;
  animation: bounce-right 1s infinite;
}

/* HTML */
<svg class="icon-arrow-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>`
  },
  {
    id: 'cloud',
    name: 'Drifting Cloud',
    category: 'Weather',
    icon: <svg className="w-6 h-6 animate-[float_3s_ease-in-out_infinite] text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5,19c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-0.7,0-1.3,0.1-1.9,0.3C14.9,2.4,12.6,1,10,1C5.6,1,2,4.6,2,9c0,0.4,0,0.8,0.1,1.1C0.8,11.2,0,12.5,0,14c0,2.8,2.2,5,5,5h12.5V19z" /></svg>,
    code: `<svg 
  className="w-6 h-6 animate-[float_3s_ease-in-out_infinite] text-blue-400" 
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    d="M17.5,19c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-0.7,0-1.3,0.1-1.9,0.3C14.9,2.4,12.6,1,10,1C5.6,1,2,4.6,2,9c0,0.4,0,0.8,0.1,1.1C0.8,11.2,0,12.5,0,14c0,2.8,2.2,5,5,5h12.5V19z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.icon-cloud {
  width: 24px;
  height: 24px;
  color: #60a5fa; /* blue-400 */
  animation: float 3s ease-in-out infinite;
}

/* HTML */
<svg class="icon-cloud" fill="currentColor" viewBox="0 0 24 24">
  <path d="M17.5,19c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5c-0.7,0-1.3,0.1-1.9,0.3C14.9,2.4,12.6,1,10,1C5.6,1,2,4.6,2,9c0,0.4,0,0.8,0.1,1.1C0.8,11.2,0,12.5,0,14c0,2.8,2.2,5,5,5h12.5V19z" />
</svg>`
  },
  {
    id: 'menu',
    name: 'Menu Toggle',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:rotate-90 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M4 6h16M4 12h16m-7 6h7" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-menu {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-menu:hover {
  transform: rotate(90deg);
}

/* HTML */
<svg class="icon-menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>`
  },
  {
    id: 'trash',
    name: 'Delete Shake',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:animate-[shake_0.5s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[shake_0.5s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
.icon-trash {
  width: 24px;
  height: 24px;
}
.icon-trash:hover {
  animation: shake 0.5s ease-in-out infinite;
}

/* HTML */
<svg class="icon-trash" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>`
  },
  {
    id: 'check',
    name: 'Success',
    category: 'Interface',
    icon: <svg className="w-6 h-6 text-green-500 animate-[bounce_1s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-green-500 animate-[bounce_1s_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M5 13l4 4L19 7" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}
.icon-check {
  width: 24px;
  height: 24px;
  color: #22c55e; /* green-500 */
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
</svg>`
  },
  {
    id: 'send',
    name: 'Send Fly',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:animate-[fly_0.6s_ease-in-out_forwards]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[fly_0.6s_ease-in-out_forwards]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes fly {
  0% { transform: translate(0, 0); }
  20% { transform: translate(-2px, 2px); }
  100% { transform: translate(100%, -100%); opacity: 0; }
}
.icon-send {
  width: 24px;
  height: 24px;
}
.icon-send:hover {
  animation: fly 0.6s ease-in-out forwards;
}

/* HTML */
<svg class="icon-send" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>`
  },
  {
    id: 'typing',
    name: 'Typing Dots',
    category: 'Social',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle className="animate-[typing_1s_infinite]" cx="4" cy="12" r="2" /><circle className="animate-[typing_1s_infinite_0.2s]" cx="12" cy="12" r="2" /><circle className="animate-[typing_1s_infinite_0.4s]" cx="20" cy="12" r="2" /></svg>,
    code: `<svg 
  className="w-6 h-6" 
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <circle 
    className="animate-[typing_1s_infinite]" 
    cx="4" 
    cy="12" 
    r="2" 
  />
  <circle 
    className="animate-[typing_1s_infinite_0.2s]" 
    cx="12" 
    cy="12" 
    r="2" 
  />
  <circle 
    className="animate-[typing_1s_infinite_0.4s]" 
    cx="20" 
    cy="12" 
    r="2" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes typing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.icon-typing {
  width: 24px;
  height: 24px;
}
.dot {
  animation: typing 1s infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

/* HTML */
<svg class="icon-typing" fill="currentColor" viewBox="0 0 24 24">
  <circle class="dot" cx="4" cy="12" r="2" />
  <circle class="dot" cx="12" cy="12" r="2" />
  <circle class="dot" cx="20" cy="12" r="2" />
</svg>`
  },
  {
    id: 'wifi',
    name: 'Wifi Searching',
    category: 'Interface',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path className="animate-[wifi-fade_1.5s_infinite]" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12.55a11 11 0 0114.08 0" /><path className="animate-[wifi-fade_1.5s_infinite_0.5s]" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.21 15.5a7 7 0 017.58 0" /><path className="animate-[wifi-fade_1.5s_infinite_1s]" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 18.5a3.5 3.5 0 013 0" /></svg>,
    code: `<svg 
  className="w-6 h-6" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    className="animate-[wifi-fade_1.5s_infinite]" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M5 12.55a11 11 0 0114.08 0" 
  />
  <path 
    className="animate-[wifi-fade_1.5s_infinite_0.5s]" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8.21 15.5a7 7 0 017.58 0" 
  />
  <path 
    className="animate-[wifi-fade_1.5s_infinite_1s]" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M10.5 18.5a3.5 3.5 0 013 0" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes wifi-fade {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.icon-wifi {
  width: 24px;
  height: 24px;
}
.wifi-bar {
  animation: wifi-fade 1.5s infinite;
}
.wifi-bar:nth-child(2) { animation-delay: 0.5s; }
.wifi-bar:nth-child(3) { animation-delay: 1s; }

/* HTML */
<svg class="icon-wifi" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path class="wifi-bar" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12.55a11 11 0 0114.08 0" />
  <path class="wifi-bar" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.21 15.5a7 7 0 017.58 0" />
  <path class="wifi-bar" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 18.5a3.5 3.5 0 013 0" />
</svg>`
  },
  {
    id: 'mic',
    name: 'Recording Pulse',
    category: 'Interface',
    icon: <div className="relative w-6 h-6 flex items-center justify-center text-red-500"><span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-[pulse-ring_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span><svg className="relative w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" /></svg></div>,
    code: `<div className="relative w-6 h-6 flex items-center justify-center text-red-500">
  <span 
    className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-[pulse-ring_2s_cubic-bezier(0,0,0.2,1)_infinite]"
  ></span>
  <svg 
    className="relative w-4 h-4" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
  </svg>
</div>`,
    cssCode: `/* CSS */
@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.3); opacity: 0; }
}
.icon-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
}
.ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-color: #f87171;
  opacity: 0.75;
  animation: pulse-ring 2s cubic-bezier(0,0,0.2,1) infinite;
}
.icon-mic {
  position: relative;
  width: 16px;
  height: 16px;
}

/* HTML */
<div class="icon-wrapper">
  <span class="ring"></span>
  <svg class="icon-mic" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
  </svg>
</div>`
  },
  {
    id: 'battery',
    name: 'Charging',
    category: 'Interface',
    icon: <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path className="animate-[charge_2s_steps(4)_infinite]" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-green-500" 
  fill="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    className="animate-[charge_2s_steps(4)_infinite]" 
    d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes charge {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
.icon-battery {
  width: 24px;
  height: 24px;
  color: #22c55e;
}
.battery-level {
  animation: charge 2s steps(4) infinite;
}

/* HTML */
<svg class="icon-battery" fill="currentColor" viewBox="0 0 24 24">
  <path class="battery-level" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
</svg>`
  },
  {
    id: 'home',
    name: 'Home Bounce',
    category: 'Navigation',
    icon: <svg className="w-6 h-6 hover:animate-[bounce-subtle_1s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[bounce-subtle_1s_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
}
.icon-home {
  width: 24px;
  height: 24px;
}
.icon-home:hover {
  animation: bounce-subtle 1s infinite;
}

/* HTML */
<svg class="icon-home" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>`
  },
  {
    id: 'user',
    name: 'User Profile',
    category: 'Navigation',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-200" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-user {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
}
.icon-user:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-user" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>`
  },
  {
    id: 'search',
    name: 'Search Zoom',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-125 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-search {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-search:hover {
  transform: scale(1.25);
}

/* HTML */
<svg class="icon-search" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>`
  },
  {
    id: 'close',
    name: 'Close Spin',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:rotate-90 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M6 18L18 6M6 6l12 12" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-close {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-close:hover {
  transform: rotate(90deg);
}

/* HTML */
<svg class="icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`
  },
  {
    id: 'arrow-left',
    name: 'Slide Left',
    category: 'Arrows',
    icon: <svg className="w-6 h-6 hover:-translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-x-2 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-arrow-left {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-arrow-left:hover {
  transform: translateX(-8px);
}

/* HTML */
<svg class="icon-arrow-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>`
  },
  {
    id: 'arrow-up',
    name: 'Slide Up',
    category: 'Arrows',
    icon: <svg className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-2 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M5 10l7-7m0 0l7 7m-7-7v18" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-arrow-up {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-arrow-up:hover {
  transform: translateY(-8px);
}

/* HTML */
<svg class="icon-arrow-up" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
</svg>`
  },
  {
    id: 'arrow-down',
    name: 'Slide Down',
    category: 'Arrows',
    icon: <svg className="w-6 h-6 hover:translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:translate-y-2 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-arrow-down {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-arrow-down:hover {
  transform: translateY(8px);
}

/* HTML */
<svg class="icon-arrow-down" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
</svg>`
  },
  {
    id: 'chevron-down',
    name: 'Chevron Bounce',
    category: 'Arrows',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M19 9l-7 7-7-7" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-chevron-down {
  width: 24px;
  height: 24px;
}
.icon-chevron-down:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-chevron-down" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>`
  },
  {
    id: 'link',
    name: 'Link Twist',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:rotate-12 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-link {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-link:hover {
  transform: rotate(12deg);
}

/* HTML */
<svg class="icon-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>`
  },
  {
    id: 'logout',
    name: 'Logout Slide',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:translate-x-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-logout {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-logout:hover {
  transform: translateX(4px);
}

/* HTML */
<svg class="icon-logout" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>`
  },
  {
    id: 'mail',
    name: 'Mail Pop',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-mail {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-mail:hover {
  transform: translateY(-4px);
}

/* HTML */
<svg class="icon-mail" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>`
  },
  {
    id: 'phone',
    name: 'Phone Wiggle',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.icon-phone {
  width: 24px;
  height: 24px;
}
.icon-phone:hover {
  animation: wiggle 1s ease-in-out infinite;
}

/* HTML */
<svg class="icon-phone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>`
  },
  {
    id: 'chat',
    name: 'Chat Bubble',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-chat {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-chat:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-chat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>`
  },
  {
    id: 'share',
    name: 'Share Expand',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-share {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-share:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-share" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
</svg>`
  },
  {
    id: 'thumbs-up',
    name: 'Like Tilt',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-rotate-12 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-thumbs-up {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-thumbs-up:hover {
  transform: rotate(-12deg);
}

/* HTML */
<svg class="icon-thumbs-up" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>`
  },
  {
    id: 'star',
    name: 'Star Shine',
    category: 'Social',
    icon: <svg className="w-6 h-6 hover:text-yellow-400 hover:fill-current transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:text-yellow-400 hover:fill-current transition-colors duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-star {
  width: 24px;
  height: 24px;
  transition: color 0.3s, fill 0.3s;
}
.icon-star:hover {
  color: #facc15;
  fill: currentColor;
}

/* HTML */
<svg class="icon-star" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>`
  },
  {
    id: 'map-pin',
    name: 'Pin Bounce',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-map-pin {
  width: 24px;
  height: 24px;
}
.icon-map-pin:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-map-pin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`
  },
  {
    id: 'globe',
    name: 'Globe Tilt',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:rotate-12 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-globe {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-globe:hover {
  transform: rotate(12deg);
}

/* HTML */
<svg class="icon-globe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>`
  },
  {
    id: 'play',
    name: 'Play Pop',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-play {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-play:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-play" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
  },
  {
    id: 'pause',
    name: 'Pause Pop',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-pause {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-pause:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-pause" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
  },
  {
    id: 'volume',
    name: 'Volume Pulse',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-pulse" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-volume {
  width: 24px;
  height: 24px;
}
.icon-volume:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-volume" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
</svg>`
  },
  {
    id: 'camera',
    name: 'Camera Flash',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-pulse" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-camera {
  width: 24px;
  height: 24px;
}
.icon-camera:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-camera" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>`
  },
  {
    id: 'image',
    name: 'Image Zoom',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-image {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-image:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-image" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>`
  },
  {
    id: 'music',
    name: 'Music Bounce',
    category: 'Media',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-music {
  width: 24px;
  height: 24px;
}
.icon-music:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-music" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
</svg>`
  },
  {
    id: 'cart',
    name: 'Cart Slide',
    category: 'Commerce',
    icon: <svg className="w-6 h-6 hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-x-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-cart {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-cart:hover {
  transform: translateX(-4px);
}

/* HTML */
<svg class="icon-cart" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>`
  },
  {
    id: 'tag',
    name: 'Tag Swing',
    category: 'Commerce',
    icon: <svg className="w-6 h-6 hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-rotate-12 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-tag {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-tag:hover {
  transform: rotate(-12deg);
}

/* HTML */
<svg class="icon-tag" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>`
  },
  {
    id: 'gift',
    name: 'Gift Shake',
    category: 'Commerce',
    icon: <svg className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.icon-gift {
  width: 24px;
  height: 24px;
  animation: none;
}
.icon-gift:hover {
  animation: wiggle 1s ease-in-out infinite;
}

/* HTML */
<svg class="icon-gift" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
</svg>`
  },
  {
    id: 'pencil',
    name: 'Edit Write',
    category: 'Edit',
    icon: <svg className="w-6 h-6 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-pencil {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-pencil:hover {
  transform: translate(4px, -4px);
}

/* HTML */
<svg class="icon-pencil" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>`
  },
  {
    id: 'save',
    name: 'Save Zoom',
    category: 'Edit',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-save {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-save:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-save" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>`
  },
  {
    id: 'download',
    name: 'Download Bounce',
    category: 'Edit',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-download {
  width: 24px;
  height: 24px;
}
.icon-download:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-download" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>`
  },
  {
    id: 'upload',
    name: 'Upload Bounce',
    category: 'Edit',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-upload {
  width: 24px;
  height: 24px;
}
.icon-upload:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-upload" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>`
  },
  {
    id: 'info',
    name: 'Info Scale',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-info {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-info:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
  },
  {
    id: 'help',
    name: 'Help Bounce',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-bounce" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-help {
  width: 24px;
  height: 24px;
}
.icon-help:hover {
  animation: bounce 1s infinite;
}

/* HTML */
<svg class="icon-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
  },
  {
    id: 'warning',
    name: 'Warning Pulse',
    category: 'System',
    icon: <svg className="w-6 h-6 text-yellow-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-yellow-500 animate-pulse" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-warning {
  width: 24px;
  height: 24px;
  color: #eab308;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>`
  },
  {
    id: 'lock',
    name: 'Lock Wiggle',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-[wiggle_1s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.icon-lock {
  width: 24px;
  height: 24px;
}
.icon-lock:hover {
  animation: wiggle 1s ease-in-out infinite;
}

/* HTML */
<svg class="icon-lock" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>`
  },
  {
    id: 'unlock',
    name: 'Unlock Pop',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-unlock {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-unlock:hover {
  transform: translateY(-4px);
}

/* HTML */
<svg class="icon-unlock" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
</svg>`
  },
  {
    id: 'eye',
    name: 'Eye Zoom',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
  />
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-eye {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-eye:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-eye" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>`
  },
  {
    id: 'eye-off',
    name: 'Eye Off Zoom',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-eye-off {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-eye-off:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-eye-off" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
</svg>`
  },
  {
    id: 'calendar',
    name: 'Calendar Date',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:translate-x-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-calendar {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-calendar:hover {
  transform: translateX(4px);
}

/* HTML */
<svg class="icon-calendar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>`
  },
  {
    id: 'clock',
    name: 'Clock Spin',
    category: 'System',
    icon: <svg className="w-6 h-6 hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:rotate-90 transition-transform duration-500" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-clock {
  width: 24px;
  height: 24px;
  transition: transform 0.5s;
}
.icon-clock:hover {
  transform: rotate(90deg);
}

/* HTML */
<svg class="icon-clock" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
  },
  {
    id: 'sun',
    name: 'Sun Spin',
    category: 'Weather',
    icon: <svg className="w-6 h-6 text-yellow-500 animate-[spin_4s_linear_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-yellow-500 animate-[spin_4s_linear_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.icon-sun {
  width: 24px;
  height: 24px;
  color: #eab308;
  animation: spin 4s linear infinite;
}

/* HTML */
<svg class="icon-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`
  },
  {
    id: 'moon',
    name: 'Moon Wiggle',
    category: 'Weather',
    icon: <svg className="w-6 h-6 text-indigo-400 hover:animate-[wiggle_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-indigo-400 hover:animate-[wiggle_1s_ease-in-out_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
  />
</svg>`,
    cssCode: `/* CSS */
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.icon-moon {
  width: 24px;
  height: 24px;
  color: #818cf8;
}
.icon-moon:hover {
  animation: wiggle 1s ease-in-out infinite;
}

/* HTML */
<svg class="icon-moon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`
  },
  {
    id: 'rain',
    name: 'Cloud Rain',
    category: 'Weather',
    icon: <svg className="w-6 h-6 hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 011-7.87 4 4 0 017.3-1.47 5 5 0 019.29 2.5 5 5 0 01-.19 1.13M13 18v2m-4-2v2m8-2v2" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-pulse" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 15a4 4 0 011-7.87 4 4 0 017.3-1.47 5 5 0 019.29 2.5 5 5 0 01-.19 1.13M13 18v2m-4-2v2m8-2v2" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-rain {
  width: 24px;
  height: 24px;
}
.icon-rain:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-rain" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 011-7.87 4 4 0 017.3-1.47 5 5 0 019.29 2.5 5 5 0 01-.19 1.13M13 18v2m-4-2v2m8-2v2" />
</svg>`
  },
  {
    id: 'lightning',
    name: 'Voltage Pulse',
    category: 'Weather',
    icon: <svg className="w-6 h-6 text-yellow-500 animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    code: `<svg 
  className="w-6 h-6 text-yellow-500 animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M13 10V3L4 14h7v7l9-11h-7z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-lightning {
  width: 24px;
  height: 24px;
  color: #eab308;
  animation: pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-lightning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>`
  },
  {
    id: 'filter',
    name: 'Filter Scale',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-110 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-filter {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-filter:hover {
  transform: scale(1.1);
}

/* HTML */
<svg class="icon-filter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>`
  },
  {
    id: 'sort',
    name: 'Sort Slide',
    category: 'Interface',
    icon: <svg className="w-6 h-6 hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:translate-y-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-sort {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-sort:hover {
  transform: translateY(4px);
}

/* HTML */
<svg class="icon-sort" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
</svg>`
  },
  {
    id: 'folder',
    name: 'Folder Open',
    category: 'Files',
    icon: <svg className="w-6 h-6 hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:scale-105 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-folder {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-folder:hover {
  transform: scale(1.05);
}

/* HTML */
<svg class="icon-folder" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
</svg>`
  },
  {
    id: 'document',
    name: 'Document Pop',
    category: 'Files',
    icon: <svg className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-document {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-document:hover {
  transform: translateY(-4px);
}

/* HTML */
<svg class="icon-document" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>`
  },
  {
    id: 'printer',
    name: 'Printer Pulse',
    category: 'Files',
    icon: <svg className="w-6 h-6 hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:animate-pulse" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-printer {
  width: 24px;
  height: 24px;
}
.icon-printer:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* HTML */
<svg class="icon-printer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
</svg>`
  },
  {
    id: 'rocket',
    name: 'Rocket Fly',
    category: 'Misc',
    icon: <svg className="w-6 h-6 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    code: `<svg 
  className="w-6 h-6 hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M13 10V3L4 14h7v7l9-11h-7z" 
  />
</svg>`,
    cssCode: `/* CSS */
.icon-rocket {
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
}
.icon-rocket:hover {
  transform: translate(4px, -4px);
}

/* HTML */
<svg class="icon-rocket" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>`
  },
];
