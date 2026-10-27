import React, { useEffect } from 'react';

const PAGE_TITLE = "MediWell Health Care \u2014 Doctor Registration";
const PAGE_CSS = "\n      @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap\");\n\n      /* @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap\"); */\n\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n\n      :root {\n        --teal: #0f766e;\n        --teal-lt: #ccfbf1;\n        --teal-dk: #0d5c56;\n        --rose: #e11d48;\n        --slate-900: #0f172a;\n        --slate-700: #334155;\n        --slate-400: #94a3b8;\n        --slate-200: #e2e8f0;\n        --slate-50: #f8fafc;\n        --white: #ffffff;\n      }\n\n      body {\n        font-family: \"Inter\", sans-serif;\n        background: linear-gradient(\n          135deg,\n          #eef9f8 0%,\n          #f0f9ff 50%,\n          #fff7ed 100%\n        );\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n\n      /* \u2500\u2500 NAV \u2500\u2500 */\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 48px;\n        background: rgba(255, 255, 255, 0.85);\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid var(--slate-200);\n        position: sticky;\n        top: 0;\n        z-index: 100;\n      }\n      .logo {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        text-decoration: none;\n      }\n      .logo-icon {\n        width: 36px;\n        height: 36px;\n        background: var(--teal);\n        border-radius: 10px;\n        display: grid;\n        place-items: center;\n      }\n      .logo-icon svg {\n        width: 20px;\n        height: 20px;\n        fill: white;\n      }\n      .logo-text {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .nav-link {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n      }\n      .nav-link a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .nav-link a:hover {\n        text-decoration: underline;\n      }\n\n      /* \u2500\u2500 PAGE WRAPPER \u2500\u2500 */\n      main {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0;\n      }\n\n      .page-header {\n        text-align: center;\n        margin-bottom: 36px;\n      }\n      .page-header h1 {\n        font-family: \"Lora\", serif;\n        font-size: 2rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .page-header p {\n        margin-top: 6px;\n        font-size: 0.95rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 STEPPER \u2500\u2500 */\n      .stepper {\n        display: flex;\n        align-items: center;\n        gap: 0;\n        margin-bottom: 40px;\n      }\n      .step {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        color: var(--slate-400);\n        cursor: default;\n      }\n      .step.active {\n        color: var(--teal);\n      }\n      .step.complete {\n        color: var(--teal);\n      }\n\n      .step-num {\n        width: 34px;\n        height: 34px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        display: grid;\n        place-items: center;\n        font-weight: 600;\n        font-size: 0.875rem;\n        background: var(--white);\n        transition: all 0.3s;\n      }\n      .step.active .step-num {\n        border-color: var(--teal);\n        color: var(--teal);\n      }\n      .step.complete .step-num {\n        border-color: var(--teal);\n        background: var(--teal);\n        color: white;\n      }\n\n      .step-line {\n        width: 80px;\n        height: 2px;\n        background: var(--slate-200);\n        margin: 0 4px;\n        transition: background 0.3s;\n      }\n      .step-line.done {\n        background: var(--teal);\n      }\n\n      /* \u2500\u2500 CARD \u2500\u2500 */\n      .card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 40px 48px;\n        width: 100%;\n        max-width: 780px;\n      }\n\n      /* \u2500\u2500 FORM GRID \u2500\u2500 */\n      .form-grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 22px 28px;\n      }\n      .col-span-2 {\n        grid-column: span 2;\n      }\n\n      .field {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n      .field label {\n        font-size: 0.8125rem;\n        font-weight: 500;\n        color: var(--slate-700);\n      }\n      .field label .req {\n        color: var(--rose);\n        margin-left: 2px;\n      }\n\n      .field input,\n      .field select,\n      .field textarea {\n        width: 100%;\n        padding: 10px 14px;\n        border: 1.5px solid var(--slate-200);\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-family: inherit;\n        color: var(--slate-900);\n        background: var(--slate-50);\n        outline: none;\n        transition:\n          border-color 0.2s,\n          box-shadow 0.2s;\n        appearance: none;\n      }\n      .field input:focus,\n      .field select:focus,\n      .field textarea:focus {\n        border-color: var(--teal);\n        background: white;\n        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);\n      }\n      .field input.error,\n      .field select.error {\n        border-color: var(--rose);\n      }\n      .field .err-msg {\n        font-size: 0.75rem;\n        color: var(--rose);\n        margin-top: 2px;\n        display: none;\n      }\n      .field.has-error .err-msg {\n        display: block;\n      }\n      .field.has-error input,\n      .field.has-error select {\n        border-color: var(--rose);\n      }\n\n      .field .input-wrap {\n        position: relative;\n      }\n      .field .input-wrap input {\n        padding-right: 40px;\n      }\n      .field .input-wrap .icon {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        color: var(--slate-400);\n        pointer-events: none;\n      }\n\n      select {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-position: right 12px center;\n        padding-right: 36px;\n      }\n\n      /* \u2500\u2500 SECTION LABEL \u2500\u2500 */\n      .section-label {\n        font-size: 0.7rem;\n        font-weight: 700;\n        letter-spacing: 0.1em;\n        text-transform: uppercase;\n        color: var(--teal);\n        border-bottom: 1px solid var(--slate-200);\n        padding-bottom: 8px;\n        margin-bottom: 20px;\n      }\n\n      /* \u2500\u2500 RADIO & CHECKBOX \u2500\u2500 */\n      .radio-group,\n      .check-group {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 12px;\n      }\n      .radio-option,\n      .check-option {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        cursor: pointer;\n      }\n      .radio-option input[type=\"radio\"],\n      .check-option input[type=\"checkbox\"] {\n        display: none;\n      }\n      .radio-option .rb,\n      .check-option .cb {\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        background: var(--slate-50);\n        display: grid;\n        place-items: center;\n        flex-shrink: 0;\n        transition: all 0.2s;\n      }\n      .check-option .cb {\n        border-radius: 5px;\n      }\n      .radio-option input:checked ~ .rb {\n        border-color: var(--teal);\n      }\n      .radio-option input:checked ~ .rb::after {\n        content: \"\";\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb {\n        border-color: var(--teal);\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb::after {\n        content: \"\";\n        width: 10px;\n        height: 7px;\n        border-left: 2px solid white;\n        border-bottom: 2px solid white;\n        transform: rotate(-45deg) translateY(-1px);\n      }\n\n      /* \u2500\u2500 STEP PANELS \u2500\u2500 */\n      .step-panel {\n        display: none;\n      }\n      .step-panel.active {\n        display: block;\n      }\n\n      /* \u2500\u2500 PRICING CARD \u2500\u2500 */\n      .pricing-box {\n        background: var(--slate-50);\n        border: 1.5px solid var(--slate-200);\n        border-radius: 14px;\n        padding: 24px 28px;\n        margin-bottom: 28px;\n      }\n      .pricing-box h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.1rem;\n        color: var(--slate-900);\n        margin-bottom: 4px;\n      }\n      .pricing-box .sub {\n        font-size: 0.8rem;\n        color: var(--slate-400);\n        margin-bottom: 18px;\n      }\n      .pricing-row {\n        display: flex;\n        justify-content: space-between;\n        font-size: 0.9rem;\n        color: var(--slate-700);\n        padding: 10px 0;\n        border-bottom: 1px dashed var(--slate-200);\n      }\n      .pricing-row.total {\n        border-bottom: none;\n        font-weight: 700;\n        font-size: 1rem;\n        color: var(--slate-900);\n        padding-top: 14px;\n      }\n      .pricing-row.total .price-val {\n        color: var(--teal);\n      }\n\n      /* \u2500\u2500 SUBSCRIPTION \u2500\u2500 */\n      .subscribe-wrap {\n        margin-bottom: 28px;\n      }\n      .subscribe-wrap p {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        margin-bottom: 10px;\n        font-weight: 500;\n      }\n      .subscribe-wrap .note {\n        font-size: 0.75rem;\n        color: var(--slate-400);\n        margin-top: 8px;\n        line-height: 1.5;\n      }\n\n      /* \u2500\u2500 ACTIONS \u2500\u2500 */\n      .actions {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        margin-top: 32px;\n      }\n      .btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px 32px;\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        border: none;\n        transition: all 0.2s;\n        text-decoration: none;\n      }\n      .btn-primary {\n        background: var(--teal);\n        color: white;\n      }\n      .btn-primary:hover {\n        background: var(--teal-dk);\n        transform: translateY(-1px);\n        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);\n      }\n      .btn-outline {\n        background: transparent;\n        color: var(--teal);\n        border: 1.5px solid var(--teal);\n      }\n      .btn-outline:hover {\n        background: var(--teal-lt);\n      }\n\n      /* \u2500\u2500 SUCCESS \u2500\u2500 */\n      #step-success {\n        text-align: center;\n        padding: 20px 0;\n      }\n      .success-icon {\n        width: 72px;\n        height: 72px;\n        background: var(--teal-lt);\n        border-radius: 50%;\n        display: grid;\n        place-items: center;\n        margin: 0 auto 20px;\n      }\n      .success-icon svg {\n        width: 36px;\n        height: 36px;\n        stroke: var(--teal);\n      }\n      #step-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      #step-success p {\n        font-size: 0.9rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 PAGE VIEWS \u2500\u2500 */\n      .page-view {\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        padding: 40px 16px 60px;\n        flex: 1;\n      }\n      .page-view.active {\n        display: flex;\n      }\n\n      /* \u2500\u2500 SIGN IN CARD \u2500\u2500 */\n      .signin-card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 44px 48px;\n        width: 100%;\n        max-width: 460px;\n      }\n      .signin-logo {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        margin-bottom: 28px;\n      }\n      .signin-logo .logo-icon {\n        width: 44px;\n        height: 44px;\n        border-radius: 12px;\n      }\n      .signin-logo .logo-icon svg {\n        width: 24px;\n        height: 24px;\n      }\n      .signin-logo span {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n\n      .signin-title {\n        text-align: center;\n        margin-bottom: 30px;\n      }\n      .signin-title h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .signin-title p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n\n      .signin-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 18px;\n        margin-bottom: 10px;\n      }\n\n      .pw-wrap {\n        position: relative;\n      }\n      .pw-wrap input {\n        padding-right: 44px;\n      }\n      .pw-toggle {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        background: none;\n        border: none;\n        cursor: pointer;\n        color: var(--slate-400);\n        padding: 0;\n        display: grid;\n        place-items: center;\n      }\n      .pw-toggle:hover {\n        color: var(--teal);\n      }\n\n      .forgot-row {\n        text-align: right;\n        margin-bottom: 22px;\n      }\n      .forgot-row a {\n        font-size: 0.8125rem;\n        color: var(--teal);\n        text-decoration: none;\n        font-weight: 500;\n      }\n      .forgot-row a:hover {\n        text-decoration: underline;\n      }\n\n      .btn-full {\n        width: 100%;\n        justify-content: center;\n        padding: 13px 20px;\n        font-size: 0.95rem;\n      }\n\n      .divider {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin: 22px 0;\n        color: var(--slate-400);\n        font-size: 0.8rem;\n      }\n      .divider::before,\n      .divider::after {\n        content: \"\";\n        flex: 1;\n        height: 1px;\n        background: var(--slate-200);\n      }\n\n      .social-btns {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n      .btn-social {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        padding: 11px 20px;\n        border-radius: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        font-family: inherit;\n        cursor: pointer;\n        border: 1.5px solid var(--slate-200);\n        background: white;\n        color: var(--slate-700);\n        transition: all 0.2s;\n      }\n      .btn-social:hover {\n        border-color: var(--teal);\n        background: var(--teal-lt);\n        color: var(--teal);\n      }\n      .btn-social svg {\n        width: 18px;\n        height: 18px;\n        flex-shrink: 0;\n      }\n\n      .register-prompt {\n        text-align: center;\n        margin-top: 24px;\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n      .register-prompt a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .register-prompt a:hover {\n        text-decoration: underline;\n      }\n\n      /* forgot password modal */\n      .modal-overlay {\n        display: none;\n        position: fixed;\n        inset: 0;\n        background: rgba(15, 23, 42, 0.4);\n        backdrop-filter: blur(4px);\n        z-index: 200;\n        place-items: center;\n      }\n      .modal-overlay.open {\n        display: grid;\n      }\n      .modal {\n        background: white;\n        border-radius: 18px;\n        padding: 36px 40px;\n        width: 100%;\n        max-width: 420px;\n        margin: 16px;\n        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n        animation: popIn 0.25s ease;\n      }\n      @keyframes popIn {\n        from {\n          transform: scale(0.92);\n          opacity: 0;\n        }\n        to {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      .modal h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .modal p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n        margin-bottom: 22px;\n      }\n      .modal-actions {\n        display: flex;\n        gap: 10px;\n        margin-top: 20px;\n      }\n      .modal-actions .btn {\n        flex: 1;\n        justify-content: center;\n      }\n\n      /* sign-in success */\n      .signin-success {\n        text-align: center;\n        padding: 16px 0;\n      }\n      .signin-success .success-icon {\n        margin: 0 auto 20px;\n      }\n      .signin-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      .signin-success p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', `
  renderBackButton(90);
  let currentStep=1;
  function generateMedicalRegistrationNumber(){return 'MW-'+new Date().getFullYear()+'-'+Math.floor(100000+Math.random()*900000);}
  function ensureMedicalRegistrationNumber(){
    const a=document.getElementById('guardianFirst'), b=document.getElementById('medicalRegistrationNumber');
    const value=(a&&a.value.trim())||(b&&b.value.trim())||generateMedicalRegistrationNumber();
    if(a&&!a.value.trim()) a.value=value; if(b&&!b.value.trim()) b.value=value; return value;
  }
  function showPage(page){
    document.getElementById('view-register').classList.toggle('active',page!=='signin');
    document.getElementById('view-signin').classList.toggle('active',page==='signin');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function togglePw(){const i=document.getElementById('si-password');if(i)i.type=i.type==='password'?'text':'password';}
  async function doSignIn(){
    const email=document.getElementById('si-email').value.trim(), pw=document.getElementById('si-password').value;
    const err=document.getElementById('si-pw-err'); if(err)err.style.display='none';
    try{const result=await login(email,pw);if(result.data.role!=='DOCTOR'){await logout();throw new Error('This sign-in is for doctor accounts only.');}window.location.href='/doctor';}
    catch(e){if(err){err.textContent=e.message;err.style.display='block';}}
  }
  let forgotStep='request', resendTimer=null;
  function openForgot(){forgotStep='request';document.getElementById('forgot-modal')?.classList.add('open');}
  function closeForgot(){document.getElementById('forgot-modal')?.classList.remove('open');}
  async function sendReset(){
    const email=document.getElementById('forgot-email')?.value.trim(), err=document.getElementById('forgot-err');
    try{
      if(forgotStep==='request'){
        if(!isValidEmail(email)){throw new Error('Please enter a valid email.');}
        const result=await forgotPassword(email); forgotStep='reset';
        if(result.devResetCode) console.log('MediWell password reset code:',result.devResetCode);
        document.getElementById('forgot-desc').textContent='Reset code sent. Check the browser console for the demo code.';
        document.getElementById('forgot-email-field').style.display='none';
        document.getElementById('forgot-code-field').style.display='block';
        document.getElementById('forgot-newpw-field').style.display='block';
        document.getElementById('forgot-action-btn').textContent='Reset Password';
      }else{
        const code=document.getElementById('forgot-code').value.trim(), pw=document.getElementById('forgot-newpw').value;
        await resetPassword(email,code,pw); closeForgot(); alert('Password updated. You can now sign in.');
      }
    }catch(e){if(err){err.textContent=e.message;err.style.display='block';}}
  }
  function validateStep(step){
    let ok=true;
    const req=(id,test)=>{const el=document.getElementById(id);if(!el)return;const field=el.closest('.field');const fail=test?!test(el.value):!String(el.value||'').trim();field?.classList.toggle('has-error',fail);if(fail)ok=false;};
    if(step===1){ensureMedicalRegistrationNumber();req('firstName');req('gender');req('dob');req('guardianFirst');req('email',v=>isValidEmail(v));req('pinCode',v=>/^\\d{6}$/.test(v.trim()));req('country');req('phone');req('regPassword',v=>isStrongPassword(v));}
    if(step===2){req('department');req('apptDate');req('medicalRegistrationNumber');}
    return ok;
  }
  function buildDoctorSummary(){
    ensureMedicalRegistrationNumber();
    const box=document.querySelector('#step-3 .pricing-box'); if(!box)return;
    const val=id=>document.getElementById(id)?.value||'Not provided';
    box.innerHTML='<h3>Doctor Registration Summary</h3><p class="sub">Please review the details below before submitting your profile.</p>'+
      [['Doctor name',val('firstName')+' '+val('lastName')],['Medical registration no.',val('medicalRegistrationNumber')],['Medical council',val('guardianLast')],['Professional email',val('email')],['Phone',val('phone')],['Primary specialty',val('department')],['Clinical experience',val('apptDate')+' years'],['Qualification',val('bloodGroup')],['Practice PIN',val('pinCode')]].map(x=>'<div class="pricing-row"><span>'+x[0]+'</span><span>'+x[1]+'</span></div>').join('');
    const sub=document.querySelector('#step-3 .subscribe-wrap');if(sub)sub.style.display='none';
  }
  function goToStep(next){if(next>currentStep&&!validateStep(currentStep))return;if(next===3)buildDoctorSummary();document.getElementById('step-'+currentStep)?.classList.remove('active');currentStep=next;document.getElementById('step-'+currentStep)?.classList.add('active');updateStepper();window.scrollTo({top:0,behavior:'smooth'});}
  function updateStepper(){for(let i=1;i<=3;i++){const x=document.getElementById('s'+i);if(!x)continue;x.classList.remove('active','complete');if(i<currentStep)x.classList.add('complete');else if(i===currentStep)x.classList.add('active');}for(let i=1;i<=2;i++)document.getElementById('l'+i)?.classList.toggle('done',i<currentStep);}
  async function submitForm(){
    if(!validateStep(1)||!validateStep(2))return;
    const first=document.getElementById('firstName').value.trim()||'Doctor', last=document.getElementById('lastName').value.trim();
    const fields={fullName:'Dr. '+first+(last?' '+last:''),email:document.getElementById('email').value.trim(),password:document.getElementById('regPassword').value,phone:document.getElementById('phone').value.trim(),firstName:first,lastName:last,gender:document.getElementById('gender').value||null,dob:document.getElementById('dob').value||null,department:document.getElementById('department').value||null,specialization:document.getElementById('specialization').value||null,medicalRegistrationNumber:ensureMedicalRegistrationNumber(),experienceYears:document.getElementById('apptDate').value||null,qualifications:document.getElementById('bloodGroup').value||null,clinicLocation:document.getElementById('insurance').value.trim()||null,bio:document.getElementById('notes').value.trim()||null,consultationFee:document.getElementById('consultationFee').value||800};
    try{
      const result=await registerDoctor(fields);
      document.querySelectorAll('.step-panel').forEach(p=>p.classList.remove('active'));document.getElementById('step-success').classList.add('active');document.querySelector('.stepper').style.opacity='0';
      const reg=result.data?.medicalRegistrationNumber||fields.medicalRegistrationNumber; alert('Doctor registration successful. Medical Registration No.: '+reg+'\\nPlease sign in.');
      setTimeout(()=>window.location.href='/login',700);
    }catch(e){alert('Registration failed: '+e.message);}
  }
  function resetForm(){location.reload();}
  window.addEventListener('load',()=>ensureMedicalRegistrationNumber());
  (async function guard(){try{const r=await getCurrentUser();if(r.data.role==='DOCTOR')window.location.href='/doctor';}catch(e){}})();
`];

export default function RegisterPage() {
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
{/* NAV */}
<nav id="site-nav">
<a className="logo" href="#">
<div className="logo-icon">
<svg viewbox="0 0 24 24">
<path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14h-2v-5H9v-2h2V7h2v2h2v2h-2v5z"></path>
</svg>
</div>
<span className="logo-text">MediWell Health care</span>
</a>
<span className="nav-link">Already registered? <a onClick={() => window.__mediwellRun("showPage('signin')")}>Sign In</a></span>
</nav>
{/* SIGN IN PAGE VIEW */}
<div className="page-view" id="view-signin">
<div className="page-header">
<h1>Welcome Back</h1>
<p>Sign in to your MediCare account</p>
</div>
<div className="signin-card">
{/* Sign-in form */}
<div id="signin-form-wrap">
<div className="signin-fields">
<div className="field">
<label>Email Address <span className="req">*</span></label>
<input type="email" id="si-email" placeholder="patient@example.com" />
<span className="err-msg">Please enter a valid email</span>
</div>
<div className="field">
<label>Password <span className="req">*</span></label>
<div className="pw-wrap">
<input type="password" id="si-password" placeholder="Enter your password" />
<button className="pw-toggle" onClick={() => window.__mediwellRun("togglePw()")} type="button" id="pw-toggle-btn">
<svg id="eye-icon" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
<span className="err-msg" id="si-pw-err">Password is required</span>
</div>
</div>
<div className="forgot-row">
<a onClick={() => window.__mediwellRun("openForgot()")}>Forgot password?</a>
</div>
<button className="btn btn-primary btn-full" onClick={() => window.__mediwellRun("doSignIn()")}>
            Sign In
          </button>
<div className="divider">or continue with</div>
<div className="social-btns">
<button className="btn-social">
<svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
              Continue with Google
            </button>
<button className="btn-social">
<svg viewbox="0 0 24 24" fill="#0078D4">
<path d="M21.579 6.855c.14.42.21.865.21 1.33C21.789 13.67 17.566 18 12 18a9.86 9.86 0 01-5.032-1.378A7.03 7.03 0 0012 15.13a3.514 3.514 0 01-3.28-2.437c.214.04.434.063.66.063.32 0 .63-.043.924-.124A3.513 3.513 0 016.87 9.28v-.044c.446.248.956.397 1.498.414a3.51 3.51 0 01-1.085-4.686 9.963 9.963 0 007.23 3.665 3.956 3.956 0 01-.089-.8A3.511 3.511 0 0117.935 4.5a3.5 3.5 0 012.56 1.107 7.03 7.03 0 002.228-.852 3.525 3.525 0 01-1.543 1.942 7.01 7.01 0 002.018-.548 7.13 7.13 0 01-1.619 1.706z"></path>
</svg>
              Continue with Microsoft
            </button>
</div>
<div className="register-prompt">
            Don't have an account?
            <a onClick={() => window.__mediwellRun("showPage('register')")}>Register here</a>
</div>
</div>
{/* Sign-in success */}
<div className="signin-success" id="signin-success" style={{display: "none"}}>
<div className="success-icon" style={{width: "72px", height: "72px", background: "var(--teal-lt)", borderRadius: "50%", display: "grid", placeItems: "center"}}>
<svg width="36" height="36" fill="none" stroke="var(--teal)" stroke-width="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<h2>Welcome Back!</h2>
<p>
            You've signed in successfully.<br />Redirecting to your dashboard…
          </p>
<button className="btn btn-outline btn-full" style={{marginTop: "24px"}} onClick={() => window.__mediwellRun("window.location.href = '/login'")}>
            Continue to Dashboard →
          </button>
</div>
</div>
</div>
{/* FORGOT PASSWORD MODAL */}
<div className="modal-overlay" id="forgot-modal">
<div className="modal">
<h3 id="forgot-title">Reset Password</h3>
<p id="forgot-desc">
          Enter your registered email and we'll send you a reset code.
        </p>
<div className="field" id="forgot-email-field">
<label>Email Address <span className="req">*</span></label>
<input type="email" id="forgot-email" placeholder="doctor@example.com" />
<span className="err-msg" id="forgot-err" style={{display: "none"}}>Please enter a valid email</span>
</div>
<div className="field" id="forgot-code-field" style={{display: "none"}}>
<label>Reset Code (OTP) <span className="req">*</span></label>
<input type="text" id="forgot-code" maxLength="6" inputMode="numeric" placeholder="6-digit code" />
<span className="err-msg" id="forgot-resend" style={{display: "block", color: "#0f766e", cursor: "pointer", textDecoration: "underline"}} onClick={() => window.__mediwellRun("resendCode()")}>Resend code</span>
</div>
<div className="field" id="forgot-newpw-field" style={{display: "none"}}>
<label>New Password <span className="req">*</span></label>
<input type="password" id="forgot-newpw" placeholder="At least 8 characters" />
<span className="err-msg" id="forgot-newpw-hint" style={{display: "block", color: "#888"}}>At least 8 characters, with an uppercase, lowercase, number, and
            special character.</span>
</div>
<div className="modal-actions">
<button className="btn btn-outline" onClick={() => window.__mediwellRun("closeForgot()")}>
            Cancel
          </button>
<button className="btn btn-primary" id="forgot-action-btn" onClick={() => window.__mediwellRun("sendReset()")}>
            Send Reset Code
          </button>
</div>
</div>
</div>
{/* REGISTRATION PAGE VIEW */}
<main id="view-register" className="page-view active">
<div className="page-header">
<h1>Doctor Registration</h1>
<p>Complete the steps below to create your verified doctor profile</p>
</div>
{/* STEPPER */}
<div className="stepper">
<div className="step active" id="s1">
<div className="step-num">1</div>
<span className="step-label">Professional Profile</span>
</div>
<div className="step-line" id="l1"></div>
<div className="step" id="s2">
<div className="step-num">2</div>
<span className="step-label">Practice Details</span>
</div>
<div className="step-line" id="l2"></div>
<div className="step" id="s3">
<div className="step-num">3</div>
<span className="step-label">Confirm & Submit</span>
</div>
</div>
{/* CARD */}
<div className="card">
{/* ── STEP 1 ── */}
<div className="step-panel active" id="step-1">
<p className="section-label">Doctor Profile</p>
<div className="form-grid">
<div className="field">
<label>First Name <span className="req">*</span></label>
<input type="text" id="firstName" placeholder="e.g. Ananya" />
<span className="err-msg">First name is required</span>
</div>
<div className="field">
<label>Last Name</label>
<input type="text" id="lastName" placeholder="e.g. Sharma" />
</div>
<div className="field">
<label>Gender <span className="req">*</span></label>
<select id="gender">
<option value="">Select gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
<option>Prefer not to say</option>
</select>
<span className="err-msg">Please select gender</span>
</div>
<div className="field">
<label>Date of Birth <span className="req">*</span></label>
<div className="input-wrap">
<input type="date" id="dob" />
<span className="icon calendar-icon" aria-hidden="true">
<img src="/calendar-logo.png" alt="" />
</span>
</div>
<span className="err-msg">Please enter date of birth</span>
</div>
<div className="field">
<label>Medical Registration Number <span className="req">*</span></label>
<input type="text" id="guardianFirst" placeholder="e.g. MCI-123456" />
<span className="err-msg">Medical registration number is required</span>
</div>
<div className="field">
<label>Medical Council / Issuing Authority</label>
<input type="text" id="guardianLast" placeholder="e.g. National Medical Commission" />
</div>
<div className="field col-span-2">
<label>Professional Email Address <span className="req">*</span></label>
<input type="email" id="email" placeholder="doctor@hospital.com" />
<span className="err-msg">Please enter a valid email</span>
</div>
<div className="field col-span-2">
<label>Password <span className="req">*</span></label>
<input type="password" id="regPassword" placeholder="e.g. MediWell@2026" />
<span className="err-msg" style={{display: "block", color: "#888"}}>8+ characters, with an uppercase letter, a lowercase letter, a
                number, and a special character.</span>
</div>
<div className="field">
<label>Practice Location PIN Code <span className="req">*</span></label>
<input type="text" id="pinCode" maxLength="6" placeholder="6-digit pin" />
<span className="err-msg">Enter a valid 6-digit pin</span>
</div>
<div className="field">
<label>Country <span className="req">*</span></label>
<select id="country">
<option value="">Select country</option>
<option>India</option>
<option>United States</option>
<option>United Kingdom</option>
<option>Canada</option>
<option>Australia</option>
<option>Other</option>
</select>
<span className="err-msg">Please select a country</span>
</div>
<div className="field">
<label>Time Zone <span className="req">*</span></label>
<select id="timezone">
<option value="IST">
                  IST — Indian Standard Time (GMT +5:30)
                </option>
<option value="UTC">UTC — Coordinated Universal Time</option>
<option value="EST">
                  EST — Eastern Standard Time (GMT −5)
                </option>
<option value="PST">
                  PST — Pacific Standard Time (GMT −8)
                </option>
</select>
</div>
<div className="field">
<label>Phone Number (with country code)
                <span className="req">*</span></label>
<input type="tel" id="phone" placeholder="+91 98765 43210" />
<span className="err-msg">Phone number is required</span>
</div>
</div>
<div className="actions">
<button className="btn btn-primary" onClick={() => window.__mediwellRun("goToStep(2)")}>
              Next →
            </button>
</div>
</div>
{/* ── STEP 2 ── */}
<div className="step-panel" id="step-2">
<p className="section-label">Clinical Practice Details</p>
<div className="form-grid">
<div className="field">
<label>Primary Specialty <span className="req">*</span></label>
<select id="department">
<option value="">Select specialty</option>
<option>General Medicine</option>
<option>Cardiology</option>
<option>Orthopaedics</option>
<option>Paediatrics</option>
<option>Neurology</option>
<option>Gynaecology</option>
<option>Dermatology</option>
<option>ENT</option>
</select>
<span className="err-msg">Please select your primary specialty</span>
</div>
<div className="field">
<label>Specialization / Title</label>
<input type="text" id="specialization" placeholder="e.g. Interventional Cardiologist" />
</div>
<div className="field col-span-2">
<label>Medical Registration Number <span className="req">*</span></label>
<input type="text" id="medicalRegistrationNumber" placeholder="e.g. MCI-2024-10234" />
<span className="err-msg" style={{display: "block", color: "#888"}}>Registration is limited to pre-verified doctors - contact the
                hospital administrator if you don't have a number.</span>
</div>
<div className="field">
<label>Years of Clinical Experience <span className="req">*</span></label>
<div className="input-wrap">
<input type="number" id="apptDate" min="0" max="70" placeholder="e.g. 8" />
<span className="icon calendar-icon" aria-hidden="true">
<img src="/calendar-logo.png" alt="" />
</span>
</div>
<span className="err-msg">Please enter your years of experience</span>
</div>
<div className="field col-span-2">
<label>Consultation Mode Offered <span className="req">*</span></label>
<div className="radio-group" id="timeSlot">
<label className="radio-option"><input type="radio" name="slot" value="In-person consultation" />
<div className="rb"></div>
                  In-person consultation</label>
<label className="radio-option"><input type="radio" name="slot" value="Video consultation" />
<div className="rb"></div>
                  Video consultation</label>
<label className="radio-option"><input type="radio" name="slot" value="Both in-person and video" defaultChecked />
<div className="rb"></div>
                  Both in-person and video</label>
<label className="radio-option"><input type="radio" name="slot" value="Home visit" />
<div className="rb"></div>
                  Home visit</label>
<label className="radio-option"><input type="radio" name="slot" value="Telephonic consultation" />
<div className="rb"></div>
                  Telephonic consultation</label>
</div>
</div>
<div className="field">
<label>Highest Medical Qualification</label>
<select id="bloodGroup">
<option value="">Select qualification</option>
<option>MBBS</option>
<option>MD</option>
<option>MS</option>
<option>DNB</option>
<option>DM</option>
<option>MCh</option>
<option>BDS</option>
<option>BHMS</option>
<option>BAMS</option>
<option>Other</option>
</select>
</div>
<div className="field">
<label>Current Hospital / Clinic</label>
<input type="text" id="insurance" placeholder="e.g. City General Hospital" />
</div>
<div className="field">
<label>Consultation Fee (₹)</label>
<input type="number" id="consultationFee" min="0" placeholder="e.g. 600" />
</div>
<div className="field col-span-2">
<label>Areas of Expertise / Services Offered</label>
<textarea id="notes" rows="3" placeholder="List any allergies or ongoing medications\u2026" style={{resize: "vertical"}}></textarea>
</div>
<div className="field col-span-2">
<label>Professional Preferences</label>
<div className="check-group">
<label className="check-option"><input type="checkbox" id="chkSms" defaultChecked />
<div className="cb"></div>
                  Receive appointment alerts by SMS</label>
<label className="check-option"><input type="checkbox" id="chkEmail" />
<div className="cb"></div>
                  Receive hospital email updates</label>
<label className="check-option"><input type="checkbox" id="chkReport" defaultChecked />
<div className="cb"></div>
                  Allow patients to share reports digitally</label>
</div>
</div>
</div>
<div className="actions">
<button className="btn btn-outline" onClick={() => window.__mediwellRun("goToStep(1)")}>
              ← Back
            </button>
<button className="btn btn-primary" onClick={() => window.__mediwellRun("goToStep(3)")}>
              Next →
            </button>
</div>
</div>
{/* ── STEP 3 ── */}
<div className="step-panel" id="step-3">
<p className="section-label">Confirm & Submit</p>
<div className="pricing-box">
<h3>Appointment Summary</h3>
<p className="sub">Your fee breakdown is shown below</p>
<div className="pricing-row">
<span>Consultation Fee</span><span>₹800</span>
</div>
<div className="pricing-row">
<span>Registration Charges</span><span>₹200</span>
</div>
<div className="pricing-row total">
<span>Total</span><span className="price-val">₹1,000</span>
</div>
</div>
<div className="subscribe-wrap">
<p>I wish to subscribe to MediCare health updates</p>
<div className="radio-group">
<label className="radio-option"><input type="radio" name="subscribe" value="yes" defaultChecked />
<div className="rb"></div>
                Yes</label>
<label className="radio-option"><input type="radio" name="subscribe" value="no" />
<div className="rb"></div>
                No</label>
</div>
<p className="note">
              * By selecting 'Yes' you allow MediCare to send appointment
              reminders, health tips, and updates via WhatsApp and email.
            </p>
</div>
<div className="actions">
<button className="btn btn-outline" onClick={() => window.__mediwellRun("goToStep(2)")}>
              ← Back
            </button>
<button className="btn btn-primary" onClick={() => window.__mediwellRun("submitForm()")}>
              Submit Registration
            </button>
</div>
</div>
{/* ── SUCCESS ── */}
<div className="step-panel" id="step-success">
<div className="success-icon">
<svg fill="none" stroke="currentColor" stroke-width="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<h2>Doctor Registration Successful!</h2>
<p>
            Your doctor profile has been submitted successfully. A confirmation
            has been sent to your professional email address.
          </p>
<div className="actions" style={{marginTop: "24px"}}>
<button className="btn btn-primary" onClick={() => window.__mediwellRun("window.location.href = '/login'")}>
              Go to Dashboard →
            </button>
<button className="btn btn-outline" onClick={() => window.__mediwellRun("resetForm()")}>
              Register Another Doctor
            </button>
</div>
</div>
</div>
{/* /card */}
</main>
{/* /view-register */}


{/* Shared verification/2FA code modal */}
{/* <div class="otp-modal-overlay" id="otpModal">
    <div class="otp-modal-box">
      <h3 id="otpModalTitle">Enter verification code</h3>
      <p class="otp-modal-hint" id="otpModalHint"></p>
      <input
        type="text"
        id="otpModalInput"
        maxlength="6"
        inputmode="numeric"
        pattern="[0-9]*"
        placeholder="6-digit code"
        class="otp-modal-input"
      />
      <div class="otp-modal-error" id="otpModalError" style="display: none"></div>
      <button class="otp-modal-submit" id="otpModalSubmit">Verify</button>
      <button class="otp-modal-cancel" id="otpModalCancel">Cancel</button>
    </div>
  </div> */}

      </div>
    </>
  );
}
