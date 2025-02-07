// ts-check
/**
 * @typedef {import('@shoptet/datalayer').DataLayer} DataLayer
 */
/** @type {DataLayer} */
const shoptetDataLayer = getShoptetDataLayer();

import { initBtcOnChain } from './btcOnChain.js';
import { createSnowflakes } from './snowflakes.js';


initBtcOnChain(`bc1qsp9j6af90pxlkj5tvmqgsva3nqngm624ygfezm`);
createSnowflakes();