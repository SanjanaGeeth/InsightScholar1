"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import feather from 'feather-icons';

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        feather.replace();

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <nav style={{
            background: scrolled ? 'var(--bg-main)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--text-muted)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}>
            <div className="container">
                <Link href="/" className="logo">
                    InsightScholar
                </Link>
                <div className="nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link>
                    <Link href="/how-it-works" className={pathname === '/how-it-works' ? 'active' : ''}>Pipeline</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                </div>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
                    Get Early Access
                </Link>
            </div>
        </nav>
    );
}
