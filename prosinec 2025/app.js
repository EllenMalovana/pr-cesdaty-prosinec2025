// ==========================
// DATA – pole seriálů
// ==========================
const serialy = [
  { nazev: "Fallout", tvurce: "Jonathan Nolan", rok: 2024, cena: 249, zanr_kod: "S" },
  { nazev: "Arcane", tvurce: "Christian Linke", rok: 2021, cena: 229, zanr_kod: "A" },
  { nazev: "The Summer I Turned Pretty", tvurce: "Jenny Han", rok: 2022, cena: 199, zanr_kod: "R" },
  { nazev: "Ginny and Georgia", tvurce: "Sarah Lampert", rok: 2021, cena: 189, zanr_kod: "K" },
  { nazev: "Rick and Morty", tvurce: "Dan Harmon", rok: 2013, cena: 179, zanr_kod: "K" },
  { nazev: "Yellowstone", tvurce: "Taylor Sheridan", rok: 2018, cena: 209, zanr_kod: "D" }
];

// ==========================
// SLOVNÍK ŽÁNRŮ
// ==========================
const zanry = {
  S: "Sci-Fi",
  A: "Animovaný",
  R: "Romantický",
  K: "Komedie",
  D: "Drama"
};

console.log("=== Všechna data – seriály ===");
console.table(serialy);

// ==========================
// SET – jedineční tvůrci
// ==========================
const tvurciSet = new Set(serialy.map(s => s.tvurce));
console.log("=== Set jedinečných tvůrců ===");
console.log(tvurciSet);

// ==========================
// MAP – seriál podle názvu
// ==========================
const serialMap = new Map();
serialy.forEach(s => serialMap.set(s.nazev, s));

console.log("=== Map (název → seriál) ===");
console.log(serialMap);

// ==========================
// FILTRACE – od roku 2020
// ==========================
const serialy2020plus = serialy.filter(s => s.rok >= 2020);
console.log("=== Filtrace: seriály od roku 2020 ===");
console.table(serialy2020plus);

// ==========================
// PŘEVOD – doplnění názvu žánru
// ==========================
const serialySeZanrem = serialy2020plus.map(s => ({
  ...s,
  zanr: zanry[s.zanr_kod]
}));

console.log("=== Převod: doplněný žánr ===");
console.table(serialySeZanrem);

// ==========================
// AGREGACE – průměr / min / max cena
// ==========================
const ceny = serialySeZanrem.map(s => s.cena);
const prumer = Math.round(ceny.reduce((a, b) => a + b, 0) / ceny.length);
const minCena = Math.min(...ceny);
const maxCena = Math.max(...ceny);

console.log("=== Agregace cen ===");
console.log("Průměrná cena:", prumer, "Kč");
console.log("Nejnižší cena:", minCena, "Kč");
console.log("Nejvyšší cena:", maxCena, "Kč");

// ==========================
// VYHLEDÁVÁNÍ – existence
// ==========================
const existujeSerial = serialy.some(s => s.nazev === "Arcane");
console.log("=== Existuje seriál Arcane? ===");
console.log(existujeSerial);

// ==========================
// MAP – detail seriálu
// ==========================
console.log("=== Detail seriálu z Map ===");
console.log(serialMap.get("Fallout"));

// ==========================
// TŘÍDĚNÍ – české pořadí
// ==========================
const serazeneSerialy = [...serialy].sort((a, b) =>
  a.nazev.localeCompare(b.nazev, "cs")
);

console.log("=== Třídění podle názvu (čeština) ===");
console.table(serazeneSerialy);
