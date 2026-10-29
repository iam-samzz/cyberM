//project1

/* CyberM interaction motion — JavaScript-driven hover lighting and subtle tilt. */
(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // A shared theme surface makes cards feel responsive without distracting movement.
  const surfaces = document.querySelectorAll(
    '.feature-card, .mission-card, .steps-list article, .ai-window, .float-card, .view-card, .dash-action-card, .learning-panel, .auth-panel, .login-panel, .signup-panel, .social-btn, .primary-btn, .button, .button-small'
  );

  surfaces.forEach((surface) => {
    surface.style.transition = [
      surface.style.transition,
      'transform 220ms cubic-bezier(.2,.75,.25,1)',
      'box-shadow 220ms ease',
      'border-color 220ms ease',
      'background-color 220ms ease'
    ].filter(Boolean).join(', ');

    surface.addEventListener('pointerenter', () => {
      surface.style.setProperty('--cyberm-hovering', '1');
      surface.style.boxShadow = '0 16px 38px rgba(35, 105, 210, 0.16), 0 0 0 1px rgba(65, 139, 255, 0.20)';
      surface.style.outline = '1px solid rgba(65, 139, 255, 0.32)';
      surface.style.outlineOffset = '1px';
      if (surface.matches('.feature-card, .mission-card, .steps-list article, .view-card, .dash-action-card, .social-btn, .primary-btn, .button, .button-small')) {
        surface.style.transform = 'translateY(-4px)';
      }
      if (surface.style.borderColor !== '') {
        surface.style.borderColor = 'rgba(65, 139, 255, 0.62)';
      }
    });

    surface.addEventListener('pointerleave', () => {
      surface.style.removeProperty('--cyberm-hovering');
      surface.style.boxShadow = '';
      surface.style.borderColor = '';
      surface.style.outline = '';
      surface.style.outlineOffset = '';
      surface.style.transform = '';
    });

    if (finePointer && !reducedMotion && surface.matches('.feature-card, .mission-card, .view-card, .dash-action-card, .ai-window')) {
      surface.addEventListener('pointermove', (event) => {
        const rect = surface.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const rotateY = (x - 0.5) * 2.4;
        const rotateX = (0.5 - y) * 2.4;
        surface.style.transform = `perspective(900px) translateY(-4px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        surface.style.setProperty('--pointer-x', `${(x * 100).toFixed(1)}%`);
        surface.style.setProperty('--pointer-y', `${(y * 100).toFixed(1)}%`);
      });
    }
  });

  // Buttons and links get a short press response, driven by JS rather than keyframes.
  document.querySelectorAll('button, a.button, .login-link, .top-links a').forEach((control) => {
    control.addEventListener('pointerdown', () => {
      if (!reducedMotion) control.style.transform = 'scale(0.97)';
    });
    const release = () => {
      control.style.transform = '';
    };
    control.addEventListener('pointerup', release);
    control.addEventListener('pointercancel', release);
    control.addEventListener('pointerleave', release);
  });

  // A soft focus ring helps form fields feel intentional and accessible.
  document.querySelectorAll('input, textarea, select').forEach((field) => {
    field.style.transition = 'border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease';
    field.addEventListener('focus', () => {
      field.style.borderColor = '#438cff';
      field.style.boxShadow = '0 0 0 3px rgba(67, 140, 255, 0.15)';
    });
    field.addEventListener('blur', () => {
      field.style.borderColor = '';
      field.style.boxShadow = '';
    });
  });
})();
