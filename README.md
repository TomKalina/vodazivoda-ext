# Shoptet rozšíření

## Návod na Přidání Bitcoin platební metody

### 1. Přidat platební metodu

Metodu je možné přidat v `/admin/zpusoby-platby/` (Menu -> Nastavení -> Způsob platby).
Důležité je aby název byl "On-chain Bitcoin"

### 2. Vložit kód

Překopírujte kód z `orderFinale/script.js` do editoru HTML kódu.

- Přejděte do editoru HTML kód `/admin/html-kody/`. (Menu -> Vzhled a obsah -> Editor -> HTML kód)
- zkopírujte kód z `footer/btcOnChain.js` do sekce `Zápatí`
- Na začátek kódu vložte `<script>` a na konec `</script>`
- Zavolejte `initBtcOnChain` se svou peněženkou.

```js
<script>

...kód z footer/btcOnChain.js...

initBtcOnChain(`bc1...ezm`);
</script>
```
