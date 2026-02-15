document.addEventListener('DOMContentLoaded', () => {
  // Formular-Handling mit Formspree Integration
  const form = document.getElementById('kontakt-form');
  const messageBox = form?.querySelector('.form-message');
  const submitBtn = document.getElementById('submit-btn');

  if (form && messageBox) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const ort = form.elements['ort'].value.trim();

      if (!name || !email || !ort) {
        messageBox.textContent = 'Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, PLZ/Ort).';
        messageBox.style.color = '#f97316';
        return;
      }

      // Disable button während des Sendens
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';
      }

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          messageBox.textContent = '✓ Vielen Dank für Ihre Anfrage – wir melden uns so schnell wie möglich bei Ihnen.';
          messageBox.style.color = '#22c55e';
          form.reset();
        } else {
          throw new Error('Formular konnte nicht gesendet werden');
        }
      } catch (error) {
        // Fallback wenn Formspree noch nicht konfiguriert ist
        messageBox.textContent = 'Hinweis: Formspree noch nicht konfiguriert. Bitte kontaktieren Sie uns direkt per Telefon oder E-Mail.';
        messageBox.style.color = '#f97316';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Nachricht senden';
        }
      }
    });
  }

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

  // Kostenrechner
  const calcBodenart = document.getElementById('calc-bodenart');
  const calcFlaeche = document.getElementById('calc-flaeche');
  const calcAltbelag = document.getElementById('calc-altbelag');
  const calcSpachteln = document.getElementById('calc-spachteln');
  const calcSockelleisten = document.getElementById('calc-sockelleisten');
  const calcTotal = document.getElementById('calc-total');

  if (calcBodenart && calcFlaeche && calcTotal) {
    const calculateCost = () => {
      const bodenartPreis = parseFloat(calcBodenart.value);
      const flaeche = parseFloat(calcFlaeche.value) || 0;
      let zusatzkosten = 0;

      if (calcAltbelag?.checked) zusatzkosten += parseFloat(calcAltbelag.value);
      if (calcSpachteln?.checked) zusatzkosten += parseFloat(calcSpachteln.value);
      if (calcSockelleisten?.checked) zusatzkosten += parseFloat(calcSockelleisten.value);

      const total = Math.round((bodenartPreis + zusatzkosten) * flaeche);
      
      // Animierte Zahlenänderung
      const currentValue = parseInt(calcTotal.textContent.replace(/[^0-9]/g, '')) || 0;
      animateCounter(calcTotal, currentValue, total, 500, ' €');
    };

    calcBodenart?.addEventListener('change', calculateCost);
    calcFlaeche?.addEventListener('input', calculateCost);
    calcAltbelag?.addEventListener('change', calculateCost);
    calcSpachteln?.addEventListener('change', calculateCost);
    calcSockelleisten?.addEventListener('change', calculateCost);

    // Initiale Berechnung
    calculateCost();
  }

  // Animierte Counter-Funktion
  function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(timer);
      }
      element.textContent = Math.round(current).toLocaleString('de-DE') + suffix;
    }, 16);
  }

  // Scroll-Animationen für Elemente
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animiere Statistik-Counter beim ersten Erscheinen
        if (entry.target.querySelector('.stat-counter') && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const counters = entry.target.querySelectorAll('.stat-counter');
          counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            animateCounter(counter, 0, target, 2000, counter.dataset.suffix || '');
          });
        }
      }
    });
  }, observerOptions);

  // Beobachte alle Karten und Sektionen
  document.querySelectorAll('.service-card, .price-card, .qual-badge, .testimonial-card, .blog-card, .step, .project-card, .download-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Vorher/Nachher Slider (wenn vorhanden)
  const comparisonSlider = document.querySelector('.comparison-slider');
  if (comparisonSlider) {
    const divider = comparisonSlider.querySelector('.comparison-divider');
    const afterImage = comparisonSlider.querySelector('.comparison-after');
    let isActive = false;

    const updateSlider = (x) => {
      const rect = comparisonSlider.getBoundingClientRect();
      const position = Math.max(0, Math.min(x - rect.left, rect.width));
      const percentage = (position / rect.width) * 100;
      
      divider.style.left = `${percentage}%`;
      afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    };

    divider.addEventListener('mousedown', () => isActive = true);
    document.addEventListener('mouseup', () => isActive = false);
    
    document.addEventListener('mousemove', (e) => {
      if (!isActive) return;
      updateSlider(e.clientX);
    });

    // Touch-Support für Mobile
    divider.addEventListener('touchstart', (e) => {
      isActive = true;
      e.preventDefault();
    });
    
    document.addEventListener('touchend', () => isActive = false);
    
    document.addEventListener('touchmove', (e) => {
      if (!isActive) return;
      updateSlider(e.touches[0].clientX);
    });
  }

  // Smooth Scroll für Anker-Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
