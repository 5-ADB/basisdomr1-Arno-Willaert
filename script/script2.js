const groenten = [
    {
      id: 1,
      naam: "prei",
      prijs: 2.1,
    },
    {
      id: 2,
      naam: "brocoli",
      prijs: 1.5,
    },
    {
      id: 3,
      naam: "tomaat",
      prijs: 3.4,
    },
    {
      id: 4,
      naam: "erwten",
      prijs: 0.7,
    },
  ];

const lijst = document.querySelector("#lijst")
const kostprijs = document.querySelector("#kostprijs")

groenten.forEach((groente) => {
    const nieuweRegel = document.createElement("option")
    nieuweRegel.innerHTML = groente.naam
    lijst.appendChild(nieuweRegel)
  })