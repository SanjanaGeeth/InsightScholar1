export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="logo brand-font" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i data-feather="book-open"></i> InsightScholar
                </div>
                <div className="footer-text">
                    &copy; 2026 InsightScholar Platform. AI-Powered Academic Search.
                </div>
            </div>
        </footer>
    );
}
