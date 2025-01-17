function getSnowflakeCount() {
  const month = new Date().getMonth(); // Získání aktuálního měsíce (0 = leden, 1 = únor, ..., 11 = prosinec)

  // Definování množství vloček podle měsíce
  const snowfallMap = [
    200, // Leden
    300, // Únor (nejvíce chumelí)
    250, // Březen
    100, // Duben
    0, // Květen (žádný sníh)
    0, // Červen
    0, // Červenec
    0, // Srpen
    0, // Září
    50, // Říjen (začátek sněhu)
    150, // Listopad
    250, // Prosinec
  ];

  return snowfallMap[month]; // Vrátí počet vloček podle aktuálního měsíce
}

function createSnowflakes(count) {
  const container = document.querySelector(".snowflakes");

  for (let i = 0; i < count; i++) {
    let snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    let inner = document.createElement("div");
    inner.classList.add("inner");
    inner.innerHTML = "❅";

    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.animationDelay = Math.random() * 3 + "s";
    inner.style.animationDelay = Math.random() * 10 + "s";

    snowflake.appendChild(inner);
    container.appendChild(snowflake);
  }
}

const snowflakeCount = getSnowflakeCount();
createSnowflakes(snowflakeCount);
