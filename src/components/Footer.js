import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="logo brand-font">
                        InsightScholar
                    </div>
                    <div className="footer-text" style={{ maxWidth: '300px' }}>
                        &copy; 2026 InsightScholar Platform.<br />AI-Powered Academic Search.
                    </div>
                </div>

                <div className="footer-links-container" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', textAlign: 'right', fontFamily: 'var(--font-ui)', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/features" className="footer-link">Features</Link>
                    <Link href="/how-it-works" className="footer-link">How It Works</Link>
                    <Link href="/about" className="footer-link">About</Link>
                    <Link href="/contact" className="footer-link">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
