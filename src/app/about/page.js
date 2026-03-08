export const metadata = {
    title: 'About | InsightScholar',
    description: 'About InsightScholar, the technology stack, and future improvements.',
};

export default function About() {
    return (
        <main>
            <section className="section pt-hero">
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

                    <div className="fade-in-up delay-2" style={{ marginTop: '4rem' }}>
                        <h3 style={{ marginBottom: '3rem' }}>The Engine</h3>

                        <div className="grid-2">
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Machine Learning</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <img src="https://cdn.simpleicons.org/pytorch/888888" alt="PyTorch" style={{ width: '24px', height: '24px' }} />
                                            <img src="https://cdn.simpleicons.org/tensorflow/888888" alt="TensorFlow" style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        PyTorch & TensorFlow
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/huggingface/888888" alt="HuggingFace" style={{ width: '24px', height: '24px' }} />
                                        SciBERT & SPECTER Embeddings
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/scikitlearn/888888" alt="Scikit-Learn" style={{ width: '24px', height: '24px' }} />
                                        K-Means Clustering Analysis
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Search Infrastructure</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/meta/888888" alt="FAISS" style={{ width: '24px', height: '24px' }} />
                                        FAISS Vector Index
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                        Hybrid Tag Retrieval
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Data & Backend</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            <img src="https://cdn.simpleicons.org/python/888888" alt="Python" style={{ width: '24px', height: '24px' }} />
                                            <img src="https://cdn.simpleicons.org/fastapi/888888" alt="FastAPI" style={{ width: '24px', height: '24px' }} />
                                        </div>
                                        Python / FastAPI
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <img src="https://cdn.simpleicons.org/postgresql/888888" alt="PostgreSQL" style={{ width: '24px', height: '24px' }} />
                                        PostgreSQL Database
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                        S2ORC & OpenAlex Corpi
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 400 }}>Explainable AI</h4>
                                <ul style={{ listStyleType: 'none', padding: 0 }} className="text-secondary">
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                        SHAP Feature Importance
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
                                        Anchor-Based Logic
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-up delay-3" style={{ marginTop: '4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
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
