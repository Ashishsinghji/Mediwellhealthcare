import React, { useEffect } from 'react';

const PAGE_TITLE = "login page";
const PAGE_CSS = "\n      /* =========================\n   SIGN IN PAGE\n========================= */\n\n      /* Prevent inputs from becoming wider than their containers */\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n      }\n\n      /* =========================\n   SIGN IN PAGE\n========================= */\n\n      .page-view {\n        padding: 60px 20px;\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .page-header {\n        text-align: center;\n        margin-bottom: 30px;\n      }\n\n      .page-header h1 {\n        font-size: 2.2rem;\n        color: #0f172a;\n        margin-bottom: 8px;\n      }\n\n      .page-header p {\n        color: #64748b;\n        font-size: 15px;\n      }\n\n      /* CARD */\n\n      .signin-card {\n        width: 100%;\n        max-width: 500px;\n        background: #fff;\n        padding: 40px;\n        border-radius: 20px;\n        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);\n      }\n\n      /* FIELDS */\n\n      .signin-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 18px;\n      }\n\n      .field {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n\n      .field label {\n        font-size: 14px;\n        font-weight: 600;\n        color: #334155;\n      }\n\n      .req {\n        color: #e11d48;\n      }\n\n      .field input {\n        width: 100%;\n        padding: 12px 14px;\n        border: 1.5px solid #cbd5e1;\n        border-radius: 10px;\n        font-size: 14px;\n        outline: none;\n        transition: 0.3s;\n      }\n\n      .field input:focus {\n        border-color: #0f766e;\n        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15);\n      }\n\n      .err-msg {\n        display: none;\n        color: #e11d48;\n        font-size: 12px;\n      }\n\n      /* PASSWORD */\n\n      .pw-wrap {\n        position: relative;\n        width: 100%;\n      }\n\n      .pw-wrap input {\n        width: 100%;\n        box-sizing: border-box;\n        padding-right: 45px;\n      }\n\n      .pw-toggle {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        background: transparent;\n        border: none;\n        cursor: pointer;\n        color: #94a3b8;\n      }\n\n      /* FORGOT PASSWORD */\n\n      .forgot-row {\n        text-align: right;\n        margin: 15px 0 25px;\n      }\n\n      .forgot-row a {\n        color: #0f766e;\n        cursor: pointer;\n        font-size: 14px;\n        text-decoration: none;\n      }\n\n      .forgot-row a:hover {\n        text-decoration: underline;\n      }\n\n      /* BUTTONS */\n\n      .btn {\n        border: none;\n        cursor: pointer;\n        border-radius: 10px;\n        font-weight: 600;\n        transition: 0.3s;\n      }\n\n      .btn-primary {\n        background: #0f766e;\n        color: white;\n      }\n\n      .btn-primary:hover {\n        background: #0d5c56;\n      }\n\n      .btn-full {\n        width: 100%;\n        padding: 14px;\n      }\n\n      .btn-outline {\n        background: transparent;\n        border: 2px solid #0f766e;\n        color: #0f766e;\n      }\n\n      /* DIVIDER */\n\n      .divider {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin: 25px 0;\n        color: #94a3b8;\n        font-size: 14px;\n      }\n\n      .divider::before,\n      .divider::after {\n        content: \"\";\n        flex: 1;\n        height: 1px;\n        background: #e2e8f0;\n      }\n\n      /* SOCIAL BUTTONS */\n\n      .social-btns {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n      }\n\n      .btn-social {\n        width: 100%;\n        padding: 12px;\n        border-radius: 10px;\n        border: 1px solid #cbd5e1;\n        background: white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        cursor: pointer;\n        transition: 0.3s;\n      }\n\n      .btn-social:hover {\n        border-color: #0f766e;\n        background: #f0fdfa;\n      }\n\n      .btn-social svg {\n        width: 18px;\n        height: 18px;\n      }\n\n      /* REGISTER */\n\n      .register-prompt {\n        margin-top: 25px;\n        text-align: center;\n        color: #64748b;\n        font-size: 14px;\n      }\n\n      .register-prompt a {\n        color: #0f766e;\n        font-weight: 600;\n        cursor: pointer;\n        text-decoration: none;\n      }\n\n      /* SUCCESS */\n\n      .signin-success {\n        text-align: center;\n      }\n\n      .signin-success h2 {\n        margin: 20px 0 10px;\n        color: #0f172a;\n      }\n\n      .signin-success p {\n        color: #64748b;\n      }\n\n      /* MODAL */\n\n      .modal-overlay {\n        position: fixed;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.4);\n        display: none;\n        justify-content: center;\n        align-items: center;\n        z-index: 9999;\n      }\n\n      .modal-overlay.open {\n        display: flex;\n      }\n\n      .modal {\n        background: white;\n        width: 90%;\n        max-width: 420px;\n        padding: 30px;\n        border-radius: 18px;\n        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n      }\n\n      .modal h3 {\n        margin-bottom: 10px;\n      }\n\n      .modal p {\n        color: #64748b;\n        margin-bottom: 20px;\n      }\n\n      .modal-actions {\n        display: flex;\n        gap: 10px;\n        margin-top: 20px;\n      }\n\n      .modal-actions .btn {\n        flex: 1;\n      }\n\n      /* MOBILE */\n\n      @media (max-width: 600px) {\n        .signin-card {\n          padding: 25px;\n        }\n\n        .page-header h1 {\n          font-size: 1.8rem;\n        }\n      }\n      .otp-modal-overlay {\n        display: none;\n        position: fixed;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n        z-index: 9999;\n        align-items: center;\n        justify-content: center;\n        padding: 16px;\n      }\n      .otp-modal-overlay.open {\n        display: flex;\n      }\n      .otp-modal-box {\n        background: #fff;\n        border-radius: 14px;\n        padding: 28px 24px;\n        width: 100%;\n        max-width: 360px;\n        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n      }\n      .otp-modal-box h3 {\n        margin: 0 0 8px;\n        font-size: 19px;\n      }\n      .otp-modal-hint {\n        font-size: 13px;\n        color: #666;\n        line-height: 1.5;\n        margin: 0 0 16px;\n      }\n      .otp-modal-hint b {\n        color: #222;\n      }\n      .otp-modal-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 12px 14px;\n        font-size: 20px;\n        letter-spacing: 6px;\n        text-align: center;\n        border: 1px solid #ccc;\n        border-radius: 8px;\n        margin-bottom: 10px;\n      }\n      .otp-modal-error {\n        color: #d33;\n        font-size: 13px;\n        margin-bottom: 10px;\n      }\n      .otp-modal-submit {\n        width: 100%;\n        padding: 12px;\n        border: none;\n        border-radius: 8px;\n        background: #16a085;\n        color: #fff;\n        font-weight: 600;\n        font-size: 15px;\n        cursor: pointer;\n        margin-bottom: 8px;\n      }\n      .otp-modal-submit:disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n      }\n      .otp-modal-cancel {\n        width: 100%;\n        padding: 10px;\n        border: none;\n        background: none;\n        color: #888;\n        font-size: 14px;\n        cursor: pointer;\n      }\n      @media (max-width: 480px) {\n        .otp-modal-box {\n          padding: 22px 18px;\n        }\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', "\n      renderBackButton(16);\n\n      function destinationFor(role) {\n        if (role === \"PATIENT\") return \"/patient\";\n        if (role === \"DOCTOR\") return \"/doctor\";\n        return \"/index\";\n      }\n\n      let forgotStep = \"request\"; // 'request' -> 'reset'\n\n      function openForgot() {\n        forgotStep = \"request\";\n        clearInterval(resendCooldownTimer);\n        document.getElementById(\"forgot-title\").textContent = \"Reset Password\";\n        document.getElementById(\"forgot-desc\").textContent =\n          \"Enter your registered email and we'll send you a reset code.\";\n        document.getElementById(\"forgot-email-field\").style.display = \"block\";\n        document.getElementById(\"forgot-code-field\").style.display = \"none\";\n        document.getElementById(\"forgot-newpw-field\").style.display = \"none\";\n        document.getElementById(\"forgot-action-btn\").textContent =\n          \"Send Reset Code\";\n        document.getElementById(\"forgot-err\").style.display = \"none\";\n        document.getElementById(\"forgot-code\").value = \"\";\n        document.getElementById(\"forgot-newpw\").value = \"\";\n        document.getElementById(\"forgot-modal\").classList.add(\"open\");\n        document.body.style.overflow = \"hidden\";\n      }\n      function closeForgot() {\n        document.getElementById(\"forgot-modal\").classList.remove(\"open\");\n        document.body.style.overflow = \"\";\n      }\n\n      let resendCooldownTimer = null;\n\n      function startResendCooldown() {\n        const el = document.getElementById(\"forgot-resend\");\n        let seconds = 30;\n        el.style.pointerEvents = \"none\";\n        el.style.color = \"#999\";\n        el.style.textDecoration = \"none\";\n        el.textContent = `Resend code in ${seconds}s`;\n        clearInterval(resendCooldownTimer);\n        resendCooldownTimer = setInterval(() => {\n          seconds -= 1;\n          if (seconds <= 0) {\n            clearInterval(resendCooldownTimer);\n            el.style.pointerEvents = \"auto\";\n            el.style.color = \"#0f766e\";\n            el.style.textDecoration = \"underline\";\n            el.textContent = \"Resend code\";\n          } else {\n            el.textContent = `Resend code in ${seconds}s`;\n          }\n        }, 1000);\n      }\n\n      async function resendCode() {\n        const email = document.getElementById(\"forgot-email\").value.trim();\n        const errEl = document.getElementById(\"forgot-err\");\n        try {\n          const result = await forgotPassword(email);\n          if (result.devResetCode) {\n            console.log(\n              \"%c\ud83d\udd10 MediWell Health Care \u2014 Password Reset OTP (resent)\",\n              \"font-size:14px;font-weight:bold;color:#0f766e;\"\n            );\n            console.log(\n              `%cYour OTP for ${email} is: ${result.devResetCode}`,\n              \"font-size:16px;font-weight:bold;color:#111;\"\n            );\n          }\n          startResendCooldown();\n        } catch (err) {\n          errEl.textContent = err.message;\n          errEl.style.display = \"block\";\n        }\n      }\n\n      async function sendReset() {\n        const errEl = document.getElementById(\"forgot-err\");\n        errEl.style.display = \"none\";\n\n        if (forgotStep === \"request\") {\n          const email = document.getElementById(\"forgot-email\").value.trim();\n          if (!isValidEmail(email)) {\n            errEl.textContent = \"Please enter a valid email\";\n            errEl.style.display = \"block\";\n            return;\n          }\n          try {\n            const result = await forgotPassword(email);\n            forgotStep = \"reset\";\n\n            // No real email/SMS provider is configured for this project,\n            // so the OTP is logged to the browser console instead of\n            // being emailed - open DevTools (F12) to see it.\n            if (result.devResetCode) {\n              console.log(\n                \"%c\ud83d\udd10 MediWell Health Care \u2014 Password Reset OTP\",\n                \"font-size:14px;font-weight:bold;color:#0f766e;\"\n              );\n              console.log(\n                `%cYour OTP for ${email} is: ${result.devResetCode}`,\n                \"font-size:16px;font-weight:bold;color:#111;\"\n              );\n              console.log(\"%cThis code expires in 10 minutes.\", \"color:#666;\");\n            }\n\n            document.getElementById(\"forgot-desc\").textContent =\n              \"We've sent a 6-digit code to \" +\n              email +\n              \". Enter it below along with your new password. (No email service is configured for this demo \u2014 check your browser console, press F12, for the code.)\";\n            document.getElementById(\"forgot-email-field\").style.display =\n              \"none\";\n            document.getElementById(\"forgot-code-field\").style.display =\n              \"block\";\n            document.getElementById(\"forgot-newpw-field\").style.display =\n              \"block\";\n            document.getElementById(\"forgot-action-btn\").textContent =\n              \"Reset Password\";\n            startResendCooldown();\n          } catch (err) {\n            errEl.textContent = err.message;\n            errEl.style.display = \"block\";\n          }\n          return;\n        }\n\n        // forgotStep === 'reset'\n        const email = document.getElementById(\"forgot-email\").value.trim();\n        const code = document.getElementById(\"forgot-code\").value.trim();\n        const newPw = document.getElementById(\"forgot-newpw\").value;\n        if (!isStrongPassword(newPw)) {\n          errEl.textContent = passwordStrengthHint();\n          errEl.style.display = \"block\";\n          return;\n        }\n        try {\n          await resetPassword(email, code, newPw);\n          closeForgot();\n          alert(\"Password updated. You can now log in with your new password.\");\n        } catch (err) {\n          errEl.textContent = err.message;\n          errEl.style.display = \"block\";\n        }\n      }\n\n      // If a session already exists (e.g. the user hit \"back\" to this page,\n      // or bookmarked it), skip the login form entirely and go straight in.\n      (async function checkExistingSession() {\n        try {\n          const result = await getCurrentUser();\n          window.location.href = destinationFor(result.data.role);\n        } catch (e) {\n          // not logged in - show the login form as normal\n        }\n      })();\n\n      async function doSignIn() {\n        const email = document.getElementById(\"si-email\").value;\n        const password = document.getElementById(\"si-password\").value;\n        const errEl = document.getElementById(\"si-pw-err\");\n        errEl.style.display = \"none\";\n\n        try {\n          const result = await login(email, password);\n          document.getElementById(\"signin-form-wrap\").style.display = \"none\";\n          document.getElementById(\"signin-success\").style.display = \"block\";\n          setTimeout(() => {\n            window.location.href = destinationFor(result.data.role);\n          }, 900);\n        } catch (err) {\n          errEl.textContent = err.message;\n          errEl.style.display = \"block\";\n        }\n      }\n    ", "\n      // Opens the OTP modal. onVerify(code) is called each time the person\n      // submits - it should return a Promise that resolves on success (the\n      // modal is then closed automatically) or throws/rejects on a wrong\n      // code (the modal stays open with the error shown, so they can just\n      // retry instead of restarting the whole registration/login flow).\n      function openOtpModal({ title, hint, onVerify, onCancel }) {\n        const modal = document.getElementById(\"otpModal\");\n        const input = document.getElementById(\"otpModalInput\");\n        const errorEl = document.getElementById(\"otpModalError\");\n        const submitBtn = document.getElementById(\"otpModalSubmit\");\n        const cancelBtn = document.getElementById(\"otpModalCancel\");\n\n        document.getElementById(\"otpModalTitle\").textContent = title;\n        document.getElementById(\"otpModalHint\").innerHTML = hint;\n        input.value = \"\";\n        errorEl.style.display = \"none\";\n        submitBtn.disabled = false;\n        submitBtn.textContent = \"Verify\";\n        modal.classList.add(\"open\");\n        document.body.style.overflow = \"hidden\";\n        input.focus();\n\n        function cleanup() {\n          modal.classList.remove(\"open\");\n          document.body.style.overflow = \"\";\n          submitBtn.removeEventListener(\"click\", onSubmit);\n          cancelBtn.removeEventListener(\"click\", onCancelClick);\n          input.removeEventListener(\"keydown\", onKeydown);\n        }\n        async function onSubmit() {\n          const code = input.value.trim();\n          if (!/^\\d{6}$/.test(code)) {\n            errorEl.textContent = \"Enter the 6-digit code.\";\n            errorEl.style.display = \"block\";\n            return;\n          }\n          errorEl.style.display = \"none\";\n          submitBtn.disabled = true;\n          submitBtn.textContent = \"Verifying\u2026\";\n          try {\n            await onVerify(code);\n            cleanup();\n          } catch (err) {\n            errorEl.textContent = err.message || \"Incorrect code.\";\n            errorEl.style.display = \"block\";\n          } finally {\n            submitBtn.disabled = false;\n            submitBtn.textContent = \"Verify\";\n          }\n        }\n        function onCancelClick() {\n          cleanup();\n          if (onCancel) onCancel();\n        }\n        function onKeydown(e) {\n          if (e.key === \"Enter\") onSubmit();\n        }\n\n        submitBtn.addEventListener(\"click\", onSubmit);\n        cancelBtn.addEventListener(\"click\", onCancelClick);\n        input.addEventListener(\"keydown\", onKeydown);\n      }\n    "];

export default function LoginPage() {
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
            <a onClick={() => { window.location.href = '/register'; }}>Register here</a>
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
<button className="btn btn-outline btn-full" style={{marginTop: "24px"}} onClick={() => { window.location.href = '/register'; }}>
            ← Go to Registration
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
<input type="email" id="forgot-email" placeholder="patient@example.com" />
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
