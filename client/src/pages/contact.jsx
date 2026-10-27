import React, { useEffect } from 'react';

const PAGE_TITLE = "Contact Us";
const PAGE_CSS = "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: Arial, Helvetica, sans-serif;\n      }\n\n      body {\n        margin: 0;\n        min-height: 100vh;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        background:\n          radial-gradient(\n            circle at left,\n            rgba(190, 255, 180, 0.35),\n            transparent 35%\n          ),\n          radial-gradient(\n            circle at right,\n            rgba(180, 200, 255, 0.35),\n            transparent 35%\n          ),\n          #f5f7fa;\n      }\n\n      .contact-wrapper {\n        width: 100%;\n        min-height: 100vh; /* Full screen height */\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 40px;\n      }\n\n      .contact-container {\n        width: 100%;\n        max-width: 1100px;\n        background: #fff;\n        border-radius: 30px;\n        padding: 40px;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 40px;\n        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n      }\n\n      /* LEFT SIDE */\n\n      .contact-left h1 {\n        font-size: 48px;\n        margin-bottom: 15px;\n        color: #111;\n      }\n\n      .contact-left p {\n        color: #555;\n        line-height: 1.7;\n        margin-bottom: 30px;\n      }\n\n      .info-grid {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 20px;\n      }\n\n      .info-card {\n        border: 1px solid #e5e5e5;\n        border-radius: 18px;\n        padding: 25px;\n        transition: 0.3s;\n      }\n\n      .info-card:hover {\n        transform: translateY(-5px);\n        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);\n      }\n\n      .icon-box {\n        width: 45px;\n        height: 45px;\n        border-radius: 12px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-bottom: 18px;\n        font-size: 18px;\n      }\n\n      .blue {\n        background: #eef4ff;\n        color: #4d7cff;\n      }\n\n      .purple {\n        background: #f2eaff;\n        color: #9b6dff;\n      }\n\n      .lightblue {\n        background: #edf5ff;\n        color: #5d8dff;\n      }\n\n      .orange {\n        background: #fff0e7;\n        color: #ff8b47;\n      }\n\n      .info-card h3 {\n        margin-bottom: 10px;\n        color: #111;\n      }\n\n      .info-card p,\n      .info-card a {\n        color: #444;\n        text-decoration: none;\n        font-size: 15px;\n      }\n\n      /* RIGHT SIDE */\n\n      .contact-form {\n        background: #fafafa;\n        padding: 25px;\n        border-radius: 20px;\n      }\n\n      .form-group {\n        margin-bottom: 22px;\n      }\n\n      .form-group label {\n        display: block;\n        margin-bottom: 10px;\n        font-size: 17px;\n        font-weight: 600;\n        color: #333;\n      }\n\n      .form-control {\n        width: 100%;\n        padding: 15px;\n        border: 1px solid #ddd;\n        border-radius: 10px;\n        font-size: 16px;\n        outline: none;\n      }\n\n      .form-control:focus {\n        border-color: #5b6df6;\n      }\n\n      textarea.form-control {\n        resize: none;\n        height: 140px;\n      }\n\n      .submit-btn {\n        width: 100%;\n        padding: 16px;\n        border: none;\n        border-radius: 12px;\n        background: linear-gradient(to right, #5d6ef5, #5a7cf5);\n        color: white;\n        font-size: 20px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: 0.3s;\n      }\n\n      .submit-btn:hover {\n        transform: translateY(-3px);\n        box-shadow: 0 10px 20px rgba(93, 110, 245, 0.3);\n      }\n\n      /* Responsive */\n\n      @media (max-width: 992px) {\n        .contact-container {\n          grid-template-columns: 1fr;\n        }\n\n        .contact-left h1 {\n          font-size: 40px;\n        }\n      }\n\n      @media (max-width: 768px) {\n        .contact-wrapper {\n          padding: 20px;\n        }\n\n        .contact-container {\n          padding: 25px;\n        }\n\n        .info-grid {\n          grid-template-columns: 1fr;\n        }\n\n        .contact-left h1 {\n          font-size: 34px;\n        }\n      }\n\n      @media (max-width: 480px) {\n        .contact-left h1 {\n          font-size: 28px;\n        }\n\n        .form-group label {\n          font-size: 15px;\n        }\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', "\n      renderBackButton(16);\n\n      document.getElementById(\"contactSubmitBtn\").addEventListener(\"click\", async () => {\n        const btn = document.getElementById(\"contactSubmitBtn\");\n        const fields = {\n          fullName: document.getElementById(\"contactName\").value.trim(),\n          email: document.getElementById(\"contactEmail\").value.trim(),\n          phone: document.getElementById(\"contactPhone\").value.trim(),\n          message: document.getElementById(\"contactMessage\").value.trim(),\n        };\n\n        if (!fields.fullName || !fields.email || !fields.message) {\n          alert(\"Please fill in your name, email, and message before submitting.\");\n          return;\n        }\n\n        btn.disabled = true;\n        btn.textContent = \"Sending\u2026\";\n\n        try {\n          const result = await submitContactForm(fields);\n          alert(\n            \"Thank you, \" + fields.fullName + \"! \" + result.message\n          );\n          document.getElementById(\"contactName\").value = \"\";\n          document.getElementById(\"contactEmail\").value = \"\";\n          document.getElementById(\"contactPhone\").value = \"\";\n          document.getElementById(\"contactMessage\").value = \"\";\n        } catch (err) {\n          alert(\"Something went wrong: \" + err.message);\n        } finally {\n          btn.disabled = false;\n          btn.textContent = \"Submit\";\n        }\n      });\n    "];

export default function ContactPage() {
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
<div className="contact-wrapper">
<div className="contact-container">
{/* LEFT */}
<div className="contact-left">
<h1>Contact Us</h1>
<p>
            We'll show you self-help options first. Additional help is available
            if you need it, including live chat with our specialist.
          </p>
<div className="info-grid">
<div className="info-card">
<div className="icon-box blue">
<i className="fa-solid fa-file-lines"></i>
</div>
<h3>Documentation</h3>
<a href="#">mediwellhealthcare.com/docs</a>
</div>
<div className="info-card">
<div className="icon-box purple">
<i className="fa-solid fa-envelope"></i>
</div>
<h3>Our Email</h3>
<p>support@mediwellhealthcare.com</p>
</div>
<div className="info-card">
<div className="icon-box lightblue">
<i className="fa-solid fa-phone"></i>
</div>
<h3>Phone</h3>
<p>+91 98765 43210</p>
</div>
<div className="info-card">
<div className="icon-box orange">
<i className="fa-solid fa-location-dot"></i>
</div>
<h3>Visit Us</h3>
<p>Bokaro Steel City, Jharkhand, India</p>
</div>
</div>
</div>
{/* RIGHT */}
<div className="contact-form">
<div className="form-group">
<label>Full Name</label>
<input type="text" className="form-control" id="contactName" placeholder="Full Name" />
</div>
<div className="form-group">
<label>Email Address</label>
<input type="email" className="form-control" id="contactEmail" placeholder="Enter your email address" />
</div>
<div className="form-group">
<label>Phone Number (optional)</label>
<input type="tel" className="form-control" id="contactPhone" placeholder="Enter your phone number" />
</div>
<div className="form-group">
<label>About your inquiry</label>
<textarea className="form-control" id="contactMessage" placeholder="Enter your message"></textarea>
</div>
<button className="submit-btn" id="contactSubmitBtn">Submit</button>
</div>
</div>
</div>


      </div>
    </>
  );
}
