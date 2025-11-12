/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {

// UNUSED EXPORTS: btcAdres, createSnowflakes, initAll, initBtcOnChain

;// ./src/js/btcOnChain.js
// ts-check

function initBtcOnChain(btcAdres) {
  function magicGetByTestId(selector) {
    const element = document.querySelector(`[data-testid="${selector}"]`);
    return element.textContent.trim();
  }

  if (
    getShoptetDataLayer().pageType === "thankYou" &&
    magicGetByTestId("recapPaymentMethod") === "On-chain Bitcoin"
  ) {
    const recapitulation = document.querySelector(".recapitulation-wrapper");

    const orderNo = getShoptetDataLayer().order.orderNo;
    const total = getShoptetDataLayer().order.total;
    const currencyCode = getShoptetDataLayer().order.currencyCode;

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currencyCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        const btcRate = data.bitcoin[currencyCode.toLowerCase()];
        console.log(btcRate);
        const btcAmount = total / btcRate;
        const label = "Eshop";
        const message = `Objednávka č. ${orderNo}`;

        recapitulation.insertAdjacentHTML(
          "beforebegin",
          `
        <div class="recapitulation-wrapper">
          <div class="order-summary-item total">
            QR kód pro ON-CHAIN Platbu
          </div>
          <div>
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=bitcoin:${btcAdres}?amount=${btcAmount}?label='${label}'?message='${message}'&size=300x300" alt="QR kód pro platbu" />
          </div>
          <div>
            Pošlete ${btcAmount} BTC<br/> Na adresu:${btcAdres}
          </div>
        </div>
      `
        );
      })
      .catch((error) => {
        console.error("Chyba při získávání dat:", error);
        recapitulation.insertAdjacentHTML(
          "beforebegin",
          `
         <div class="recapitulation-wrapper">
          <div class="order-summary-item total">
            Chyba platebního kódu. Kontaktujte nás prosím.
          </div>
        </div>`
        );
      });
  }
}

;// ./src/js/snowflakes.js

function getSnowflakeCount() {
  const month = new Date().getMonth(); // Získání aktuálního měsíce (0 = leden, 1 = únor, ..., 11 = prosinec)

  // Definování množství vloček podle měsíce
  const snowfallMap = [
    20, // Leden
    30, // Únor (nejvíce chumelí)
    25, // Březen
    10, // Duben
    0, // Květen (žádný sníh)
    0, // Červen
    0, // Červenec
    0, // Srpen
    0, // Září
    5, // Říjen (začátek sněhu)
    15, // Listopad
    25, // Prosinec
  ];

  return snowfallMap[month]; // Vrátí počet vloček podle aktuálního měsíce
}

/**
 *
 * @param {number} initCount
 */
function createSnowflakes(initCount) {
  const count = initCount || getSnowflakeCount();

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

;// ./src/js/index.js
// ts-check
/**
 * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer
 */
/** @type {DataLayer} */
const shoptetDataLayer = getShoptetDataLayer();




// Define BTC address - replace with your actual address

function initAll(){
    initBtcOnChain(btcAdres);
    createSnowflakes();
}

// Export functions to global scope so they can be called from anywhere
window.initBtcOnChain = initBtcOnChain;
window.createSnowflakes = createSnowflakes;
window.initAll = initAll;


// Export for webpack library

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;