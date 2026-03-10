import EarlyAccessButton from '../../components/EarlyAccessButton';

export const metadata = {
    title: 'Features | InsightScholar',
    description: 'Explore the semantic search, FAISS indexing, hybrid ranking, and explainable AI capabilities of InsightScholar.',
};

export default function Features() {
    return (
        <main>
            <section className="section pt-hero" style={{ paddingBottom: '6rem' }}>
                <div className="container" style={{ maxWidth: '100%' }}>
                    <div className="mb-8 fade-in-up md-flex-row" style={{ marginBottom: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h1 className="brand-font" style={{ fontSize: 'clamp(40px, 6vw, 70px)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                                Explainable AI Architecture <br /><span style={{ color: 'var(--text-muted)' }}>for Academic Research.</span>
                            </h1>
                            <p className="mt-4" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginTop: '2rem' }}>
                                Our semantic search engine transforms how you discover academic literature through five core pillars.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                            <EarlyAccessButton />
                        </div>
                    </div>

                    <div className="image-reveal mb-8" style={{ width: '100%', height: '350px', position: 'relative', marginBottom: '6rem' }}>
                        <img
                            src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000&auto=format&fit=crop"
                            alt="Abstract scientific data visualization"
                            className="scale-on-hover"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(0.9)' }}
                        />
                    </div>

                    <div className="mt-8">
                        <div className="minimal-block fade-in-up delay-1">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>01</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Semantic Search with SciBERT & SPECTER</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '100%', lineHeight: '1.8' }}>
                                InsightScholar uses powerful transformer models developed specifically for scientific text processing. These models are fine-tuned via contrastive learning on millions of scientific papers to produce semantic embeddings, capturing accurate relationships between academic topics with precision.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-2">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>02</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Fast Vector Search with FAISS</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '100%', lineHeight: '1.8' }}>
                                All research paper embeddings are stored in a FAISS vector index. FAISS enables extremely fast similarity search across massive datasets. Capabilities include fast nearest-neighbor search, efficient retrieval, and scalable indexing across thousands of papers instantly.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-1">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>03</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Hybrid Tag & Metadata Filtering</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '100%', lineHeight: '1.8' }}>
                                Unlike traditional search engines, InsightScholar implements a <strong>hybrid pipeline</strong> integrating dense semantic representations with traditional metadata filtering (keywords, authors, publication year). This ensures structural accuracy and resolves the "cold-start" problem for newly published papers.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-2">
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>04</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Hybrid Ranking System</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '100%', lineHeight: '1.8' }}>
                                After retrieving candidate papers using vector similarity search, InsightScholar applies a hybrid ranking algorithm. This ensures the most useful results by factoring in semantic similarity, research category alignment, citation impact score, and publication recency simultaneously.
                            </p>
                        </div>

                        <div className="minimal-block fade-in-up delay-1" style={{ borderBottom: 'none' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>05</h3>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Explainable Recommendations</h2>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '100%', lineHeight: '1.8', marginBottom: '2rem' }}>
                                InsightScholar integrates explainable AI methods to help researchers understand why certain papers are recommended, supporting transparent discovery.
                            </p>

                            <div style={{ paddingLeft: '2rem', borderLeft: '1px solid var(--text-muted)' }}>
                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '400' }}>SHAP Feature Importance</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Visualizes feature impact by determining which exact abstract embeddings or metadata tags contributed most to the final recommendation score.</p>

                                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '400' }}>Anchor-Based Explanations</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Provides clean, local rule-based reasoning behind complex statistical recommendations, answering the question "Why this paper?" in plain logic.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

