// ts-check

export function initBtcOnChain(btcAdres) {
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
