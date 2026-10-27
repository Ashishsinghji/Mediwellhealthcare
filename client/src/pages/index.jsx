import React, { useEffect } from 'react';

const PAGE_TITLE = "MediWell Healthcare";
const PAGE_CSS = "";
const PAGE_SCRIPTS = ['/legacy/api.js', '/legacy/script.js'];


function toggleFaqAnswer(event) {
  const button = event.currentTarget;
  const item = button.closest('.faq-item');
  if (!item) return;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('active');
  document.querySelectorAll('.faq-item.active').forEach((other) => {
    if (other !== item) {
      other.classList.remove('active');
      const otherAnswer = other.querySelector('.faq-answer');
      if (otherAnswer) otherAnswer.style.maxHeight = '0px';
    }
  });
  item.classList.toggle('active', !isOpen);
  if (answer) answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : '0px';
}

export default function IndexPage() {
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
<nav className="navbar">
{/* Left Side */}
<div className="left-section">
<div className="hamburger" onClick={() => window.__mediwellRun("toggleMenu()")}>
<span></span>
<span></span>
<span></span>
</div>
<div className="logo">
<span className="mediwell">MediWell</span>
<span className="healthcare">HEALTHCARE</span>
</div>
</div>
{/* Center Menu */}
<ul className="nav-links">
<li><a href="#benefits">Benefits</a></li>
<li><a href="#solutions">Solutions</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#doctors">Doctors</a></li>
<li><a href="#resources">Resources</a></li>
{/* <li><a href="#contact">Contact</a></li> */}
</ul>
{/* Search */}
<div className="search-container" id="searchContainer">
<input type="text" className="search-input" id="siteSearchInput" placeholder="Search... e.g. 'book an appointment'" autoComplete="off" />
<div className="search-results" id="searchResults"></div>
<button className="search-btn" onClick={() => window.__mediwellRun("toggleSearch()")}>🔍</button>
</div>
</nav>
{/* Side Menu */}
{/* Overlay */}
<div id="menu" className="menu">
<button type="button" id="menuCloseButton" className="menu-close" aria-label="Close menu">
  ×
</button>
{/* Logged In Area */}
<div id="userSection">
<div className="logged-in-only">
<div className="menu-header">
<div className="profile-card" id="menuProfileCard" style={{cursor: "pointer"}}>
<div id="menuProfileAvatar" className="profile-img" style={{display: "flex", alignItems: "center", justifyContent: "center", background: "#1a7a8a", color: "#fff", fontWeight: "700", fontSize: "32px"}}>?</div>
<h3 id="menuProfileName">—</h3>
<p id="menuProfileRole">—</p>
<div className="profile-stats">
<div id="menuProfileGoto" style={{gridColumn: "1 / -1"}}>
                  Tap to go to my dashboard →
                </div>
</div>
</div>
</div>
</div>
<div className="menu-content">
{/* Logged in menu */}
<div className="logged-in-only menu-group">
<a href="#" className="menu-item">
<span className="material-symbols-outlined icon-blue">home</span>
              Home
            </a>
<a href="#" className="menu-item">
<span className="material-symbols-outlined icon-orange">notifications</span>
              Notifications
            </a>
<a href="#" className="menu-item">
<span className="material-symbols-outlined icon-purple">history</span>
              History
            </a>
<a href="#" className="menu-item">
<span className="material-symbols-outlined icon-gray">settings</span>
              Settings
            </a>
<a href="#" className="menu-item logout-item" id="menuLogoutBtn">
<span className="material-symbols-outlined icon-red">logout</span>
              Logout
            </a>
</div>
</div>
{/* PUBLIC SECTION */}
<div className="menu-group">
<div className="menu-group-title">Healthcare Services</div>
{/* Shown only once logged in - registration prompts below are
               redundant (and confusing) for someone who already has an
               account on this device. */}
<div className="logged-in-only">
<a href="/appointment" className="menu-item">
<span className="material-symbols-outlined icon-orange">calendar_month</span>
              Book an Appointment
            </a>
</div>
{/* Shown only to people who haven't logged in on this device */}
<div className="guest-only">
{/* APPOINTMENTS - clicking the card opens Appointment Booking directly */}
<div className="expand-card">
<a href="/appointment" className="menu-item expandable" aria-label="Appointment Booking">
<span className="material-symbols-outlined icon-orange">
                calendar_month
              </span>
              Appointments
            </a>
</div>
</div>
{/* end guest-only */}
{/* FIND DOCTOR */}
<a href="#doctors" className="menu-item">
<span className="material-symbols-outlined icon-purple"> search </span>
            Find a Doctor
          </a>
{/* MEDICAL SERVICES */}
<a href="#services" className="menu-item">
<span className="material-symbols-outlined icon-teal">
              local_hospital
            </span>
            Medical Services
          </a>
<a href="/insurance" className="menu-item">
<span className="material-symbols-outlined icon-blue">
              health_and_safety
            </span>
            Insurance
          </a>
<a href="/billing" className="menu-item">
<span className="material-symbols-outlined icon-green">
              receipt_long
            </span>
            Billing
          </a>
<a href="#benefits" className="menu-item">
<span className="material-symbols-outlined icon-orange">
              checklist
            </span>
            First Visit Checklist
          </a>
<a href="#Faq" className="menu-item">
<span className="material-symbols-outlined icon-purple"> help </span>
            FAQ
          </a>
</div>
</div>
</div>
<section className="hero">
<div className="hero-content">
<h3>THE</h3>
<h1>
          HOSPITAL OF THE<br />
          FUTURE, TODAY.
        </h1>
<div className="para">
<p>
            MediWell Health care supports providers, payers, and public health
            organizations with a secure, comprehensive suite of cloud-based
            solutions. Built on enterprise-grade infrastructure, our unified
            solutions help safeguard patient data, streamline operations,
            alleviate administrative burden, and deliver near real-time insights
            for connected, efficient care. AI is embedded into every layer of
            our technology—from our data platforms to our cloud
            applications—providing actionable insights that help you deliver
            efficient, enhanced care. And it all runs on our secure, scalable AI
            infrastructure built for the demands of healthcare.
          </p>
</div>
<div className="features">
<span>• 100% Expert Doctors</span>
<span>• Medicine & Instrument</span>
<span>• Scientific Treatment</span>
<span>• Instant Operation</span>
</div>
<div className="hero-buttons">
{/* <a href="#contact" class="btn-primary">Contact Us</a> */}
<a href="/contact" className="btn-primary">
            Contact Us
          </a>
{/* <button class="btn-secondary">Request a demo</button> */}
<a href="/request-demo" style={{textDecoration: "none !important"}}>
<button className="btn-secondary">Request a Demo</button>
</a>
</div>
</div>
<div className="hero-image">
{/* <div class="image-logo">
          <span class="mediwell">MediWell</span>
          <span class="healthcare">HEALTHCARE</span>
        </div> */}
<img src="Image/doc.png" alt="Doctors" />
</div>
</section>
<section className="info-section">
{/* Left Card */}
<div className="info-card">
<h2>Register for MediWell Healthcare Summit 2026.</h2>
<p>September 22-24, 2026 | Bokaro, Jharkhand</p>
{/* <button class="info-btn">Register Now</button> */}
<div className="register-actions" aria-label="Registration options">
  <a className="info-btn" href="/register-p">Patient Register</a>
  <a className="info-btn doctor-register-btn" href="/register">Doctor Register</a>
</div>
</div>
{/* Right Card */}
<div className="info-card">
<h2>Emergency Support Available 24/7</h2>
<div className="emergency-links">
<a href="tel:108">
<span className="material-symbols-outlined"> emergency </span>
            Call 108
          </a>
<a href="tel:1800111565">
<span className="material-symbols-outlined"> call </span>
            1800 11 1565
          </a>
{/* Desktop directions */}
<a className="directions-link directions-desktop" href="https://www.google.com/maps/dir/?api=1&destination=Bokaro+General+Hospital%2C+Sector+4%2C+Bokaro+Steel+City%2C+Jharkhand+827004&travelmode=driving" target="_blank" rel="noopener">
<span className="material-symbols-outlined">location_on</span>
  Directions
</a>
{/* Android mobile directions: opens installed Maps app */}
<a className="directions-link directions-mobile" href="geo:0,0?q=Bokaro%20General%20Hospital%2C%20Sector%204%2C%20Bokaro%20Steel%20City%2C%20Jharkhand%20827004">
<span className="material-symbols-outlined">location_on</span>
  Directions
</a>
</div>
{/* <button class="info-btn">In Emergency</button> */}
<a href="/emergency">
<button className="info-btn">Emergency</button>
</a>
</div>
</section>
{/* Diagnose AI */}
<section className="diagnose-ai-section" id="diagnose-ai">
<div className="section-title reveal">
<h2>Diagnose <span>AI</span></h2>
<p>Enter your symptoms and feelings below for instant AI clinical triage, recommended medications, and doctor specialties.</p>
</div>
<div className="ai-container">
<div className="ai-input-box">
<h3>How are you feeling today?</h3>
<p className="ai-subtitle">Describe your symptoms in your own words or choose a preset.</p>
<div className="preset-pills">
<button type="button" onClick={() => window.__mediwellRun("setPreset('Chest tightness and shortness of breath')")}>Chest Tightness</button>
<button type="button" onClick={() => window.__mediwellRun("setPreset('Severe headache with light sensitivity')")}>Severe Headache</button>
<button type="button" onClick={() => window.__mediwellRun("setPreset('Persistent dry cough and fever')")}>Cough & Fever</button>
<button type="button" onClick={() => window.__mediwellRun("setPreset('I ate junk food and now I am vomiting, my stomach feels bloated like a balloon')")}>Stomach Bloating</button>
</div>
<textarea id="aiSymptomInput" placeholder="e.g. I have a throbbing headache, sensitivity to light, and slight nausea since this morning..."></textarea>
<div className="ai-profile-row">
<input type="text" id="aiPatientName" placeholder="Patient Name" value="John Doe" />
<input type="number" id="aiPatientAge" placeholder="Age" value="32" />
<select id="aiPatientGender">
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
</div>
<button className="ai-submit-btn" onClick={() => window.__mediwellRun("runAiDiagnosis()")}>Run AI Triage & Diagnosis</button>
</div>
<div className="ai-result-box" id="aiResultBox">
<div className="ai-result-placeholder">
<span className="material-symbols-outlined" style={{fontSize: "48px", color: "#1a7a8a"}}>smart_toy</span>
<h4>AI Clinical Intelligence Awaiting Input</h4>
<p>Fill in your symptoms on the left and click run to see recommended medicines and doctor specialties.</p>
</div>
</div>
</div>
</section>
<section className="why-choose-us" id="benefits">
<div className="section-title reveal">
<h2>Why Choose <span>Us</span></h2>
<p>
          Providing world-class healthcare with trust, technology and expertise.
        </p>
</div>
<div className="features-grid">
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">medical_services</span>
<h3>Expert Doctors</h3>
<p>Highly qualified specialists delivering advanced treatments.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">emergency</span>
<h3>24/7 Emergency</h3>
<p>Immediate emergency care available around the clock.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">monitor_heart</span>
<h3>Advanced Equipment</h3>
<p>Modern medical technology for accurate diagnosis.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">verified</span>
<h3>Trusted Care</h3>
<p>Patient-centered healthcare with proven excellence.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">vaccines</span>
<h3>Quality Treatment</h3>
<p>Evidence-based treatment plans for better outcomes.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">payments</span>
<h3>Affordable Cost</h3>
<p>Transparent pricing with accessible healthcare services.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">health_and_safety</span>
<h3>Patient Safety</h3>
<p>Strict safety standards ensuring quality healthcare.</p>
</div>
<div className="feature-card reveal">
<span className="material-symbols-outlined icon">bolt</span>
<h3>Fast Service</h3>
<p>Reduced waiting times and efficient patient management.</p>
</div>
</div>
</section>
{/* solution section */}
<section className="solution">
<h3>Solutions to solve complex healthcare challenges</h3>
<p>
        Modern healthcare demands integrated solutions. We connect patients,
        providers, payers, and public health organizations with AI-powered,
        interoperable solutions that help streamline data exchange, surface
        actionable insights, and drive operational efficiencies across the care
        continuum.we are always with you in need.we know how to take care.
      </p>
</section>
<section className="solutions-section" id="solutions">
<div className="solutions-header">
<h2>MediWell Healthcare Solutions</h2>
<a href="#">Explore All Services</a>
</div>
<div className="solutions-grid">
{/* Card 1 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">medical_services</span>
            Clinical Applications
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
<div className="panel-item">
<h4>Service lines and departments</h4>
<p>Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies.</p>
<a href="#">Explore service lines and departments</a>
</div>
</div>
</div>
</div>
{/* Card 2 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">local_hospital</span>
            Clinical & Financial Operations
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
<div className="panel-item">
<h4>Service lines and departments</h4>
<p>Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies.</p>
<a href="#">Explore service lines and departments</a>
</div>
</div>
</div>
</div>
{/* Card 3 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">person</span>
            Patient Experience
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
<div className="panel-item">
<h4>Service lines and departments</h4>
<p>Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies.</p>
<a href="#">Explore service lines and departments</a>
</div>
</div>
</div>
</div>
{/* Card 4 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">payments</span>
            Billing & Insurance
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
<div className="panel-item">
<h4>Service lines and departments</h4>
<p>Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies.</p>
<a href="#">Explore service lines and departments</a>
</div>
</div>
</div>
</div>
{/* Card 5 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">groups</span>
            Population Health
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
</div>
</div>
</div>
{/* Card 6 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">security</span>
            Security
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
</div>
</div>
</div>
{/* Card 7 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">support_agent</span>
            Services & Support
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<div className="panel-columns">
<div className="panel-item">
<h4>Clinical suite</h4>
<p>Leverage AI-driven solutions that help simplify workflows, alleviate administrative burden, and support patient safety. Transform your EHR from a cumbersome administrative tool into an intelligent, collaborative assistant with embedded advanced automation.</p>
<a href="#">Explore clinical suite</a>
</div>
<div className="panel-item">
<h4>Continuum of care</h4>
<p>Coordinate, manage, and deliver high-quality patient care across settings — from rehabilitation and home health to long-term care and behavioral health.</p>
<a href="#">Explore continuum of care</a>
</div>
<div className="panel-item">
<h4>Interoperability</h4>
<p>Centralize data exchange capabilities with our easy-to-use interoperability management console for provider clinical exchange, payment and operations, public health, labs and diagnostics, and benefits administration.</p>
<a href="#">Explore interoperability</a>
</div>
<div className="panel-item">
<h4>Service lines and departments</h4>
<p>Empower clinicians to deliver coordinated, knowledge-driven care by organizing care around conditions. Unite service lines and departments to help enhance care, streamline workflows, and drive efficiencies.</p>
<a href="#">Explore service lines and departments</a>
</div>
</div>
</div>
</div>
{/* Card 8 */}
<div className="solution-card">
<button className="accordion">
<span className="material-symbols-outlined">apartment</span>
            Enterprise Solutions
            <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
</button>
<div className="panel">
<button className="panel-close" aria-label="Close">×</button>
<h3 className="panel-title">Security</h3>
<p>Maintain a strong security posture for your enterprise with data security solutions that help you manage clinical identity, regulatory compliance, and security auditing.</p>
<a href="#">Explore security</a>
</div>
</div></div></section>
{/*services section*/}
<section className="services-section" id="services">
<h2 className="services-title">Our Healthcare Services</h2>
<div className="services-grid">
<div className="service-card reveal2">
<img src="Image/full body.png" alt="Full Body Checkup" />
<h3>Full Body Checkup</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/radiology.webp" alt="Imaging and Radiology" />
<h3>Imaging and Radiology</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/heart checkup.jpg" alt="Heart Related" />
<h3>Heart Related</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/brain.avif" alt="Brain Related" />
<h3>Brain Related</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/stomach.jpg" alt="Stomach Related" />
<h3>Stomach Related</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/surgery.webp" alt="Surgical Services" />
<h3>Surgical Services</h3>
<button>Book Now</button>
</div>
<div className="service-card reveal2">
<img src="Image/eyes.webp" alt="Eye Related" />
<h3>Eye Related</h3>
<button>Book Now</button>
</div>
</div>
{/* Booking Modal */}
<div className="booking-overlay" id="bookingOverlay">
<div className="booking-container">
<button className="booking-close" id="bookingClose" aria-label="Close">×</button>
<div className="booking-card">
<div className="booking-left">
<h2>Book Your</h2>
<h1 id="bookingServiceName">Full Body Checkup</h1>
<p className="booking-subtitle" id="bookingSubtitle">Comprehensive Health Screening Package</p>
<div className="booking-includes">
<h4>Includes:</h4>
<ul id="bookingIncludesList"></ul>
</div>
</div>
<div className="booking-right">
<h3>Book an Appointment</h3>
<form id="bookingForm">
<div className="booking-field">
<span className="material-symbols-outlined">person</span>
<input type="text" id="fieldName" placeholder="Full Name" required="" />
</div>
<div className="booking-field">
<span className="material-symbols-outlined">call</span>
<input type="tel" id="fieldPhone" placeholder="Phone Number" required="" />
</div>
<div className="booking-field">
<span className="material-symbols-outlined">mail</span>
<input type="email" id="fieldEmail" placeholder="Email Address" required="" />
</div>
<div className="booking-field">
<span className="material-symbols-outlined">cake</span>
<input type="number" id="fieldAge" placeholder="Age" min="1" required="" />
</div>
<div className="booking-field">
<span className="material-symbols-outlined">wc</span>
<select id="fieldGender" required="">
<option value="" disabled="" selected="">Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
</div>
<div className="booking-field">
<span className="booking-date-icon" aria-hidden="true"><img src="/calendar-logo.png" alt="" /></span>
<input type="date" id="fieldDate" required="" />
</div>
<div className="booking-field">
<span className="material-symbols-outlined">schedule</span>
<select id="fieldTime" required="">
<option value="" disabled="" selected="">Preferred Time</option>
<option>9:00 AM</option>
<option>11:00 AM</option>
<option>1:00 PM</option>
<option>3:00 PM</option>
<option>5:00 PM</option>
</select>
</div>
<div className="booking-field">
<span className="material-symbols-outlined">inventory_2</span>
<select id="bookingPackageSelect" required="">
<option value="" disabled="" selected="">Select Package</option>
</select>
</div>
<button type="submit" className="booking-submit">Book Now</button>
</form>
</div>
</div>
<div className="booking-footer">
<div className="booking-footer-item">
<span className="material-symbols-outlined">verified_user</span> Accurate Tests
      </div>
<div className="booking-footer-item">
<span className="material-symbols-outlined">bolt</span> Quick Service
      </div>
<div className="booking-footer-item">
<span className="material-symbols-outlined">favorite</span> Expert Care
      </div>
</div>
<div className="booking-summary" id="bookingSummary">
<button className="booking-close" id="summaryClose" aria-label="Close">×</button>
<h2 id="summaryServiceName">Full Body Checkup</h2>
<div className="summary-block">
<h4><span className="material-symbols-outlined">description</span> About This Service</h4>
<p id="summaryAbout"></p>
</div>
<div className="summary-price" id="summaryPrice">₹ 0</div>
<h4 className="summary-heading">Pre-Test Instructions</h4>
<ul id="summaryInstructions"></ul>
<div className="summary-block">
<h4>Booking Summary</h4>
<p><strong>Name:</strong> <span id="sumName">Not filled</span></p>
<p><strong>Mobile:</strong> <span id="sumMobile">Not filled</span></p>
<p><strong>Age:</strong> <span id="sumAge">Not filled</span></p>
<p><strong>Gender:</strong> <span id="sumGender">Not filled</span></p>
<p><strong>Date:</strong> <span id="sumDate">Not filled</span></p>
<p><strong>Time:</strong> <span id="sumTime">Not selected</span></p>
<p><strong>Payment:</strong> Online</p>
<p><strong>Price:</strong> <span id="sumPriceText">₹0</span></p>
</div>
<button className="booking-edit" id="editDetailsBtn">Edit Details</button>
<button className="booking-submit" id="confirmBookingBtn">Confirm Booking</button>
</div>
</div>
</div>
</section>
{/*Doctors section*/}
<section className="doctors-section" id="doctors">
<h2 className="doctor-title">Our Expert Doctors</h2>
<div className="slider-container">
{/* Left Arrow */}
<button className="slider-btn prev-btn" onClick={() => window.__mediwellRun("moveLeft()")}>
          ❮
        </button>
{/* Slider */}
<div className="slider-wrapper">
<div className="doctor-track" id="doctorTrack">
{/* Doctor cards are rendered here at runtime from real database records */}
<p style={{padding: "20px", color: "#888"}}>Loading doctors…</p>
</div>
</div>
{/* Right Arrow */}
<button className="slider-btn next-btn" onClick={() => window.__mediwellRun("moveRight()")}>
          ❯
        </button>
</div>
{/* Doctor Profile / Appointment Page */}
<div className="doctor-profile-overlay" id="doctorProfileOverlay">
<div className="doctor-profile-header">
<button className="back-btn" id="doctorBackBtn">← Back</button>
<h2>Doctor Profile</h2>
<div className="rating-badge">
<span className="material-symbols-outlined">star</span> <span id="docRatingValue">5</span>
</div>
</div>
<div className="doctor-profile-content">
<div className="doctor-info-card">
<img id="docImage" src="" alt="" className="doctor-profile-img" />
<div className="doctor-info-main">
<h1 id="docName">Dr. Name</h1>
<span className="speciality-badge" id="docSpeciality">Speciality</span>
<div className="doctor-info-grid">
<div className="info-box">
<span className="material-symbols-outlined">school</span>
<div><strong>Qualifications</strong><p id="docQualifications">MBBS</p></div>
</div>
<div className="info-box">
<span className="material-symbols-outlined">location_on</span>
<div><strong>Location</strong><p id="docLocation">Clinic</p></div>
</div>
<div className="info-box">
<span className="material-symbols-outlined">payments</span>
<div><strong>Consultation Fee</strong><p className="fee-text" id="docFee">₹0</p></div>
</div>
<div className="info-box">
<span className="material-symbols-outlined">event_available</span>
<div><strong>Availability</strong><p id="docAvailability">Available</p></div>
</div>
</div>
</div>
</div>
<div className="doctor-stats-row">
<div className="stat-box">
<span className="material-symbols-outlined stat-icon success">favorite</span>
<h3 id="docSuccess">General Medicine</h3><p>Department</p>
</div>
<div className="stat-box">
<span className="material-symbols-outlined stat-icon exp">military_tech</span>
<h3 id="docExperience">5 Years</h3><p>Experience</p>
</div>
<div className="stat-box">
<span className="material-symbols-outlined stat-icon patients">groups</span>
<h3 id="docPatients">2.6k</h3><p>Patients</p>
</div>
</div>
<div className="about-doctor-box">
<h4><span className="material-symbols-outlined">info</span> About Doctor</h4>
<p id="docAbout">About text goes here.</p>
</div>
<div className="appointment-box">
<h3><span className="material-symbols-outlined">event</span> Book Your Appointment</h3>
<div className="appointment-grid">
<div className="appointment-left">
<h4><span className="material-symbols-outlined">calendar_month</span> Select Date</h4>
<div className="date-pills" id="datePills"></div>
<div className="patient-details">
<h4>Patient Details</h4>
<div className="patient-form-row">
<input type="text" id="patName" placeholder="Full Name" />
<input type="number" id="patAge" placeholder="Age" min="1" />
</div>
<div className="patient-form-row">
<input type="tel" id="patMobile" placeholder="Mobile Number (10 digits)" maxLength="10" />
<select id="patGender">
<option value="" disabled="" selected="">Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>
</div>
<input type="email" id="patEmail" placeholder="Email (optional - for receipts)" className="full-width-input" />
</div>
</div>
<div className="appointment-right">
<h4><span className="material-symbols-outlined">schedule</span> Available Time Slots</h4>
<p className="no-slots" id="timeSlotsMsg">No time slots for this date.</p>
<div className="time-slots" id="timeSlotsContainer"></div>
<div className="booking-summary-card">
<p><span>Selected Doctor:</span> <strong id="sumDoctorName">-</strong></p>
<p><span>Doctor Speciality:</span> <strong id="sumDoctorSpeciality">-</strong></p>
<p><span>Selected Date:</span> <strong id="sumSelectedDate">Not selected</strong></p>
<p><span>Selected Time:</span> <strong id="sumSelectedTime">Not selected</strong></p>
<p><span>Consultation Fee:</span> <strong id="sumFee" className="fee-text">₹0</strong></p>
<div className="payment-row">
<span>Payment:</span>
<strong>UPI / QR Code (next step)</strong>
</div>
<button className="confirm-booking-btn" id="confirmDoctorBookingBtn">
<span className="material-symbols-outlined">call</span> Confirm Booking
            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*Resources Quote section*/}
{/* SECTION 1: Quote / Testimonial */}
<section className="quote-section" id="resources">
{/* Decorative blobs */}
<div className="blob-top-left"></div>
<div className="blob-bottom-right-teal"></div>
<div className="blob-bottom-right-amber"></div>
{/* Video card */}
<div className="video-card">
<div className="video-thumbnail">
{/* Replace src with your doctor image */}
<img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg" alt="Doctor" />
</div>
</div>
{/* Quote */}
<div className="quote-content">
<p className="quote-text">
          "We are absolutely committed to providing the best healthcare
          experience, and we have a team of dedicated doctors who are just as
          committed as we are."
        </p>
<p className="quote-author-name">Dr. Rajesh Sharma,</p>
<p className="quote-author-role">Chief Medical Officer, MediCare</p>
</div>
</section>
{/* SECTION 2: Promo / CTA Banner */}
<section className="promo-section">
<div className="promo-inner">
{/* Replace with your actual image */}
<div className="promo-image-placeholder">Your event / team photo here</div>
<div className="promo-content">
<h2 className="promo-title">
            Transform healthcare with MediWell Health Care Center of Excellence
          </h2>
<p className="promo-desc">
            Looking for the right doctors and expert guidance on your health
            journey? MediCare's Center of Excellence provides a clear, trusted
            path to better health outcomes for you and your family.
          </p>
<a href="#services" className="promo-btn">Learn more about our services</a>
</div>
</div>
</section>
{/*Certificate section*/}
<section className="awards-section">
{/* Header */}
<h2 className="awards-title">Highly rated across the industry</h2>
<p className="awards-desc">
        Our services have garnered many accolades, but we're most proud of
        improving the lives of patients and doctors. We continue to develop
        innovations that help make healthcare better for everyone.
      </p>
<a href="#" className="awards-link">
        View Awards
        <span className="arrow-circle">
<svg viewbox="0 0 16 16"><polyline points="5,3 11,8 5,13"></polyline></svg>
</span>
</a>
{/* Scrolling badges */}
<div className="scroll-wrapper">
<div className="scroll-track" id="scrollTrack">
{/* Badge 1 */}
<div className="badge-card">
<div className="badge badge-silver badge-circle">
<span className="badge-top">Most Trusted</span>
<span className="badge-main">Medicare</span>
<span className="badge-sub">in India</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 2 */}
<div className="badge-card">
<div className="badge badge-gold badge-circle">
<span className="badge-top">Relevant · Accurate</span>
<span className="badge-main">Best<br />Hospital</span>
<span className="badge-sub">Unbiased source</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 3 */}
<div className="badge-card">
<div className="badge badge-dark">
<span className="badge-top">India's</span>
<span className="badge-main">Best<br />Midsize<br />Clinic</span>
<span className="badge-sub">Powered by HealthRank</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 4 */}
<div className="badge-card">
<div className="badge badge-teal-circle badge-circle">
<span className="badge-top">Certified</span>
<span className="badge-main">ONC<br />Health</span>
<span className="badge-sub">Certified Provider</span>
</div>
</div>
{/* Badge 5 */}
<div className="badge-card">
<div className="badge badge-shield">
<span className="badge-top">Best Software</span>
<span className="badge-main">Top<br />50</span>
<span className="badge-sub">Healthcare</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 6 */}
<div className="badge-card">
<div className="badge badge-gradient badge-circle">
<span className="badge-top">Best in</span>
<span className="badge-main">Patient<br />Care</span>
<span className="badge-sub">Behavioral Health</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 7 */}
<div className="badge-card">
<div className="badge badge-square">
<span className="badge-top">Excellence in</span>
<span className="badge-main">Digital<br />Health</span>
<span className="badge-sub">HealthTech Awards</span>
<span className="badge-year">2024</span>
</div>
</div>
{/* Badge 8 */}
<div className="badge-card">
<div className="badge badge-gold badge-circle">
<span className="badge-top">Top Rated</span>
<span className="badge-main">Doctor<br />Portal</span>
<span className="badge-sub">Unbiased Source</span>
<span className="badge-year">2024</span>
</div>
</div>
{/* Badge 9 */}
<div className="badge-card">
<div className="badge badge-light">
<span className="badge-top">Awarded</span>
<span className="badge-main">Best<br />UX</span>
<span className="badge-sub">MedPortal Awards</span>
<span className="badge-year">2025</span>
</div>
</div>
{/* Badge 10 */}
<div className="badge-card">
<div className="badge badge-teal-circle badge-circle">
<span className="badge-top">Drummond</span>
<span className="badge-main">ISO<br />Cert</span>
<span className="badge-sub">Health IT</span>
<span className="badge-year">2025</span>
</div>
</div>
</div>
</div>
</section>
{/* FAQ */}
<section className="faq-section" id="Faq">
<div className="faq-container">
<div className="faq-header">
<h2>Frequently Asked Questions</h2>
<p>Everything you need to know about our hospital management system.</p>
<div className="header-line"></div>
</div>
<div className="faq-accordion">
{/* Question 1 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>How do I book an appointment online?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>To book an appointment, simply go to the "Appointments" section, select your preferred doctor and date, and click "Confirm Booking." You will receive a confirmation notification instantly.</p>
</div>
</div>
{/* Question 2 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>Can I access my medical records digitally?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>Yes! Once you log in to your patient portal, navigate to "My Records." You can view and download your prescriptions, lab reports, and visit history securely.</p>
</div>
</div>
{/* Question 3 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>How do I cancel or reschedule an appointment?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>Go to "My Appointments," select the appointment you wish to change, and click "Reschedule" or "Cancel." We request cancellations be made at least 24 hours in advance.</p>
</div>
</div>
{/* Question 4 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>Is my health data secure on this platform?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>Absolutely. We use industry-standard encryption and strict access controls to ensure that your medical information is only accessible by you and your authorized healthcare providers.</p>
</div>
</div>
{/* Question 5 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>Can I communicate with my doctor through the system?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>Yes, the portal includes a secure messaging feature that allows you to send non-urgent queries to your assigned physician and receive updates on your treatment plan.</p>
</div>
</div>
{/* Question 6 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>How does the billing system work?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>You can view your detailed invoices under the "Billing" tab. Payments can be made online via credit card, insurance claims can be tracked, and digital receipts are issued immediately.</p>
</div>
</div>
{/* Question 7 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>What should I do if I forget my password?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>On the login page, click "Forgot Password." Enter your registered email address, and we will send you a secure link to reset your password instantly.</p>
</div>
</div>
{/* Question 8 */}
<div className="faq-item">
<button className="faq-question" onClick={toggleFaqAnswer}>
<span>Can I manage multiple family members' accounts?</span>
<span className="faq-icon">▼</span>
</button>
<div className="faq-answer">
<p>Yes, you can link family members (like children or elderly parents) to your primary account under "Family Management" to book appointments and track records for them.</p>
</div>
</div>
</div>
</div>
</section>
{/* FOOTER */}
<footer className="footer">
<div className="footer-top">
<div className="footer-col footer-brand">
<div className="logo">
<span className="mediwell footer-mediwell">MediWell</span>
<span className="healthcare footer-healthcare">HEALTHCARE</span>
</div>
<p className="footer-about">
            MediWell Healthcare delivers secure, AI-powered solutions that connect
            patients, providers and payers — built for the demands of modern
            care.
          </p>
<button id="openFeedbackBtn" style={{background: "#16a085", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "24px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer", margin: "10px 0 16px"}}>
            💬 Give Feedback
          </button>
<div className="footer-socials">
<a href="#" aria-label="Facebook">
<span className="material-symbols-outlined">thumb_up</span>
</a>
<a href="#" aria-label="Twitter / X">
<span className="material-symbols-outlined">alternate_email</span>
</a>
<a href="#" aria-label="Instagram">
<span className="material-symbols-outlined">photo_camera</span>
</a>
<a href="#" aria-label="LinkedIn">
<span className="material-symbols-outlined">business_center</span>
</a>
</div>
</div>
<div className="footer-col">
<h4>Quick Links</h4>
<a href="#benefits">Benefits</a>
<a href="#solutions">Solutions</a>
<a href="#services">Services</a>
<a href="#doctors">Doctors</a>
<a href="#resources">Resources</a>
</div>
<div className="footer-col">
<h4>Our Services</h4>
<a href="#services">Full Body Checkup</a>
<a href="#services">Imaging & Radiology</a>
<a href="#services">Heart Related</a>
<a href="#services">Surgical Services</a>
<a href="#services">Eye Related</a>
</div>
<div className="footer-col">
<h4>Contact Us</h4>
<p className="footer-contact-item">
<span className="material-symbols-outlined">location_on</span>
            Sector 4, Bokaro Steel City, Jharkhand 827004
          </p>
<p className="footer-contact-item">
<span className="material-symbols-outlined">call</span>
            1800 11 1565
          </p>
<p className="footer-contact-item">
<span className="material-symbols-outlined">mail</span>
            support@mediwellhealthcare.com
          </p>
</div>
</div>
<div className="footer-bottom">
<p>© 2026 MediWell Healthcare. All rights reserved.</p>
<div className="footer-bottom-links">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
</div>
</div>
{/* Back to top button */}
<button className="back-to-top" id="backToTop" aria-label="Back to top">
<span className="material-symbols-outlined">keyboard_arrow_up</span>
</button>
</footer>
{/* Feedback modal */}
<div id="feedbackModal" style={{display: "none", position: "fixed", inset: "0", background: "rgba(0, 0, 0, 0.5)", zIndex: "3000", alignItems: "center", justifyContent: "center", padding: "16px"}}>
<div style={{background: "#fff", borderRadius: "14px", padding: "26px 24px", width: "100%", maxWidth: "460px", maxHeight: "88vh", overflowY: "auto", position: "relative"}}>
<button id="feedbackCloseBtn" aria-label="Close" style={{position: "absolute", top: "14px", right: "14px", width: "30px", height: "30px", border: "none", background: "#f1f5f5", color: "#444", borderRadius: "50%", fontSize: "18px", lineHeight: "1", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"}}>
          ×
        </button>
<h3 style={{margin: "0 0 4px"}}>Tell us what you think</h3>
<p style={{fontSize: "13px", color: "#777", margin: "0 0 18px"}}>
          10 quick questions, rate each 1 (poor) to 5 (excellent).
        </p>
<div id="feedbackQuestions"></div>
<div style={{marginTop: "6px"}}>
<label style={{fontSize: "13.5px", fontWeight: "600", display: "block", marginBottom: "6px"}}>Anything else you'd like to share?</label>
<textarea id="feedbackComments" rows="4" maxLength="700" placeholder="Up to 100 words..." style={{width: "100%", boxSizing: "border-box", padding: "10px 12px", border: "1px solid #ddd", borderRadius: "8px", fontFamily: "inherit", fontSize: "13.5px", resize: "vertical"}}></textarea>
<div id="feedbackWordCount" style={{fontSize: "12px", color: "#999", textAlign: "right", marginTop: "4px"}}>
            0 / 100 words
          </div>
</div>
<div id="feedbackError" style={{display: "none", color: "#d33", fontSize: "13px", marginTop: "10px"}}></div>
<div style={{display: "flex", gap: "10px", marginTop: "18px"}}>
<button id="feedbackCancelBtn" style={{flex: "1", padding: "11px", border: "1px solid #ddd", background: "#fff", borderRadius: "24px", fontWeight: "600", cursor: "pointer"}}>
            Cancel
          </button>
<button id="feedbackSubmitBtn" style={{flex: "1", padding: "11px", border: "none", background: "#16a085", color: "#fff", borderRadius: "24px", fontWeight: "600", cursor: "pointer"}}>
            Submit
          </button>
</div>
</div>
</div>
<div className="overlay" id="overlay"></div>


      </div>
    </>
  );
}
