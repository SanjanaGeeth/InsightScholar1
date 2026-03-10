export const metadata = {
    title: 'Pricing | InsightScholar',
    description: 'Simple, transparent pricing for researchers and institutions.',
};

export default function Pricing() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '100%', textAlign: 'center' }}>
                    <div className="mb-8 fade-in-up">
                        <h3 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Pricing Plans</h3>
                        <h1 className="brand-font" style={{ fontSize: 'clamp(40px, 6vw, 70px)', lineHeight: '1.1', marginBottom: '2rem' }}>
                            Scale your research.
                        </h1>
                        <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '100%', margin: '0 auto' }}>
                            Start exploring for free, and upgrade to unlock advanced Explainable AI and high-volume API access.
                        </p>
                    </div>

                    <div className="grid-3" style={{ marginTop: '4rem', textAlign: 'left' }}>
                        {/* Basic Tier */}
                        <div className="glass-card fade-in-up delay-1" style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Basic</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-ui)' }}>$0<span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>/mo</span></div>
                            <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>Essential semantic search for individuals and students.</p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>100 queries/month</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>SciBERT Embeddings</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Standard filters</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}><span style={{ color: 'transparent' }}>✓</span> No XAI Visualizations</li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Sign Up Free</button>
                        </div>

                        {/* Pro Tier */}
                        <div className="glass-card fade-in-up delay-2" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--primary)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: 'white', padding: '0.2rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>MOST POPULAR</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Pro</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-ui)' }}>$29<span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>/mo</span></div>
                            <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>Full transparent AI reasoning for dedicated researchers.</p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Unlimited queries</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Full XAI Suite (SHAP, LIME)</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Citation graph alerts</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Export to Zotero/Mendeley</span></li>
                            </ul>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                        </div>

                        {/* Enterprise Tier */}
                        <div className="glass-card fade-in-up delay-3" style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Institutional</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'var(--font-ui)' }}>Custom</div>
                            <p className="text-secondary" style={{ marginBottom: '2rem', flexGrow: 1 }}>API access and custom indexing for universities and labs.</p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Bulk API access</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Private document indexing</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>SSO Integration</span></li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ <span style={{ color: 'var(--text-main)' }}>Dedicated account manager</span></li>
                            </ul>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

