// app/components/layout/index.tsx
import React from 'react';
import type { ReactNode } from 'react';
import './index.scss';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export function Section({ children, className = '' }: LayoutProps) {
    return (
        <section className={`kto-layout-section ${className}`}>
            {children}
        </section>
    );
}

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="kto-layout-container">
            {children}
        </div>
    );
}