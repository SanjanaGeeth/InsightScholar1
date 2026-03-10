import Link from 'next/link';

export const metadata = {
    title: '404 - Page Not Found | InsightScholar',
    description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '4rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ maxWidth: '100%', textAlign: 'center' }}>
                    <div className="bg-blob blob-3" style={{ top: '50%', left: '50%' }}></div>

                    <div className="mb-8 fade-in-up">
                        <h1 className="brand-font gradient-text" style={{ fontSize: 'clamp(80px, 12vw, 150px)', lineHeight: '1', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            404
                        </h1>
                        <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Page Not Found</h3>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '100%', margin: '0 auto', marginBottom: '3rem' }}>
                            The academic record you're searching for doesn't exist in our current index, or the URL has evolved.
                        </p>
                    </div>

                    <div className="fade-in-up delay-1">
                        <Link href="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            Return Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

