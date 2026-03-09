import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content" style={{ alignItems: 'center' }}>
                    <div className="logo brand-font" style={{ lineHeight: 1 }}>
                        InsightScholar
                    </div>

                    <div className="footer-links-container" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', textAlign: 'right', fontFamily: 'var(--font-ui)', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/" className="footer-link">Home</Link>
                        <Link href="/features" className="footer-link">Features</Link>
                        <Link href="/about" className="footer-link">About</Link>
                        <Link href="/pricing" className="footer-link">Pricing</Link>
                        <Link href="/contact" className="footer-link">Contact</Link>
                    </div>
                </div>

                <div className="footer-text" style={{ maxWidth: '300px', marginTop: '1.5rem' }}>
                    &copy; 2026 InsightScholar Platform.<br />AI-Powered Academic Search.
                </div>
            </div>
        </footer>
    );
}
