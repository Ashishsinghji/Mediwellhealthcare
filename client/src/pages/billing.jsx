import React, { useEffect } from 'react';

const PAGE_TITLE = "MediWell Healthcare \u2014 Billing & Payments";
const PAGE_CSS = "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: \"Inter\", sans-serif;\n      }\n      :root {\n        --teal: #0f766e;\n        --teal-dark: #0a5a53;\n        --teal-lt: #ccfbf1;\n        --ink: #1e293b;\n        --muted: #64748b;\n        --bg: #f7faf9;\n      }\n      body {\n        background: var(--bg);\n        color: var(--ink);\n        padding: 90px 20px 60px;\n      }\n      .wrap {\n        max-width: 860px;\n        margin: 0 auto;\n      }\n      .hero {\n        text-align: center;\n        margin-bottom: 36px;\n      }\n      .hero h1 {\n        font-family: \"Lora\", serif;\n        font-size: clamp(28px, 4vw, 38px);\n        color: var(--teal-dark);\n        margin-bottom: 10px;\n      }\n      .hero p {\n        color: var(--muted);\n        font-size: 15px;\n        max-width: 560px;\n        margin: 0 auto;\n      }\n      .card {\n        background: #fff;\n        border: 1px solid #e5eeec;\n        border-radius: 16px;\n        padding: 28px;\n        margin-bottom: 22px;\n        box-shadow: 0 2px 10px rgba(15, 118, 110, 0.05);\n      }\n      .card h2 {\n        font-size: 19px;\n        color: var(--teal-dark);\n        margin-bottom: 14px;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .info-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n        gap: 16px;\n      }\n      .info-item {\n        background: var(--teal-lt);\n        border-radius: 12px;\n        padding: 16px;\n      }\n      .info-item h3 {\n        font-size: 14px;\n        color: var(--teal-dark);\n        margin-bottom: 6px;\n      }\n      .info-item p {\n        font-size: 13.5px;\n        color: #334155;\n        line-height: 1.55;\n      }\n      details {\n        border-bottom: 1px solid #eef2f1;\n        padding: 14px 0;\n      }\n      details:last-child {\n        border-bottom: none;\n      }\n      summary {\n        cursor: pointer;\n        font-weight: 600;\n        font-size: 14.5px;\n        list-style: none;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      summary::-webkit-details-marker {\n        display: none;\n      }\n      summary::after {\n        content: \"+\";\n        font-size: 20px;\n        color: var(--teal);\n        font-weight: 400;\n      }\n      details[open] summary::after {\n        content: \"\u2212\";\n      }\n      details p {\n        margin-top: 10px;\n        font-size: 13.5px;\n        color: var(--muted);\n        line-height: 1.6;\n      }\n\n      /* Bills section */\n      .bill-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 12px;\n        padding: 14px 0;\n        border-bottom: 1px solid #eef2f1;\n      }\n      .bill-row:last-child {\n        border-bottom: none;\n      }\n      .bill-row b {\n        display: block;\n        font-size: 14.5px;\n      }\n      .bill-row small {\n        color: var(--muted);\n        font-size: 12.5px;\n      }\n      .pill {\n        font-size: 12px;\n        font-weight: 700;\n        padding: 5px 12px;\n        border-radius: 20px;\n        white-space: nowrap;\n      }\n      .pill.paid {\n        background: #dcfce7;\n        color: #15803d;\n      }\n      .btn {\n        border: none;\n        background: var(--teal);\n        color: #fff;\n        padding: 9px 16px;\n        border-radius: 8px;\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n        white-space: nowrap;\n      }\n      .btn:hover {\n        background: var(--teal-dark);\n      }\n      .btn.outline {\n        background: #fff;\n        color: var(--teal);\n        border: 1.5px solid var(--teal);\n      }\n      .empty-state {\n        text-align: center;\n        padding: 24px 10px;\n        color: var(--muted);\n        font-size: 14px;\n      }\n      .signin-prompt {\n        text-align: center;\n        padding: 20px 10px;\n      }\n      .signin-prompt p {\n        color: var(--muted);\n        margin-bottom: 14px;\n        font-size: 14px;\n      }\n\n      /* Reused UPI/QR pay widget styling (see api.js renderUpiPayBlock) */\n      .hms-upi-block {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        width: 100%;\n        padding-top: 6px;\n      }\n      .hms-upi-qr {\n        padding: 12px;\n        background: #fff;\n        border: 1px solid #e2e8f0;\n        border-radius: 12px;\n        margin-bottom: 14px;\n        min-height: 170px;\n        min-width: 170px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .hms-upi-id-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        background: var(--bg);\n        border: 1px solid #e2e8f0;\n        border-radius: 10px;\n        padding: 9px 12px;\n        margin-bottom: 12px;\n        width: 100%;\n        max-width: 280px;\n      }\n      .hms-upi-id-row code {\n        flex: 1;\n        font-size: 0.9rem;\n        font-weight: 700;\n        color: #1e293b;\n      }\n      .hms-upi-copy-btn {\n        border: none;\n        background: var(--teal);\n        color: #fff;\n        padding: 6px 10px;\n        border-radius: 7px;\n        font-size: 12px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .hms-upi-app-btn {\n        display: inline-block;\n        width: 100%;\n        max-width: 280px;\n        padding: 11px;\n        background: var(--teal);\n        color: #fff;\n        text-decoration: none;\n        font-weight: 700;\n        border-radius: 10px;\n        margin-bottom: 14px;\n        font-size: 0.9rem;\n      }\n      .hms-upi-hint {\n        font-size: 12px;\n        color: #64748b;\n        margin: 0 0 14px;\n        max-width: 320px;\n        line-height: 1.5;\n      }\n      .hms-utr-label {\n        align-self: flex-start;\n        font-size: 13px;\n        font-weight: 700;\n        color: #1e293b;\n        margin-bottom: 6px;\n      }\n      .hms-utr-input {\n        width: 100%;\n        max-width: 280px;\n        padding: 11px 12px;\n        border: 1.5px solid #cbd5e1;\n        border-radius: 8px;\n        font-size: 1rem;\n        letter-spacing: 1px;\n        font-weight: 600;\n        text-align: center;\n        margin-bottom: 6px;\n      }\n      .hms-utr-input:focus {\n        outline: none;\n        border-color: var(--teal);\n      }\n      .hms-utr-error {\n        color: #dc2626;\n        font-size: 12.5px;\n        max-width: 300px;\n        margin-bottom: 6px;\n      }\n      .pay-panel {\n        border-top: 1px dashed #d6e4e2;\n        margin-top: 14px;\n        padding-top: 16px;\n      }\n      .pay-panel-close {\n        font-size: 12.5px;\n        color: var(--muted);\n        text-align: center;\n        cursor: pointer;\n        text-decoration: underline;\n        margin-top: 10px;\n      }\n    ";
const PAGE_SCRIPTS = ["https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js", '/legacy/api.js', "\n      renderBackButton(16);\n\n      const billsArea = document.getElementById(\"billsArea\");\n\n      function renderSignInPrompt() {\n        billsArea.innerHTML = `\n          <div class=\"signin-prompt\">\n            <p>Sign in to view and pay your bills \u2014 the general billing info above is available to everyone.</p>\n            <a href=\"/login\" class=\"btn\" style=\"text-decoration:none; display:inline-block;\">Sign In</a>\n          </div>\n        `;\n      }\n\n      function renderNonPatientMessage(role) {\n        billsArea.innerHTML = `\n          <div class=\"empty-state\">\n            You're signed in as ${role.toLowerCase()}. Billing here is shown for patient accounts \u2014\n            sign in with a patient account to view and pay bills.\n          </div>\n        `;\n      }\n\n      async function renderBillsList() {\n        try {\n          const result = await listMyBills();\n          const bills = result.data;\n          if (!bills.length) {\n            billsArea.innerHTML = '<div class=\"empty-state\">No bills yet \u2014 anything from an appointment or the front desk will show up here.</div>';\n            return;\n          }\n          billsArea.innerHTML = bills\n            .map(\n              (b) => `\n              <div class=\"bill-row\">\n                <div>\n                  <b>${b.description}</b>\n                  <small>\u20b9${b.amount} \u00b7 ${b.payment_status}${b.payment_method ? \" \u00b7 \" + b.payment_method : \"\"}</small>\n                </div>\n                ${\n                  b.payment_status === \"Pending\"\n                    ? `<button class=\"btn\" data-pay-bill=\"${b.bill_id}\" data-pay-amount=\"${b.amount}\">Pay now</button>`\n                    : `<span class=\"pill paid\">Paid</span>`\n                }\n              </div>\n              <div class=\"pay-panel\" id=\"payPanel-${b.bill_id}\" style=\"display:none\"></div>\n            `,\n            )\n            .join(\"\");\n\n          billsArea.querySelectorAll(\"[data-pay-bill]\").forEach((btn) => {\n            btn.addEventListener(\"click\", () => openPayPanel(btn.dataset.payBill, btn.dataset.payAmount));\n          });\n        } catch (err) {\n          billsArea.innerHTML = `<div class=\"empty-state\">Couldn't load your bills: ${err.message}</div>`;\n        }\n      }\n\n      function openPayPanel(billId, amount) {\n        const panel = document.getElementById(\"payPanel-\" + billId);\n        if (!panel) return;\n        const isOpen = panel.style.display !== \"none\";\n        // Close any other open panel first, so only one pay flow is active.\n        document.querySelectorAll(\".pay-panel\").forEach((p) => (p.style.display = \"none\"));\n        if (isOpen) return; // was open, just closed it above\n\n        panel.style.display = \"block\";\n        panel.innerHTML = `<div id=\"upiArea-${billId}\"></div><div class=\"pay-panel-close\" id=\"cancelPay-${billId}\">Cancel</div>`;\n        renderUpiPayBlock(document.getElementById(\"upiArea-\" + billId), amount, \"Hospital bill payment\");\n\n        document.getElementById(\"cancelPay-\" + billId).addEventListener(\"click\", () => {\n          panel.style.display = \"none\";\n        });\n\n        // Add a confirm button under the UTR field.\n        const confirmBtn = document.createElement(\"button\");\n        confirmBtn.className = \"btn\";\n        confirmBtn.style.marginTop = \"12px\";\n        confirmBtn.style.width = \"100%\";\n        confirmBtn.style.maxWidth = \"280px\";\n        confirmBtn.textContent = `Confirm Payment of \u20b9${amount}`;\n        document.getElementById(\"upiArea-\" + billId).appendChild(confirmBtn);\n\n        confirmBtn.addEventListener(\"click\", async () => {\n          const utr = readAndValidateUtr();\n          if (!utr) return;\n          confirmBtn.disabled = true;\n          confirmBtn.textContent = \"Verifying payment\u2026\";\n          try {\n            await payBill(billId, utr);\n            panel.style.display = \"none\";\n            await renderBillsList();\n          } catch (err) {\n            alert(err.message || \"Payment could not be verified. Please try again.\");\n            confirmBtn.disabled = false;\n            confirmBtn.textContent = `Confirm Payment of \u20b9${amount}`;\n          }\n        });\n      }\n\n      (async function init() {\n        try {\n          const me = await getCurrentUser();\n          if (me.data.role === \"PATIENT\") {\n            await renderBillsList();\n          } else {\n            renderNonPatientMessage(me.data.role);\n          }\n        } catch (err) {\n          renderSignInPrompt();\n        }\n      })();\n    "];

export default function BillingPage() {
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
<h1>Billing & Payments</h1>
<p>
          How invoices, receipts, and payments work at MediWell Healthcare —
          and, if you're signed in, your actual bills below.
        </p>
</div>
<div className="card">
<h2>💳 How Billing Works</h2>
<div className="info-grid">
<div className="info-item">
<h3>Accepted Payment Method</h3>
<p>UPI/QR only — scan the code or use our UPI ID with any app (Google Pay, PhonePe, Paytm, etc.). We don't accept cards or net banking on the platform.</p>
</div>
<div className="info-item">
<h3>Payment Verification</h3>
<p>After paying, enter the 12-digit transaction ID (UTR) from your UPI app. Your bill is marked paid only once that's verified.</p>
</div>
<div className="info-item">
<h3>Receipts</h3>
<p>Once a bill is marked "Paid" on your dashboard, that's your receipt of record — it shows the amount, method, and transaction ID.</p>
</div>
<div className="info-item">
<h3>Corporate / TPA Billing</h3>
<p>Have insurance or a corporate policy? Visit our <a href="/insurance" style={{color: "var(--teal)", fontWeight: "600"}}>Insurance page</a> to check cashless coverage before your visit.</p>
</div>
</div>
</div>
<div className="card">
<h2>❓ Billing FAQ</h2>
<details open="">
<summary>I paid but my bill still shows Pending</summary>
<p>Double-check the transaction ID (UTR) you entered matches exactly what your UPI app shows for that payment — it must be the full 12-digit number. If it's still stuck, contact us with your UTR and we'll verify it manually.</p>
</details>
<details>
<summary>Can I pay in cash at the hospital?</summary>
<p>Appointments booked online are paid via UPI at the time of booking. Walk-in or front-desk billing may offer other methods in person — this only covers online payments made through the website.</p>
</details>
<details>
<summary>How do I get a refund?</summary>
<p>For a cancelled appointment or billing error, reach out via <a href="/contact" style={{color: "var(--teal)", fontWeight: "600"}}>Contact Us</a> with your bill details and UTR — refunds are processed to the original payment method within 5-7 working days.</p>
</details>
<details>
<summary>Does insurance cover my bill directly?</summary>
<p>For cashless network hospitals, your insurer settles directly and you may not see a bill for the covered portion. For reimbursement claims, you pay first and claim later — see the <a href="/insurance" style={{color: "var(--teal)", fontWeight: "600"}}>Insurance page</a> for details.</p>
</details>
</div>
<div className="card">
<h2>🧾 Your Bills</h2>
<div id="billsArea">
<div className="empty-state">Loading...</div>
</div>
</div>
</div>



      </div>
    </>
  );
}
