import React, { useEffect } from 'react';

const PAGE_TITLE = "MediWell Healthcare \u2014 Insurance & Cashless Treatment";
const PAGE_CSS = "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: \"Inter\", sans-serif;\n      }\n      :root {\n        --teal: #0f766e;\n        --teal-dark: #0a5a53;\n        --teal-lt: #ccfbf1;\n        --ink: #1e293b;\n        --muted: #64748b;\n        --bg: #f7faf9;\n      }\n      body {\n        background: var(--bg);\n        color: var(--ink);\n        padding: 90px 20px 60px;\n      }\n      .wrap {\n        max-width: 860px;\n        margin: 0 auto;\n      }\n      .hero {\n        text-align: center;\n        margin-bottom: 36px;\n      }\n      .hero h1 {\n        font-family: \"Lora\", serif;\n        font-size: clamp(28px, 4vw, 38px);\n        color: var(--teal-dark);\n        margin-bottom: 10px;\n      }\n      .hero p {\n        color: var(--muted);\n        font-size: 15px;\n        max-width: 580px;\n        margin: 0 auto;\n      }\n      .card {\n        background: #fff;\n        border: 1px solid #e5eeec;\n        border-radius: 16px;\n        padding: 28px;\n        margin-bottom: 22px;\n        box-shadow: 0 2px 10px rgba(15, 118, 110, 0.05);\n      }\n      .card h2 {\n        font-size: 19px;\n        color: var(--teal-dark);\n        margin-bottom: 14px;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .insurer-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n        gap: 10px;\n      }\n      .insurer-chip {\n        background: var(--teal-lt);\n        color: var(--teal-dark);\n        font-size: 13.5px;\n        font-weight: 600;\n        padding: 10px 14px;\n        border-radius: 10px;\n        text-align: center;\n      }\n      .steps {\n        counter-reset: step;\n        list-style: none;\n      }\n      .steps li {\n        position: relative;\n        padding: 10px 0 10px 40px;\n        font-size: 13.5px;\n        color: #334155;\n        line-height: 1.55;\n        border-bottom: 1px solid #eef2f1;\n      }\n      .steps li:last-child {\n        border-bottom: none;\n      }\n      .steps li::before {\n        counter-increment: step;\n        content: counter(step);\n        position: absolute;\n        left: 0;\n        top: 8px;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        background: var(--teal);\n        color: #fff;\n        font-size: 12.5px;\n        font-weight: 700;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .doc-list {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n      }\n      .doc-tag {\n        background: #fff7ed;\n        color: #b45309;\n        border: 1px solid #fde5c4;\n        font-size: 12.5px;\n        font-weight: 600;\n        padding: 6px 12px;\n        border-radius: 20px;\n      }\n      details {\n        border-bottom: 1px solid #eef2f1;\n        padding: 14px 0;\n      }\n      details:last-child {\n        border-bottom: none;\n      }\n      summary {\n        cursor: pointer;\n        font-weight: 600;\n        font-size: 14.5px;\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      summary::-webkit-details-marker {\n        display: none;\n      }\n      summary::after {\n        content: \"+\";\n        font-size: 20px;\n        color: var(--teal);\n        font-weight: 400;\n      }\n      details[open] summary::after {\n        content: \"\u2212\";\n      }\n      details p {\n        margin-top: 10px;\n        font-size: 13.5px;\n        color: var(--muted);\n        line-height: 1.6;\n      }\n\n      form .field {\n        margin-bottom: 14px;\n      }\n      form label {\n        display: block;\n        font-size: 13px;\n        font-weight: 600;\n        margin-bottom: 6px;\n      }\n      form input,\n      form textarea {\n        width: 100%;\n        padding: 10px 12px;\n        border: 1.5px solid #d9e3e1;\n        border-radius: 8px;\n        font-size: 14px;\n        font-family: inherit;\n      }\n      form input:focus,\n      form textarea:focus {\n        outline: none;\n        border-color: var(--teal);\n      }\n      .form-row {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 14px;\n      }\n      @media (max-width: 520px) {\n        .form-row {\n          grid-template-columns: 1fr;\n        }\n      }\n      .btn {\n        border: none;\n        background: var(--teal);\n        color: #fff;\n        padding: 11px 20px;\n        border-radius: 8px;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .btn:hover {\n        background: var(--teal-dark);\n      }\n      .btn:disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n      }\n      .form-msg {\n        font-size: 13.5px;\n        margin-top: 12px;\n        padding: 10px 12px;\n        border-radius: 8px;\n        display: none;\n      }\n      .form-msg.success {\n        background: #dcfce7;\n        color: #15803d;\n        display: block;\n      }\n      .form-msg.error {\n        background: #fef2f2;\n        color: #dc2626;\n        display: block;\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', "\n      renderBackButton(16);\n\n      // Prefill from the signed-in patient's profile, if any - guests can\n      // still fill this out manually.\n      (async function prefill() {\n        try {\n          const me = await getCurrentUser();\n          if (me.data.fullName) document.getElementById(\"insFullName\").value = me.data.fullName;\n          if (me.data.email) document.getElementById(\"insEmail\").value = me.data.email;\n        } catch (err) {\n          // not signed in - fine, form stays blank\n        }\n      })();\n\n      document.getElementById(\"insuranceForm\").addEventListener(\"submit\", async (e) => {\n        e.preventDefault();\n        const msgEl = document.getElementById(\"insFormMsg\");\n        const btn = document.getElementById(\"insSubmitBtn\");\n        msgEl.className = \"form-msg\";\n        msgEl.textContent = \"\";\n\n        const fields = {\n          fullName: document.getElementById(\"insFullName\").value.trim(),\n          email: document.getElementById(\"insEmail\").value.trim(),\n          phone: document.getElementById(\"insPhone\").value.trim(),\n          insurerName: document.getElementById(\"insInsurer\").value.trim(),\n          policyNumber: document.getElementById(\"insPolicy\").value.trim(),\n          message: document.getElementById(\"insMessage\").value.trim(),\n        };\n\n        if (!fields.fullName || !fields.email || !fields.message) {\n          msgEl.className = \"form-msg error\";\n          msgEl.textContent = \"Please fill in your name, email, and question.\";\n          return;\n        }\n\n        btn.disabled = true;\n        btn.textContent = \"Sending\u2026\";\n        try {\n          const result = await submitInsuranceQuery(fields);\n          msgEl.className = \"form-msg success\";\n          msgEl.textContent = result.message;\n          document.getElementById(\"insuranceForm\").reset();\n        } catch (err) {\n          msgEl.className = \"form-msg error\";\n          msgEl.textContent = err.message || \"Something went wrong. Please try again.\";\n        } finally {\n          btn.disabled = false;\n          btn.textContent = \"Submit Query\";\n        }\n      });\n    "];

export default function InsurancePage() {
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
<div className="wrap">
<div className="hero">
<h1>Insurance & Cashless Treatment</h1>
<p>
          What we accept, how cashless approval works, and a direct way to
          ask us about your specific policy.
        </p>
</div>
<div className="card">
<h2>🏥 Insurers We Work With</h2>
<div className="insurer-grid">
<div className="insurer-chip">Star Health Insurance</div>
<div className="insurer-chip">HDFC ERGO</div>
<div className="insurer-chip">ICICI Lombard</div>
<div className="insurer-chip">Care Health Insurance</div>
<div className="insurer-chip">Niva Bupa</div>
<div className="insurer-chip">Bajaj Allianz</div>
<div className="insurer-chip">New India Assurance</div>
<div className="insurer-chip">National Insurance Co.</div>
<div className="insurer-chip">United India Insurance</div>
<div className="insurer-chip">Reliance General Insurance</div>
<div className="insurer-chip">SBI General Insurance</div>
<div className="insurer-chip">Aditya Birla Health</div>
</div>
<p style={{fontSize: "12.5px", color: "var(--muted)", marginTop: "14px"}}>
          Not sure if your specific policy or TPA is on our network? Use the
          form below and we'll confirm for you.
        </p>
</div>
<div className="card">
<h2>✅ Cashless Treatment — How It Works</h2>
<ol className="steps">
<li>Check that your insurer/TPA is in our network (see list above, or ask us).</li>
<li>Before a planned admission, share your policy details with our insurance desk to start pre-authorization.</li>
<li>Present your insurance card and photo ID at the billing desk on arrival.</li>
<li>Our team coordinates directly with your insurer for approval — most pre-authorizations are confirmed within a few hours for standard cases.</li>
<li>On discharge, the approved amount is settled directly with your insurer. You only pay for anything outside your policy's coverage.</li>
</ol>
</div>
<div className="card">
<h2>💰 Reimbursement Claims (Non-Network Insurers)</h2>
<p style={{fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.6", marginBottom: "14px"}}>
          If your insurer isn't on our cashless network, you pay for treatment upfront (via UPI, see our <a href="/billing" style={{color: "var(--teal)", fontWeight: "600"}}>Billing page</a>) and then claim reimbursement directly from your insurer. Keep these documents ready:
        </p>
<div className="doc-list">
<span className="doc-tag">Original bills & receipts</span>
<span className="doc-tag">Discharge summary</span>
<span className="doc-tag">Doctor's prescription</span>
<span className="doc-tag">Diagnostic reports</span>
<span className="doc-tag">Filled claim form</span>
<span className="doc-tag">Policy copy & ID proof</span>
</div>
</div>
<div className="card">
<h2>❓ Insurance FAQ</h2>
<details open="">
<summary>Is OPD (outpatient) consultation covered by insurance?</summary>
<p>Most standard health policies in India cover hospitalization, not routine OPD visits, unless you specifically have an OPD add-on or a corporate policy that includes it. Check your policy wording, or ask us using the form below.</p>
</details>
<details>
<summary>How long does cashless pre-authorization take?</summary>
<p>For planned admissions, 2-6 hours is typical once we have your complete policy details. Emergency admissions can be treated first, with authorization processed in parallel.</p>
</details>
<details>
<summary>What if my claim gets partially rejected?</summary>
<p>This happens for reasons like a policy sub-limit or a non-covered item. You're responsible for the shortfall, but our billing desk can help you understand the breakup and, in some cases, appeal with the insurer.</p>
</details>
<details>
<summary>Can I use insurance for a video/online consultation?</summary>
<p>Currently, online appointments booked through this website are paid directly via UPI (see <a href="/billing" style={{color: "var(--teal)", fontWeight: "600"}}>Billing</a>) — insurance is applied for in-person, network-hospital treatment.</p>
</details>
</div>
<div className="card">
<h2>📩 Ask Us About Your Policy</h2>
<form id="insuranceForm">
<div className="form-row">
<div className="field">
<label htmlFor="insFullName">Full Name *</label>
<input type="text" id="insFullName" required="" />
</div>
<div className="field">
<label htmlFor="insEmail">Email *</label>
<input type="email" id="insEmail" required="" />
</div>
</div>
<div className="form-row">
<div className="field">
<label htmlFor="insPhone">Phone</label>
<input type="tel" id="insPhone" />
</div>
<div className="field">
<label htmlFor="insInsurer">Insurance Provider</label>
<input type="text" id="insInsurer" placeholder="e.g. Star Health" />
</div>
</div>
<div className="field">
<label htmlFor="insPolicy">Policy Number (optional)</label>
<input type="text" id="insPolicy" />
</div>
<div className="field">
<label htmlFor="insMessage">Your Question *</label>
<textarea id="insMessage" rows="4" required="" placeholder="e.g. Is my policy accepted for a planned surgery, and how long does pre-authorization usually take?"></textarea>
</div>
<button type="submit" className="btn" id="insSubmitBtn">Submit Query</button>
<div className="form-msg" id="insFormMsg"></div>
</form>
</div>
</div>


      </div>
    </>
  );
}
