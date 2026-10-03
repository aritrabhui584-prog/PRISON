'use client';
import Link from 'next/link';
import ToastContainer from '@/components/Toast';
import ShapeGrid from '@/components/ShapeGrid';

export default function RegistryPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    prison: {
                      bg: '#05070a',
                      card: '#0a0d14',
                      surface: '#0f1420',
                      border: '#1e2638',
                      borderLight: '#2e3a54',
                      cyan: '#06b6d4',
                      neonCyan: '#22d3ee',
                      indigo: '#6366f1',
                      indigoLight: '#818cf8',
                      crimson: '#ef4444',
                      crimsonDark: '#3f1319',
                      green: '#10b981',
                      greenDark: '#0c3527',
                      amber: '#f59e0b',
                      amberDark: '#3e2808',
                      muted: '#62728f'
                    }
                  },
                  fontFamily: {
                    arcade: ['"Press Start 2P"', 'monospace'],
                    pixel: ['"Silkscreen"', 'monospace'],
                    silk: ['"Silkscreen"', 'monospace'],
                    mono: ['"JetBrains Mono"', 'monospace'],
                    vt: ['"VT323"', 'monospace']
                  },
                  boxShadow: {
                    'pixel-cyan': '3px 3px 0px 0px #0891b2',
                    'pixel-indigo': '3px 3px 0px 0px #4338ca',
                    'pixel-subtle': '2px 2px 0px 0px #1e2638',
                    'pixel-card': '4px 4px 0px 0px #000000'
                  }
                }
              }
            };
          `,
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
    /* Scanline screen texture */
    body::before {
      content: " ";
      display: block;
      position: fixed;
      top: 0; left: 0; bottom: 0; right: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), 
                  linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
      z-index: 999;
      background-size: 100% 3px, 6px 100%;
      pointer-events: none;
      opacity: 0.75;
    }

    body {
      background-color: #05070a !important;
      image-rendering: pixelated;
      overflow-x: hidden !important;
      overflow-y: auto !important;
    }

    /* Marquee ticker animation */
    @keyframes marqueeScroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: inline-flex;
      white-space: nowrap;
      animation: marqueeScroll 25s linear infinite;
    }

    /* Pixelated hard corners */
    .pixel-box {
      border: 1px solid #1e2638;
      box-shadow: 2px 2px 0px #000;
    }

    .pixel-btn {
      transition: transform 0.05s ease, background-color 0.1s ease;
      position: relative;
    }
    .pixel-btn:hover {
      transform: translate(-1px, -1px);
    }
    .pixel-btn:active {
      transform: translate(1px, 1px);
    }

    /* Custom progress bar styles */
    .retro-track {
      background-color: #171d2c;
      border: 1px solid #232c40;
      height: 8px;
    }
        `
      }} />

      <div className="bg-[#05070a] text-slate-100 font-mono text-sm min-h-screen flex flex-col antialiased selection:bg-indigo-600 selection:text-white relative z-0">
        <ToastContainer />
        <ShapeGrid 
          speed={0.15} 
          squareSize={40}
          direction='diagonal'
          borderColor='#fff'
          hoverFillColor='#222'
          shape='square'
          hoverTrailAmount={5}
        />

        <div className="w-full bg-[#6366f1] border-y-2 border-black overflow-hidden py-2 relative z-10" data-purpose="status-marquee-strip">
          <div className="animate-marquee flex items-center text-white font-arcade text-[10px] tracking-wider uppercase">
            <span className="mx-3">◆ THREAT REGISTRY</span>
            <span className="mx-3">◆ PR DETONATION HISTORY</span>
            <span className="mx-3">◆ EBPF TELEMETRY LOGS</span>
            <span className="mx-3">◆ HONEYPOT TRAP EVENTS</span>
            <span className="mx-3">◆ ANAKIN AI PATCHES</span>
            <span className="mx-3">◆ THREAT REGISTRY</span>
            <span className="mx-3">◆ PR DETONATION HISTORY</span>
            <span className="mx-3">◆ EBPF TELEMETRY LOGS</span>
            <span className="mx-3">◆ HONEYPOT TRAP EVENTS</span>
            <span className="mx-3">◆ ANAKIN AI PATCHES</span>
          </div>
        </div>

        <main className="flex-grow w-full max-w-[1720px] mx-auto px-4 lg:px-8 py-6 space-y-6 relative z-10">
          <section className="space-y-2" data-purpose="title-section">
            <div className="flex items-center space-x-3">
              <span className="text-xl leading-none text-slate-100 select-none">📁</span>
              <h1 className="font-arcade text-xl sm:text-2xl text-white tracking-wide">
                THREAT REGISTRY
              </h1>
            </div>
            <p className="text-sm text-slate-300 font-mono leading-relaxed max-w-2xl pl-1">
              Complete history of all PR detonations, threat detections, and remediation patches.
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-purpose="metrics-summary">
            <article className="bg-[#0c101d] border-2 border-[#1a2038] p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between relative group hover:border-[#818cf8] transition-colors">
              <div className="flex items-center justify-between text-[#818cf8] mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18h12M10 22h4M9 3h2a3 3 0 0 1 3 3v2l2 2m-2-4 2 2m-5 4v4m0 0a2 2 0 1 1-4 0v-4h4z" strokeLinecap="square"></path>
                </svg>
              </div>
              <div>
                <div className="font-arcade text-2xl sm:text-3xl text-[#818cf8] tracking-wider mb-1">5</div>
                <div className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">TOTAL SCANS</div>
              </div>
            </article>

            <article className="bg-[#0c101d] border-2 border-[#1a2038] p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between relative group hover:border-[#ef4444] transition-colors">
              <div className="flex items-center justify-between text-[#ef4444] mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeLinecap="square"></circle>
                  <path d="m4.93 4.93 14.14 14.14" strokeLinecap="square"></path>
                </svg>
              </div>
              <div>
                <div className="font-arcade text-2xl sm:text-3xl text-[#ef4444] tracking-wider mb-1">2</div>
                <div className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">PRS BLOCKED</div>
              </div>
            </article>

            <article className="bg-[#0c101d] border-2 border-[#1a2038] p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between relative group hover:border-[#10b981] transition-colors">
              <div className="flex items-center justify-between text-[#10b981] mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="18" rx="0" width="18" x="3" y="3"></rect>
                  <path d="m8 12 3 3 5-6" strokeLinecap="square"></path>
                </svg>
              </div>
              <div>
                <div className="font-arcade text-2xl sm:text-3xl text-[#10b981] tracking-wider mb-1">2</div>
                <div className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">CLEAN PRS</div>
              </div>
            </article>

            <article className="bg-[#0c101d] border-2 border-[#1a2038] p-5 shadow-[4px_4px_0px_#000] flex flex-col justify-between relative group hover:border-[#f59e0b] transition-colors">
              <div className="flex items-center justify-between text-[#f59e0b] mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m12 3 9 17H3L12 3zM12 9v4m0 4h.01" strokeLinecap="square"></path>
                </svg>
              </div>
              <div>
                <div className="font-arcade text-2xl sm:text-3xl text-[#f59e0b] tracking-wider mb-1">1</div>
                <div className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">UNDER REVIEW</div>
              </div>
            </article>
          </section>

          <section className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2" data-purpose="filtering-controls">
            <div className="relative flex-1 max-w-xl">
              <input className="w-full bg-[#080b12] text-slate-100 placeholder-slate-500 border-2 border-[#1a2038] focus:border-[#6366f1] text-xs py-2.5 px-3.5 font-mono shadow-[2px_2px_0px_#000] outline-none transition-colors" placeholder="Search by repo or PR number..." type="text" />
            </div>
            <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
              <button className="pixel-btn bg-[#6366f1] text-white border-2 border-black px-3.5 py-1.5 font-bold shadow-[2px_2px_0px_#000]">ALL</button>
              <button className="pixel-btn bg-[#0c101d] text-slate-300 hover:text-white border-2 border-[#1a2038] hover:border-[#818cf8] px-3.5 py-1.5 font-semibold shadow-[2px_2px_0px_#000] transition-colors">HONEYPOT HALTED</button>
              <button className="pixel-btn bg-[#0c101d] text-slate-300 hover:text-white border-2 border-[#1a2038] hover:border-[#818cf8] px-3.5 py-1.5 font-semibold shadow-[2px_2px_0px_#000] transition-colors">COMPLETED</button>
              <button className="pixel-btn bg-[#0c101d] text-slate-300 hover:text-white border-2 border-[#1a2038] hover:border-[#818cf8] px-3.5 py-1.5 font-semibold shadow-[2px_2px_0px_#000] transition-colors">TIMEOUT</button>
              <button className="pixel-btn bg-[#0c101d] text-slate-300 hover:text-white border-2 border-[#1a2038] hover:border-[#818cf8] px-3.5 py-1.5 font-semibold shadow-[2px_2px_0px_#000] transition-colors">BLOCK PR</button>
              <button className="pixel-btn bg-[#0c101d] text-slate-300 hover:text-white border-2 border-[#1a2038] hover:border-[#818cf8] px-3.5 py-1.5 font-semibold shadow-[2px_2px_0px_#000] transition-colors">ALLOW MERGE</button>
            </div>
          </section>

          <section className="border-2 border-[#1a2038] bg-[#070a11] shadow-[4px_4px_0px_#000] overflow-hidden" data-purpose="registry-table-container">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="threat-registry-table">
                <thead>
                  <tr className="border-b-2 border-[#1a2038] bg-[#0c101e] text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    <th className="py-3.5 px-4" scope="col">SANDBOX ID</th>
                    <th className="py-3.5 px-4" scope="col">REPOSITORY</th>
                    <th className="py-3.5 px-3" scope="col">PR</th>
                    <th className="py-3.5 px-4" scope="col">THREAT</th>
                    <th className="py-3.5 px-4" scope="col">SEVERITY</th>
                    <th className="py-3.5 px-4 text-center" scope="col">STATUS</th>
                    <th className="py-3.5 px-4 text-center" scope="col">GATING ACTION</th>
                    <th className="py-3.5 px-4" scope="col">TIMESTAMP</th>
                    <th className="py-3.5 px-4 text-right" scope="col">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#161b2e] text-xs font-mono">
                  <tr className="hover:bg-[#0c101a] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#818cf8] whitespace-nowrap">sbx_a1b2c3</td>
                    <td className="py-3.5 px-4 text-slate-200 font-mono">acme-corp/frontend</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">#42</td>
                    <td className="py-3.5 px-4 text-[#ef4444] font-semibold">Credential Exfiltration</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-16 retro-track overflow-hidden">
                          <div className="h-full bg-[#ef4444] w-[95%]"></div>
                        </div>
                        <span className="font-mono text-[#ef4444] font-bold text-xs">95</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-red-300 bg-red-950/80 border border-red-700 shadow-[2px_2px_0px_#000]">HONEYPOT HALTED</span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-red-300 bg-red-950/80 border border-red-700 shadow-[2px_2px_0px_#000]">BLOCK PR</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-xs whitespace-nowrap">02/10/2026, 20:01:00</td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button className="pixel-btn font-mono text-xs font-bold text-slate-200 border-2 border-slate-700 bg-[#0d121c] hover:border-[#818cf8] hover:text-white px-3 py-1 shadow-[2px_2px_0px_#000] transition-colors">VIEW →</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#0c101a] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#818cf8] whitespace-nowrap">sbx_d4e5f6</td>
                    <td className="py-3.5 px-4 text-slate-200 font-mono">acme-corp/api</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">#87</td>
                    <td className="py-3.5 px-4 text-[#10b981] font-semibold">Clean</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-16 retro-track overflow-hidden">
                          <div className="h-full bg-slate-700 w-[0%]"></div>
                        </div>
                        <span className="font-mono text-slate-400 font-bold text-xs">0</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700 shadow-[2px_2px_0px_#000]">COMPLETED</span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700 shadow-[2px_2px_0px_#000]">ALLOW MERGE</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-xs whitespace-nowrap">02/10/2026, 18:40:00</td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button className="pixel-btn font-mono text-xs font-bold text-slate-200 border-2 border-slate-700 bg-[#0d121c] hover:border-[#818cf8] hover:text-white px-3 py-1 shadow-[2px_2px_0px_#000] transition-colors">VIEW →</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#0c101a] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#818cf8] whitespace-nowrap">sbx_g7h8i9</td>
                    <td className="py-3.5 px-4 text-slate-200 font-mono">oss/lib</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">#12</td>
                    <td className="py-3.5 px-4 text-[#ef4444] font-semibold">Unauthorized Socket Connection</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-16 retro-track overflow-hidden">
                          <div className="h-full bg-[#ef4444] w-[80%]"></div>
                        </div>
                        <span className="font-mono text-[#ef4444] font-bold text-xs">80</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-red-300 bg-red-950/80 border border-red-700 shadow-[2px_2px_0px_#000]">HONEYPOT HALTED</span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-red-300 bg-red-950/80 border border-red-700 shadow-[2px_2px_0px_#000]">BLOCK PR</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-xs whitespace-nowrap">02/10/2026, 17:15:00</td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button className="pixel-btn font-mono text-xs font-bold text-slate-200 border-2 border-slate-700 bg-[#0d121c] hover:border-[#818cf8] hover:text-white px-3 py-1 shadow-[2px_2px_0px_#000] transition-colors">VIEW →</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#0c101a] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#818cf8] whitespace-nowrap">sbx_j0k1l2</td>
                    <td className="py-3.5 px-4 text-slate-200 font-mono">internal/backend</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">#55</td>
                    <td className="py-3.5 px-4 text-[#10b981] font-semibold">Clean</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-16 retro-track overflow-hidden">
                          <div className="h-full bg-slate-700 w-[0%]"></div>
                        </div>
                        <span className="font-mono text-slate-400 font-bold text-xs">0</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700 shadow-[2px_2px_0px_#000]">COMPLETED</span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700 shadow-[2px_2px_0px_#000]">ALLOW MERGE</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-xs whitespace-nowrap">02/10/2026, 03:30:00</td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button className="pixel-btn font-mono text-xs font-bold text-slate-200 border-2 border-slate-700 bg-[#0d121c] hover:border-[#818cf8] hover:text-white px-3 py-1 shadow-[2px_2px_0px_#000] transition-colors">VIEW →</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#0c101a] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#818cf8] whitespace-nowrap">sbx_m3n4o5</td>
                    <td className="py-3.5 px-4 text-slate-200 font-mono">acme-corp/mobile</td>
                    <td className="py-3.5 px-3 text-slate-300 font-mono">#33</td>
                    <td className="py-3.5 px-4 text-[#f59e0b] font-semibold">Suspicious Exec (Review)</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        <div className="w-16 retro-track overflow-hidden">
                          <div className="h-full bg-[#f59e0b] w-[40%]"></div>
                        </div>
                        <span className="font-mono text-[#f59e0b] font-bold text-xs">40</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-700 shadow-[2px_2px_0px_#000]">TIMEOUT</span>
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 font-mono text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-700 shadow-[2px_2px_0px_#000]">FLAG MANUAL REVIEW</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-xs whitespace-nowrap">01/10/2026, 23:50:00</td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button className="pixel-btn font-mono text-xs font-bold text-slate-200 border-2 border-slate-700 bg-[#0d121c] hover:border-[#818cf8] hover:text-white px-3 py-1 shadow-[2px_2px_0px_#000] transition-colors">VIEW →</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-prison-border bg-[#05070a] py-4 px-4 lg:px-8 mt-10 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 z-0 relative">
          <div className="">
            © 2026 PRISON — PULL REQUEST ISOLATION &amp; SECURITY OBSERVATION NETWORK
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#6366f1] inline-block"></span>
            <span className="font-mono text-slate-300">v1.0.0 — All systems operational</span>
          </div>
        </footer>
      </div>
    </>
  );
}
