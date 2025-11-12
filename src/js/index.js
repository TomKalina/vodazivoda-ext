// ts-check
/**
 * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer
 */
/** @type {DataLayer} */
const shoptetDataLayer = getShoptetDataLayer();

import { initBtcOnChain } from './btcOnChain.js';
import { createSnowflakes } from './snowflakes.js';

// Define BTC address - replace with your actual address

function initAll(){
    initBtcOnChain(btcAdres);
    createSnowflakes();
}

// Export functions to global scope so they can be called from anywhere
window.initBtcOnChain = initBtcOnChain;
window.createSnowflakes = createSnowflakes;
window.initAll = initAll;
