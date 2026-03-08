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

                    <div className="image-reveal fade-in-up delay-1" style={{ width: '100%', height: '400px', position: 'relative', marginBottom: '4rem' }}>
                        <img
                            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop"
                            alt="Moody dark library aisles"
                            className="scale-on-hover"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) brightness(0.7)' }}
                        />
                    </div>

                    <div className="fade-in-up delay-2" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            InsightScholar leverages hybrid transformer-based models trained on massive academic corpora like ArXiv and OpenAlex. The system resolves information overload by converting textual abstracts into high-dimensional semantic embeddings.
                        </p>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Combined with a rigorous Tag-Filtering mechanism, these embeddings enable researchers to discover orthogonal topics mathematically. To build academic trust, everything is backed by Explainable AI strategies (like SHAP and Anchors) to ensure the logic remains completely transparent.
                        </p>
                    </div>

                    <div className="fade-in-up delay-2" style={{ marginTop: '8rem' }}>
                        <h3 style={{ marginBottom: '3rem' }}>The Engine</h3>

                        <div className="grid-2">
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Machine Learning</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>PyTorch & TensorFlow</li>
                                    <li style={{ marginBottom: '0.5rem' }}>SciBERT & SPECTER Embeddings</li>
                                    <li style={{ marginBottom: '0.5rem' }}>K-Means Clustering Analysis</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Search Infrastructure</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>FAISS Vector Index</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Hybrid Tag Retrieval</li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Data & Backend</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.5rem' }}>Python / FastAPI</li>
                                    <li style={{ marginBottom: '0.5rem' }}>PostgreSQL Database</li>
                                    <li style={{ marginBottom: '0.5rem' }}>S2ORC & OpenAlex Corpi</li>
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
