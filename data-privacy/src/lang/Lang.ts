import { B } from 'vue-router/dist/router-CWoNjPRp.mjs'
import { Footer, FooterPages, LangModel, RouteLink } from './LangModel'

export class Lang {
  changeLang(langCode: string) {
    switch (langCode) {
      case LANGCONST.LANG_SRB:
        LANGCONST.lang = langSrb
        LANGCONST.currentLang = 'sr-latin-rs'
        break
      case LANGCONST.LANG_ENG:
        LANGCONST.lang = langEng
        LANGCONST.currentLang = 'en'
        break
      default:
        LANGCONST.lang = langSrb
        LANGCONST.currentLang = 'sr-latin-rs'
        break
    }
    return LANGCONST
  }

  getLang(langCode: string) {
    let result
    switch (langCode) {
      case LANGCONST.LANG_SRB:
        result = langSrb
        break
      default:
        result = langEng
        break
    }

    return result
  }
}

const langSrb: LangModel = {
  Serbian: 'Srpski',
  English: 'Engleski',
  pages: [
    {
      route: 'Terms',
      name: 'Uslovi korišćenja',
    },
    {
      route: 'Policies',
      name: 'Politika Privatnosti',
    },
  ],
  footer: {
    footerPages: [
      {
        name: 'O nama',
        routes: [
          {
            name: 'O Datamit',
            route: '',
          },
          {
            name: 'Partneri',
            route: '',
          },
          {
            name: 'Karijere',
            route: '',
          },
          {
            name: 'Globalni sajtovi',
            route: '',
          },
          {
            name: 'MapaSajta',
            route: '',
          },
        ] as RouteLink[],
      },

      {
        name: 'Nedavni postovi',
        routes: [
          {
            name: 'Sport i zdravlje',
            route: '',
          },
          {
            name: 'It and Technology',
            route: '',
          },
          {
            name: 'Naučna istraživanja',
            route: '',
          },
        ] as RouteLink[],
      },

      {
        name: 'Pomoć & Kontakt',
        routes: [
          {
            name: 'Kontaktirajte nas',
            route: '',
          },
          {
            name: 'Centar za odgovre',
            route: '',
          },
        ] as RouteLink[],
      },
    ] as FooterPages[],
  },
  userPages: [
    {
      page: 'privacy',
      title: 'Politika privatnosti',
      text: [
        'Ovom internet stranicom upravlјa Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti (u dalјem tekstu: Poverenik) i odgovoran je za sadržaje koji se na njoj nalaze. Poverenik poštuje privatnost svojih korisnika i zbog toga ne obrađuje nikakve informacije o korisniku, kao što su IP adrese, adrese e-pošte i / ili druge informacije o posetiocima stranice.',
        "Upravo zbog toga Poverenik i ne koristi 'kolačiće' putem kojih bi bilo moguće prikupiti neke od Vaših podataka o ličnosti. 'Kolačić' je mali podatak koji veb stranica može poslati vašem pretraživaču, a koji se onda može čuvati na tvrdom disku. Ako ste zabrinuti zbog vaše privatnosti i korišćenja tehnologije 'kolačići', možete podesiti pregledač da vas obavesti kada primite 'kolačić'. Možete da postavite svoj pregledač da odbije 'kolačiće' koje pokušavaju poslati druge veb stranice. Takođe, ne koristimo Google analitiku ili neku vrstu slične usluge za prikuplјanje podataka. Poverenik na svojoj veb stranici putem linkova Vam daje mogućnost povezivanja sa drugim veb stranicama (Google+, YouTube kanal Poverenika), baš kao što se te stranice mogu povezati sa našom. Važno je da znate da druge veb stranice funkcionišu u skladu sa njihovim Uslovima korišćenja i Pravilima privatnosti i da Poverenik nema kontrolu nad istima, da ne poseduje njihove podatke, niti može da garantuje, ili da bude odgovoran za bilo koji sadržaj, reklamu, proizvode ili druge materijale koji su dostupni na tim veb stranicama. U slučaju da dođe do izmene postojeće Politike privatnosti, blagovremeno ćemo vas obavestiti na uočlјiv način.",
      ],
    },
    {
      page: 'terms',
      title: 'Uslovi koriscenja',
      text: [
        'Informacije i materijale, koji se nalaze na vebsajtu, korisnik ili posetilac vebsajta može preuzeti sa servera za sopstvene potrebe (kućnu upotrebu), pri čemu ne sme doći do kršenja naznačenih autorskih prava, prava intelektualne svojine ili drugih prava o kojima postoji obaveštenje. Dozvoljeno je preuzimanje i štampanje informacija i materijala u svrhe pregleda i korišćenja istih u nekomercijalne svrhe. Svako drugo kopiranje, distribucija, umnožavanje biće strogo kažnjeno.',
        'Prilikom posete ove internet stranice pretraživač koji koristite na Vašem uređaju će automatski, bez Vaše aktivnosti poslati na server ove internet stranice sledeće podatke: izabrani jezik i veličinu fonta, IP adresu uređaja sa kog je poslat upit, datum i vreme pristupa, ime i URL preduzete datoteke, internet stranicu sa koje se pristupa (referrer URL), pretraživač koji koristite i ako je potrebno, operativni sistem instaliran na Vašem uređaju, ime provajdera preko koga pristupate internetu i državu iz koje pristupate. Navedene podatke server privremeno čuva (oko mesec dana) u takozvanoj log datoteci, u sledeće svrhe: obezbeđivanje uspostavljanja nesmetane veze, obezbeđivanje komfornog korišćenja naše internet stranice, kao i radi procene bezbednosti i stabilnosti sistema. Pri vršenju javnih ovlašćenja koja ima u skladu sa Zakonom o informacionoj bezbednosti, Regulator, odnosno Nacionalni CERT vodi evidenciju posebnih CERT-ova. Poseban CERT je tim koji obavlja poslove prevencije i zaštite od bezbednosnih rizika u IKT sistemima u okviru određenog pravnog lica, grupe pravnih lica ili oblasti poslovanja i slično. U okviru obavljanja poslova iz svojih nadležnosti, Regulator - Nacionalni CERT, prikuplja samo one podatke o ličnosti koji su joj potrebni radi vođenja evidencije Posebnih CERT-ova. Tom prilikom, Regulator prikuplja podatke o ličnosti odgovornog lica u Posebnom CERT-u: ime, prezime, adresa, funkcija/radno mesto, broj službenog telefona, službena adresa elektronske pošte. Takođe, Regulator omogućava obraćanje korisnika Nacionalnom CERT-u elektronskim putem, na imejl adresu info@cert.rs . U tom slučaju Regulator prikuplja sledeće podatke: ime, prezime i imejl adresu. Navedeni lični podaci se koriste samo u svrhu omogućivanja komunikacije sa korisnikom, odnosno radi pružanja odgovora na postavljeno pitanje i ne obrađuju se na drugi način, niti se dostavljaju trećim stranama. U skladu sa važećim propisima,Zakonom o informacionoj bezbednosti i podzakonskim aktima, Regulator – Nacionalni CERT ima obavezu da reaguje po prijavljenim incidentima u IKT sistemima od posebnog značaja, kao i po prijavama fizičkih i pravnih lica, tako što pruža savete i preporuke na osnovu raspoloživih informacija o incidentima i preduzima druge potrebne mere iz svoje nadležnosti na osnovu dobijenih saznanja. Prilikom prijave incidenta putem aplikacije koja se nalazi na internet stranici Nacionalnog CERT-a https://www.cert.rs/, Regulator prikuplja sledeće podatke o ličnosti podnosioca prijave: ime, prezime, imejl adresa i/ili broj telefona.',
      ],
    },
  ],
}

const langEng: LangModel = {
  Serbian: 'Serbian',
  English: 'English',
  pages: [
    {
      route: 'Terms',
      name: 'Terms of use',
    },
    {
      route: 'Policies',
      name: 'Privacy and policies',
    },
  ],
  footer: {
    footerPages: [
      {
        name: 'About',
        routes: [
          {
            name: 'About Datamit',
            route: '',
          },
          {
            name: 'Affiliates',
            route: '',
          },
          {
            name: 'Careers',
            route: '',
          },
          {
            name: 'Global Sites',
            route: '',
          },
          {
            name: 'Sitemap',
            route: '',
          },
        ] as RouteLink[],
      },

      {
        name: 'Recent Posts',
        routes: [
          {
            name: 'Sports and Health',
            route: '',
          },
          {
            name: 'IT and Technology',
            route: '',
          },
          {
            name: 'Scientific Research',
            route: '',
          },
        ] as RouteLink[],
      },

      {
        name: 'Help & Contact',
        routes: [
          {
            name: 'Contact Us',
            route: '',
          },
          {
            name: 'FAQ Center',
            route: '',
          },
        ] as RouteLink[],
      },
    ] as FooterPages[],
  },
  userPages: [
    {
      page: 'privacy',
      title: 'Privacy Policy',
      text: [
        'The European Commission (hereinafter “the Commission”) is committed to the protection of your personal data and to ensuring that your privacy is respected (Privacy policy for websites managed by the European Commission). The Commission collects and further processes personal data pursuant to Regulation (EU) 2018/1725 of the European Parliament and of the Council of 23 October 2018 on the protection of natural persons with regard to the processing of personal data by the Union institutions, bodies, offices and agencies and on the free movement of such data (repealing Regulation (EC) No 45/2001).',
        `This privacy statement explains the reasons for the processing of your personal data within European e-Justice Portal, the way we collect, handle and ensure protection of all personal data provided, how that information is used and what rights you have in relation to your personal data. It also specifies the contact details of the responsible Data Controller with whom you may exercise your rights, the Data Protection Officer and the European Data Protection Supervisor. The information herein pertains to the following data processing operations:

The European e-Justice Portal (hereinafter “the e-Justice Portal”) has been established with the objective to provide the general public with access to information, interconnected national databases, interactive services allowing users to communicate directly with the appropriate authorities in another Member State, and to provide contact information of competent national contact authorities and bodies. Therefore, the e-Justice Portal retrieves data for the very specific purpose of combination and alignment of data from different national databases. The Portal also processes personal data in the context of e-mail communication between the Commission, citizens, responsible content administrators and contact points (Data protection record: DPR-EC-01506).

Moreover, specific data processing operations take place in the context of some of the services provided by the e-Justice Portal, e.g. in the context of the “Find a Lawyer”, “Find a Notary” and “Find a company” tools, the European Case Law Identifier (ECLI) Search Engine, the Competent Court Database (CDB) and the Fundamental Rights Interactive Tool (FRIT).

Please note that it is up to Member States and other bodies such as professional associations and non-profit organisations to operate the public databases providing services via the Portal. Data are collected by such entities for the purpose of compliance with national law and to provide necessary information at national level. Such databases are interconnected through the Portal in such a way that the information available at national level can be accessed via the Portal. It is up to Member States and other bodies such as professional associations and non-profit organisations to ensure security of the processing of personal data in their databases.

The Commission provides technical specifications for interconnection to the entitites mentioned above. The cooperation between the entities mentioned above and the Commission is ensured on voluntary basis (with the exception of BRIS and IRI 2.0 which are mandatory interconnections according to the applicable law - BRIS: Please see Article 17 of the Directive (EU) 2017/1132 of the European Parliament and of the Council of 14 June 2017 relating to certain aspects of company law; IRI.2.0: Please see Article 25 of the Regulation (EU) 2015/848 of the European Parliament and of the Council of 20 May 2015 on insolvency proceedings). Therefore, such cooperation is not regulated by any formal arrangement, such as a contract. The Commission ensures security of processing personal data strictly only within the scope of its responsibilities as data controller within the e-Justice Portal.

These data processing operations are carried out by the data controller DG JUST, Unit A1 Digital transition & Judicial training as further elaborated below.`,
      ],
    },
    {
      page: 'terms',
      title: 'Terms of Use',
      text: [
        'Information and materials available on the website may be downloaded by users or visitors for personal (home) use, provided that no violation of copyright, intellectual property rights, or other rights occurs. Downloading and printing information and materials for review and non-commercial use is permitted. Any other copying, distribution, or reproduction will be strictly punished.',
        'When visiting this website, the browser you use on your device automatically sends the following data to the server without any action on your part: selected language and font size, IP address of the device from which the request is sent, date and time of access, name and URL of the requested file, referrer URL, browser type, and if necessary, the operating system installed on your device, the name of your internet provider, and the country from which you are accessing. These data are temporarily stored (about one month) in log files for the purpose of ensuring a stable connection, providing a comfortable user experience, and evaluating system security and stability. In performing its legal obligations under the Law on Information Security, the Regulator (National CERT) maintains a register of special CERTs. A special CERT is a team responsible for prevention and protection from security risks in ICT systems within a legal entity, group of entities, or business sector. In carrying out its duties, the National CERT collects only the personal data necessary for maintaining this register, including: name, surname, address, job position, work phone number, and official email address of responsible persons in special CERTs. The National CERT also enables users to contact it via email at services@cert.europa.eu. In such cases, it collects name, surname, and email address. These personal data are used solely for communication purposes and are not processed further or shared with third parties. In accordance with applicable regulations and the Law on Information Security, the National CERT is obliged to respond to reported ICT security incidents and user reports by providing advice, recommendations, and other necessary measures based on available information. When submitting an incident report via the application on the National CERT website https://cert.europa.eu/, the following personal data of the reporter are collected: name, surname, email address, and/or phone number.',
      ],
    },
  ],
}

export class LANGCONST {
  static readonly LANG_SRB = 'sr-latin-rs'
  static readonly LANG_ENG = 'en'
  static readonly LANG_FR = 'eu-fr'
  static readonly LANG_DE = 'de-de'
  static currentLang = 'sr-latin-rs'
  static lang = langSrb
}
