import React, { useEffect } from 'react';

const PAGE_TITLE = "Page Not Found \u2014 MediWell Healthcare";
const PAGE_CSS = "\n      * { box-sizing: border-box; }\n      body {\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        min-height: 100vh;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: linear-gradient(135deg, #0f3d3e 0%, #16a085 100%);\n        color: #fff;\n        padding: 20px;\n      }\n      .error-box {\n        text-align: center;\n        max-width: 480px;\n      }\n      .error-code {\n        font-size: clamp(64px, 18vw, 120px);\n        font-weight: 800;\n        line-height: 1;\n        margin: 0;\n        opacity: 0.9;\n      }\n      .error-icon {\n        font-size: 48px;\n        margin-bottom: 8px;\n      }\n      h1 {\n        font-size: clamp(18px, 4vw, 24px);\n        margin: 12px 0 8px;\n      }\n      p {\n        font-size: 14.5px;\n        color: rgba(255, 255, 255, 0.85);\n        line-height: 1.6;\n        margin: 0 0 28px;\n      }\n      .actions {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        flex-wrap: wrap;\n      }\n      .btn {\n        padding: 12px 22px;\n        border-radius: 24px;\n        font-size: 14px;\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n        border: none;\n      }\n      .btn-primary {\n        background: #fff;\n        color: #0f3d3e;\n      }\n      .btn-outline {\n        background: transparent;\n        color: #fff;\n        border: 1.5px solid rgba(255, 255, 255, 0.6);\n      }\n      .btn:hover {\n        opacity: 0.9;\n      }\n      @media (max-width: 400px) {\n        .actions { flex-direction: column; }\n        .btn { width: 100%; }\n      }\n    ";
const PAGE_SCRIPTS = ["\n      function goBack() {\n        if (document.referrer && document.referrer.includes(window.location.host)) {\n          window.location.href = document.referrer;\n        } else {\n          window.location.href = \"/index\";\n        }\n      }\n    "];

export default function NotFoundPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    if (PAGE_CSS) {
      const st = document.createElement('style');
      st.setAttribute('data-mediwell-page-style', 'true');
      st.textContent = PAGE_CSS;
      document.head.appendChild(st);
    }
    const loaded = [];
    const run = (entry) => new Promise((resolve) => {
      const s = document.createElement('script');
      if (entry.startsWith('http')) s.src = entry;
      else if (entry.startsWith('/')) s.src = entry;
      else { s.text = entry; }
      s.onload = s.onerror = () => resolve();
      document.body.appendChild(s); loaded.push(s);
      if (!s.src) resolve();
    });
    (async () => { for (const e of PAGE_SCRIPTS) await run(e); document.dispatchEvent(new Event('DOMContentLoaded')); })();
    return () => {
      loaded.forEach(s => s.remove());
      document.querySelectorAll('style[data-mediwell-page-style]').forEach(s => s.remove());
    };
  }, []);

  return (
    <>
      <div className="mediwell-page-root">
<div className="error-box">
<div className="error-icon">🩺</div>
<p className="error-code">404</p>
<h1>We couldn't find that page</h1>
<p>
        The page you're looking for doesn't exist, may have moved, or the
        link might be mistyped. Let's get you back on track.
      </p>
<div className="actions">
<button className="btn btn-outline" onClick={() => window.__mediwellRun("goBack()")}>← Go Back</button>
<a className="btn btn-primary" href="/">Go to Homepage</a>
</div>
</div>

      </div>
    </>
  );
}
