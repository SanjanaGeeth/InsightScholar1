export const metadata = {
    title: 'How It Works | InsightScholar',
    description: 'The step-by-step pipeline of InsightScholar: combining NLP, transformer models, and vector similarity search.',
};

export default function HowItWorks() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="mb-8 fade-in-up" style={{ marginBottom: '8rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>The Pipeline</h3>
                        <h1 className="brand-font" style={{ fontSize: 'clamp(40px, 6vw, 70px)', lineHeight: '1.1' }}>
                            From natural language <br />to <span style={{ color: 'var(--text-muted)' }}>explainable proof.</span>
                        </h1>
                    </div>

                    <div className="mt-8">

                        {/* Step 1 */}
                        <div className="pipeline-step fade-in-up delay-1">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Query Input</h2>
                                <p>The process begins when a user enters a natural language research query. The system interprets semantic meaning rather than relying on strict keyword matching.</p>
                                <div style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                    &quot;Graph neural networks for protein interaction prediction&quot;
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="pipeline-step fade-in-up delay-2">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Semantic Generation</h2>
                                <p>The query is processed by the SPECTER2 transformer model, immediately converting the text into a 768-dimensional embedding vector that maps the conceptual landscape of the specified topic.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="pipeline-step fade-in-up delay-3">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Vector Search</h2>
                                <p>The query embedding is compared against massive databases of research paper embeddings stored in a FAISS vector index. Approximate nearest-neighbor search retrieves the most similar concepts within milliseconds.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="pipeline-step fade-in-up">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hybrid Ranking</h2>
                                <p>Retrieved papers are evaluated using a strict hybrid ranking algorithm taking into account semantic similarity, the research domain, citation impact, and publication date to guarantee quality.</p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="pipeline-step fade-in-up">
                            <div className="step-number">05</div>
                            <div className="step-content">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Transparent Explanation</h2>
                                <p>To establish trust, InsightScholar concludes by generating visual explanations for each recommendation using SHAP and anchor-based rules, demystifying the black box completely.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
