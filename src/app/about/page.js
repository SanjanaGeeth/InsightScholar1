export const metadata = {
    title: 'About | InsightScholar',
    description: 'About InsightScholar, the technology stack, and future improvements.',
};

export default function About() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div className="fade-in-up">
                        <h3 style={{ marginBottom: '1rem' }}>The Mission</h3>
                        <h1 className="brand-font" style={{ marginBottom: '3rem', fontSize: 'clamp(32px, 5vw, 50px)' }}>
                            Transforming how researchers explore academic literature through conceptual depth.
                        </h1>
                    </div>

                    <div className="fade-in-up delay-1" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            InsightScholar leverages transformer-based language models trained purely on academic publications. We convert papers and queries into high-dimensional semantic embeddings.
                        </p>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            These embeddings represent the deepest conceptual meaning of your research topics, enabling the system to identify orthogonal work even when terminology strictly differs. Advanced ranking algorithms combined with transparent explainable AI ensures accuracy without sacrificing trust.
                        </p>
                    </div>

                    <div className="fade-in-up delay-2" style={{ marginTop: '8rem' }}>
                        <h3 style={{ marginBottom: '3rem' }}>The Engine</h3>

                        <div className="grid-2">
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Machine Learning</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>PyTorch</li>
                                    <li style={{ marginBottom: '0.5rem' }}>HuggingFace Transformers</li>
                                    <li style={{ marginBottom: '0.5rem' }}>SPECTER2 Architecture</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Search Infrastructure</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>FAISS Vector Index</li>
                                    <li style={{ marginBottom: '0.5rem' }}>768-Dim Embeddings</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Data & Backend</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>Python / FastAPI</li>
                                    <li style={{ marginBottom: '0.5rem' }}>SQLite Database</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Academic Metadata</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Explainable AI</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>SHAP Feature Importance</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Anchor-Based Logic</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-up delay-3" style={{ marginTop: '8rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Looking Forward</h3>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>We are continually expanding the horizon. Future iterations of InsightScholar will introduce:</p>
                        <ul style={{ listStyleType: 'none', paddingLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }} className="text-secondary">
                            <li style={{ marginBottom: '1rem' }}>&mdash; Massive scale academic datasets</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; Hyper-personalized research workflows</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; Deep citation graph analysis</li>
                            <li style={{ marginBottom: '1rem' }}>&mdash; External academic database integration</li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}
