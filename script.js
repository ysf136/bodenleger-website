document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('kontakt-form');
  const messageBox = form?.querySelector('.form-message');

  if (!form || !messageBox) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const ort = form.elements['ort'].value.trim();

    if (!name || !email || !ort) {
      messageBox.textContent = 'Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, PLZ/Ort).';
      messageBox.style.color = '#f97316';
      return;
    }

    messageBox.textContent = 'Vielen Dank für Ihre Anfrage – wir melden uns so schnell wie möglich bei Ihnen.';
    messageBox.style.color = '#22c55e';
    form.reset();
  });

  const cookieNotice = document.getElementById('cookie-notice');
  const cookieAccept = document.getElementById('cookie-accept');

  if (cookieNotice && cookieAccept) {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    
    if (cookieAccepted) {
      cookieNotice.classList.add('hidden');
    }

    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      cookieNotice.classList.add('hidden');
    });
  }

  // WhatsApp Widget Toggle
  const waButton = document.getElementById('wa-button');
  const waWidget = document.getElementById('wa-widget');
  const waClose = document.getElementById('wa-close');

  if (waButton && waWidget && waClose) {
    waButton.addEventListener('click', (e) => {
      e.preventDefault();
      waWidget.classList.toggle('open');
    });

    waClose.addEventListener('click', () => {
      waWidget.classList.remove('open');
    });

    // Close widget when clicking outside
    document.addEventListener('click', (e) => {
      if (!waWidget.contains(e.target) && !waButton.contains(e.target)) {
        waWidget.classList.remove('open');
      }
    });
  }

  // Project Lightbox
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const projectGrid = document.querySelector('.project-grid');

  if (lightbox && lightboxImage && projectGrid) {
    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || 'Projektbild';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.src = '';
      lightboxImage.alt = '';
      document.body.style.overflow = '';
    };

    projectGrid.addEventListener('click', (event) => {
      const button = event.target.closest('.project-thumb');
      if (!button) return;
      const img = button.querySelector('img');
      const src = button.getAttribute('data-full') || img?.src;
      openLightbox(src, img?.alt);
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target.closest('[data-lightbox-close]')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
});
