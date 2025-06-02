function showTopBar() {
  const country = "France";
  const vat = 20;
  const countryBar = document.querySelector("section.country-bar");

  countryBar.innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;

  requestAnimationFrame(() => {
    countryBar.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", showTopBar);
