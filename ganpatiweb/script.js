/* =========================================================
   PREMIUM GANESH MANDAL WEBSITE - script.js
   Vanilla JavaScript • No Libraries
   ========================================================= */

/* =========================================================
   1. LOADING ANIMATION
   ========================================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  // Hide loader after min duration so it reads nicely
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1800);
});

/* =========================================================
   2. STICKY NAVIGATION + SCROLL STATE
   ========================================================= */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Add scrolled class to navbar
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  // Show/hide back to top button
  backToTop.classList.toggle('show', window.scrollY > 400);
});

// Back to top click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   3. MOBILE NAVIGATION TOGGLE
   ========================================================= */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

/* =========================================================
   4. NAV ACTIVE LINK ON SCROLL
   ========================================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* =========================================================
   5. COUNTDOWN TIMER (Ganeshotsav 2026)
   ========================================================= */
// Set target date: 12 September 2026 (Ganesh Chaturthi)
const targetDate = new Date('September 12, 2026 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  // If past, show zeros
  if (diff < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Pad with leading zeros
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Run immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================================
   6. PROGRAM SCHEDULE (10-Day Timeline)
   ========================================================= */
const scheduleData = [
  { day: 'दिवस १', date: '१२ सप्टेंबर', time: 'सकाळी ८:००', name: 'गणेश आगमन व प्रतिष्ठापना' },
  { day: 'दिवस २', date: '१३ सप्टेंबर', time: 'संध्याकाळी ७:००', name: 'आरती व भजन संध्या' },
  { day: 'दिवस ३', date: '१४ सप्टेंबर', time: 'सकाळी १०:००', name: 'हरितालिका पूजन' },
  { day: 'दिवस ४', date: '१५ सप्टेंबर', time: 'संध्याकाळी ६:००', name: 'सांस्कृतिक कार्यक्रम' },
  { day: 'दिवस ५', date: '१६ सप्टेंबर', time: 'संध्याकाळी ७:००', name: 'कल्याण मंडप व स्पर्धा' },
  { day: 'दिवस ६', date: '१७ सप्टेंबर', time: 'सकाळी ९:००', name: 'महाआरती व प्रसाद' },
  { day: 'दिवस ७', date: '१८ सप्टेंबर', time: 'संध्याकाळी ६:३०', name: 'नाट्य प्रयोग' },
  { day: 'दिवस ८', date: '१९ सप्टेंबर', time: 'सकाळी ११:००', name: 'सामाजिक उपक्रम' },
  { day: 'दिवस ९', date: '२० सप्टेंबर', time: 'संध्याकाळी ७:००', name: 'गणेशोत्सव महोत्सव' },
  { day: 'दिवस १०', date: '२१ सप्टेंबर', time: 'दुपारी १२:००', name: 'गणेश विसर्जन मिरवणूक' }
];

const timeline = document.getElementById('timeline');

scheduleData.forEach(item => {
  const el = document.createElement('div');
  el.className = 'timeline-item reveal';
  el.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">${item.day} • ${item.date}</div>
      <div class="timeline-time">🕐 ${item.time}</div>
      <div class="timeline-name">${item.name}</div>
    </div>
  `;
  timeline.appendChild(el);
});

/* =========================================================
   7. GALLERY (Responsive Grid + Lightbox)
   ========================================================= */
const galleryData = [
  { src: 'https://via.placeholder.com/800x600/FF9933/FFFFFF?text=आगमन', caption: 'गणेश आगमन' },
  { src: 'https://via.placeholder.com/800x600/D4AF37/000000?text=सजावट', caption: 'भव्य सजावट' },
  { src: 'https://via.placeholder.com/800x600/7A1F1F/FFFFFF?text=आरती', caption: 'महाआरती' },
  { src: 'https://via.placeholder.com/800x600/FFB347/FFFFFF?text=सांस्कृतिक', caption: 'सांस्कृतिक कार्यक्रम' },
  { src: 'https://via.placeholder.com/800x600/B8860B/FFFFFF?text=विसर्जन', caption: 'गणेश विसर्जन' },
  { src: 'https://via.placeholder.com/800x600/241408/FFFFFF?text=भक्तगण', caption: 'भक्तगणांचा उत्साह' }
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

galleryData.forEach(item => {
  const el = document.createElement('div');
  el.className = 'gallery-item reveal';
  el.innerHTML = `
    <img src="${item.src}" alt="${item.caption}" loading="lazy" />
    <div class="gallery-overlay"><span>${item.caption}</span></div>
  `;
  // Open lightbox on click
  el.addEventListener('click', () => {
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  galleryGrid.appendChild(el);
});

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

/* =========================================================
   8. COMMITTEE MEMBERS
   ========================================================= */
const committeeData = [
  { name: 'रमेश पाटील', position: 'अध्यक्ष', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=R' },
  { name: 'सुनील देशमुख', position: 'उपाध्यक्ष', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=S' },
  { name: 'अनिल जोशी', position: 'सचिव', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=A' },
  { name: 'प्रकाश कुलकर्णी', position: 'खजिनदार', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=P' },
  { name: 'विजय शिंदे', position: 'कार्यवाहक', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=V' },
  { name: 'संजय मोरे', position: 'प्रसार प्रमुख', photo: 'https://via.placeholder.com/300x300/241408/FFFFFF?text=S' }
];

const committeeGrid = document.getElementById('committeeGrid');

committeeData.forEach(member => {
  const el = document.createElement('div');
  el.className = 'member-card reveal';
  el.innerHTML = `
    <img src="${member.photo}" alt="${member.name}" class="member-photo" loading="lazy" />
    <div class="member-info">
      <h3>${member.name}</h3>
      <span>${member.position}</span>
    </div>
  `;
  committeeGrid.appendChild(el);
});

/* =========================================================
   9. COPY UPI ID
   ========================================================= */
const copyUpiBtn = document.getElementById('copyUpi');

if (copyUpiBtn) {
  copyUpiBtn.addEventListener('click', () => {
    const upiId = 'ganeshmandal@upi';
    navigator.clipboard.writeText(upiId).then(() => {
      const original = copyUpiBtn.textContent;
      copyUpiBtn.textContent = '✓ कॉपी झाले!';
      copyUpiBtn.style.background = '#27ae60';
      setTimeout(() => {
        copyUpiBtn.textContent = original;
        copyUpiBtn.style.background = '';
      }, 2000);
    });
  });
}

/* =========================================================
   10. SCROLL REVEAL (IntersectionObserver)
   ========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with .reveal class
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* =========================================================
   11. SMOOTH SCROLLING (native CSS handles most, fallback)
   ========================================================= */
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
