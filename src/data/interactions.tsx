import React from 'react';

export interface InteractionData {
    id: string;
    name: string;
    description: string;
    category: string;
    preview: React.ReactNode;
    code: string;
    cssCode: string;
}

// This will be populated with actual interaction data
export const interactionsData: InteractionData[] = [];

