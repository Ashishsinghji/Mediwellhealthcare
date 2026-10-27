import React, { useEffect } from 'react';

const PAGE_TITLE = "MediCare \u2014 Patient Registration";
const PAGE_CSS = "\n      @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap\");\n\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n\n      :root {\n        --teal: #0f766e;\n        --teal-lt: #ccfbf1;\n        --teal-dk: #0d5c56;\n        --rose: #e11d48;\n        --slate-900: #0f172a;\n        --slate-700: #334155;\n        --slate-400: #94a3b8;\n        --slate-200: #e2e8f0;\n        --slate-50: #f8fafc;\n        --white: #ffffff;\n      }\n\n      body {\n        font-family: \"Inter\", sans-serif;\n        background: linear-gradient(\n          135deg,\n          #eef9f8 0%,\n          #f0f9ff 50%,\n          #fff7ed 100%\n        );\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n\n      /* \u2500\u2500 NAV \u2500\u2500 */\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 48px;\n        background: rgba(255, 255, 255, 0.85);\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid var(--slate-200);\n        position: sticky;\n        top: 0;\n        z-index: 100;\n      }\n      .logo {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        text-decoration: none;\n      }\n      .logo-icon {\n        width: 36px;\n        height: 36px;\n        background: var(--teal);\n        border-radius: 10px;\n        display: grid;\n        place-items: center;\n      }\n      .logo-icon svg {\n        width: 20px;\n        height: 20px;\n        fill: white;\n      }\n      .logo-text {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .nav-link {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n      }\n      .nav-link a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .nav-link a:hover {\n        text-decoration: underline;\n      }\n\n      /* \u2500\u2500 PAGE WRAPPER \u2500\u2500 */\n      main {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0;\n      }\n\n      .page-header {\n        text-align: center;\n        margin-bottom: 36px;\n      }\n      .page-header h1 {\n        font-family: \"Lora\", serif;\n        font-size: 2rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .page-header p {\n        margin-top: 6px;\n        font-size: 0.95rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 STEPPER \u2500\u2500 */\n      .stepper {\n        display: flex;\n        align-items: center;\n        gap: 0;\n        margin-bottom: 40px;\n      }\n      .step {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        color: var(--slate-400);\n        cursor: default;\n      }\n      .step.active {\n        color: var(--teal);\n      }\n      .step.complete {\n        color: var(--teal);\n      }\n\n      .step-num {\n        width: 34px;\n        height: 34px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        display: grid;\n        place-items: center;\n        font-weight: 600;\n        font-size: 0.875rem;\n        background: var(--white);\n        transition: all 0.3s;\n      }\n      .step.active .step-num {\n        border-color: var(--teal);\n        color: var(--teal);\n      }\n      .step.complete .step-num {\n        border-color: var(--teal);\n        background: var(--teal);\n        color: white;\n      }\n\n      .step-line {\n        width: 80px;\n        height: 2px;\n        background: var(--slate-200);\n        margin: 0 4px;\n        transition: background 0.3s;\n      }\n      .step-line.done {\n        background: var(--teal);\n      }\n\n      /* \u2500\u2500 CARD \u2500\u2500 */\n      .card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 40px 48px;\n        width: 100%;\n        max-width: 780px;\n      }\n\n      /* \u2500\u2500 FORM GRID \u2500\u2500 */\n      .form-grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 22px 28px;\n      }\n      .col-span-2 {\n        grid-column: span 2;\n      }\n\n      .field {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n      .field label {\n        font-size: 0.8125rem;\n        font-weight: 500;\n        color: var(--slate-700);\n      }\n      .field label .req {\n        color: var(--rose);\n        margin-left: 2px;\n      }\n\n      .field input,\n      .field select,\n      .field textarea {\n        width: 100%;\n        padding: 10px 14px;\n        border: 1.5px solid var(--slate-200);\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-family: inherit;\n        color: var(--slate-900);\n        background: var(--slate-50);\n        outline: none;\n        transition:\n          border-color 0.2s,\n          box-shadow 0.2s;\n        appearance: none;\n      }\n      .field input:focus,\n      .field select:focus,\n      .field textarea:focus {\n        border-color: var(--teal);\n        background: white;\n        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);\n      }\n      .field input.error,\n      .field select.error {\n        border-color: var(--rose);\n      }\n      .field .err-msg {\n        font-size: 0.75rem;\n        color: var(--rose);\n        margin-top: 2px;\n        display: none;\n      }\n      .field.has-error .err-msg {\n        display: block;\n      }\n      .field.has-error input,\n      .field.has-error select {\n        border-color: var(--rose);\n      }\n\n      .field .input-wrap {\n        position: relative;\n      }\n      .field .input-wrap input {\n        padding-right: 40px;\n      }\n      .field .input-wrap .icon {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        color: var(--slate-400);\n        pointer-events: none;\n      }\n\n      select {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-position: right 12px center;\n        padding-right: 36px;\n      }\n\n      /* \u2500\u2500 SECTION LABEL \u2500\u2500 */\n      .section-label {\n        font-size: 0.7rem;\n        font-weight: 700;\n        letter-spacing: 0.1em;\n        text-transform: uppercase;\n        color: var(--teal);\n        border-bottom: 1px solid var(--slate-200);\n        padding-bottom: 8px;\n        margin-bottom: 20px;\n      }\n\n      /* \u2500\u2500 RADIO & CHECKBOX \u2500\u2500 */\n      .radio-group,\n      .check-group {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 12px;\n      }\n      .radio-option,\n      .check-option {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        cursor: pointer;\n      }\n      .radio-option input[type=\"radio\"],\n      .check-option input[type=\"checkbox\"] {\n        display: none;\n      }\n      .radio-option .rb,\n      .check-option .cb {\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        background: var(--slate-50);\n        display: grid;\n        place-items: center;\n        flex-shrink: 0;\n        transition: all 0.2s;\n      }\n      .check-option .cb {\n        border-radius: 5px;\n      }\n      .radio-option input:checked ~ .rb {\n        border-color: var(--teal);\n      }\n      .radio-option input:checked ~ .rb::after {\n        content: \"\";\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb {\n        border-color: var(--teal);\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb::after {\n        content: \"\";\n        width: 10px;\n        height: 7px;\n        border-left: 2px solid white;\n        border-bottom: 2px solid white;\n        transform: rotate(-45deg) translateY(-1px);\n      }\n\n      /* \u2500\u2500 STEP PANELS \u2500\u2500 */\n      .step-panel {\n        display: none;\n      }\n      .step-panel.active {\n        display: block;\n      }\n\n      /* \u2500\u2500 PRICING CARD \u2500\u2500 */\n      .pricing-box {\n        background: var(--slate-50);\n        border: 1.5px solid var(--slate-200);\n        border-radius: 14px;\n        padding: 24px 28px;\n        margin-bottom: 28px;\n      }\n      .pricing-box h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.1rem;\n        color: var(--slate-900);\n        margin-bottom: 4px;\n      }\n      .pricing-box .sub {\n        font-size: 0.8rem;\n        color: var(--slate-400);\n        margin-bottom: 18px;\n      }\n      .pricing-row {\n        display: flex;\n        justify-content: space-between;\n        font-size: 0.9rem;\n        color: var(--slate-700);\n        padding: 10px 0;\n        border-bottom: 1px dashed var(--slate-200);\n      }\n      .pricing-row.total {\n        border-bottom: none;\n        font-weight: 700;\n        font-size: 1rem;\n        color: var(--slate-900);\n        padding-top: 14px;\n      }\n      .pricing-row.total .price-val {\n        color: var(--teal);\n      }\n\n      /* \u2500\u2500 SUBSCRIPTION \u2500\u2500 */\n      .subscribe-wrap {\n        margin-bottom: 28px;\n      }\n      .subscribe-wrap p {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        margin-bottom: 10px;\n        font-weight: 500;\n      }\n      .subscribe-wrap .note {\n        font-size: 0.75rem;\n        color: var(--slate-400);\n        margin-top: 8px;\n        line-height: 1.5;\n      }\n\n      /* \u2500\u2500 ACTIONS \u2500\u2500 */\n      .actions {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        margin-top: 32px;\n      }\n      .btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px 32px;\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        border: none;\n        transition: all 0.2s;\n        text-decoration: none;\n      }\n      .btn-primary {\n        background: var(--teal);\n        color: white;\n      }\n      .btn-primary:hover {\n        background: var(--teal-dk);\n        transform: translateY(-1px);\n        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);\n      }\n      .btn-outline {\n        background: transparent;\n        color: var(--teal);\n        border: 1.5px solid var(--teal);\n      }\n      .btn-outline:hover {\n        background: var(--teal-lt);\n      }\n\n      /* \u2500\u2500 SUCCESS \u2500\u2500 */\n      #step-success {\n        text-align: center;\n        padding: 20px 0;\n      }\n      .success-icon {\n        width: 72px;\n        height: 72px;\n        background: var(--teal-lt);\n        border-radius: 50%;\n        display: grid;\n        place-items: center;\n        margin: 0 auto 20px;\n      }\n      .success-icon svg {\n        width: 36px;\n        height: 36px;\n        stroke: var(--teal);\n      }\n      #step-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      #step-success p {\n        font-size: 0.9rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 PAGE VIEWS \u2500\u2500 */\n      .page-view {\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        padding: 40px 16px 60px;\n        flex: 1;\n      }\n      .page-view.active {\n        display: flex;\n      }\n\n      /* \u2500\u2500 SIGN IN CARD \u2500\u2500 */\n      .signin-card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 44px 48px;\n        width: 100%;\n        max-width: 460px;\n      }\n      .signin-logo {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        margin-bottom: 28px;\n      }\n      .signin-logo .logo-icon {\n        width: 44px;\n        height: 44px;\n        border-radius: 12px;\n      }\n      .signin-logo .logo-icon svg {\n        width: 24px;\n        height: 24px;\n      }\n      .signin-logo span {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n\n      .signin-title {\n        text-align: center;\n        margin-bottom: 30px;\n      }\n      .signin-title h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .signin-title p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n\n      .signin-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 18px;\n        margin-bottom: 10px;\n      }\n\n      .pw-wrap {\n        position: relative;\n      }\n      .pw-wrap input {\n        padding-right: 44px;\n      }\n      .pw-toggle {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        background: none;\n        border: none;\n        cursor: pointer;\n        color: var(--slate-400);\n        padding: 0;\n        display: grid;\n        place-items: center;\n      }\n      .pw-toggle:hover {\n        color: var(--teal);\n      }\n\n      .forgot-row {\n        text-align: right;\n        margin-bottom: 22px;\n      }\n      .forgot-row a {\n        font-size: 0.8125rem;\n        color: var(--teal);\n        text-decoration: none;\n        font-weight: 500;\n      }\n      .forgot-row a:hover {\n        text-decoration: underline;\n      }\n\n      .btn-full {\n        width: 100%;\n        justify-content: center;\n        padding: 13px 20px;\n        font-size: 0.95rem;\n      }\n\n      .divider {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin: 22px 0;\n        color: var(--slate-400);\n        font-size: 0.8rem;\n      }\n      .divider::before,\n      .divider::after {\n        content: \"\";\n        flex: 1;\n        height: 1px;\n        background: var(--slate-200);\n      }\n\n      .social-btns {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n      .btn-social {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        padding: 11px 20px;\n        border-radius: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        font-family: inherit;\n        cursor: pointer;\n        border: 1.5px solid var(--slate-200);\n        background: white;\n        color: var(--slate-700);\n        transition: all 0.2s;\n      }\n      .btn-social:hover {\n        border-color: var(--teal);\n        background: var(--teal-lt);\n        color: var(--teal);\n      }\n      .btn-social svg {\n        width: 18px;\n        height: 18px;\n        flex-shrink: 0;\n      }\n\n      .register-prompt {\n        text-align: center;\n        margin-top: 24px;\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n      .register-prompt a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .register-prompt a:hover {\n        text-decoration: underline;\n      }\n\n      /* forgot password modal */\n      .modal-overlay {\n        display: none;\n        position: fixed;\n        inset: 0;\n        background: rgba(15, 23, 42, 0.4);\n        backdrop-filter: blur(4px);\n        z-index: 200;\n        place-items: center;\n      }\n      .modal-overlay.open {\n        display: grid;\n      }\n      .modal {\n        background: white;\n        border-radius: 18px;\n        padding: 36px 40px;\n        width: 100%;\n        max-width: 420px;\n        margin: 16px;\n        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n        animation: popIn 0.25s ease;\n      }\n      @keyframes popIn {\n        from {\n          transform: scale(0.92);\n          opacity: 0;\n        }\n        to {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      .modal h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .modal p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n        margin-bottom: 22px;\n      }\n      .modal-actions {\n        display: flex;\n        gap: 10px;\n        margin-top: 20px;\n      }\n      .modal-actions .btn {\n        flex: 1;\n        justify-content: center;\n      }\n\n      /* sign-in success */\n      .signin-success {\n        text-align: center;\n        padding: 16px 0;\n      }\n      .signin-success .success-icon {\n        margin: 0 auto 20px;\n      }\n      .signin-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      .signin-success p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n\n      @media (max-width: 640px) {\n        nav {\n          padding: 14px 20px;\n        }\n        .card {\n          padding: 28px 20px;\n        }\n        .form-grid {\n          grid-template-columns: 1fr;\n        }\n        .col-span-2 {\n          grid-column: span 1;\n        }\n        .step-line {\n          width: 40px;\n        }\n        .step-label {\n          display: none;\n        }\n      }\n    ";
const PAGE_SCRIPTS = ["\n      let currentStep = 1;\n\n      /* \u2500\u2500 PAGE SWITCHING \u2500\u2500 */\n      function showPage(page) {\n        document.getElementById(\"view-register\").classList.remove(\"active\");\n        document.getElementById(\"view-signin\").classList.remove(\"active\");\n        if (page === \"signin\") {\n          document.getElementById(\"view-signin\").classList.add(\"active\");\n        } else {\n          document.getElementById(\"view-register\").classList.add(\"active\");\n        }\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\n      }\n\n      /* \u2500\u2500 SIGN IN \u2500\u2500 */\n      function doSignIn() {\n        const email = document.getElementById(\"si-email\");\n        const pw = document.getElementById(\"si-password\");\n        const emailField = email.closest(\".field\");\n        const pwField = pw.closest(\".field\");\n        let ok = true;\n\n        const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value);\n        emailField.classList.toggle(\"has-error\", !validEmail);\n        if (!validEmail) ok = false;\n\n        if (!pw.value.trim()) {\n          pwField.classList.add(\"has-error\");\n          ok = false;\n        } else {\n          pwField.classList.remove(\"has-error\");\n        }\n\n        if (!ok) return;\n\n        document.getElementById(\"signin-form-wrap\").style.display = \"none\";\n        document.getElementById(\"signin-success\").style.display = \"block\";\n      }\n\n      function togglePw() {\n        const inp = document.getElementById(\"si-password\");\n        const isText = inp.type === \"text\";\n        inp.type = isText ? \"password\" : \"text\";\n        document.getElementById(\"eye-icon\").innerHTML = isText\n          ? '<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>'\n          : '<path d=\"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94\"/><path d=\"M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/>';\n      }\n\n      function openForgot() {\n        document.getElementById(\"forgot-modal\").classList.add(\"open\");\n      }\n      function closeForgot() {\n        document.getElementById(\"forgot-modal\").classList.remove(\"open\");\n      }\n      function sendReset() {\n        const el = document.getElementById(\"forgot-email\");\n        const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(el.value);\n        el.closest(\".field\").classList.toggle(\"has-error\", !valid);\n        if (!valid) return;\n        closeForgot();\n        alert(\"\u2705 A password reset link has been sent to \" + el.value);\n        el.value = \"\";\n      }\n\n      // close modal on overlay click\n      document\n        .getElementById(\"forgot-modal\")\n        .addEventListener(\"click\", function (e) {\n          if (e.target === this) closeForgot();\n        });\n\n      function goToStep(next) {\n        if (next > currentStep && !validateStep(currentStep)) return;\n        document\n          .getElementById(\"step-\" + currentStep)\n          .classList.remove(\"active\");\n        currentStep = next;\n        document.getElementById(\"step-\" + currentStep).classList.add(\"active\");\n        updateStepper();\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\n      }\n\n      function updateStepper() {\n        for (let i = 1; i <= 3; i++) {\n          const s = document.getElementById(\"s\" + i);\n          s.classList.remove(\"active\", \"complete\");\n          if (i < currentStep) s.classList.add(\"complete\");\n          else if (i === currentStep) s.classList.add(\"active\");\n        }\n        for (let i = 1; i <= 2; i++) {\n          const l = document.getElementById(\"l\" + i);\n          l.classList.toggle(\"done\", i < currentStep);\n        }\n      }\n\n      function validateStep(step) {\n        let ok = true;\n\n        function req(id, test) {\n          const el = document.getElementById(id);\n          const field = el.closest(\".field\");\n          const fail = test ? !test(el.value) : !el.value.trim();\n          field.classList.toggle(\"has-error\", fail);\n          if (fail) ok = false;\n        }\n\n        if (step === 1) {\n          req(\"firstName\");\n          req(\"gender\");\n          req(\"dob\");\n          req(\"guardianFirst\");\n          req(\"email\", (v) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v));\n          req(\"pinCode\", (v) => /^\\d{6}$/.test(v.trim()));\n          req(\"country\");\n          req(\"phone\");\n        }\n        if (step === 2) {\n          req(\"department\");\n          req(\"apptDate\");\n        }\n        return ok;\n      }\n\n      function submitForm() {\n        const panels = document.querySelectorAll(\".step-panel\");\n        panels.forEach((p) => p.classList.remove(\"active\"));\n        document.getElementById(\"step-success\").classList.add(\"active\");\n\n        // hide stepper\n        document.querySelector(\".stepper\").style.opacity = \"0\";\n      }\n\n      function resetForm() {\n        document.querySelector(\".stepper\").style.opacity = \"1\";\n        document\n          .querySelectorAll(\".step-panel\")\n          .forEach((p) => p.classList.remove(\"active\"));\n        document.getElementById(\"step-1\").classList.add(\"active\");\n        document\n          .querySelectorAll(\n            \"input:not([type=radio]):not([type=checkbox]), select, textarea\",\n          )\n          .forEach((el) => (el.value = \"\"));\n        document\n          .querySelectorAll(\".has-error\")\n          .forEach((el) => el.classList.remove(\"has-error\"));\n        currentStep = 1;\n        updateStepper();\n      }\n    "];

export default function RegisterNPage() {
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
<nav>
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
<button className="btn btn-outline btn-full" style={{marginTop: "24px"}} onClick={() => window.__mediwellRun("showPage('register')")}>
            ← Go to Registration
          </button>
</div>
</div>
</div>
{/* FORGOT PASSWORD MODAL */}
<div className="modal-overlay" id="forgot-modal">
<div className="modal">
<h3>Reset Password</h3>
<p>Enter your registered email and we'll send you a reset link.</p>
<div className="field">
<label>Email Address <span className="req">*</span></label>
<input type="email" id="forgot-email" placeholder="patient@example.com" />
<span className="err-msg" id="forgot-err">Please enter a valid email</span>
</div>
<div className="modal-actions">
<button className="btn btn-outline" onClick={() => window.__mediwellRun("closeForgot()")}>
            Cancel
          </button>
<button className="btn btn-primary" onClick={() => window.__mediwellRun("sendReset()")}>
            Send Reset Link
          </button>
</div>
</div>
</div>
{/* REGISTRATION PAGE VIEW */}
<main id="view-register" className="page-view active">
<div className="page-header">
<h1>Registration Form</h1>
<p>Complete the steps below to register with Health Care</p>
</div>
{/* STEPPER */}
<div className="stepper">
<div className="step active" id="s1">
<div className="step-num">1</div>
<span className="step-label">Personal Details</span>
</div>
<div className="step-line" id="l1"></div>
<div className="step" id="s2">
<div className="step-num">2</div>
<span className="step-label">Medical Details</span>
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
<p className="section-label">Personal Information</p>
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
<label>Guardian First Name <span className="req">*</span></label>
<input type="text" id="guardianFirst" placeholder="Father / Mother" />
<span className="err-msg">Guardian name is required</span>
</div>
<div className="field">
<label>Guardian Last Name</label>
<input type="text" id="guardianLast" placeholder="Last Name" />
</div>
<div className="field col-span-2">
<label>Email Address <span className="req">*</span></label>
<input type="email" id="email" placeholder="patient@example.com" />
<span className="err-msg">Please enter a valid email</span>
</div>
<div className="field">
<label>Pin Code <span className="req">*</span></label>
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
<p className="section-label">Medical Information</p>
<div className="form-grid">
<div className="field">
<label>Department <span className="req">*</span></label>
<select id="department">
<option value="">Select department</option>
<option>General Medicine</option>
<option>Cardiology</option>
<option>Orthopaedics</option>
<option>Paediatrics</option>
<option>Neurology</option>
<option>Gynaecology</option>
<option>Dermatology</option>
<option>ENT</option>
</select>
<span className="err-msg">Please select a department</span>
</div>
<div className="field">
<label>Appointment Date <span className="req">*</span></label>
<div className="input-wrap">
<input type="date" id="apptDate" />
<span className="icon calendar-icon" aria-hidden="true">
<img src="/calendar-logo.png" alt="" />
</span>
</div>
<span className="err-msg">Please select a date</span>
</div>
<div className="field col-span-2">
<label>Preferred Time Slot <span className="req">*</span></label>
<div className="radio-group" id="timeSlot">
<label className="radio-option"><input type="radio" name="slot" value="09:00 AM" />
<div className="rb"></div>
                  9:00 AM</label>
<label className="radio-option"><input type="radio" name="slot" value="11:00 AM" />
<div className="rb"></div>
                  11:00 AM</label>
<label className="radio-option"><input type="radio" name="slot" value="01:00 PM" defaultChecked />
<div className="rb"></div>
                  1:00 PM</label>
<label className="radio-option"><input type="radio" name="slot" value="03:00 PM" />
<div className="rb"></div>
                  3:00 PM</label>
<label className="radio-option"><input type="radio" name="slot" value="05:00 PM" />
<div className="rb"></div>
                  5:00 PM</label>
</div>
</div>
<div className="field">
<label>Blood Group</label>
<select id="bloodGroup">
<option value="">Select</option>
<option>A+</option>
<option>A−</option>
<option>B+</option>
<option>B−</option>
<option>AB+</option>
<option>AB−</option>
<option>O+</option>
<option>O−</option>
</select>
</div>
<div className="field">
<label>Insurance Provider</label>
<input type="text" id="insurance" placeholder="e.g. Star Health" />
</div>
<div className="field col-span-2">
<label>Known Allergies / Current Medications</label>
<textarea id="notes" rows="3" placeholder="List any allergies or ongoing medications\u2026" style={{resize: "vertical"}}></textarea>
</div>
<div className="field col-span-2">
<label>Preferences</label>
<div className="check-group">
<label className="check-option"><input type="checkbox" id="chkSms" defaultChecked />
<div className="cb"></div>
                  Receive SMS reminders</label>
<label className="check-option"><input type="checkbox" id="chkEmail" />
<div className="cb"></div>
                  Receive email updates</label>
<label className="check-option"><input type="checkbox" id="chkReport" defaultChecked />
<div className="cb"></div>
                  Share reports with doctor</label>
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
<h2>Registration Successful!</h2>
<p>
            Your patient ID and appointment details have been sent to your
            email.<br />We look forward to seeing you at MediCare.
          </p>
<div className="actions" style={{marginTop: "24px"}}>
<button className="btn btn-primary" onClick={() => window.__mediwellRun("resetForm()")}>
              Register Another Patient
            </button>
</div>
</div>
</div>
{/* /card */}
</main>
{/* /view-register */}

      </div>
    </>
  );
}
