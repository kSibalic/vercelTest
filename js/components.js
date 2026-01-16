import { siteData } from './data.js';

export function renderHeader() {
    const header = document.createElement('div');
    header.className = 'navbar';

    const currentPath = window.location.pathname;
    const root = currentPath.includes('/pages/') || currentPath.includes('/news/') ? '../' : '';

    const navItems = siteData.navigation.map(item => {
        let isActive = false;
        const itemHrefClean = item.href.replace(/(^\/|\/$)/g, '').replace('index.html', '');
        const currentPathClean = currentPath.split('/').pop().replace('index.html', '');

        if (item.id === 'home') {
            isActive = (currentPathClean === '' || currentPath.endsWith('/'));
        } else {
            isActive = currentPath.includes(item.href.replace(/^\//, ''));
        }

        const activeClass = isActive ? 'active' : '';

        // Fix href for relative paths
        let href = item.href;
        if (root && href.startsWith('/')) {
            href = root + href.substring(1);
        } else if (!root && href.startsWith('/')) {
            href = href.substring(1);
        }

        return `<a href="${href}" class="nav-link ${activeClass}">${item.text}</a>`;
    }).join('');

    header.innerHTML = `
        <div class="container" style="display:flex; justify-content:space-between; width:100%; align-items:center;">
             <a href="${root}index.html" class="nav-brand">
                <img src="${root}images/fghjmjrekf.png" alt="Ras Logo">
            </a>
            <div style="display:flex; align-items:center; gap:20px;">
                <nav class="nav-menu">
                    ${navItems}
                </nav>
                <div class="menu-toggle">☰</div>
            </div>
        </div>
    `;

    document.body.prepend(header);

    // Mobile Menu Toggle
    const toggle = header.querySelector('.menu-toggle');
    const menu = header.querySelector('.nav-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

export function renderFooter() {
    const footer = document.createElement('div');
    footer.className = 'section footer';

    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>KONTAKT</h3>
                    <p><strong>${siteData.footer.address.name}</strong></p>
                    <p>${siteData.footer.address.street}</p>
                    <br>
                    <p>+385 (0) 91 3144 441</p>
                    <p>info@ra-srijem.hr</p>
                </div>
                <div class="footer-col center-col">
                    <h3>BRZI LINKOVI</h3>
                    <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                        <a href="${siteData.navigation[0].href}">Početna</a>
                        <a href="${siteData.navigation[1].href}">O nama</a>
                        <a href="${siteData.navigation[2].href}">Novosti</a>
                        <a href="${siteData.navigation[3].href}">Kontakt</a>
                        
                        <!-- Theme Switch: Text Left, Icon Right -->
                        <div id="theme-toggle-btn" class="theme-switch-footer link-style" title="Toggle Dark Mode" style="margin-top:5px; cursor:pointer; display:flex; align-items:center; gap:8px;">
                             <span id="theme-text" style="color:white; font-size:0.9rem;">Tema</span>
                             <img src="../images/moon.svg" class="theme-switch-icon" alt="Dark Mode" style="width:16px; height:16px;">
                        </div>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>PRAVNE INFORMACIJE</h3>
                    <p>${siteData.footer.legal.court}</p>
                    <p>MBS: ${siteData.footer.legal.mbs}</p>
                    <p>IBAN: ${siteData.footer.legal.iban}</p>
                    <p>OIB: ${siteData.footer.legal.oib}</p>
                    <p style="font-size:0.8rem; margin-top:20px;">${siteData.footer.copyright}</p>
                </div>
            </div>
        </div>
    `;

    document.body.append(footer);
}

export function renderModal() {
    const modalHTML = `
        <div id="global-modal" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div id="modal-body"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('global-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const close = () => modal.classList.remove('open');

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });
}

export function openModal(contentHtml) {
    const modal = document.getElementById('global-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = contentHtml;
    modal.classList.add('open');
}
