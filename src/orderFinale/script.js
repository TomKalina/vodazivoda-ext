const btcAdres = `bc1qsp9j6af90pxlkj5tvmqgsva3nqngm624ygfezm`

function magicGetByTestId(selector){
    const element = document.querySelector(`[data-testid="${selector}"]`);
    return element.textContent.trim();
}

const recapitulation = document.querySelector('.recapitulation-wrapper');

if(recapitulation && magicGetByTestId('recapPaymentMethod') === 'On-chain Bitcoin') {
    const orderId= magicGetByTestId('orderNumber')
    const czkAmount = magicGetByTestId('orderTotalPrice').replace('Kč', '').replace(' ', '');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=czk')
    .then(response => response.json())
    .then(data => {
      const btcRate = data.bitcoin.czk;
      const btcAmount = czkAmount / btcRate;
      const label = "Eshop";
      const message = `Objednávka č. ${orderId}`;

      recapitulation.insertAdjacentHTML('beforebegin', `
        <div class="recapitulation-wrapper">
          <div class="order-summary-item total">
            QR kód pro ON-CHAIN Platbu
          </div>
          <div>
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=bitcoin:${btcAdres}?amount=${btcAmount}?label="${label}"?message="${message}"&size=300x300" alt="QR kód pro platbu" />
          </div>
        </div>
      `);

    })
    .catch(error => {
      console.error('Chyba při získávání dat:', error);
      recapitulation.insertAdjacentHTML('beforebegin', `
         <div class="recapitulation-wrapper">
          <div class="order-summary-item total">
            Chyba platebního kódu. Kontaktujte nás prosím.
          </div>
        </div>`);
    });
}

