"use client";
import { useState } from 'react';

export default function EarlyAccessButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="btn btn-primary"
                style={{ padding: '0.6rem 1.5rem', fontSize: '1rem', borderRadius: '30px' }}
                onClick={() => setShowModal(true)}
            >
                Get Early Access
            </button>

            {/* Early Access Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
                    zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1rem'
                }} onClick={(e) => {
                    if (e.target === e.currentTarget) setShowModal(false);
                }}>
                    <div className="glass-card fade-in-up" autoFocus tabIndex="-1" style={{
                        position: 'relative', width: '100%', maxWidth: '700px',
                        background: 'white', borderRadius: '16px', padding: '1rem',
                        maxHeight: '90vh', overflowY: 'auto'
                    }}>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute', top: '15px', right: '15px',
                                background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '50%',
                                width: '30px', height: '30px', display: 'flex', alignItems: 'center',
                                justifyContent: 'center', cursor: 'pointer', zIndex: 10
                            }}
                            aria-label="Close modal"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <iframe src="https://forms.gle/PPCrc4GJTd3LM2DQA" width="100%" height="600" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
                    </div>
                </div>
            )}
        </>
    );
}
