import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import EmergencyPage from './pages/emergency.jsx';
import ContactPage from './pages/contact.jsx';
import RegisterPage from './pages/register.jsx';
import RequestDemoPage from './pages/request-demo.jsx';
import AppointmentPage from './pages/appointment.jsx';
import PaymentPage from './pages/payment.jsx';
import PatientPage from './pages/patient.jsx';
import RegisterPPage from './pages/register-p.jsx';
import RegisterNPage from './pages/register-n.jsx';
import IndexPage from './pages/index.jsx';
import DoctorPage from './pages/doctor.jsx';
import Error404Page from './pages/404.jsx';
import InsurancePage from './pages/insurance.jsx';
import BillingPage from './pages/billing.jsx';
import Error403Page from './pages/403.jsx';
import LoginPage from './pages/login.jsx';

function NavigationBridge(){
  const navigate=useNavigate();
  const location=useLocation();
  useEffect(()=>{
    window.__mediwellNavigate=(path)=>{
      if(!path) return;
      const clean=String(path).replace(/\.html(?=($|[?#]))/,'');
      if(clean.startsWith('http')) { window.location.href=clean; return; }
      if(clean.startsWith('#')) { document.querySelector(clean)?.scrollIntoView({behavior:'smooth'}); return; }
      const u=new URL(clean,window.location.origin);
      navigate(u.pathname+u.search+u.hash);
    };
    window.__mediwellRun=(code)=>{
      try {
        const source = "return (function(){\n" + String(code || '') + "\n}).call(window);";
        return Function('window','document', source)(window,document);
      } catch(e) {
        console.error('MediWell legacy handler error:',e);
      }
    };
  },[navigate,location.pathname]);
  return null;
}
export default function App(){
 return <><NavigationBridge/><Routes>
  <Route path="/emergency" element={<EmergencyPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/request-demo" element={<RequestDemoPage />} />
  <Route path="/appointment" element={<AppointmentPage />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/patient" element={<PatientPage />} />
  <Route path="/register-p" element={<RegisterPPage />} />
  <Route path="/register-n" element={<RegisterNPage />} />
  <Route path="/" element={<IndexPage />} />
  <Route path="/index" element={<IndexPage />} />
  <Route path="/doctor" element={<DoctorPage />} />
  <Route path="/404" element={<Error404Page />} />
  <Route path="/insurance" element={<InsurancePage />} />
  <Route path="/billing" element={<BillingPage />} />
  <Route path="/403" element={<Error403Page />} />
  <Route path="/login" element={<LoginPage />} />
  {/* Legacy .html URLs kept as aliases so every original link continues to work. */}
  <Route path="/emergency.html" element={<EmergencyPage />} />
  <Route path="/contact.html" element={<ContactPage />} />
  <Route path="/register.html" element={<RegisterPage />} />
  <Route path="/request-demo.html" element={<RequestDemoPage />} />
  <Route path="/appointment.html" element={<AppointmentPage />} />
  <Route path="/payment.html" element={<PaymentPage />} />
  <Route path="/patient.html" element={<PatientPage />} />
  <Route path="/register-p.html" element={<RegisterPPage />} />
  <Route path="/register-n.html" element={<RegisterNPage />} />
  <Route path="/index.html" element={<IndexPage />} />
  <Route path="/doctor.html" element={<DoctorPage />} />
  <Route path="/insurance.html" element={<InsurancePage />} />
  <Route path="/billing.html" element={<BillingPage />} />
  <Route path="/403.html" element={<Error403Page />} />
  <Route path="/404.html" element={<Error404Page />} />
  <Route path="/login.html" element={<LoginPage />} />
  <Route path="*" element={<Error404Page />}/>
 </Routes></>;
}
