export const metadata = {
    title: 'Contact & Early Access | InsightScholar',
    description: 'Sign up for early access to InsightScholar.',
};

export default function Contact() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <div className="mb-8 fade-in-up">
                        <h3 style={{ marginBottom: '1rem' }}>Early Access</h3>
                        <h1 className="brand-font" style={{ fontSize: 'clamp(40px, 6vw, 70px)', lineHeight: '1.1', marginBottom: '2rem' }}>
                            Join the Beta.
                        </h1>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>
                            Sign up below to request early access to the InsightScholar platform and revolutionize your literature review.
                        </p>
                    </div>

                    <div className="fade-in-up delay-1" style={{ marginTop: '4rem' }}>
                        <div style={{ background: '#f0f0f0', padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfplaceholder_form_link/viewform?embedded=true"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
