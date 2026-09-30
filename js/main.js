const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const preloader = document.getElementById('preloader');
const preloaderCount = document.getElementById('preloaderCount');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = [...document.querySelectorAll('.mobile-menu a')];
const publicationTabs = [...document.querySelectorAll('.publication-tab')];
const publicationTitle = document.getElementById('publicationTitle');
const publicationPublisher = document.getElementById('publicationPublisher');
const publicationLink = document.getElementById('publicationLink');
const publicationPanel = document.getElementById('publicationPanel');
const publicationArt = document.getElementById('publicationArt');
const publicationImage = document.getElementById('publicationImage');

function finishPreloader() {
  if (preloaderCount) preloaderCount.textContent = '100';
  if (preloader) preloader.classList.add('done');
}

if (reducedMotion) {
  finishPreloader();
} else if (preloader && preloaderCount) {
  const startedAt = performance.now();
  const duration = 900;
  function countUp(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    preloaderCount.textContent = String(Math.floor(progress * 100));
    if (progress < 1) requestAnimationFrame(countUp);
    else window.setTimeout(finishPreloader, 120);
  }
  requestAnimationFrame(countUp);
}

function setMobileMenu(open, restoreFocus = true) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.inert = !open;
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) mobileMenuLinks[0]?.focus();
  else if (restoreFocus) menuToggle.focus();
}

menuToggle?.addEventListener('click', () => {
  setMobileMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});
mobileMenuLinks.forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(link.getAttribute('href'));
  setMobileMenu(false, false);
  if (!target) return;
  target.tabIndex = -1;
  requestAnimationFrame(() => target.focus({ preventScroll: true }));
}));

const publications = [
  {
    title: 'Perancangan Website Terintegrasi untuk Mendukung Akses Pendanaan bagi UMKM',
    publisher: 'Jurnal Media Informatika (JuMIn), 2025',
    url: 'https://ejournal.sisfokomtek.org/index.php/jumin/article/view/5373',
    image: 'assets/publikasi-jumin.png',
    imageAlt: 'Sampul publikasi JuMIn tentang pendanaan UMKM',
    art: 'Riset 01'
  },
  {
    title: 'Laravel Integration Validates E-Commerce and Workshop Services: Integrasi Laravel Memvalidasi Layanan E-Commerce dan Workshop',
    publisher: 'Academia Open (ACOPEN), 2026',
    url: 'https://acopen.umsida.ac.id/index.php/acopen/article/view/14411',
    image: 'assets/publikasi-acopen.png',
    imageAlt: 'Sampul publikasi ACOPEN tentang integrasi Laravel untuk e-commerce dan workshop',
    art: 'Riset 02'
  }
];

function selectPublication(index, moveFocus = false) {
  const publication = publications[index];
  if (!publication || !publicationTitle || !publicationPublisher || !publicationLink || !publicationPanel || !publicationArt || !publicationImage) return;
  publicationTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  publicationPanel.setAttribute('aria-labelledby', publicationTabs[index].id);
  publicationTitle.textContent = publication.title;
  publicationPublisher.textContent = publication.publisher;
  publicationLink.href = publication.url;
  publicationImage.src = publication.image;
  publicationImage.alt = publication.imageAlt;
  publicationArt.querySelector('span').textContent = publication.art;
  if (moveFocus) publicationTabs[index].focus();
}

publicationTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectPublication(index));
  tab.addEventListener('keydown', event => {
    let nextIndex = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % publicationTabs.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + publicationTabs.length) % publicationTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = publicationTabs.length - 1;
    else return;
    event.preventDefault();
    selectPublication(nextIndex, true);
  });
});

if (publicationTabs.length) selectPublication(0);

if ('IntersectionObserver' in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.timeline li, .project-card, .stats-grid > div, .certifications li, .publication-feature').forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    setMobileMenu(false);
    return;
  }
  if (event.key !== 'Tab' || menuToggle?.getAttribute('aria-expanded') !== 'true') return;
  const focusable = [menuToggle, ...mobileMenuLinks];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
