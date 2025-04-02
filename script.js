const contractAddress = "";
const apiUrl = `https://api.dexscreener.com/latest/dex/pairs/solana/${contractAddress}`;

async function fetchPrice() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const price = data.pair?.priceUsd ?? 'N/A';
    document.getElementById('price-widget').innerText = `$SARATOGA: $${price}`;
  } catch (err) {
    document.getElementById('price-widget').innerText = 'Price unavailable';
  }
}
fetchPrice();
setInterval(fetchPrice, 60000);

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.animation = "slideUp 1s forwards";
  }, 2500);
});
