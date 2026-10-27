import React, { useEffect } from 'react';

const PAGE_TITLE = "Request a Demo";
const PAGE_CSS = "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: Arial, Helvetica, sans-serif;\n      }\n\n      body {\n        min-height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 40px 20px;\n        background:\n          radial-gradient(\n            circle at left,\n            rgba(190, 255, 180, 0.35),\n            transparent 35%\n          ),\n          radial-gradient(\n            circle at right,\n            rgba(180, 200, 255, 0.35),\n            transparent 35%\n          ),\n          #f5f7fa;\n      }\n\n      .demo-wrapper {\n        width: 100%;\n        max-width: 1300px;\n      }\n\n      .demo-container {\n        background: #fff;\n        border-radius: 30px;\n        padding: 40px;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 40px;\n        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n      }\n\n      /* LEFT SIDE */\n\n      .demo-left h1 {\n        font-size: 48px;\n        margin-bottom: 15px;\n        color: #111;\n      }\n\n      .demo-left p {\n        color: #555;\n        line-height: 1.8;\n        margin-bottom: 30px;\n      }\n\n      .benefits-grid {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 20px;\n      }\n\n      .benefit-card {\n        border: 1px solid #e8e8e8;\n        border-radius: 18px;\n        padding: 25px;\n        transition: 0.3s;\n      }\n\n      .benefit-card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);\n      }\n\n      .icon-box {\n        width: 50px;\n        height: 50px;\n        border-radius: 12px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 15px;\n        font-size: 20px;\n      }\n\n      .blue {\n        background: #eef4ff;\n        color: #4d7cff;\n      }\n\n      .green {\n        background: #eafaf3;\n        color: #27ae60;\n      }\n\n      .orange {\n        background: #fff3e7;\n        color: #ff8b47;\n      }\n\n      .purple {\n        background: #f3ebff;\n        color: #9b59b6;\n      }\n\n      .benefit-card h3 {\n        margin-bottom: 10px;\n      }\n\n      .benefit-card p {\n        font-size: 14px;\n        margin-bottom: 0;\n      }\n\n      /* RIGHT SIDE */\n\n      .demo-form {\n        background: #fafafa;\n        border-radius: 20px;\n        padding: 30px;\n      }\n\n      .form-group {\n        margin-bottom: 20px;\n      }\n\n      .form-group label {\n        display: block;\n        margin-bottom: 8px;\n        font-weight: 600;\n        color: #333;\n      }\n\n      .form-control {\n        width: 100%;\n        padding: 15px;\n        border: 1px solid #ddd;\n        border-radius: 10px;\n        outline: none;\n        font-size: 15px;\n      }\n\n      .form-control:focus {\n        border-color: #0d6a7d;\n      }\n\n      textarea.form-control {\n        resize: none;\n        height: 120px;\n      }\n\n      .demo-btn {\n        width: 100%;\n        border: none;\n        padding: 16px;\n        border-radius: 12px;\n        background: #0d6a7d;\n        color: white;\n        font-size: 18px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: 0.3s;\n      }\n\n      .demo-btn:hover {\n        background: #084d5c;\n      }\n\n      /* Responsive */\n\n      @media (max-width: 992px) {\n        .demo-container {\n          grid-template-columns: 1fr;\n        }\n\n        .demo-left h1 {\n          font-size: 38px;\n        }\n      }\n\n      @media (max-width: 768px) {\n        .demo-container {\n          padding: 25px;\n        }\n\n        .benefits-grid {\n          grid-template-columns: 1fr;\n        }\n\n        .demo-left h1 {\n          font-size: 30px;\n        }\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', "\n      renderBackButton(16);\n\n      document.getElementById(\"demoSubmitBtn\").addEventListener(\"click\", async () => {\n        const btn = document.getElementById(\"demoSubmitBtn\");\n        const fields = {\n          fullName: document.getElementById(\"demoName\").value.trim(),\n          email: document.getElementById(\"demoEmail\").value.trim(),\n          phone: document.getElementById(\"demoPhone\").value.trim(),\n          preferredDate: document.getElementById(\"demoDate\").value || null,\n          preferredTime: document.getElementById(\"demoTime\").value || null,\n          requirement: document.getElementById(\"demoRequirement\").value.trim(),\n        };\n\n        if (!fields.fullName || !fields.email || !fields.requirement) {\n          alert(\"Please fill in your name, email, and what you need before submitting.\");\n          return;\n        }\n\n        btn.disabled = true;\n        btn.textContent = \"Matching you with a doctor\u2026\";\n\n        try {\n          const result = await submitDemoRequest(fields);\n          const d = result.data;\n          const dateStr = d.preferredDate || \"a date to be confirmed\";\n          const timeStr = d.preferredTime || \"a time to be confirmed\";\n\n          if (d.doctor && d.bookedForPatient) {\n            const paymentLine = d.bill\n              ? `\u20b9${d.bill.amount} is pending \u2014 pay it via UPI/QR from your patient dashboard before your visit.`\n              : \"\";\n            alert(\n              `You're matched with ${d.doctor.name} (${d.matchedDepartment}).\\n\\n` +\n                `Your appointment is booked for ${dateStr} at ${timeStr}.\\n` +\n                `${paymentLine}\\n\\nYou can see it on your patient dashboard now.`\n            );\n            window.location.href = \"/patient\";\n          } else if (d.doctor) {\n            alert(\n              `Based on what you told us, we'd recommend ${d.doctor.name} (${d.matchedDepartment}) ` +\n                `for ${dateStr} at ${timeStr}.\\n\\n` +\n                `Log in or create a patient account to confirm this booking and pay - ` +\n                `we've saved your request either way and our team will also follow up by email.`\n            );\n            window.location.href = \"/login\";\n          } else {\n            alert(\n              \"Thanks! We don't have a doctor listed for that specialty yet, \" +\n                \"but we've saved your request and our team will contact you within 24 hours.\"\n            );\n          }\n\n          document.getElementById(\"demoName\").value = \"\";\n          document.getElementById(\"demoEmail\").value = \"\";\n          document.getElementById(\"demoPhone\").value = \"\";\n          document.getElementById(\"demoDate\").value = \"\";\n          document.getElementById(\"demoTime\").value = \"\";\n          document.getElementById(\"demoRequirement\").value = \"\";\n        } catch (err) {\n          alert(\"Something went wrong: \" + err.message);\n        } finally {\n          btn.disabled = false;\n          btn.textContent = \"Request Demo\";\n        }\n      });\n    "];

export default function RequestDemoPage() {
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
<div className="demo-wrapper">
<div className="demo-container">
{/* LEFT */}
<div className="demo-left">
<h1>Request a Demo</h1>
<p>
            See how MediWell Healthcare can simplify patient management,
            appointment scheduling, medical records, and hospital operations.
            Book a personalized demonstration with our experts.
          </p>
<div className="benefits-grid">
<div className="benefit-card">
<div className="icon-box blue">
<i className="fa-solid fa-calendar-check"></i>
</div>
<h3>Smart Appointments</h3>
<p>Efficient appointment booking and management.</p>
</div>
<div className="benefit-card">
<div className="icon-box green">
<i className="fa-solid fa-user-doctor"></i>
</div>
<h3>Doctor Management</h3>
<p>Manage doctors, schedules, and patient visits.</p>
</div>
<div className="benefit-card">
<div className="icon-box orange">
<i className="fa-solid fa-file-medical"></i>
</div>
<h3>Digital Records</h3>
<p>Secure patient records and medical history.</p>
</div>
<div className="benefit-card">
<div className="icon-box purple">
<i className="fa-solid fa-chart-line"></i>
</div>
<h3>Hospital Analytics</h3>
<p>Track performance and healthcare operations.</p>
</div>
</div>
</div>
{/* RIGHT */}
<div className="demo-form">
<div className="form-group">
<label>Full Name</label>
<input type="text" className="form-control" id="demoName" placeholder="Enter your name" />
</div>
<div className="form-group">
<label>Email Address</label>
<input type="email" className="form-control" id="demoEmail" placeholder="Enter your email" />
</div>
<div className="form-group">
<label>Phone Number</label>
<input type="text" className="form-control" id="demoPhone" placeholder="Enter phone number" />
</div>
<div className="form-group">
<label>Preferred Date</label>
<div className="date-input-with-logo"><img src="/calendar-logo.png" alt="" /><input type="date" className="form-control" id="demoDate" /></div>
</div>
<div className="form-group">
<label>Preferred Time</label>
<select className="form-control" id="demoTime">
<option value="">Select a time</option>
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>02:00 PM</option>
<option>03:00 PM</option>
<option>04:00 PM</option>
</select>
</div>
<div className="form-group">
<label>What do you need? (symptom, checkup, or service)</label>
<textarea className="form-control" id="demoRequirement" placeholder="e.g. I've been having chest pain and shortness of breath"></textarea>
</div>
<div className="form-group">
<p style={{fontSize: "13px", color: "#64748b", margin: "0"}}>
              If we're able to book you in with a doctor, the consultation fee will show up as <b>pending</b> on your patient dashboard — pay it there anytime via UPI/QR before your visit.
            </p>
</div>
<button className="demo-btn" id="demoSubmitBtn">Request Demo</button>
</div>
</div>
</div>


      </div>
    </>
  );
}
