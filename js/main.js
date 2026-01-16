import { renderHeader, renderFooter, renderModal, openModal } from './components.js';
import { popupData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render App Shell
    renderHeader();
    renderFooter();
    renderModal();

    // 2. Initialize Generic Modal Triggers
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const key = trigger.dataset.modal;
            const data = popupData[key];
            if (data) {
                // Build simple HTML from data
                let html = `<h2>${data.title}</h2>`;

                // Allow custom HTML if present (e.g. for Natjecaji)
                if (data.html) {
                    html += data.html;
                } else {
                    if (data.image) html += `<img src="${data.image}" style="max-width:100%; margin: 20px auto;">`;
                    if (data.items && data.items.length > 0) {
                        html += `<ul>${data.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
                    }
                    if (data.links) {
                        html += `<div class="links-list">
                            ${data.links.map(l => `<a href="${l.url}" target="_blank" class="btn solid" style="display:block; margin: 10px 0;">${l.text}</a>`).join('')}
                        </div>`;
                    }
                }
                openModal(html);
            }
        });
    });

    // 3. Simple Slider Logic
    const slides = document.querySelectorAll('.custom-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const showSlide = (index) => {
            slides.forEach((s, i) => {
                s.style.opacity = i === index ? '1' : '0';
                s.style.zIndex = i === index ? '1' : '0';
            });
        };

        // Auto play
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    // 4. Contact Form Handler (Simulated)
    const form = document.getElementById('contact-form-el');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.opacity = '0.5';
            setTimeout(() => {
                form.style.display = 'none';
                document.getElementById('form-success').style.display = 'block';
            }, 1000);
        });
    }

    // 5. Scroll Animations (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-scroll');
            }
        });
    });
    // Targets: Sections, Cards, News Items
    document.querySelectorAll('.section, .news-item, .contact-card, .grid-3 > div').forEach(el => {
        el.classList.add('hidden-scroll');
        observer.observe(el);
    });

    // 6. Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('img');
        const root = window.location.pathname.includes('/pages/') || window.location.pathname.includes('/news/') ? '../' : '';

        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme);
        }

        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('theme', target);
            updateIcon(target);
        });

        function updateIcon(theme) {
            if (icon) {
                // If dark -> show sun to switch to light, else moon
                icon.src = theme === 'dark' ? `${root}images/sun.svg` : `${root}images/moon.svg`;
                icon.alt = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
            }
        }
    }
});
