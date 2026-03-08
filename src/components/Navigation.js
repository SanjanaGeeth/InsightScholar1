"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import feather from 'feather-icons';

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        feather.replace();

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, mobileMenuOpen]);

    useEffect(() => {
        // Close mobile menu on page change
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <nav style={{
                background: scrolled ? 'var(--bg-main)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '1.5rem',
                transition: 'all 0.3s ease'
            }}>
                {/* Top Row: Logo & Icons */}
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', width: '100%', paddingBottom: '1.5rem' }}>
                    {/* Left: Mobile Menu Toggle */}
                    <div style={{ display: 'flex' }}>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'none' }}
                            aria-label="Toggle menu"
                        >
                            <i data-feather={mobileMenuOpen ? "x" : "menu"} style={{ width: '28px', height: '28px' }}></i>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <Link href="/" className="logo" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '0.15em', textAlign: 'center' }}>
                        InsightScholar
                    </Link>

                    {/* Right: Icons */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
                        <i data-feather="search" style={{ width: '22px', height: '22px', cursor: 'pointer', color: 'var(--text-main)' }}></i>
                        <i data-feather="star" style={{ width: '22px', height: '22px', cursor: 'pointer', color: 'var(--text-main)' }}></i>
                    </div>
                </div>

                {/* Bottom Row: Nav Links */}
                <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent', transition: 'border-color 0.3s' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                        <div className="nav-links" style={{ gap: '4rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                            <Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link>
                            <Link href="/how-it-works" className={pathname === '/how-it-works' ? 'active' : ''}>How It Works</Link>
                            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link>
                    <Link href="/how-it-works" className={pathname === '/how-it-works' ? 'active' : ''}>How It Works</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} style={{ color: 'var(--accent)' }}>Early Access</Link>
                </div>
            </div>
        </>
    );
}
