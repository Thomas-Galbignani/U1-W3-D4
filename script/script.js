const arrayNumeriRandom = [];

const creaTabellone = function () {
  const tabellina = document.getElementById(`table`);
  // tutto dentro a tebellina
  tabellina.innerHTML = ``;
  for (let i = 1; i <= 76; i++) {
    const divvino = document.createElement(`div`);
    const numeriTabella = document.createElement(`h3`);
    numeriTabella.innerText = i;
    divvino.appendChild(numeriTabella);
    tabellina.appendChild(divvino);
    if (arrayNumeriRandom.includes(i)) {
      divvino.classList.add(`selezionato`);
    }
  }
  tabellina.classList.add(`numeri-tab`);
};
creaTabellone();

const btn = document.getElementById(`cliccami`);
btn.addEventListener(`click`, () => {
  const numeroCasuale = Math.ceil(Math.random() * 76);
  arrayNumeriRandom.push(numeroCasuale);
  console.log(arrayNumeriRandom);
  creaTabellone();
});
