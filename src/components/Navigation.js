"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, mobileMenuOpen]);

    useEffect(() => {
        // Close mobile menu on page change
        setMobileMenuOpen(false);
        // Also close modal just in case
        setShowModal(false);
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
                <div className="container nav-top-row">
                    {/* Left: Mobile Menu Toggle */}
                    <div style={{ display: 'flex' }}>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'none' }}
                            aria-label="Toggle menu"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {mobileMenuOpen ? (
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                ) : (
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                )}
                                {mobileMenuOpen ? (
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                ) : (
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                )}
                                {!mobileMenuOpen && <line x1="3" y1="18" x2="21" y2="18"></line>}
                            </svg>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <Link href="/" className="logo" style={{ textAlign: 'center' }}>
                            InsightScholar
                        </Link>
                    </div>

                    {/* Right: Empty for grid balance */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', alignItems: 'center' }}>
                    </div>
                </div>

                {/* Bottom Row: Nav Links */}
                <div className="nav-bottom-row" style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent' }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                        <div className="nav-links" style={{ gap: '3rem', fontWeight: 600, letterSpacing: '0.1em', alignItems: 'center' }}>
                            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                            <Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link>
                            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                            <Link href="/pricing" className={pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
                            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                            <button
                                className="btn btn-primary"
                                style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', borderRadius: '20px' }}
                                onClick={() => setShowModal(true)}
                            >
                                Early Access
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link href="/features" className={pathname === '/features' ? 'active' : ''}>Features</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link href="/pricing" className={pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
                    <button
                        onClick={() => { setShowModal(true); setMobileMenuOpen(false); }}
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', width: '100%' }}
                    >
                        Early Access
                    </button>
                </div>
            </div>

            {/* Early Access Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
                    zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1rem'
                }}>
                    <div className="glass-card fade-in-up" style={{
                        position: 'relative', width: '100%', maxWidth: '700px',
                        background: 'white', borderRadius: '16px', padding: '1rem',
                        maxHeight: '90vh', overflowY: 'auto'
                    }}>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute', top: '15px', right: '15px',
                                background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '50%',
                                width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', zIndex: 10
                            }}
                            aria-label="Close modal"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <iframe
                            src="https://forms.gle/PPCrc4GJTd3LM2DQA"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            )}
        </>
    );
}
