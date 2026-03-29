export const kontaktInfo = {
  telefon: "+47 96 68 32 55",
  telefonHref: "tel:+4796683255",
  adresse: "Selma Ellefsens vei 6, 0581 Oslo",
  epost: "post@erbyggas.no",
};

export const trustStats = [
  { label: "Kundetilfredshet", value: "4.9 av 5", detail: "202 evalueringer" },
  { label: "Fullførte oppdrag", value: "272+", detail: "Små og store prosjekter" },
  { label: "Befaring", value: "Gratis", detail: "Dag og kveld etter avtale" },
  { label: "Pristilbud", value: "Rask levering", detail: "Typisk innen 24 timer" },
];

export const tjenester = [
  { tittel: "Snekkerarbeid", beskrivelse: "Skreddersydde løsninger i tre med presis finish." },
  { tittel: "Totalrenovering av bolig", beskrivelse: "Helhetlig prosjektstyring fra planlegging til overlevering." },
  { tittel: "Delrenovering", beskrivelse: "Effektiv oppgradering av kjøkken, bad, stue eller entré." },
  { tittel: "Gulv (parkett, laminat)", beskrivelse: "Nøyaktig legging med holdbart og elegant resultat." },
  { tittel: "Tak og beslag", beskrivelse: "Trygge og værbestandige løsninger for norske forhold." },
  { tittel: "Kjøkken og interiør", beskrivelse: "Montering og tilpasning med fokus på detaljer." },
  { tittel: "Mur og betong", beskrivelse: "Robuste konstruksjoner med høy faglig standard." },
  { tittel: "Terrasse / uteområder", beskrivelse: "Eksklusive uterom bygget for funksjon og estetikk." },
  { tittel: "Vinduer og dører", beskrivelse: "Profesjonell utskifting for bedre komfort og energiøkonomi." },
  { tittel: "Mikrosement", beskrivelse: "Sømløse premium-overflater for moderne interiør." },
];

export const prosjektKategorier = ["Alle", "Gulv", "Renovering", "Snekker", "Uteprosjekter"] as const;

export type ProsjektKategori = (typeof prosjektKategorier)[number];

export const prosjekter: Array<{
  tittel: string;
  kategori: Exclude<ProsjektKategori, "Alle">;
  sted: string;
  bilde: string;
}> = [
  {
    tittel: "Helrenovering av enebolig",
    kategori: "Renovering",
    sted: "Vinderen, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Eksklusiv parkettlegging",
    kategori: "Gulv",
    sted: "Frogner, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Skreddersydd trappeløsning",
    kategori: "Snekker",
    sted: "Nordstrand, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Terrasse med integrert sonelys",
    kategori: "Uteprosjekter",
    sted: "Bekkestua",
    bilde:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Kjøkkenoppgradering i eik",
    kategori: "Renovering",
    sted: "Majorstuen, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Uteplass med pergola",
    kategori: "Uteprosjekter",
    sted: "Asker",
    bilde:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Listefri detaljfinish",
    kategori: "Snekker",
    sted: "Ullern, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1600607687644-c7f34b5cbb3b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    tittel: "Chevron parkett i stue",
    kategori: "Gulv",
    sted: "Nydalen, Oslo",
    bilde:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
  },
];

export type Anmeldelse = {
  navn: string;
  dato: string;
  oppdrag: string;
  tekst: string;
};

export const anmeldelser: Anmeldelse[] = [
  {
    navn: "Turid",
    dato: "13. mars 2026",
    oppdrag: "Legging av laminatgulv i tre rom",
    tekst: "Veldig godt fornøyd med jobben de gjorde. Hyggelig og dyktig snekker. Kan anbefales på det varmeste. Vil gjerne bruke de igjen.",
  },
  {
    navn: "Lars-Erik",
    dato: "25. februar 2026",
    oppdrag: "Skifte av gulv og avretting rundt peis i stue/kjøkken",
    tekst: "Vi er veldig fornøyd med jobben de gjorde her. Byttet gulv og lister i stue og kjøkken. I tillegg fjerne betong rundt peis og legge gulv der.",
  },
  {
    navn: "Andreas",
    dato: "14. januar 2026",
    oppdrag: "Bygge lettvegg og montere panelplate for TV",
    tekst: "Proffe folk. Veldig godt resultat med lettvegg og skyvedør. Anbefales.",
  },
  {
    navn: "Sara",
    dato: "10. desember 2025",
    oppdrag: "Montering av lettvegg med dør 2,6m x 2,81m",
    tekst: "Veldig fornøyd.",
  },
  {
    navn: "Espen",
    dato: "4. desember 2025",
    oppdrag: "Legg parkett i kjellerstue og soverom 30 kvm",
    tekst: "Pålitelig og effektive.",
  },
  {
    navn: "Kine",
    dato: "10. november 2025",
    oppdrag: "Innvendig oppussing av leilighet",
    tekst: "Kan varmt anbefales.",
  },
  {
    navn: "Halvor",
    dato: "2. november 2025",
    oppdrag: "Helsparkling av gang og stue",
    tekst: "Resultatet ble veldig bra. Hadde andre bedrifter på befaring som mente at det ikke gikk å få rette kanter når man sparklet over gammel strietapet, men E&R BYGG AS viste at det ikke var noe problem.",
  },
  {
    navn: "Anniken",
    dato: "27. oktober 2025",
    oppdrag: "Lettvegg",
    tekst: "Anbefales. Veldig fornøyd med arbeidet og god kommunikasjon underveis.",
  },
  {
    navn: "Stein",
    dato: "23. september 2025",
    oppdrag: "Legge ny parkett i stue/gang og gang 2.etg",
    tekst: "Svært fornøyd med opptreden og utført arbeid. Håndverkerne kom presist til avtalt tid og jobbet kontinuerlig gjennom dagen. De var hyggelige og hjelpsomme og tok tilleggsarbeider på strak arm. Om aktuelt kan jeg godt tenke meg å benytte firmaet igjen.",
  },
  {
    navn: "Kyrre",
    dato: "25. juli 2025",
    oppdrag: "Oppussing av etasje i rekkehus. Legge gulv, fliser, male vegger mv.",
    tekst: "God kvalitet på arbeidet, veldig pålitelige og ryddige folk. Alt ble gjort som avtalt, godt innenfor avtalt tid og til avtalt pris. Kom med gode løsningsforslag underveis. Veldig fornøyd med firmaet og arbeidet som ble gjort. Ville brukt dem igjen.",
  },
  {
    navn: "Thanh",
    dato: "2. juli 2025",
    oppdrag: "Sette opp en lettvegg",
    tekst: "Hyggelig folk. Jobben gjort som avtalt. Veldig fornøyd med resultatet.",
  },
  {
    navn: "Ali",
    dato: "21. mai 2025",
    oppdrag: "Lettvegg med skyvedør",
    tekst: "Fastpris, god kommunikasjon og bra arbeid. Anbefales.",
  },
  {
    navn: "Iben Renate",
    dato: "15. mai 2025",
    oppdrag: "Sette opp lettvegger og dør, sparkle og male",
    tekst: "Fikk satt opp en lettvegg, ny dørkarm, og malt flere vegger. Vi er veldig fornøyd med jobben og prisen. God kommunikasjon underveis.",
  },
  {
    navn: "Frode",
    dato: "11. mai 2025",
    oppdrag: "Sette opp lettvegg 3,3x2,4 m",
    tekst: "Satte opp lettvegg og monterte dør. Bra kvalitet på arbeid og god ryddighet underveis. Enkel og hyggelig kommunikasjon.",
  },
  {
    navn: "Even",
    dato: "6. mai 2025",
    oppdrag: "Bygging av lettvegg med dør",
    tekst: "Strålende utført jobb med bygging av lettvegg. Anbefaler E&R BYGG varmt.",
  },
  {
    navn: "Julie Marie",
    dato: "14. april 2025",
    oppdrag: "Gulvlegging",
    tekst: "Veldig fornøyd med jobben (legging av laminatgulv og lister rundt gulv, dører og vinduer). Detaljorienterte, hyggelige og ryddige snekkere og god kommunikasjon underveis. Ville bruke bedriften igjen.",
  },
  {
    navn: "Silje",
    dato: "1. april 2025",
    oppdrag: "Oppussing gulv, vegger, tak og trapp",
    tekst: "E og R oppussing kan anbefales på det varmeste. Hyggelige, effektive og flinke. Vi er godt fornøyd.",
  },
  {
    navn: "Torgeir",
    dato: "27. mars 2025",
    oppdrag: "Sette opp vegg for å dele soverom i 2",
    tekst: "God kommunikasjon og kvalitet.",
  },
  {
    navn: "Lars",
    dato: "21. februar 2025",
    oppdrag: "Montere gipsplater på vegg (soverom 12 kvm) Bekkestua",
    tekst: "Meget fornøyd. De leverte til avtalt pris og utførte arbeidet med svært høy profesjonalitet. Platelegging på vegger, lister og nytt gulv ble lagt til vår store tilfredshet. Anbefales.",
  },
  {
    navn: "Ørjan",
    dato: "19. desember 2024",
    oppdrag: "Sparkling, maling og tapetsering",
    tekst: "Effektivt, ryddig og bra resultat. Anbefales.",
  },
];
