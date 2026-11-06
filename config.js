/*
 * ============================================================
 *  PODEŠAVANJA SAJTA: ovo je jedini fajl koji treba menjati
 * ============================================================
 */
window.SITE_CONFIG = {
  bandName: "Grand Plus Orkestar",

  // Broj telefona u međunarodnom formatu, bez "+" i razmaka (koristi se za Viber i WhatsApp)
  phone: "381655802393",
  // Kako se broj prikazuje na sajtu
  phoneDisplay: "+381 65 580 2393",

  instagram: "https://www.instagram.com/grandplusorkestar/",
  // Gradovi i mesta gde bend svira. Prikazuju se na sajtu i pomažu da sajt izlazi na Google-u
  // kada neko traži npr. "bend za svadbu Šabac". TODO: upisati prave gradove.
  serviceAreas: ["Srbija"],

  // ---- Google kalendar (zauzeti termini) ----
  // Uputstvo je u README.md. Dok su ova dva polja prazna, kalendar služi samo za izbor datuma (bez slobodno/zauzeto).
  googleCalendarId: "aa597d6dd43640ec3893e68cf7f4911ce3b025189478ec7fc877179abcde8fe3@group.calendar.google.com",
  googleApiKey: "",       // API ključ iz Google Cloud konzole (ograničen na domen sajta)

  // Demo zauzeti datumi: prikazuju se samo uz showDemoBusy: true dok Google kalendar nije podešen.
  // Za javni sajt ostaviti false, da posetioci ne vide netačnu dostupnost.
  showDemoBusy: false,
  demoBusyDates: ["2026-10-31", "2026-11-01", "2026-11-07", "2026-11-14", "2026-11-15", "2026-11-21", "2026-11-28", "2026-12-05", "2026-12-12", "2026-12-19", "2026-12-26", "2026-12-31"],

  // YouTube ID-jevi videa (deo linka posle "v="). Ako je prazno, prikazuje se poziv ka Instagramu.
  youtubeVideos: []
};
