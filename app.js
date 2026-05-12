const shapes = {
  pitagores: {
    name: "Teorema de Pitàgores",
    desc: "En un triangle rectangle, la suma dels quadrats dels catets és igual al quadrat de la hipotenusa.",
    formulas: ["a² = b² + c²", "b = √(a² - c²)", "c = √(a² - b²)"],
    svg: `<svg viewBox="0 0 260 200" role="img"><polygon points="50,160 210,160 210,50" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M190 160 L190 140 L210 140" fill="none" stroke="#111827" stroke-width="2"/><text x="122" y="178">c</text><text x="218" y="108">b</text><text x="126" y="96">a</text></svg>`,
    calcs: [
      {label:"Hipotenusa a", target:"a", vars:["b","c"], fn:v=>Math.sqrt(v.b*v.b+v.c*v.c), steps:v=>`a = √(${v.b}² + ${v.c}²)`},
      {label:"Catet b", target:"b", vars:["a","c"], fn:v=>Math.sqrt(v.a*v.a-v.c*v.c), steps:v=>`b = √(${v.a}² - ${v.c}²)`},
      {label:"Catet c", target:"c", vars:["a","b"], fn:v=>Math.sqrt(v.a*v.a-v.b*v.b), steps:v=>`c = √(${v.a}² - ${v.b}²)`}
    ]
  },
  rectangle: {
    name: "Rectangle",
    desc: "L’àrea és el producte de la base per l’altura.",
    formulas: ["A = b · h", "b = A / h", "h = A / b"],
    svg: `<svg viewBox="0 0 260 180"><rect x="45" y="45" width="170" height="95" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/><text x="126" y="164">b</text><text x="224" y="98">h</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["b","h"], fn:v=>v.b*v.h, steps:v=>`A = ${v.b} · ${v.h}`},
      {label:"Base b", target:"b", vars:["A","h"], fn:v=>v.A/v.h, steps:v=>`b = ${v.A} / ${v.h}`},
      {label:"Altura h", target:"h", vars:["A","b"], fn:v=>v.A/v.b, steps:v=>`h = ${v.A} / ${v.b}`}
    ]
  },
  romboide: {
    name: "Romboide",
    desc: "Té la mateixa fórmula d’àrea que el rectangle: base per altura.",
    formulas: ["A = b · h", "b = A / h", "h = A / b"],
    svg: `<svg viewBox="0 0 260 180"><polygon points="70,140 210,140 190,45 50,45" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><line x1="190" y1="45" x2="190" y2="140" stroke="#111827" stroke-dasharray="6 5"/><text x="132" y="164">b</text><text x="198" y="98">h</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["b","h"], fn:v=>v.b*v.h, steps:v=>`A = ${v.b} · ${v.h}`},
      {label:"Base b", target:"b", vars:["A","h"], fn:v=>v.A/v.h, steps:v=>`b = ${v.A} / ${v.h}`},
      {label:"Altura h", target:"h", vars:["A","b"], fn:v=>v.A/v.b, steps:v=>`h = ${v.A} / ${v.b}`}
    ]
  },
  triangle: {
    name: "Triangle",
    desc: "L’àrea és la meitat del producte de la base per l’altura.",
    formulas: ["A = (b · h) / 2", "b = 2A / h", "h = 2A / b"],
    svg: `<svg viewBox="0 0 260 190"><polygon points="45,150 220,150 175,35" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/><line x1="175" y1="35" x2="175" y2="150" stroke="#111827" stroke-dasharray="6 5"/><text x="126" y="174">b</text><text x="184" y="96">h</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["b","h"], fn:v=>v.b*v.h/2, steps:v=>`A = (${v.b} · ${v.h}) / 2`},
      {label:"Base b", target:"b", vars:["A","h"], fn:v=>2*v.A/v.h, steps:v=>`b = 2 · ${v.A} / ${v.h}`},
      {label:"Altura h", target:"h", vars:["A","b"], fn:v=>2*v.A/v.b, steps:v=>`h = 2 · ${v.A} / ${v.b}`}
    ]
  },
  trapezi: {
    name: "Trapezi",
    desc: "L’àrea és la meitat de la suma de les bases multiplicada per l’altura.",
    formulas: ["A = ((B + b) · h) / 2", "h = 2A / (B + b)", "B = 2A / h - b", "b = 2A / h - B"],
    svg: `<svg viewBox="0 0 260 190"><polygon points="65,150 210,150 175,55 95,55" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/><line x1="95" y1="55" x2="95" y2="150" stroke="#111827" stroke-dasharray="6 5"/><text x="128" y="48">b</text><text x="132" y="174">B</text><text x="102" y="108">h</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["B","b","h"], fn:v=>(v.B+v.b)*v.h/2, steps:v=>`A = ((${v.B} + ${v.b}) · ${v.h}) / 2`},
      {label:"Altura h", target:"h", vars:["A","B","b"], fn:v=>2*v.A/(v.B+v.b), steps:v=>`h = 2 · ${v.A} / (${v.B} + ${v.b})`},
      {label:"Base gran B", target:"B", vars:["A","h","b"], fn:v=>2*v.A/v.h-v.b, steps:v=>`B = 2 · ${v.A} / ${v.h} - ${v.b}`},
      {label:"Base petita b", target:"b", vars:["A","h","B"], fn:v=>2*v.A/v.h-v.B, steps:v=>`b = 2 · ${v.A} / ${v.h} - ${v.B}`}
    ]
  },
  poligon: {
    name: "Polígon regular",
    desc: "El perímetre és el costat multiplicat pel nombre de costats. L’àrea és perímetre per apotema dividit entre 2.",
    formulas: ["P = c · n", "A = (P · a) / 2", "A = (c · n · a) / 2"],
    svg: `<svg viewBox="0 0 260 210"><polygon points="130,25 205,70 205,150 130,190 55,150 55,70" fill="#fecaca" stroke="#be123c" stroke-width="3"/><line x1="130" y1="108" x2="130" y2="190" stroke="#111827" stroke-dasharray="6 5"/><line x1="130" y1="108" x2="205" y2="150" stroke="#111827" stroke-dasharray="6 5"/><text x="138" y="154">a</text><text x="164" y="184">c</text></svg>`,
    calcs: [
      {label:"Perímetre P", target:"P", vars:["c","n"], fn:v=>v.c*v.n, steps:v=>`P = ${v.c} · ${v.n}`},
      {label:"Àrea A", target:"A", vars:["c","n","a"], fn:v=>v.c*v.n*v.a/2, steps:v=>`A = (${v.c} · ${v.n} · ${v.a}) / 2`},
      {label:"Costat c", target:"c", vars:["A","n","a"], fn:v=>2*v.A/(v.n*v.a), steps:v=>`c = 2 · ${v.A} / (${v.n} · ${v.a})`},
      {label:"Apotema a", target:"a", vars:["A","c","n"], fn:v=>2*v.A/(v.c*v.n), steps:v=>`a = 2 · ${v.A} / (${v.c} · ${v.n})`},
      {label:"Nombre de costats n", target:"n", vars:["A","c","a"], fn:v=>2*v.A/(v.c*v.a), steps:v=>`n = 2 · ${v.A} / (${v.c} · ${v.a})`}
    ]
  },
  circumferencia: {
    name: "Circumferència",
    desc: "La longitud d’una circumferència depèn del radi.",
    formulas: ["L = 2 · π · r", "r = L / (2π)", "d = 2r"],
    svg: `<svg viewBox="0 0 240 200"><circle cx="120" cy="100" r="70" fill="none" stroke="#0ea5e9" stroke-width="4"/><line x1="120" y1="100" x2="190" y2="100" stroke="#ef4444" stroke-width="3"/><text x="145" y="91">r</text></svg>`,
    calcs: [
      {label:"Longitud L", target:"L", vars:["r"], fn:v=>2*Math.PI*v.r, steps:v=>`L = 2 · π · ${v.r}`},
      {label:"Radi r", target:"r", vars:["L"], fn:v=>v.L/(2*Math.PI), steps:v=>`r = ${v.L} / (2π)`},
      {label:"Diàmetre d", target:"d", vars:["r"], fn:v=>2*v.r, steps:v=>`d = 2 · ${v.r}`}
    ]
  },
  arc: {
    name: "Arc de circumferència",
    desc: "La longitud d’un arc correspon a una part de la circumferència segons l’angle en graus.",
    formulas: ["L_arc = 2 · π · r · n / 360"],
    svg: `<svg viewBox="0 0 240 200"><circle cx="120" cy="100" r="70" fill="none" stroke="#cbd5e1" stroke-width="4"/><path d="M120 30 A70 70 0 0 1 190 100" fill="none" stroke="#ef4444" stroke-width="8"/><line x1="120" y1="100" x2="120" y2="30" stroke="#334155"/><line x1="120" y1="100" x2="190" y2="100" stroke="#334155"/><text x="136" y="78">n°</text></svg>`,
    calcs: [
      {label:"Longitud de l’arc L", target:"L", vars:["r","n"], fn:v=>2*Math.PI*v.r*v.n/360, steps:v=>`L = 2 · π · ${v.r} · ${v.n} / 360`},
      {label:"Radi r", target:"r", vars:["L","n"], fn:v=>v.L*360/(2*Math.PI*v.n), steps:v=>`r = ${v.L} · 360 / (2π · ${v.n})`},
      {label:"Angle n", target:"n", vars:["L","r"], fn:v=>v.L*360/(2*Math.PI*v.r), steps:v=>`n = ${v.L} · 360 / (2π · ${v.r})`}
    ]
  },
  cercle: {
    name: "Cercle",
    desc: "L’àrea d’un cercle de radi r és π multiplicat pel radi al quadrat.",
    formulas: ["A = π · r²", "r = √(A / π)"],
    svg: `<svg viewBox="0 0 240 200"><circle cx="120" cy="100" r="72" fill="#dbeafe" stroke="#2563eb" stroke-width="4"/><line x1="120" y1="100" x2="192" y2="100" stroke="#ef4444" stroke-width="3"/><text x="150" y="90">r</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["r"], fn:v=>Math.PI*v.r*v.r, steps:v=>`A = π · ${v.r}²`},
      {label:"Radi r", target:"r", vars:["A"], fn:v=>Math.sqrt(v.A/Math.PI), steps:v=>`r = √(${v.A} / π)`}
    ]
  },
  sector: {
    name: "Sector circular",
    desc: "L’àrea d’un sector és una part de l’àrea del cercle segons l’angle en graus.",
    formulas: ["A_sector = π · r² · n / 360"],
    svg: `<svg viewBox="0 0 240 200"><path d="M120 100 L120 28 A72 72 0 0 1 192 100 Z" fill="#fde68a" stroke="#d97706" stroke-width="3"/><circle cx="120" cy="100" r="72" fill="none" stroke="#94a3b8"/><text x="136" y="78">n°</text></svg>`,
    calcs: [
      {label:"Àrea del sector A", target:"A", vars:["r","n"], fn:v=>Math.PI*v.r*v.r*v.n/360, steps:v=>`A = π · ${v.r}² · ${v.n} / 360`},
      {label:"Radi r", target:"r", vars:["A","n"], fn:v=>Math.sqrt(v.A*360/(Math.PI*v.n)), steps:v=>`r = √(${v.A} · 360 / (π · ${v.n}))`},
      {label:"Angle n", target:"n", vars:["A","r"], fn:v=>v.A*360/(Math.PI*v.r*v.r), steps:v=>`n = ${v.A} · 360 / (π · ${v.r}²)`}
    ]
  },
  corona: {
    name: "Corona circular",
    desc: "És la zona entre dues circumferències concèntriques. Es calcula restant les àrees dels dos cercles.",
    formulas: ["A = π · R² - π · r²", "A = π · (R² - r²)"],
    svg: `<svg viewBox="0 0 240 200"><circle cx="120" cy="100" r="76" fill="#93c5fd" stroke="#2563eb" stroke-width="3"/><circle cx="120" cy="100" r="42" fill="white" stroke="#2563eb" stroke-width="3"/><line x1="120" y1="100" x2="196" y2="100" stroke="#ef4444"/><line x1="120" y1="100" x2="162" y2="100" stroke="#111827"/><text x="165" y="90">R</text><text x="136" y="118">r</text></svg>`,
    calcs: [
      {label:"Àrea A", target:"A", vars:["R","r"], fn:v=>Math.PI*(v.R*v.R-v.r*v.r), steps:v=>`A = π · (${v.R}² - ${v.r}²)`},
      {label:"Radi gran R", target:"R", vars:["A","r"], fn:v=>Math.sqrt(v.A/Math.PI+v.r*v.r), steps:v=>`R = √(${v.A} / π + ${v.r}²)`},
      {label:"Radi petit r", target:"r", vars:["A","R"], fn:v=>Math.sqrt(v.R*v.R-v.A/Math.PI), steps:v=>`r = √(${v.R}² - ${v.A} / π)`}
    ]
  }
};

const labels = {
  A:"Àrea A", b:"Base b", h:"Altura h", B:"Base gran B", c:"Costat / catet c",
  n:"Nombre de costats o angle n", a:"Apotema / hipotenusa a", P:"Perímetre P",
  r:"Radi petit r", R:"Radi gran R", L:"Longitud L", d:"Diàmetre d"
};

const shapeSelect = document.getElementById("shapeSelect");
const calcSelect = document.getElementById("calcSelect");
const shapeName = document.getElementById("shapeName");
const shapeDesc = document.getElementById("shapeDesc");
const shapeImage = document.getElementById("shapeImage");
const formulaList = document.getElementById("formulaList");
const inputs = document.getElementById("inputs");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const installBtn = document.getElementById("installBtn");

Object.entries(shapes).forEach(([key, s]) => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = s.name;
  shapeSelect.appendChild(opt);
});

function updateShape(){
  const s = shapes[shapeSelect.value];
  shapeName.textContent = s.name;
  shapeDesc.textContent = s.desc;
  shapeImage.innerHTML = s.svg;
  formulaList.innerHTML = s.formulas.map(f => `<span class="formula">${f}</span>`).join("");
  calcSelect.innerHTML = "";
  s.calcs.forEach((c, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = c.label;
    calcSelect.appendChild(opt);
  });
  updateInputs();
}

function updateInputs(){
  const s = shapes[shapeSelect.value];
  const c = s.calcs[Number(calcSelect.value)];
  inputs.innerHTML = "";

  const blank = document.createElement("div");
  blank.className = "field";
  blank.innerHTML = `<label>${labels[c.target] || c.target}</label><input disabled placeholder="Es calcularà"><small>Camp en blanc</small>`;
  inputs.appendChild(blank);

  c.vars.forEach(v => {
    const div = document.createElement("div");
    div.className = "field";
    div.innerHTML = `<label for="var-${v}">${labels[v] || v}</label><input id="var-${v}" inputmode="decimal" placeholder="Escriu un valor"><small>${v}</small>`;
    inputs.appendChild(div);
  });

  result.className = "result";
  result.textContent = "";
}

function parseVal(raw){
  if(raw === null || raw.trim() === "") return NaN;
  return Number(raw.replace(",", "."));
}

function calculate(){
  const s = shapes[shapeSelect.value];
  const c = s.calcs[Number(calcSelect.value)];
  const vals = {};
  for(const v of c.vars){
    vals[v] = parseVal(document.getElementById(`var-${v}`).value);
    if(!Number.isFinite(vals[v])){
      showBad("Falta algun valor o hi ha un número incorrecte.");
      return;
    }
  }
  let answer = c.fn(vals);
  if(!Number.isFinite(answer) || answer < 0){
    showBad("Amb aquestes dades no es pot obtenir un resultat vàlid. Revisa els valors.");
    return;
  }
  const rounded = Math.round(answer * 10000) / 10000;
  result.className = "result ok";
  result.innerHTML = `<strong>${labels[c.target] || c.target} = ${rounded}</strong><div class="steps">${c.steps(vals)}</div>`;
}

function showBad(msg){
  result.className = "result bad";
  result.textContent = msg;
}

shapeSelect.addEventListener("change", updateShape);
calcSelect.addEventListener("change", updateInputs);
calcBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => updateInputs());

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});
installBtn.addEventListener("click", async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
}

updateShape();
