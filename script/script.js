const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 1,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 1,
    naam: "erwten",
    prijs: 0.7,
  },
];

const lijst = document.querySelector("#lijst")

// aanmaken fruiten
groenten.forEach((groente) => {
  const nieuweRegel = document.createElement("div")
  nieuweRegel.innerHTML = groente.naam
  lijst.appendChild(nieuweRegel)
})