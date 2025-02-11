// ts-check
/**
 * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer
 */
/** @type {DataLayer} */
const shoptetDataLayer = getShoptetDataLayer();

import { initBtcOnChain } from './btcOnChain.js';
import { createSnowflakes } from './snowflakes.js';

function initAll(){
    initBtcOnChain(btcAdres);
    createSnowflakes();
}