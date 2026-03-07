"use client";

import { useState, useEffect } from 'react';

const themes = [
    {
        name: 'Presentation Dark',
        colors: {
            '--bg-main': '#1F497D',
            '--text-main': '#FFFFFF',
            '--text-muted': '#4BACC6',
            '--accent': '#F79646'
        }
    },
    {
        name: 'Presentation Light',
        colors: {
            '--bg-main': '#EEECE1',
            '--text-main': '#1F497D',
            '--text-muted': '#8064A2',
            '--accent': '#C0504D'
        }
    },
    {
        name: 'Polar Night (Current)',
        colors: {
            '--bg-main': '#0a0a0c',
            '--text-main': '#f0f0f0',
            '--text-muted': '#888888',
            '--accent': '#4a6fa5'
        }
    },
    {
        name: 'Insight Blue (Original)',
        colors: {
            '--bg-main': '#F5F7FA',
            '--text-main': '#1F2D3D',
            '--text-muted': '#5A6B7C',
            '--accent': '#2E6FDE'
        }
    },
    {
        name: 'Deep Emerald',
        colors: {
            '--bg-main': '#081c15',
            '--text-main': '#d8f3dc',
            '--text-muted': '#74c69d',
            '--accent': '#52b788'
        }
    },
    {
        name: 'Warm Sand',
        colors: {
            '--bg-main': '#f4f1de',
            '--text-main': '#3d405b',
            '--text-muted': '#81b29a',
            '--accent': '#e07a5f'
        }
    },
    {
        name: 'Midnight Purple',
        colors: {
            '--bg-main': '#10002b',
            '--text-main': '#e0aaff',
            '--text-muted': '#c77dff',
            '--accent': '#9d4edd'
        }
    },
    {
        name: 'Stark Contrast',
        colors: {
            '--bg-main': '#ffffff',
            '--text-main': '#000000',
            '--text-muted': '#555555',
            '--accent': '#ff0000'
        }
    }
];

export default function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false);

    const applyTheme = (colors) => {
        const root = document.documentElement;
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            fontFamily: 'var(--font-ui)'
        }}>
            {isOpen && (
                <div style={{
                    background: 'var(--bg-main)',
                    border: '1px solid var(--text-main)',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '220px'
                }}>
                    <h4 style={{ color: 'var(--text-main)', margin: '0 0 5px 0', fontSize: '14px', fontWeight: '500' }}>Color Palette</h4>
                    {themes.map((theme, idx) => (
                        <button
                            key={idx}
                            onClick={() => applyTheme(theme.colors)}
                            style={{
                                background: theme.colors['--bg-main'],
                                color: theme.colors['--text-main'],
                                border: `1px solid ${theme.colors['--accent']}`,
                                padding: '10px 12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '12px',
                                fontFamily: 'var(--font-ui)',
                                transition: 'transform 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: theme.colors['--accent'] }} />
                            {theme.name}
                        </button>
                    ))}
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--text-main)',
                    color: 'var(--bg-main)',
                    border: 'none',
                    padding: '12px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    float: 'right',
                    transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
            </button>
        </div>
    );
}
