import React, { useEffect } from 'react';

const PAGE_TITLE = "Emergency Assistance";
const PAGE_CSS = "\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: \"Poppins\", sans-serif;\n      }\n\n      body {\n        background: #f7f8fa;\n      }\n\n      .hero {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 60px;\n        padding: 80px 8%;\n      }\n\n      .hero-text {\n        flex: 1;\n      }\n\n      .tag {\n        color: #ff6b00;\n        font-weight: 600;\n      }\n\n      .hero-text h1 {\n        font-size: 60px;\n        color: #0d2257;\n        margin: 20px 0;\n      }\n\n      .hero-text p {\n        line-height: 1.8;\n        color: #555;\n      }\n\n      .hero-btn {\n        display: inline-block;\n        margin-top: 25px;\n        padding: 14px 30px;\n        background: #ff6b00;\n        color: white;\n        text-decoration: none;\n        border-radius: 30px;\n      }\n\n      .hero-image {\n        flex: 1;\n      }\n\n      .hero-image img {\n        width: 100%;\n        border-radius: 25px;\n      }\n\n      .emergency-section {\n        padding: 50px 8%;\n      }\n\n      .emergency-card {\n        display: flex;\n        align-items: center;\n        gap: 60px;\n        margin-bottom: 100px;\n      }\n\n      .reverse {\n        flex-direction: row-reverse;\n      }\n\n      .emergency-image {\n        flex: 1;\n      }\n\n      .emergency-image img {\n        width: 100%;\n        border-radius: 25px;\n      }\n\n      .emergency-content {\n        flex: 1;\n      }\n\n      .small-title {\n        color: #ff6b00;\n        font-weight: 600;\n      }\n\n      .emergency-content h2 {\n        font-size: 50px;\n        margin: 15px 0;\n        color: #0d2257;\n      }\n\n      .emergency-content p {\n        line-height: 1.8;\n        margin-bottom: 20px;\n      }\n\n      .emergency-content ul {\n        margin-left: 20px;\n        margin-bottom: 20px;\n      }\n\n      .emergency-content li {\n        margin-bottom: 10px;\n      }\n\n      .video-btn {\n        display: inline-block;\n        padding: 12px 25px;\n        background: #0d2257;\n        color: white;\n        text-decoration: none;\n        border-radius: 30px;\n      }\n\n      .contact-emergency {\n        padding: 80px 8%;\n        text-align: center;\n        background: white;\n      }\n\n      .contact-emergency h2 {\n        font-size: 45px;\n        margin-bottom: 50px;\n      }\n\n      .numbers {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n        gap: 30px;\n      }\n\n      .number-card {\n        background: #f3f5f8;\n        padding: 40px;\n        border-radius: 20px;\n      }\n\n      .number-card h3 {\n        margin-top: 15px;\n        font-size: 30px;\n        color: #0d2257;\n      }\n\n      @media (max-width: 992px) {\n        .hero {\n          flex-direction: column;\n        }\n\n        .hero-text h1 {\n          font-size: 40px;\n        }\n\n        .emergency-card,\n        .reverse {\n          flex-direction: column;\n        }\n\n        .emergency-content h2 {\n          font-size: 35px;\n        }\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', "\n      renderBackButton(16);\n    "];

export default function EmergencyPage() {
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
<section className="hero">
<div className="hero-text">
<span className="tag">// EMERGENCY ASSISTANCE //</span>
<h1>Know What To Do During A Medical Emergency</h1>
<p>
          Quick guidance can save lives. Learn the immediate steps to take
          during common medical emergencies and access professional help
          quickly.
        </p>
<a href="#guides" className="hero-btn"> Emergency Guides → </a>
</div>
<div className="hero-image">
<img src="Image/emergency img.webp" alt="Emergency" />
</div>
</section>
<section id="guides" className="emergency-section">
<div className="emergency-card">
<div className="emergency-image">
<img src="Image/heart atack img.webp" alt="Heart attack" />
</div>
<div className="emergency-content">
<span className="small-title"> // HEART ATTACK // </span>
<h2>Heart Attack Emergency</h2>
<p>
            Symptoms include chest pain, breathing difficulty, sweating and pain
            in the left arm.
          </p>
<ul>
<li>Call Ambulance Immediately</li>
<li>Keep Patient Calm</li>
<li>Loosen Tight Clothing</li>
<li>Give Aspirin If Recommended</li>
</ul>
<a href="https://www.youtube.com/results?search_query=heart+attack+first+aid" target="_blank" className="video-btn">
            ▶ Watch Video
          </a>
</div>
</div>
<div className="emergency-card reverse">
<div className="emergency-image">
<img src="Image/stroke img.jpg" alt="Stroke" />
</div>
<div className="emergency-content">
<span className="small-title"> // STROKE // </span>
<h2>Stroke Emergency</h2>
<p>
            Recognize FAST: Face drooping, Arm weakness, Speech difficulty, Time
            to call help.
          </p>
<ul>
<li>Call Emergency Services</li>
<li>Note Symptom Start Time</li>
<li>Keep Patient Comfortable</li>
<li>Do Not Give Food</li>
</ul>
<a href="https://www.youtube.com/results?search_query=stroke+first+aid" target="_blank" className="video-btn">
            ▶ Watch Video
          </a>
</div>
</div>
<div className="emergency-card">
<div className="emergency-image">
<img src="Image/burn img.webp" alt="Burn" />
</div>
<div className="emergency-content">
<span className="small-title"> // BURNS // </span>
<h2>Burn Injury</h2>
<p>Immediate care reduces damage and complications.</p>
<ul>
<li>Cool Burn With Water</li>
<li>Do Not Apply Ice</li>
<li>Cover With Clean Cloth</li>
<li>Seek Medical Help</li>
</ul>
<a href="https://www.youtube.com/results?search_query=burn+first+aid" target="_blank" className="video-btn">
            ▶ Watch Video
          </a>
</div>
</div>
<div className="emergency-card reverse">
<div className="emergency-image">
<img src="Image/bleeding img.webp" alt="" />
</div>
<div className="emergency-content">
<span className="small-title"> // BLEEDING // </span>
<h2>Severe Bleeding</h2>
<p>Heavy bleeding can become life threatening quickly.</p>
<ul>
<li>Apply Firm Pressure</li>
<li>Elevate Wound If Possible</li>
<li>Use Clean Bandage</li>
<li>Call Ambulance</li>
</ul>
<a href="https://www.youtube.com/results?search_query=bleeding+first+aid" target="_blank" className="video-btn">
            ▶ Watch Video
          </a>
</div>
</div>
</section>
<section className="emergency-section">
<div className="emergency-block">
<div className="emergency-content">
<span className="small-title"> // CPR // </span>
<h2>Cardiopulmonary Resuscitation (CPR)</h2>
<p>
            Use CPR on an adult who is unresponsive and not breathing
            normally. Call for emergency help (or have someone else call)
            before or as soon as you start.
          </p>
<ul>
<li>Check responsiveness - tap and shout, check for normal breathing</li>
<li>Call for emergency help immediately</li>
<li>Place the person on their back on a firm, flat surface</li>
<li>Kneel beside them, place the heel of one hand on the center of the chest, other hand on top</li>
<li>Push hard and fast - about 5-6 cm deep, at 100-120 compressions per minute</li>
<li>Let the chest fully rise between compressions</li>
<li>Continue until help arrives, an AED is available, or the person starts breathing</li>
</ul>
<p style={{fontSize: "13px", color: "#888", marginTop: "8px"}}>
            This is general guidance, not medical training - a certified
            first-aid/CPR course is the best way to learn this properly.
          </p>
<a href="https://www.youtube.com/results?search_query=how+to+do+cpr" target="_blank" className="video-btn">
            ▶ Watch Video
          </a>
</div>
</div>
</section>
<section className="contact-emergency">
<h2>Emergency Contact Numbers</h2>
<div className="numbers">
<div className="number-card">
          🚑 Ambulance
          <h3>108</h3>
</div>
<div className="number-card">
          👮 Police
          <h3>100</h3>
</div>
<div className="number-card">
          🔥 Fire Service
          <h3>101</h3>
</div>
<div className="number-card">
          🏥 Hospital
          <h3>+91 9876543210</h3>
</div>
</div>
</section>


      </div>
    </>
  );
}
