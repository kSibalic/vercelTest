/**
 * Central data store for the website content.
 * This file replaces hardcoded HTML for repetitive elements.
 */

export const siteData = {
    meta: {
        title: "Razvojna agencija Srijem | Za poticanje gospodarstva i lokalnog razvoja",
        description: "Stone Template is an awesome dark and beige muted theme for an agency or any other professional service."
    },
    navigation: [
        { text: "POČETNA", href: "/", id: "home" },
        { text: "O NAMA", href: "/pages/about.html", id: "about" },
        { text: "NOVOSTI", href: "/pages/work.html", id: "work" },
        { text: "KONTAKT", href: "/pages/contact.html", id: "contact" }
    ],
    footer: {
        address: {
            name: "Razvojna agencija Srijem d.o.o.",
            subtext: "za poticanje gospodarstva i lokalnog razvoja",
            street: "Trg kralja Tomislava 6, 32245 Nijemci"
        },
        legal: {
            court: "Registrirana kod Trgovačkog suda u Osijeku",
            mbs: "030278224",
            iban: "HR3423400091111240929 Privredne banke Zagreb d.d.",
            oib: "58208923662"
        },
        copyright: "Uprava društva. Sva prava pridržana."
    },
    socials: [
        { type: "facebook", url: "#", icon: "/images/facebook-icon_black.svg" },
        { type: "linkedin", url: "#", icon: "/images/linkdin-icon-black.svg" }
    ]
};

export const popupData = {
    documents: {
        id: "documents",
        title: "DOKUMENTI",
        items: [],
        links: [] // Populated below
    },
    organization: {
        id: "organization",
        title: "ORGANIZACIJSKA STRUKTURA",
        image: "/images/image001.png"
    },
    privacy: {
        id: "privacy",
        title: "ZAŠTITA PODATAKA",
        links: [
            { text: "Odluka o imenovanju", url: "/documents/Odluka-o-imenovanju.docx" },
            { text: "Pravilnik o zaštiti osobnih podataka", url: "/documents/PRAVILNIK_O_ZASTITI_OSOBNIH_PODATAKA.docx" }
        ]
    },
    natjecaji: {
        id: "natjecaji",
        title: "NATJEČAJI",
        html: `
            <p><strong>NATJEČAJ ZA VODITELJA ODJELA</strong></p>
            <div class="links-list">
                <a href="/documents/Odluka_o_objavi_natjecaja.docx" target="_blank" class="btn solid">Odluka o objavi natječaja</a>
                <a href="/documents/Poziv-testiranje_voditelj-odjela.docx" target="_blank" class="btn solid">Poziv na testiranje voditelja odjela</a>
                <a href="/documents/RAS_natjecaj_voditelj_odjela.docx" target="_blank" class="btn solid">Natječaj za voditelja odjela</a>
            </div>
            <br>
            <p><strong>NATJEČAJ ZA VODITELJA PROJEKTA</strong></p>
            <div class="links-list">
                <a href="/documents/RAS_natjecaj_voditelj%20projekta.docx" target="_blank" class="btn solid">Natječaj za voditelja projekta</a>
                <a href="/documents/Odluka%20o%20ponistenju%20natjecaja_voditelj%20projekta.docx" target="_blank" class="btn solid">Odluka o poništenju natječaja</a>
            </div>
            <br>
            <p><strong>NATJEČAJ ZA PROJEKTNOG ASISTENTA</strong></p>
            <div class="links-list">
                <a href="/documents/RAS_natjecaj_projektni%20asistent.docx" target="_blank" class="btn solid">Natječaj za projektnog asistenta</a>
                <a href="/documents/Odluka%20o%20ponistenju%20natjecaja_asistent.docx" target="_blank" class="btn solid">Odluka o poništenju natječaja</a>
            </div>
             <br>
            <p><strong>NATJEČAJ ZA DIREKTORA</strong></p>
            <div class="links-list">
                <a href="/documents/Natjecaj%20za%20direktora%20Razvojne%20agencije%20Srijem%20d.o.o..docx" target="_blank" class="btn solid">Natječaj 13.09.2024.</a>
                <a href="/documents/20240920145844977.pdf" target="_blank" class="btn solid">Odluka o poništenju 20.09.2024.</a>
                <a href="/documents/RAS_natjecaj%20direktor%2025.09.2024..docx" target="_blank" class="btn solid">Natječaj for direktora 25.09.2024.</a>
            </div>
             <br>
            <p><strong>NATJEČAJ ZA ZAKUP POSLOVNIH PROSTORA CENTRA ZA POTPORU PODUZETNICIMA</strong></p>
            <div class="links-list">
                 <a href="/documents/cpp/cpp.zip" target="_blank" class="btn solid">Potrebna dokumentacija (ZIP)</a>
            </div>
             <br>
            <p><strong>NATJEČAJ ZA PROJEKTNOG ASISTENTA</strong></p>
            <div class="links-list">
                 <a href="/documents/natjecaj/RAS_natjecaj_projektni%20asistent_2025.docx" target="_blank" class="btn solid">Natječaj za projektnog asistenta</a>
                 <a href="/documents/natjecaj/Natjecaj_projektni%20asistent%20poziv%202025.docx" target="_blank" class="btn solid">Poziv na prethodnu provjeru znanja i sposobnosti</a>
            </div>
        `
    },
    antikorupcija: {
        id: "antikorupcija",
        title: "ANTIKORUPCIJA",
        html: "<p></p>"
    },
    donacije: {
        id: "donacije",
        title: "DONACIJE I SPONZORSTVA",
        links: [
            { text: "Pravilnik o sponzorstvima i donacijama", url: "/documents/PRAVILNIK-o-sponzorstvima-i-donacijama.docx" },
            { text: "Izvješće za 2023. godinu", url: "/documents/Izvješće-za-2023.-godinu-donacije-i-sponzorstva.docx" }
        ]
    },
    nabava: {
        id: "nabava",
        title: "JAVNA NABAVA",
        html: `
            <p>Temeljem članka 80., st.2. Zakona o javnoj nabavi (NN120/16, 114/22)<br><strong>RAZVOJNA AGENCIJA SRIJEM d.o.o.</strong> za poticanje gospodarstva i lokalnog razvoja, <strong>ne smije</strong> sklapati ugovore o javnoj nabavi sa sljedećim gospodarskim subjektima (u svojstvu ponuditelja, člana zajednice ponuditelja ili podizvoditelja odabranom ponuditelju):<br/><br/></p>
            <p><strong>ARURA, obrt za poslovno savjetovanje,</strong><br>vl. Ivan Ćavar<br>Vatrogasna 5, 32100 Vinkovci<br/><br/></p>
            <div class="links-list">
                <a href="/documents/Pravilnik-o-provedbi-postupaka-jednostavne-nabave_RAS.docx" target="_blank" class="btn solid">Pravilnik o provedbi postupaka jednostavne nabave</a>
                <a href="/documents/javnaNabava/PRAVILNIK%20O%20JEDNOSTAVNOJ%20NABAVI.docx" target="_blank" class="btn solid">Pravilnik o jednostavnoj nabavi</a>
                <a href="/documents/javnaNabava/Izjava%20o%20sukobu%20interesa%20-%20Marko%20Gluvakovic.pdf" target="_blank" class="btn solid">Izjava o sukobu interesa - Marko Gluvaković</a>
            </div>
        `
    },
    izjava: {
        id: "izjava",
        title: "IZJAVA O PRISTUPAČNOSTI",
        html: `
            <p><strong>Razvojna agencija Srijem d.o.o.</strong> <i>(dalje u tekstu: Agencija)</i> nastoji svoje internetske stranice učiniti pristupačnima u skladu sa Zakonom o pristupačnosti internetskih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora (<strong>„Narodne novine“, broj 17/19;</strong> dalje u tekstu: Zakon o pristupačnosti) kojim se prenosi Direktiva (EU) 2016/2102 Europskog parlamenta i Vijeća od 26. listopada 2016. o pristupačnosti internetskih stranica i mobilnih aplikacija tijela javnog sektora (SL L 327 od 2. prosinca 2016.).</p>
            <p>Ova izjava o pristupačnosti primjenjuje se na internetske stranice na mrežnom mjestu <strong><a href="https://www.ra-srijem.hr/">www.ra-srijem.hr</a></strong></p><br/>
            <p><strong>Stupanj usklađenosti:</strong><p>
            <p>Ove internetske stranice u većoj mjeri su usklađene sa Zakonom o pristupačnosti internetskih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora te Smjernicama CARNET-a za osiguravanje digitalne pristupačnosti koje su pregledane i odobrene od nacionalnih krovnih udruga osoba s invaliditetom. Postavljanjem WP Accessibility plug-ina za pristupačnost ispunjena je većina zahtjeva europske norme EN 301 549 V2.1.2 (2018-08), uz iznimke koje se navode u nastavku.</p><br/>
            <p><strong>Nepristupačnost sadržaja:</strong><p>
            <p>
                Sadržaj naveden u nastavku nepristupačan je zbog sljedećih razloga:<br/>
                • pojedine .pdf datoteke sadržane u objavama nisu u cijelosti nastale izvozom iz izvorišne datoteke iz alata Microsoft Office Word uz odabir opcija za pristupačnost, već skeniranjem tiskanih dokumenata, odnosno nisu pristupačne jer nisu prikladno pripremljene za čitače ekrana<br/>
                • veći dio fotografija i/ili netekstualnog sadržaja internetskih stranica Agencije dekorativnog je karaktera ili se koristi samo za vizualno oblikovanje, pa, sukladno točki 5.1.3.6. europske norme EN 301 549 V2.1.2 (2018-08), određene člankom 7. stavkom 1. Zakona o pristupačnosti, nemaju (i ne moraju imati) svoj alternativni opis. Ipak, neznatan dio slika i datoteka nema prikladan tekstualni opis (alt tekst)<br/>
                • pdf datoteke otvaraju se u istom prozoru (tabu) preglednika, a .doc i .ppt datoteke dostupne su isključivo kao datoteke za preuzimanje<br/>
                • dio poveznica nije podcrtan, odnosno ne sadrži prikladne tekstualne opise
            </p><br/>
            <p><strong>Priprema ove izjave o pristupačnosti:</strong></p>
            <p>Ova Izjava pripremljena je dana <strong>1. srpnja 2020.</strong>, prema Predlošku izjave o pristupačnosti koji je u skladu s <strong>Direktivom (EU) 2016/2102 Europskog parlamenta</strong> i Vijeća o pristupačnosti internetskih stranica i mobilnih aplikacija tijela javnog sektora, a utvrđen je <strong>Provedbenom odlukom komisije EU 2018/1523 11. listopada 2018.</strong> Za pripremu ove Izjave korištena je metoda automatizirane provjere pristupačnosti korištenjem alata WAVE Web Accessibility Evaluation Tool.</p><br/>
            <p><strong>Povratne informacije i podaci za kontakt:</strong><p>
            <p>Ukoliko vam je potrebna pomoć u bilo kojem dijelu naše mrežne stranice <strong><a href="https://www.ra-srijem.hr/">www.ra-srijem.hr</a></strong> ili želite prijaviti problem s pristupačnošću, <strong><a href="pages/contact.html">kontaktirajte nas</a></strong>.</p><br/>
            <p><strong>Postupak praćenja provedbe propisa:</strong></p>
            <p>Povjerenik za informiranje Republike Hrvatske je tijelo nadležno za praćenje usklađenosti mrežnih stranica i programskih rješenja za pokretne uređaje tijela javnog sektora sa zahtjevima pristupačnosti i nadzor nad provedbom Zakona o pristupačnosti.</p>
            <p>U slučaju nezadovoljavajućih odgovora na obavijest ili zahtjev za povratne informacije o pristupačnosti ovih mrežnih stranica, korisnici se mogu obratiti Povjereniku za informiranje telefonom ili putem elektroničke pošte na adresi <strong><a href="mailto:pristupacnost@pristupinfo.hr">pristupacnost@pristupinfo.hr</a></strong></p>
        `
    },
    propisi: {
        id: "propisi",
        title: "PROPISI I BITNI DOKUMENTI",
        html: `
            <div class="links-list">
                <a href="https://www.zakon.hr/z/239/Zakon-o-regionalnom-razvoju-Republike-Hrvatske" target="_blank" class="btn solid">Zakon o regionalnom razvoju Republike Hrvatske (NN 147/14, 123/17, 118/18)</a>
                <a href="https://www.zakon.hr/z/975/Zakon-o-sustavu-strateškog-planiranja-i-upravljanja-razvojem-Republike-Hrvatske" target="_blank" class="btn solid">Zakon o sustavu strateškog planiranja i upravljanja razvojem Republike Hrvatske (NN 123/17, 151/22)</a>
                <a href="https://www.zakon.hr/z/652/Zakon-o-unapređenju-poduzetničke-infrastrukture" target="_blank" class="btn solid">Zakon o unapređenju poduzetničke infrastrukture (NN 93/13, 114/13, 41/14)/a>
                <a href="https://www.zakon.hr/z/546/Zakon-o-trgovačkim-društvima" target="_blank" class="btn solid">Zakon o trgovačkim društvima (NN 111/93,34/99, 121/99, 52/00, 118/03, 107/09, 125/11, 152/11, 111/12, 68/13, 110/15, 40/19, 34/22, 114/22, 18/23)</a>
                <a href="https://www.zakon.hr/z/307/Zakon-o-radu" target="_blank" class="btn solid">Zakon o radu (NN 93/14, 127/17, 98/19, 151/22, 64/23)</a>
                <a href="https://www.zakon.hr/z/527/Zakon-o-poticanju-razvoja-malog-gospodarstva" target="_blank" class="btn solid">Zakon o poticanju razvoja malog gospodarstva (NN 29/02, 63/07, 53/12, 56/13, 121/16)</a>
                <a href="https://www.zakon.hr/z/385/Zakon-o-Agenciji-za-mobilnost-i-programe-Europske-unije" target="_blank" class="btn solid">Zakon o Agenciji za mobilnost i programe Europske unije (NN 121/17, 30/23)</a>
            </div>
         `
    },
    pristup: {
        id: "pristup",
        title: "PRISTUP INFORMACIJAMA",
        html: `
            <p><strong>Razvojne agencije Srijem d.o.o.</strong></p><br/>
            <p>Pravo na pristup informacijama uređeno je Zakonom o pravu na pristup informacijama <strong>(Narodne novine br. 25/13, 85/15, 69/22 (dalje: ZPPI))</strong> kojim se uređuje pravo na pristup informacijama i ponovnu uporabu informacija koje posjeduju tijela javne vlasti.</p>
            <p>Razvojna agencija Srijem d.o.o., kao tijelo javne vlasti, u skladu s odredbama ZPPI-a, omogućuje korisnicima ostvarivanje prava na pristup informacijama kao i pravo na ponovnu uporabu informacija. Korisnik prava na pristup informacijama i ponovnu uporabu informacija je svaka domaća ili strana fizička i pravna osoba.</p>
            <p>Pravo na informaciju i ponovnu uporabu informacija ostvaruje se podnošenjem pisanog ili usmenog zahtjeva službeniku za informiranje.</p>
            <p>Pisani zahtjev možete uputiti <strong>putem elektroničke pošte, poštom</strong> ili <strong>predati osobno</strong> na adresi: Razvojna agencija Srijem d.o.o., Trg kralja Tomislava 6, 32245 Nijemci, radnim danom <strong>od 13:00 do 15:00 sati</strong>.</p>
            <p>Zahtjev za informacijom možete podnijeti i usmeno – <strong>telefonski</strong> ili <strong>osobnim dolaskom</strong> u uredovno vrijeme radnim danom <strong>od 13:00 do 15:00 sati</strong>.</p><br/>
            <p><strong>Službenik za informiranje:</strong><br/>Marko Gluvaković<br>Telefon: +385 99 7512 906<br>E-adresa: <a href="mailto:projekti@nijemci.hr">projekti@nijemci.hr</a></p><br/>
            <p><strong>Obrasci</strong></p>
            <p>Razvojna agencija Srijem d.o.o., ima pravo na naknadu stvarnih materijalnih troškova koji nastanu pružanjem informacije korisniku prava na pristup informacijama i ponovnu uporabu informacija, kao i na naknadu troškova dostave tražene informacije, koja se naplaćuje sukladno Kriterijima za određivanje visine naknade stvarnih materijalnih troškova i troškova dostave informacije (NN 12/14, 15/14).</p><br/>
            <p><strong>Izvješća o provedbi zakona o pravu na pristup informacijama Agencije</strong></p><br/>
            <div class="links-list">
                 <a href="/documents/1.-Obrazac-2-Zahtjev_za_pristup_informacijama.doc" target="_blank" class="btn solid">Zahtjev za pristup informacijama</a>
                 <a href="/documents/2.-Obrazac-3-Zahtjev_za_dopunu_ili_ispravak_informacije.doc" target="_blank" class="btn solid">Zahtjev za dopunu ili ispravak</a>
                 <a href="/documents/3.-Obrazac-4-Zahtjev_za_ponovnu_uporabu_informacija.doc" target="_blank" class="btn solid">Zahtjev za ponovnu uporabu</a>
                 <a href="/documents/Odluka_o_imenovanju_sluzbenika_za_informiranje.docx" target="_blank" class="btn solid">Odluka o imenovanju službenika</a>
                 <a href="/documents/Godisnje_izvjesce.pdf" target="_blank" class="btn solid">Izvješće o provedbi Zakona za 2023.</a>
            </div>
        `
    }
};
