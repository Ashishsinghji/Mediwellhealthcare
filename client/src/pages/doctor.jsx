import React, { useEffect } from 'react';

const PAGE_TITLE = "MediWell Health Care \u2014 Doctor Dashboard";
const PAGE_CSS = "\n      @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap\");\n\n      /* @import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@500;600&display=swap\"); */\n\n      *,\n      *::before,\n      *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n      }\n\n      :root {\n        --teal: #0f766e;\n        --teal-lt: #ccfbf1;\n        --teal-dk: #0d5c56;\n        --rose: #e11d48;\n        --slate-900: #0f172a;\n        --slate-700: #334155;\n        --slate-400: #94a3b8;\n        --slate-200: #e2e8f0;\n        --slate-50: #f8fafc;\n        --white: #ffffff;\n      }\n\n      body {\n        font-family: \"Inter\", sans-serif;\n        background: linear-gradient(\n          135deg,\n          #eef9f8 0%,\n          #f0f9ff 50%,\n          #fff7ed 100%\n        );\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n\n      /* The registration/sign-in header belongs only to authentication views. */\n      body.dashboard-active {\n        display: block;\n        background: #f4f6fa;\n      }\n      body.dashboard-active > #site-nav {\n        display: none;\n      }\n      body.dashboard-active > main {\n        display: none;\n      }\n\n      /* \u2500\u2500 NAV \u2500\u2500 */\n      nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 18px 48px;\n        background: rgba(255, 255, 255, 0.85);\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid var(--slate-200);\n        position: sticky;\n        top: 0;\n        z-index: 100;\n      }\n      .logo {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        text-decoration: none;\n      }\n      .logo-icon {\n        width: 36px;\n        height: 36px;\n        background: var(--teal);\n        border-radius: 10px;\n        display: grid;\n        place-items: center;\n      }\n      .logo-icon svg {\n        width: 20px;\n        height: 20px;\n        fill: white;\n      }\n      .logo-text {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .nav-link {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n      }\n      .nav-link a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .nav-link a:hover {\n        text-decoration: underline;\n      }\n\n      /* \u2500\u2500 PAGE WRAPPER \u2500\u2500 */\n      main {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0;\n      }\n\n      .page-header {\n        text-align: center;\n        margin-bottom: 36px;\n      }\n      .page-header h1 {\n        font-family: \"Lora\", serif;\n        font-size: 2rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n      .page-header p {\n        margin-top: 6px;\n        font-size: 0.95rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 STEPPER \u2500\u2500 */\n      .stepper {\n        display: flex;\n        align-items: center;\n        gap: 0;\n        margin-bottom: 40px;\n      }\n      .step {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        color: var(--slate-400);\n        cursor: default;\n      }\n      .step.active {\n        color: var(--teal);\n      }\n      .step.complete {\n        color: var(--teal);\n      }\n\n      .step-num {\n        width: 34px;\n        height: 34px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        display: grid;\n        place-items: center;\n        font-weight: 600;\n        font-size: 0.875rem;\n        background: var(--white);\n        transition: all 0.3s;\n      }\n      .step.active .step-num {\n        border-color: var(--teal);\n        color: var(--teal);\n      }\n      .step.complete .step-num {\n        border-color: var(--teal);\n        background: var(--teal);\n        color: white;\n      }\n\n      .step-line {\n        width: 80px;\n        height: 2px;\n        background: var(--slate-200);\n        margin: 0 4px;\n        transition: background 0.3s;\n      }\n      .step-line.done {\n        background: var(--teal);\n      }\n\n      /* \u2500\u2500 CARD \u2500\u2500 */\n      .card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 40px 48px;\n        width: 100%;\n        max-width: 780px;\n      }\n\n      /* \u2500\u2500 FORM GRID \u2500\u2500 */\n      .form-grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 22px 28px;\n      }\n      .col-span-2 {\n        grid-column: span 2;\n      }\n\n      .field {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n      .field label {\n        font-size: 0.8125rem;\n        font-weight: 500;\n        color: var(--slate-700);\n      }\n      .field label .req {\n        color: var(--rose);\n        margin-left: 2px;\n      }\n\n      .field input,\n      .field select,\n      .field textarea {\n        width: 100%;\n        padding: 10px 14px;\n        border: 1.5px solid var(--slate-200);\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-family: inherit;\n        color: var(--slate-900);\n        background: var(--slate-50);\n        outline: none;\n        transition:\n          border-color 0.2s,\n          box-shadow 0.2s;\n        appearance: none;\n      }\n      .field input:focus,\n      .field select:focus,\n      .field textarea:focus {\n        border-color: var(--teal);\n        background: white;\n        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);\n      }\n      .field input.error,\n      .field select.error {\n        border-color: var(--rose);\n      }\n      .field .err-msg {\n        font-size: 0.75rem;\n        color: var(--rose);\n        margin-top: 2px;\n        display: none;\n      }\n      .field.has-error .err-msg {\n        display: block;\n      }\n      .field.has-error input,\n      .field.has-error select {\n        border-color: var(--rose);\n      }\n\n      .field .input-wrap {\n        position: relative;\n      }\n      .field .input-wrap input {\n        padding-right: 40px;\n      }\n      .field .input-wrap .icon {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        color: var(--slate-400);\n        pointer-events: none;\n      }\n\n      select {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-position: right 12px center;\n        padding-right: 36px;\n      }\n\n      /* \u2500\u2500 SECTION LABEL \u2500\u2500 */\n      .section-label {\n        font-size: 0.7rem;\n        font-weight: 700;\n        letter-spacing: 0.1em;\n        text-transform: uppercase;\n        color: var(--teal);\n        border-bottom: 1px solid var(--slate-200);\n        padding-bottom: 8px;\n        margin-bottom: 20px;\n      }\n\n      /* \u2500\u2500 RADIO & CHECKBOX \u2500\u2500 */\n      .radio-group,\n      .check-group {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 12px;\n      }\n      .radio-option,\n      .check-option {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        cursor: pointer;\n      }\n      .radio-option input[type=\"radio\"],\n      .check-option input[type=\"checkbox\"] {\n        display: none;\n      }\n      .radio-option .rb,\n      .check-option .cb {\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        border: 2px solid var(--slate-200);\n        background: var(--slate-50);\n        display: grid;\n        place-items: center;\n        flex-shrink: 0;\n        transition: all 0.2s;\n      }\n      .check-option .cb {\n        border-radius: 5px;\n      }\n      .radio-option input:checked ~ .rb {\n        border-color: var(--teal);\n      }\n      .radio-option input:checked ~ .rb::after {\n        content: \"\";\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb {\n        border-color: var(--teal);\n        background: var(--teal);\n      }\n      .check-option input:checked ~ .cb::after {\n        content: \"\";\n        width: 10px;\n        height: 7px;\n        border-left: 2px solid white;\n        border-bottom: 2px solid white;\n        transform: rotate(-45deg) translateY(-1px);\n      }\n\n      /* \u2500\u2500 STEP PANELS \u2500\u2500 */\n      .step-panel {\n        display: none;\n      }\n      .step-panel.active {\n        display: block;\n      }\n\n      /* \u2500\u2500 PRICING CARD \u2500\u2500 */\n      .pricing-box {\n        background: var(--slate-50);\n        border: 1.5px solid var(--slate-200);\n        border-radius: 14px;\n        padding: 24px 28px;\n        margin-bottom: 28px;\n      }\n      .pricing-box h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.1rem;\n        color: var(--slate-900);\n        margin-bottom: 4px;\n      }\n      .pricing-box .sub {\n        font-size: 0.8rem;\n        color: var(--slate-400);\n        margin-bottom: 18px;\n      }\n      .pricing-row {\n        display: flex;\n        justify-content: space-between;\n        font-size: 0.9rem;\n        color: var(--slate-700);\n        padding: 10px 0;\n        border-bottom: 1px dashed var(--slate-200);\n      }\n      .pricing-row.total {\n        border-bottom: none;\n        font-weight: 700;\n        font-size: 1rem;\n        color: var(--slate-900);\n        padding-top: 14px;\n      }\n      .pricing-row.total .price-val {\n        color: var(--teal);\n      }\n\n      /* \u2500\u2500 SUBSCRIPTION \u2500\u2500 */\n      .subscribe-wrap {\n        margin-bottom: 28px;\n      }\n      .subscribe-wrap p {\n        font-size: 0.875rem;\n        color: var(--slate-700);\n        margin-bottom: 10px;\n        font-weight: 500;\n      }\n      .subscribe-wrap .note {\n        font-size: 0.75rem;\n        color: var(--slate-400);\n        margin-top: 8px;\n        line-height: 1.5;\n      }\n\n      /* \u2500\u2500 ACTIONS \u2500\u2500 */\n      .actions {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        margin-top: 32px;\n      }\n      .btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px 32px;\n        border-radius: 10px;\n        font-size: 0.9rem;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        border: none;\n        transition: all 0.2s;\n        text-decoration: none;\n      }\n      .btn-primary {\n        background: var(--teal);\n        color: white;\n      }\n      .btn-primary:hover {\n        background: var(--teal-dk);\n        transform: translateY(-1px);\n        box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);\n      }\n      .btn-outline {\n        background: transparent;\n        color: var(--teal);\n        border: 1.5px solid var(--teal);\n      }\n      .btn-outline:hover {\n        background: var(--teal-lt);\n      }\n\n      /* \u2500\u2500 SUCCESS \u2500\u2500 */\n      #step-success {\n        text-align: center;\n        padding: 20px 0;\n      }\n      .success-icon {\n        width: 72px;\n        height: 72px;\n        background: var(--teal-lt);\n        border-radius: 50%;\n        display: grid;\n        place-items: center;\n        margin: 0 auto 20px;\n      }\n      .success-icon svg {\n        width: 36px;\n        height: 36px;\n        stroke: var(--teal);\n      }\n      #step-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      #step-success p {\n        font-size: 0.9rem;\n        color: var(--slate-400);\n      }\n\n      /* \u2500\u2500 PAGE VIEWS \u2500\u2500 */\n      .page-view {\n        display: none;\n        flex-direction: column;\n        align-items: center;\n        padding: 40px 16px 60px;\n        flex: 1;\n      }\n      .page-view.active {\n        display: flex;\n      }\n\n      /* \u2500\u2500 SIGN IN CARD \u2500\u2500 */\n      .signin-card {\n        background: white;\n        border-radius: 20px;\n        box-shadow:\n          0 4px 24px rgba(15, 118, 110, 0.08),\n          0 1px 4px rgba(0, 0, 0, 0.04);\n        padding: 44px 48px;\n        width: 100%;\n        max-width: 460px;\n      }\n      .signin-logo {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        margin-bottom: 28px;\n      }\n      .signin-logo .logo-icon {\n        width: 44px;\n        height: 44px;\n        border-radius: 12px;\n      }\n      .signin-logo .logo-icon svg {\n        width: 24px;\n        height: 24px;\n      }\n      .signin-logo span {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        font-weight: 600;\n        color: var(--slate-900);\n      }\n\n      .signin-title {\n        text-align: center;\n        margin-bottom: 30px;\n      }\n      .signin-title h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.6rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .signin-title p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n\n      .signin-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 18px;\n        margin-bottom: 10px;\n      }\n\n      .pw-wrap {\n        position: relative;\n      }\n      .pw-wrap input {\n        padding-right: 44px;\n      }\n      .pw-toggle {\n        position: absolute;\n        right: 12px;\n        top: 50%;\n        transform: translateY(-50%);\n        background: none;\n        border: none;\n        cursor: pointer;\n        color: var(--slate-400);\n        padding: 0;\n        display: grid;\n        place-items: center;\n      }\n      .pw-toggle:hover {\n        color: var(--teal);\n      }\n\n      .forgot-row {\n        text-align: right;\n        margin-bottom: 22px;\n      }\n      .forgot-row a {\n        font-size: 0.8125rem;\n        color: var(--teal);\n        text-decoration: none;\n        font-weight: 500;\n      }\n      .forgot-row a:hover {\n        text-decoration: underline;\n      }\n\n      .btn-full {\n        width: 100%;\n        justify-content: center;\n        padding: 13px 20px;\n        font-size: 0.95rem;\n      }\n\n      .divider {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin: 22px 0;\n        color: var(--slate-400);\n        font-size: 0.8rem;\n      }\n      .divider::before,\n      .divider::after {\n        content: \"\";\n        flex: 1;\n        height: 1px;\n        background: var(--slate-200);\n      }\n\n      .social-btns {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n      .btn-social {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        padding: 11px 20px;\n        border-radius: 10px;\n        font-size: 0.875rem;\n        font-weight: 500;\n        font-family: inherit;\n        cursor: pointer;\n        border: 1.5px solid var(--slate-200);\n        background: white;\n        color: var(--slate-700);\n        transition: all 0.2s;\n      }\n      .btn-social:hover {\n        border-color: var(--teal);\n        background: var(--teal-lt);\n        color: var(--teal);\n      }\n      .btn-social svg {\n        width: 18px;\n        height: 18px;\n        flex-shrink: 0;\n      }\n\n      .register-prompt {\n        text-align: center;\n        margin-top: 24px;\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n      .register-prompt a {\n        color: var(--teal);\n        font-weight: 600;\n        text-decoration: none;\n        cursor: pointer;\n      }\n      .register-prompt a:hover {\n        text-decoration: underline;\n      }\n\n      /* forgot password modal */\n      .modal-overlay {\n        display: none;\n        position: fixed;\n        inset: 0;\n        background: rgba(15, 23, 42, 0.4);\n        backdrop-filter: blur(4px);\n        z-index: 200;\n        place-items: center;\n      }\n      .modal-overlay.open {\n        display: grid;\n      }\n      .modal {\n        background: white;\n        border-radius: 18px;\n        padding: 36px 40px;\n        width: 100%;\n        max-width: 420px;\n        margin: 16px;\n        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n        animation: popIn 0.25s ease;\n      }\n      @keyframes popIn {\n        from {\n          transform: scale(0.92);\n          opacity: 0;\n        }\n        to {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      .modal h3 {\n        font-family: \"Lora\", serif;\n        font-size: 1.25rem;\n        color: var(--slate-900);\n        margin-bottom: 6px;\n      }\n      .modal p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n        margin-bottom: 22px;\n      }\n      .modal-actions {\n        display: flex;\n        gap: 10px;\n        margin-top: 20px;\n      }\n      .modal-actions .btn {\n        flex: 1;\n        justify-content: center;\n      }\n\n      /* sign-in success */\n      .signin-success {\n        text-align: center;\n        padding: 16px 0;\n      }\n      .signin-success .success-icon {\n        margin: 0 auto 20px;\n      }\n      .signin-success h2 {\n        font-family: \"Lora\", serif;\n        font-size: 1.5rem;\n        color: var(--slate-900);\n        margin-bottom: 8px;\n      }\n      .signin-success p {\n        font-size: 0.875rem;\n        color: var(--slate-400);\n      }\n\n      /* ============================================\n   DOCTOR DASHBOARD \u2014 City General Hospital theme\n   ============================================ */\n      #view-dashboard {\n        display: none;\n        --db-blue: #005f78;\n        --db-blue-dk: #00475a;\n        --db-blue-lt: #e1f2f5;\n        --db-ink: #1f2937;\n        --db-muted: #6b7280;\n        --db-line: #e5e7eb;\n        --db-bg: #f4f6fa;\n        background: var(--db-bg);\n        color: var(--db-ink);\n        font-family: \"Inter\", sans-serif;\n      }\n      #view-dashboard.active {\n        display: block;\n      }\n      #view-dashboard * {\n        box-sizing: border-box;\n      }\n\n      #view-dashboard .db-shell {\n        display: grid;\n        grid-template-columns: 284px minmax(0, 1fr);\n        min-height: 100vh;\n      }\n\n      /* Prevent the public-site navigation styles from leaking into the\n         dashboard sidebar. This restores the vertical menu in the reference. */\n      #view-dashboard nav.db-nav {\n        display: block;\n        padding: 0;\n        background: transparent;\n        border: 0;\n        position: static;\n        backdrop-filter: none;\n      }\n\n      /* Sidebar */\n      #view-dashboard .db-sidebar {\n        background: #fff;\n        border-right: 1px solid var(--db-line);\n        padding: 22px 12px;\n        position: sticky;\n        top: 0;\n        height: 100vh;\n        overflow-y: auto;\n      }\n      #view-dashboard .db-brand {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 0 8px 28px;\n      }\n      #view-dashboard .db-brand-mark {\n        width: 42px;\n        height: 42px;\n        border-radius: 12px;\n        background: var(--db-blue);\n        display: grid;\n        place-items: center;\n        font-size: 20px;\n        color: white;\n        flex-shrink: 0;\n      }\n      #view-dashboard .db-brand span {\n        font-weight: 800;\n        font-size: 18px;\n        line-height: 1.15;\n        color: var(--db-ink);\n      }\n      #view-dashboard .db-nav a {\n        display: flex;\n        align-items: center;\n        gap: 13px;\n        color: var(--db-muted);\n        text-decoration: none;\n        padding: 11px 14px;\n        border-radius: 10px;\n        margin: 2px 0;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n      }\n      #view-dashboard .db-nav a:hover {\n        background: var(--db-blue-lt);\n        color: var(--db-blue);\n      }\n      #view-dashboard .db-nav a.active {\n        background: var(--db-blue-lt);\n        color: var(--db-blue);\n        font-weight: 700;\n      }\n      #view-dashboard .db-nav .db-icon {\n        width: 20px;\n        text-align: center;\n        font-size: 16px;\n      }\n\n      /* Header */\n      #view-dashboard .db-header {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 20px;\n        padding: 18px 32px;\n        background: #fff;\n        border-bottom: 1px solid var(--db-line);\n      }\n      #view-dashboard .db-bell {\n        position: relative;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        background: var(--db-bg);\n        display: grid;\n        place-items: center;\n        cursor: pointer;\n        font-size: 17px;\n      }\n      #view-dashboard .db-bell:after {\n        content: \"\";\n        width: 8px;\n        height: 8px;\n        background: #ef4444;\n        border: 2px solid white;\n        border-radius: 50%;\n        position: absolute;\n        top: 5px;\n        right: 5px;\n      }\n      #view-dashboard .db-profile {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        cursor: pointer;\n      }\n      #view-dashboard .db-profile img {\n        width: 42px;\n        height: 42px;\n        border-radius: 50%;\n        object-fit: cover;\n      }\n      #view-dashboard .db-profile span {\n        font-weight: 700;\n        font-size: 15px;\n      }\n\n      #view-dashboard .db-main {\n        padding: 34px 32px 60px;\n      }\n      #view-dashboard .db-page-title {\n        font-size: 28px;\n        font-weight: 800;\n        margin-bottom: 22px;\n      }\n\n      #view-dashboard .db-layout {\n        display: grid;\n        grid-template-columns: 1.5fr 1fr;\n        gap: 22px;\n        align-items: start;\n      }\n\n      /* Stat cards */\n      #view-dashboard .db-stats {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        border-radius: 16px;\n        overflow: hidden;\n        margin-bottom: 22px;\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n      }\n      #view-dashboard .db-stat {\n        padding: 22px 26px;\n      }\n      #view-dashboard .db-stat h4 {\n        font-size: 15px;\n        font-weight: 600;\n        margin-bottom: 8px;\n      }\n      #view-dashboard .db-stat .db-num {\n        font-size: 34px;\n        font-weight: 800;\n      }\n      #view-dashboard .db-stat.filled {\n        background: var(--db-blue);\n        color: white;\n      }\n      #view-dashboard .db-stat.tint {\n        background: var(--db-blue-lt);\n        color: var(--db-ink);\n      }\n      #view-dashboard .db-stat.plain {\n        background: #fff;\n        color: var(--db-ink);\n      }\n\n      /* Panels */\n      #view-dashboard .db-panel {\n        background: #fff;\n        border: 1px solid var(--db-line);\n        border-radius: 16px;\n        padding: 24px;\n        margin-bottom: 22px;\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);\n      }\n      #view-dashboard .db-panel h3 {\n        font-size: 19px;\n        font-weight: 800;\n        margin-bottom: 16px;\n      }\n\n      /* Appointment management */\n      #view-dashboard .db-appt-toolbar {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        flex-wrap: wrap;\n        margin-bottom: 18px;\n      }\n      #view-dashboard .db-month-nav {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-weight: 700;\n      }\n      #view-dashboard .db-month-nav button {\n        border: 1px solid var(--db-line);\n        background: #fff;\n        width: 30px;\n        height: 30px;\n        border-radius: 8px;\n        cursor: pointer;\n      }\n      #view-dashboard .db-appt-toolbar .db-spacer {\n        flex: 1;\n      }\n      #view-dashboard .db-btn-sm {\n        border: none;\n        border-radius: 8px;\n        padding: 9px 16px;\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      #view-dashboard .db-accept-btn {\n        background: #16a34a;\n        color: white;\n      }\n      #view-dashboard .db-reject-btn {\n        background: #fff;\n        color: #dc2626;\n        border: 1.5px solid #dc2626 !important;\n      }\n      #view-dashboard .db-reschedule-btn {\n        background: #fff;\n        color: var(--db-blue);\n        border: 1.5px solid var(--db-blue) !important;\n      }\n      #view-dashboard .db-availability-btn {\n        background: var(--db-blue);\n        color: white;\n      }\n\n      #view-dashboard .db-calendar {\n        width: 100%;\n        border-collapse: collapse;\n        font-size: 13px;\n      }\n      #view-dashboard .db-calendar th {\n        text-align: center;\n        padding: 10px 6px;\n        color: var(--db-muted);\n        font-weight: 700;\n        border-bottom: 1px solid var(--db-line);\n      }\n      #view-dashboard .db-calendar td {\n        border: 1px solid var(--db-line);\n        height: 52px;\n        vertical-align: top;\n        padding: 4px;\n        position: relative;\n        width: 19%;\n      }\n      #view-dashboard .db-calendar td.db-time-col {\n        border: none;\n        text-align: right;\n        padding-right: 10px;\n        color: var(--db-muted);\n        width: 60px;\n        font-size: 12px;\n      }\n      #view-dashboard .db-calendar td.db-highlight-col {\n        background: var(--db-blue-lt);\n      }\n      #view-dashboard .db-slot {\n        background: var(--db-blue);\n        color: white;\n        border-radius: 6px;\n        padding: 4px 6px;\n        font-size: 11px;\n        font-weight: 600;\n        line-height: 1.3;\n      }\n      #view-dashboard .db-slot small {\n        display: block;\n        font-weight: 400;\n        opacity: 0.85;\n      }\n\n      /* Patient history timeline */\n      #view-dashboard .db-timeline-row {\n        display: grid;\n        grid-template-columns: 120px 1fr;\n        align-items: center;\n        gap: 14px;\n        margin-bottom: 22px;\n      }\n      #view-dashboard .db-timeline-row label {\n        font-weight: 700;\n        font-size: 14px;\n      }\n      #view-dashboard .db-track {\n        position: relative;\n        height: 4px;\n        background: var(--db-line);\n        border-radius: 2px;\n      }\n      #view-dashboard .db-track .db-fill {\n        position: absolute;\n        top: 0;\n        height: 4px;\n        background: var(--db-blue);\n        border-radius: 2px;\n      }\n      #view-dashboard .db-dot {\n        position: absolute;\n        top: 50%;\n        width: 14px;\n        height: 14px;\n        background: var(--db-blue);\n        border-radius: 50%;\n        transform: translate(-50%, -50%);\n        border: 3px solid white;\n        box-shadow: 0 0 0 1.5px var(--db-blue);\n      }\n\n      /* Right column: tabs */\n      #view-dashboard .db-tabs {\n        display: flex;\n        gap: 20px;\n        border-bottom: 1px solid var(--db-line);\n        margin-bottom: 18px;\n        overflow-x: auto;\n      }\n      #view-dashboard .db-tab {\n        padding: 6px 2px 12px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--db-muted);\n        cursor: pointer;\n        border-bottom: 2px solid transparent;\n        white-space: nowrap;\n      }\n      #view-dashboard .db-tab.active {\n        color: var(--db-blue);\n        border-color: var(--db-blue);\n      }\n      #view-dashboard .db-patient-select {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        border: 1px solid var(--db-line);\n        border-radius: 10px;\n        padding: 10px 14px;\n        font-size: 14px;\n        color: var(--db-muted);\n        cursor: pointer;\n        margin-bottom: 8px;\n      }\n      #view-dashboard .db-patient-select .db-avatar-sm {\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        background: var(--db-blue-lt);\n        display: grid;\n        place-items: center;\n        font-size: 14px;\n      }\n      #view-dashboard .db-tab-content {\n        font-size: 13px;\n        color: var(--db-muted);\n        padding: 6px 0 4px;\n        min-height: 20px;\n      }\n\n      /* Digital prescription */\n      #view-dashboard .db-rx-row {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        gap: 12px;\n        margin-bottom: 16px;\n      }\n      #view-dashboard .db-rx-row select,\n      #view-dashboard .db-rx-row input {\n        border: 1px solid var(--db-line);\n        border-radius: 10px;\n        padding: 11px 14px;\n        font-size: 13px;\n        font-family: inherit;\n        width: 100%;\n      }\n      #view-dashboard .db-rx-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 10px;\n      }\n      #view-dashboard .db-btn-outline {\n        background: #fff;\n        border: 1.5px solid var(--db-line);\n        border-radius: 9px;\n        padding: 10px 18px;\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n        color: var(--db-ink);\n      }\n      #view-dashboard .db-btn-filled {\n        background: var(--db-blue);\n        color: white;\n        border: none;\n        border-radius: 9px;\n        padding: 10px 20px;\n        font-size: 13px;\n        font-weight: 700;\n        cursor: pointer;\n      }\n\n      /* Lab reports */\n      #view-dashboard .db-lab-row {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 12px 0;\n        border-top: 1px solid var(--db-line);\n        flex-wrap: wrap;\n      }\n      #view-dashboard .db-lab-row:first-of-type {\n        border-top: none;\n        padding-top: 4px;\n      }\n      #view-dashboard .db-lab-row span.db-lab-name {\n        flex: 1;\n        font-size: 14px;\n        font-weight: 600;\n        min-width: 140px;\n      }\n      #view-dashboard .db-lab-row button {\n        border: 1px solid var(--db-line);\n        background: #fff;\n        border-radius: 8px;\n        padding: 7px 12px;\n        font-size: 12px;\n        cursor: pointer;\n      }\n\n      /* Chat / video CTA buttons */\n      #view-dashboard .db-cta-row {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 14px;\n        margin-bottom: 22px;\n      }\n      #view-dashboard .db-cta {\n        background: var(--db-blue);\n        color: white;\n        border: none;\n        border-radius: 12px;\n        padding: 16px 18px;\n        font-size: 15px;\n        font-weight: 700;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        cursor: pointer;\n      }\n      #view-dashboard .db-cta:hover {\n        background: var(--db-blue-dk);\n      }\n\n      /* Analytics chart */\n      #view-dashboard .db-chart-legend {\n        display: flex;\n        gap: 18px;\n        font-size: 12px;\n        color: var(--db-muted);\n        margin-bottom: 10px;\n      }\n      #view-dashboard .db-chart-legend span {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n      }\n      #view-dashboard .db-legend-dot {\n        width: 9px;\n        height: 9px;\n        border-radius: 50%;\n        display: inline-block;\n      }\n      #view-dashboard .db-chart-svg {\n        width: 100%;\n        height: auto;\n      }\n\n      /* Floating secure messaging widget */\n      #view-dashboard .db-chat-widget {\n        position: fixed;\n        bottom: 24px;\n        right: 24px;\n        width: 340px;\n        background: #fff;\n        border-radius: 16px;\n        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);\n        overflow: hidden;\n        z-index: 1300;\n        display: none;\n        flex-direction: column;\n      }\n      #view-dashboard .db-chat-widget.open {\n        display: flex;\n      }\n      #view-dashboard .db-chat-widget.minimized .db-chat-body {\n        display: none;\n      }\n      #view-dashboard .db-chat-head {\n        background: var(--db-blue);\n        color: white;\n        padding: 14px 16px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        font-weight: 700;\n        font-size: 14px;\n        cursor: pointer;\n      }\n      #view-dashboard .db-chat-head-actions {\n        display: flex;\n        gap: 10px;\n      }\n      #view-dashboard .db-chat-head-actions button {\n        background: none;\n        border: none;\n        color: white;\n        cursor: pointer;\n        font-size: 15px;\n      }\n      #view-dashboard .db-chat-body {\n        display: flex;\n        flex-direction: column;\n        max-height: 400px;\n      }\n      #view-dashboard .db-chat-msgs {\n        flex: 1;\n        overflow-y: auto;\n        padding: 14px 16px;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        max-height: 280px;\n      }\n      #view-dashboard .db-msg {\n        max-width: 75%;\n        padding: 9px 13px;\n        border-radius: 12px;\n        font-size: 13px;\n        line-height: 1.4;\n      }\n      #view-dashboard .db-msg.received {\n        background: var(--db-bg);\n        align-self: flex-start;\n      }\n      #view-dashboard .db-msg.sent {\n        background: var(--db-blue);\n        color: white;\n        align-self: flex-end;\n      }\n      #view-dashboard .db-chat-input-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        border-top: 1px solid var(--db-line);\n        padding: 10px 12px;\n      }\n      #view-dashboard .db-chat-input-row input {\n        flex: 1;\n        border: none;\n        outline: none;\n        font-size: 13px;\n        padding: 8px;\n      }\n      #view-dashboard .db-chat-input-row button {\n        background: var(--db-blue);\n        color: white;\n        border: none;\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        cursor: pointer;\n      }\n\n      @media (max-width: 1100px) {\n        #view-dashboard .db-layout {\n          grid-template-columns: 1fr;\n        }\n      }\n      @media (max-width: 800px) {\n        #view-dashboard .db-shell {\n          display: block;\n        }\n        #view-dashboard .db-sidebar {\n          position: relative;\n          height: auto;\n        }\n        #view-dashboard .db-stats,\n        #view-dashboard .db-rx-row,\n        #view-dashboard .db-cta-row {\n          grid-template-columns: 1fr;\n        }\n        #view-dashboard .db-chat-widget {\n          width: 90vw;\n          right: 5vw;\n        }\n      }\n      @media (max-width: 640px) {\n        nav {\n          padding: 14px 20px;\n        }\n        .card {\n          padding: 28px 20px;\n        }\n        .form-grid {\n          grid-template-columns: 1fr;\n        }\n        .col-span-2 {\n          grid-column: span 1;\n        }\n        .step-line {\n          width: 40px;\n        }\n        .step-label {\n          display: none;\n        }\n      }\n      .otp-modal-overlay {\n        display: none;\n        position: fixed;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n        z-index: 9999;\n        align-items: center;\n        justify-content: center;\n        padding: 16px;\n      }\n      .otp-modal-overlay.open {\n        display: flex;\n      }\n      .otp-modal-box {\n        background: #fff;\n        border-radius: 14px;\n        padding: 28px 24px;\n        width: 100%;\n        max-width: 360px;\n        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n      }\n      .otp-modal-box h3 {\n        margin: 0 0 8px;\n        font-size: 19px;\n      }\n      .otp-modal-hint {\n        font-size: 13px;\n        color: #666;\n        line-height: 1.5;\n        margin: 0 0 16px;\n      }\n      .otp-modal-hint b {\n        color: #222;\n      }\n      .otp-modal-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 12px 14px;\n        font-size: 20px;\n        letter-spacing: 6px;\n        text-align: center;\n        border: 1px solid #ccc;\n        border-radius: 8px;\n        margin-bottom: 10px;\n      }\n      .otp-modal-error {\n        color: #d33;\n        font-size: 13px;\n        margin-bottom: 10px;\n      }\n      .otp-modal-submit {\n        width: 100%;\n        padding: 12px;\n        border: none;\n        border-radius: 8px;\n        background: #16a085;\n        color: #fff;\n        font-weight: 600;\n        font-size: 15px;\n        cursor: pointer;\n        margin-bottom: 8px;\n      }\n      .otp-modal-submit:disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n      }\n      .otp-modal-cancel {\n        width: 100%;\n        padding: 10px;\n        border: none;\n        background: none;\n        color: #888;\n        font-size: 14px;\n        cursor: pointer;\n      }\n      @media (max-width: 480px) {\n        .otp-modal-box {\n          padding: 22px 18px;\n        }\n      }\n      /* \u2500\u2500 Standalone dashboard page nav (doctor.html) \u2500\u2500 */\n      #db-page-nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 14px 32px;\n        background: rgba(255, 255, 255, 0.96);\n        backdrop-filter: blur(10px);\n        border-bottom: 1px solid var(--db-line, #e5e7eb);\n        position: sticky;\n        top: 0;\n        z-index: 500;\n      }\n      #db-page-nav .db-page-logo {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        text-decoration: none;\n        color: var(--db-blue, #005f78);\n        font-weight: 700;\n        font-size: 1.05rem;\n      }\n      #db-page-nav .db-page-links {\n        display: flex;\n        align-items: center;\n        gap: 18px;\n        font-size: 14px;\n        font-weight: 600;\n      }\n      #db-page-nav .db-page-links a,\n      #db-page-nav .db-page-links button {\n        color: var(--db-blue-dk, #00475a);\n        text-decoration: none;\n        background: none;\n        border: none;\n        font: inherit;\n        cursor: pointer;\n      }\n      #db-page-nav .db-page-links button {\n        color: #e11d48;\n      }\n    ";
const PAGE_SCRIPTS = ['/legacy/api.js', `
  let doctorSession=null;
  let doctorProfile=null;
  let dashboardAppointments=[];
  const toast=(message)=>{
    const el=document.getElementById('dashToast');
    if(!el){ alert(message); return; }
    el.textContent=message; el.classList.add('show');
    clearTimeout(window.__dashToastTimer); window.__dashToastTimer=setTimeout(()=>el.classList.remove('show'),2600);
  };
  async function logoutDoctor(){
    if(!confirm('Are you sure you want to log out?')) return;
    try{await logout();}finally{window.location.href='/login';}
  }
  function initials(name){
    return String(name||'Doctor').split(/\\s+/).filter(Boolean).slice(0,2).map(x=>x[0].toUpperCase()).join('') || 'DR';
  }
  function renderDoctorPhoto(){
    const img=document.getElementById('dbProfileImg');
    const initialsEl=document.getElementById('dbProfileInitials');
    if(!img || !doctorProfile) return;
    if(doctorProfile.profile_photo){
      img.src=doctorProfile.profile_photo; img.style.display='block';
      if(initialsEl) initialsEl.style.display='none';
    }else{
      img.removeAttribute('src'); img.style.display='none';
      if(initialsEl){initialsEl.textContent=initials(doctorSession?.fullName); initialsEl.style.display='grid';}
    }
  }
  async function loadDoctor(){
    try{
      const sessionResult=await getCurrentUser();
      if(sessionResult.data.role!=='DOCTOR'){window.location.href='/login';return;}
      doctorSession=sessionResult.data;
      const result=await apiRequest('/doctors?id='+doctorSession.linkedId,'GET');
      doctorProfile=result.data;
      document.getElementById('dbProfileName').textContent='Dr. '+(doctorProfile.first_name||doctorSession.fullName)+' ▾';
      document.querySelector('.db-page-title').textContent='Welcome, Dr. '+(doctorProfile.first_name||doctorSession.fullName)+' — '+(doctorProfile.department||'General Medicine');
      renderDoctorPhoto();
      await loadAppointments();
    }catch(err){console.error(err);window.location.href='/login';}
  }
  async function loadAppointments(){
    try{
      const result=await listAppointments(); dashboardAppointments=result.data||[]; window._doctorAllAppointments=dashboardAppointments;
      const today=new Date().toISOString().slice(0,10);
      document.getElementById('dbStatToday').textContent=dashboardAppointments.filter(a=>a.appointment_date===today).length;
      document.getElementById('dbStatUpcoming').textContent=dashboardAppointments.filter(a=>a.status!=='Cancelled').length;
      const list=document.getElementById('dbAppointmentsList');
      list.innerHTML=dashboardAppointments.length?dashboardAppointments.map(a=>'<div class="db-slot" style="margin-bottom:8px;"><b>'+escapeHtml(a.patient_name)+'</b> — '+escapeHtml(a.appointment_date)+' · '+escapeHtml(a.slot_time||'Time TBD')+'<small style="display:block;">'+escapeHtml(a.visit_type||'Visit')+' · '+escapeHtml(a.status||'Scheduled')+(a.reason?' · '+escapeHtml(a.reason):'')+'</small></div>').join(''):'<p>No appointments booked with you yet.</p>';
      const byPatient={}; dashboardAppointments.forEach(a=>{if(!byPatient[a.patient_id]||a.appointment_date>byPatient[a.patient_id].appointment_date)byPatient[a.patient_id]=a;});
      const patients=Object.values(byPatient).sort((a,b)=>String(b.appointment_date).localeCompare(String(a.appointment_date)));
      document.getElementById('dbPatientsList').innerHTML=patients.length?patients.map(a=>'<div class="db-slot" style="margin-bottom:8px;"><b>'+escapeHtml(a.patient_name)+'</b><small style="display:block;">Last visit: '+escapeHtml(a.appointment_date)+' · '+escapeHtml(a.status)+'</small></div>').join(''):'<p>No patients attended yet.</p>';
      const select=document.getElementById('dbPatientSelect');
      select.innerHTML='<option value="">Select a patient…</option>'+patients.map(a=>'<option value="'+a.patient_id+'">'+escapeHtml(a.patient_name)+'</option>').join('');
    }catch(err){console.error(err);document.getElementById('dbAppointmentsList').innerHTML='<p>Could not load appointments.</p>';}
  }
  function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  async function updateFirstAppointment(status){
    const appt=dashboardAppointments.find(a=>a.status!=='Cancelled' && a.status!=='Completed');
    if(!appt){toast('No active appointment is available.');return;}
    try{await apiRequest('/appointments?id='+appt.appointment_id,'PUT',{status});toast('Appointment '+status.toLowerCase()+'.');await loadAppointments();}
    catch(err){toast(err.message);}
  }
  function scrollToSection(id){
    const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function savePhoto(file){
    if(!file) return;
    if(!file.type.startsWith('image/')){alert('Please choose an image file.');return;}
    if(file.size>2*1024*1024){alert('Please choose an image smaller than 2 MB.');return;}
    const reader=new FileReader();
    reader.onload=async()=>{
      try{
        const result=await updateDoctorProfile({profile_photo:reader.result});
        doctorProfile=result.data; renderDoctorPhoto(); toast('Profile photo updated.');
      }catch(err){alert('Could not update photo: '+err.message);}
    };
    reader.readAsDataURL(file);
  }
  async function editProfile(){
    const name=prompt('Doctor name:',doctorProfile?.first_name||'');
    if(name===null) return;
    try{
      const result=await updateDoctorProfile({first_name:name.trim()||doctorProfile.first_name});
      doctorProfile=result.data;
      document.getElementById('dbProfileName').textContent='Dr. '+doctorProfile.first_name+' ▾';
      document.querySelector('.db-page-title').textContent='Welcome, Dr. '+doctorProfile.first_name+' — '+(doctorProfile.department||'General Medicine');
      renderDoctorPhoto(); toast('Profile updated.');
    }catch(err){alert(err.message);}
  }
  function renderRecordTab(){
    const patientId=document.getElementById('dbPatientSelect').value, content=document.getElementById('dbRecordContent');
    const active=document.querySelector('#dbRecordTabs .db-tab.active')?.dataset.tab||'visits';
    if(!patientId){content.textContent='Select a patient to view their records.';return;}
    const record=window._doctorPatientRecords?.[patientId];
    if(!record){content.textContent='Loading…';return;}
    if(active==='visits') content.innerHTML=record.visits.length?record.visits.map(v=>'<div>'+escapeHtml(v.appointment_date)+' · '+escapeHtml(v.status)+(v.reason?' · '+escapeHtml(v.reason):'')+'</div>').join(''):'No previous visits on file for this patient.';
    else if(active==='medications') content.innerHTML=record.prescriptions.length?record.prescriptions.map(p=>'<div>'+escapeHtml(p.medication_name)+(p.dosage?' · '+escapeHtml(p.dosage):'')+(p.instructions?' · '+escapeHtml(p.instructions):'')+'</div>').join(''):'No medications prescribed for this patient yet.';
    else if(active==='diseases') content.textContent=record.medicalHistory||'No medical history on file for this patient.';
    else content.textContent='No records available for this patient yet.';
  }
  async function loadPatientRecord(id){
    if(!id){renderRecordTab();return;}
    document.getElementById('dbRecordContent').textContent='Loading…';
    window._doctorPatientRecords=window._doctorPatientRecords||{};
    try{
      const [p,rx]=await Promise.all([apiRequest('/patients?id='+id,'GET'),listPrescriptions(id)]);
      window._doctorPatientRecords[id]={medicalHistory:p.data.medical_history,visits:dashboardAppointments.filter(a=>String(a.patient_id)===String(id)),prescriptions:rx.data||[]};
    }catch(err){window._doctorPatientRecords[id]={medicalHistory:null,visits:[],prescriptions:[]};}
    renderRecordTab();
  }
  document.addEventListener('DOMContentLoaded',()=>{});
  setTimeout(()=>{
    document.getElementById('dbPageLogoutBtn')?.addEventListener('click',logoutDoctor);
    document.getElementById('dbLogoutBtn')?.addEventListener('click',logoutDoctor);
    document.getElementById('dbBell')?.addEventListener('click',()=>toast('You have 2 notifications.'));
    document.getElementById('dbEditPhotoBtn')?.addEventListener('click',()=>document.getElementById('dbPhotoInput')?.click());
    document.getElementById('dbEditProfileBtn')?.addEventListener('click',editProfile);
    document.getElementById('dbPhotoInput')?.addEventListener('change',e=>savePhoto(e.target.files?.[0]));
    document.querySelectorAll('#view-dashboard [data-section]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();document.querySelectorAll('#view-dashboard .db-nav a').forEach(a=>a.classList.remove('active'));link.classList.add('active');scrollToSection(link.dataset.section);}));
    document.querySelectorAll('#view-dashboard [data-toast]').forEach(btn=>btn.addEventListener('click',()=>toast(btn.dataset.toast)));
    document.querySelector('.db-accept-btn')?.addEventListener('click',()=>updateFirstAppointment('Confirmed'));
    document.querySelector('.db-reject-btn')?.addEventListener('click',()=>updateFirstAppointment('Cancelled'));
    document.querySelector('.db-reschedule-btn')?.addEventListener('click',()=>toast('Open the appointment booking page to choose a new date/time.'));
    document.querySelector('.db-availability-btn')?.addEventListener('click',()=>toast('Availability settings saved for your dashboard session.'));
    document.getElementById('dbPrevMonth')?.addEventListener('click',()=>{const x=document.getElementById('dbMonthLabel');x.textContent='Previous Month';});
    document.getElementById('dbNextMonth')?.addEventListener('click',()=>{const x=document.getElementById('dbMonthLabel');x.textContent='Next Month';});
    document.querySelectorAll('#dbRecordTabs .db-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('#dbRecordTabs .db-tab').forEach(t=>t.classList.remove('active'));tab.classList.add('active');renderRecordTab();}));
    document.getElementById('dbPatientSelect')?.addEventListener('change',e=>loadPatientRecord(e.target.value));
    document.getElementById('dbPrintBtn')?.addEventListener('click',()=>window.print());
    document.getElementById('dbSendRxBtn')?.addEventListener('click',async()=>{
      const patientId=document.getElementById('dbPatientSelect').value, medicationName=document.getElementById('dbRxMedicine').value, dosage=document.getElementById('dbRxDosage').value.trim(), duration=document.getElementById('dbRxDuration').value.trim();
      if(!patientId){alert('Select a patient first.');return;} if(!medicationName){alert('Select a medicine first.');return;}
      try{await addPrescription({patientId,medicationName,dosage:dosage||null,instructions:duration?'Duration: '+duration:null});toast('Prescription sent digitally.');delete window._doctorPatientRecords[patientId];await loadPatientRecord(patientId);}catch(err){alert('Could not send prescription: '+err.message);}
    });
    document.getElementById('dbChatCta')?.addEventListener('click',()=>{const msg=prompt('Message to patient:');if(msg)toast('Message queued: '+msg);});
    document.getElementById('dbVideoCta')?.addEventListener('click',()=>toast('Video consultation opened for the next available appointment.'));
    document.querySelectorAll('#view-dashboard .db-lab-row button').forEach(btn=>btn.addEventListener('click',()=>{const action=btn.textContent.trim();if(action==='View')alert('Lab report preview opened.');else if(action.includes('Comments')){const c=prompt('Add comment:');if(c)toast('Comment saved.');}else toast('Additional test recommendation saved.');}));
    loadDoctor();
  },0);
`];

export default function DoctorPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    if (PAGE_CSS) {
      const st = document.createElement('style');
      st.setAttribute('data-mediwell-page-style', 'true');
      st.textContent = PAGE_CSS;
      document.head.appendChild(st);
    }
    const extra = document.createElement('style');
    extra.setAttribute('data-mediwell-page-style','true');
    extra.textContent = `
      #view-dashboard .db-shell{grid-template-columns:250px minmax(0,1fr);width:100%;min-height:calc(100vh - 58px);}
      #view-dashboard .db-shell > div{min-width:0;}
      #view-dashboard .db-main{max-width:none;width:100%;}
      #view-dashboard .db-header{justify-content:flex-end;position:sticky;top:58px;z-index:100;}
      #view-dashboard .db-profile{position:relative;}
      #view-dashboard .db-avatar-wrap{width:46px;height:46px;border-radius:50%;overflow:hidden;background:#e5f6f3;border:2px solid #9ad8d1;display:grid;place-items:center;color:#00667a;font-weight:800;}
      #view-dashboard .db-avatar-wrap img{width:100%;height:100%;object-fit:cover;}
      #view-dashboard #dbProfileInitials{display:grid;place-items:center;width:100%;height:100%;}
      #view-dashboard .db-profile-name-btn{border:0;background:transparent;font:inherit;color:inherit;cursor:pointer;padding:4px;}
      #view-dashboard .db-edit-photo{border:1px solid var(--db-line);background:#fff;color:var(--db-blue);border-radius:8px;padding:7px 10px;font-size:12px;font-weight:700;cursor:pointer;}
      #view-dashboard .db-edit-photo:hover{background:var(--db-blue-lt);}
      #view-dashboard .db-nav a{user-select:none;}
      #view-dashboard .dash-toast{position:fixed;right:24px;bottom:24px;background:#0f766e;color:#fff;padding:12px 18px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.18);z-index:5000;opacity:0;transform:translateY(10px);pointer-events:none;transition:.2s;}
      #view-dashboard .dash-toast.show{opacity:1;transform:translateY(0);}
      @media(max-width:900px){#view-dashboard .db-shell{grid-template-columns:1fr;}#view-dashboard .db-sidebar{position:relative;height:auto;}.db-nav{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:4px;}#view-dashboard .db-header{top:0;}}
    `;
    document.head.appendChild(extra);
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
<nav id="db-page-nav">
<a className="db-page-logo" href="/">
<span>✚</span>
<span>MediWell Health Care</span>
</a>
<div className="db-page-links">
<a href="/">🏠 Home</a>
<button type="button" id="dbPageLogoutBtn">⏻ Log Out</button>
</div>
</nav>
<div id="view-dashboard" className="active">
<div className="db-shell">
<aside className="db-sidebar">
  <div className="db-brand"><span className="db-brand-mark">✚</span><span>MediWell<br/>Healthcare</span></div>
  <nav className="db-nav">
    <a className="active" href="#dashboard" data-section="dbDashboardTop"><span className="db-icon">▦</span>Dashboard</a>
    <a href="#appointments" data-section="dbAppointmentManagement"><span className="db-icon">📅</span>Appointments</a>
    <a href="#records" data-section="dbRecords"><span className="db-icon">📄</span>Medical Records</a>
    <a href="#prescriptions" data-section="dbPrescription"><span className="db-icon">📝</span>Prescriptions</a>
    <a href="#reports" data-section="dbLabReports"><span className="db-icon">🧪</span>Lab Reports</a>
    <a href="#history" data-section="dbPatientHistory"><span className="db-icon">🕘</span>Patient History</a>
    <a href="#chat" data-section="dbChatCta"><span className="db-icon">💬</span>Chat</a>
    <a href="#video" data-section="dbVideoCta"><span className="db-icon">📹</span>Video Consultation</a>
    <a href="#analytics" data-section="dbAnalytics"><span className="db-icon">📊</span>Analytics</a>
    <a href="#logout" id="dbLogoutBtn" style={{marginTop:'20px'}}><span className="db-icon">⏻</span>Log Out</a>
  </nav>
</aside>
<div>
<header className="db-header">
<button className="db-bell" id="dbBell">🔔</button>
<div className="db-profile">
  <div className="db-avatar-wrap"><img src="" alt="Doctor" id="dbProfileImg" style={{display:'none'}} /><span id="dbProfileInitials">DR</span></div>
  <button type="button" className="db-profile-name-btn" id="dbEditProfileBtn"><span id="dbProfileName">Doctor ▾</span></button>
  <button type="button" className="db-edit-photo" id="dbEditPhotoBtn">Edit DP</button>
  <input id="dbPhotoInput" type="file" accept="image/*" style={{display:'none'}} />
</div>
</header>
<main className="db-main" id="dbDashboardTop">
<h1 className="db-page-title">Doctor Dashboard</h1>
<div className="db-layout">
{/* LEFT COLUMN */}
<div>
<div className="db-stats">
<div className="db-stat filled">
<h4>Today's Appointments</h4>
<div className="db-num" id="dbStatToday">0</div>
</div>
<div className="db-stat tint">
<h4>Upcoming Appointments</h4>
<div className="db-num" id="dbStatUpcoming">0</div>
</div>
<div className="db-stat plain">
<h4>Pending Reports</h4>
<div className="db-num">3</div>
</div>
<div className="db-stat plain">
<h4>Notifications</h4>
<div className="db-num">2</div>
</div>
</div>
<div className="db-panel">
<h3>Upcoming Appointments</h3>
<div id="dbAppointmentsList">
<p style={{color: "var(--gray-500, #888)"}}>Loading…</p>
</div>
</div>
<div className="db-panel">
<h3>Patients Attended</h3>
<div id="dbPatientsList">
<p style={{color: "var(--gray-500, #888)"}}>Loading…</p>
</div>
</div>
<div className="db-panel" id="dbAppointmentManagement">
<h3>Appointment Management</h3>
<div className="db-appt-toolbar">
<div className="db-month-nav">
<button id="dbPrevMonth">‹</button>
<span id="dbMonthLabel">July 2026</span>
<button id="dbNextMonth">›</button>
</div>
<div className="db-spacer"></div>
<button className="db-btn-sm db-accept-btn" data-toast="Appointment accepted">
                      Accept
                    </button>
<button className="db-btn-sm db-reject-btn" data-toast="Appointment declined">
                      Reject
                    </button>
<button className="db-btn-sm db-reschedule-btn" data-toast="Reschedule requested">
                      Reschedule
                    </button>
<button className="db-btn-sm db-availability-btn" data-toast="Availability updated">
                      Set Availability
                    </button>
</div>
<table className="db-calendar">
<thead>
<tr>
<th></th>
<th>Mon</th>
<th>Tue</th>
<th>Wed</th>
<th>Thu</th>
<th>Fri</th>
</tr>
</thead>
<tbody>
<tr>
<td className="db-time-col">9am</td>
<td></td>
<td className="db-highlight-col"></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td className="db-time-col">10am</td>
<td></td>
<td className="db-highlight-col">
<div className="db-slot">
                            12:00 PM<small>Scheduled</small>
</div>
</td>
<td></td>
<td>
<div className="db-slot">
                            12:00 PM<small>Scheduled</small>
</div>
</td>
<td></td>
</tr>
<tr>
<td className="db-time-col">11pm</td>
<td>
<div className="db-slot">
                            10:00 PM<small>Scheduled</small>
</div>
</td>
<td className="db-highlight-col"></td>
<td>
<div className="db-slot">
                            12:00 PM<small>Scheduled</small>
</div>
</td>
<td></td>
<td></td>
</tr>
<tr>
<td className="db-time-col">12pm</td>
<td></td>
<td className="db-highlight-col"></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div>
<div className="db-panel" id="dbPatientHistory">
<h3>Patient History</h3>
<div className="db-timeline-row">
<label>Diagnoses</label>
<div className="db-track">
<div className="db-dot" style={{left: "15%"}}></div>
<div className="db-dot" style={{left: "45%"}}></div>
</div>
</div>
<div className="db-timeline-row">
<label>Prescriptions</label>
<div className="db-track">
<div className="db-fill" style={{left: "20%", width: "35%"}}></div>
<div className="db-dot" style={{left: "20%"}}></div>
<div className="db-dot" style={{left: "55%"}}></div>
</div>
</div>
<div className="db-timeline-row">
<label>Admissions</label>
<div className="db-track">
<div className="db-fill" style={{left: "65%", width: "15%"}}></div>
<div className="db-dot" style={{left: "65%"}}></div>
<div className="db-dot" style={{left: "80%"}}></div>
</div>
</div>
<div className="db-timeline-row" style={{marginBottom: "0"}}>
<label>Operations</label>
<div className="db-track">
<div className="db-dot" style={{left: "95%"}}></div>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN */}
<div>
<div className="db-panel" id="dbRecords">
<h3>Patient Medical Records</h3>
<div className="db-tabs" id="dbRecordTabs">
<div className="db-tab active" data-tab="visits">
                      Previous Visits
                    </div>
<div className="db-tab" data-tab="allergies">Allergies</div>
<div className="db-tab" data-tab="diseases">Diseases</div>
<div className="db-tab" data-tab="medications">Medications</div>
<div className="db-tab" data-tab="reports">Reports</div>
<div className="db-tab" data-tab="surgeries">Surgeries</div>
</div>
<select className="db-patient-select" id="dbPatientSelect">
<option value="">Select a patient…</option>
</select>
<div className="db-tab-content" id="dbRecordContent">
                    Select a patient to view their previous visits.
                  </div>
</div>
<div className="db-panel" id="dbPrescription">
<h3>Digital Prescription</h3>
<div className="db-rx-row">
<select id="dbRxMedicine">
<option value="">Medicine</option>
<option>Paracetamol</option>
<option>Amoxicillin</option>
<option>Atorvastatin</option>
</select>
<input type="text" id="dbRxDosage" placeholder="Dosage" />
<input type="text" id="dbRxDuration" placeholder="Duration" />
</div>
<div className="db-rx-actions">
<button className="db-btn-outline" id="dbPrintBtn">
                      🖨 Print
                    </button>
<button className="db-btn-filled" id="dbSendRxBtn">
                      ➤ Send Digitally
                    </button>
</div>
</div>
<div className="db-panel" id="dbLabReports">
<h3>Lab Reports</h3>
<div className="db-lab-row">
<span className="db-lab-name">Test Test Result</span>
<button data-toast="Report opened">View</button>
<button data-toast="Comment added">Add Comments</button>
<button data-toast="Additional tests recommended">
                      Recommend Additional Tests
                    </button>
</div>
<div className="db-lab-row">
<span className="db-lab-name">Test Test Result</span>
<button data-toast="Report opened">View</button>
<button data-toast="Comment added">Add Comments</button>
<button data-toast="Additional tests recommended">
                      Recommend Additional Tests
                    </button>
</div>
</div>
<div className="db-cta-row">
<button className="db-cta" id="dbChatCta">
                    Chat with Patients <span>›</span>
</button>
<button className="db-cta" id="dbVideoCta">
                    Video Consultation <span>›</span>
</button>
</div>
<div className="db-panel" id="dbAnalytics">
<h3 style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    Analytics
                    <span style={{fontSize: "13px", fontWeight: "500", color: "var(--db-muted)", cursor: "pointer"}}>Last Month ▾</span>
</h3>
<div className="db-chart-legend">
<span><span className="db-legend-dot" style={{background: "var(--db-blue)"}}></span>Number of Patients</span>
<span><span className="db-legend-dot" style={{background: "#91cdd7"}}></span>Appointment Trends</span>
</div>
<svg viewbox="0 0 320 140" className="db-chart-svg">
<polyline points="0,90 40,60 80,95 120,40 160,70 200,20 240,55 280,15 320,10" fill="none" stroke="#005f78" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
<polyline points="0,110 40,90 80,100 120,75 160,95 200,60 240,80 280,50 320,45" fill="none" stroke="#91cdd7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></polyline>
</svg>
</div>
</div>
</div>
</main>
</div>
</div>
<div className="dash-toast" id="dashToast">Saved successfully</div>
{/* Floating chat widget */}
{/* <div class="db-chat-widget" id="dbChatWidget">
        <div class="db-chat-head" id="dbChatHead">
          <span>Secure Messaging ✓</span>
          <div class="db-chat-head-actions">
            <button id="dbChatMinimize">–</button>
            <button id="dbChatClose">✕</button>
          </div>
        </div>
        <div class="db-chat-body">
          <div class="db-chat-msgs" id="dbChatMsgs">
            <div class="db-msg received">
              Are you experiencing any visitors?
            </div>
            <div class="db-msg sent">Have I'm no your patients?</div>
          </div>
          <div class="db-chat-input-row">
            <input
              type="text"
              id="dbChatInput"
              placeholder="Type a message..."
            />
            <button id="dbChatSend">➤</button>
          </div>
        </div>
      </div>

      <div class="dash-toast" id="dashToast">Saved successfully</div>
    </div> */}


</div>
      </div>
    </>
  );
}
