async function tablaBetoltese() {
  try {
    const response = await fetch("/test.json");
    const adatok = await response.json();

    const tabla = document.getElementById("tabla");

    adatok.forEach(({ nev, vernyomas }) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${nev}</td>
        <td>${vernyomas}</td>
      `;
      tabla.appendChild(tr);
    });

  } catch (error) {
    console.error("Hiba történt az adatok betöltésekor:", error);
  }
}

tablaBetoltese();