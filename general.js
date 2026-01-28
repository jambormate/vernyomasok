import fs from "fs";
import path from "path";

const adatok = [];

const vezeteknevek = ["Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Takács"];

const keresztnevek = ["Dániel", "Dávid", "Bence", "Máté", "Tamás", "Viktória", "Vivien", "Anna", "Alexandra", "Fanni"];

function randomElem(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

for (let i = 0; i < 25; i++) {
  adatok.push({
    nev: `${randomElem(vezeteknevek)} ${randomElem(keresztnevek)}`,
    vernyomas: Math.floor(Math.random() * (160 - 90 + 1)) + 90+ "/"+ (Math.floor(Math.random() * (160 - 90 + 1)) + 90)
  });
}

const jsonSzoveg = JSON.stringify(adatok, null, 2);

const filePath = path.join("public", "test.json");
fs.writeFileSync(filePath, jsonSzoveg, "utf-8");
