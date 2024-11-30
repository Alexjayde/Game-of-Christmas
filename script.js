let days = 24;
let today = new Date();
let currentDay = today.getDate(); // Hämta dagens datum
let currentMonth = today.getMonth(); // Hämta aktuell månad
console.log(currentDay);
// Funktion för att kontrollera om dagens lucka kan öppnas
let canOpen = function(day) {
  return true; // Tillfälligt tillåt alla dagar att öppnas
};

// Hämta grid-elementet
let grid = document.getElementById('grid');
// Getting formated date from date string
// Deadline för nedräkning
let deadline = new Date("Dec 24, 2024 17:00:00").getTime();

// Starta nedräkning
let x = setInterval(function () {
  // Hämta aktuell tid
  let now = new Date().getTime();

  // Beräkna tid kvar
  let t = deadline - now;

  // Beräkna dagar, timmar, minuter och sekunder kvar
  let tdays = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);


  // Visa tid i 24-timmarsformat
  let currentHour = new Date().getHours();
  console.log("Aktuell timme:", currentHour); // Logga aktuell timme

  // Visa nedräkning
  document.getElementById("day").innerHTML = tdays;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // Visa meddelande när tiden är ute
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";  
  }
}, 1000);

// Array med specifik text för varje dag
let doorTexts = [
  "En värme som dansar lätt utan motorolja och fett.",
  "Färger som väcks till liv, utan h20.", // Dag 2
  "Skaper sprødhet med vinden, enklere kunne de ikke bli.", // Dag 3
  "Snabbhet,smak,en blyg magi", // Dag 4
  "Luft, vatten, eld, touch av perfektion", // Dag 5
  "Där hettan möter vinden, sker magin i tysthet – en ny väg till njutning", // Dag 6
  "Är du jagad? Ifrågasätt allt, mindre tal, mer observation ",
  "Spindlar vävs i tysthet, men nätet är farligt för oss alla.", //dag 8
  "Skapa låg profil, ersätt hotet, håll vapnet nära hotets rygg",
  "Är du klok, stängd mun, för att vinna, låt bli att beblandas",
  "Bli förd bakom ljuset eller bli ett med ljuset?", //dag 11
  "Maskerna döljer sanningen, men vem kan hålla fasaden längst?",
  "En osynlig vän som tränger bort mörka dofter.",
  "Frisk luft i vinden, utan ett ljud den arbetar.",//dag 14
  "Ren luft är dess löfte, men inget syns när den gör sitt jobb.",//dag 15  
  "Tyst och osynlig, men påverkar ändå hela rummet.",
  "En vän som går obemärkt, men märks när den är borta",
  "Ett andetag av klarhet, där det gamla sveps undan och försvinner.",//dag 18
  "Ett redskap för flera syften, men ingen vet vad det gör.",
  "Ett handtag som skapar ordning där kaos annars råder.",//dag 20
  "Här tas maten i bitar, men ingen kniv behövs för att hacka.",
  "Förberedelser gjorda snabbt, men ingen aning om hur det går till.",//dag 22
  "Ett snitt, ett drag, här går det fort",
  "Ett ögonblicks rörelse delar det fasta i precisa bitar – ordning ur kaos.", // Dag 24
];

// Skapa luckor
for (let i = 1; i <= days; i++) {
  let door = document.createElement('div');
  door.setAttribute("data-day", i);
  door.classList.add('day');
  door.innerHTML = `
    <div class="door">
      <span class="number">${i}</span>
      <div class="text">🎁 <br>${doorTexts[i - 1]}</div>
    </div>
  `;

// Lägg till en klickhändelse
door.addEventListener('click', (event) => {
  let clickedDoor = event.target.closest('.day'); // Hitta närmaste `.day`
  if (clickedDoor) {
    let day = parseInt(clickedDoor.getAttribute("data-day")); // Konvertera till heltal

    // Kontrollera både månad och datum
    if (currentMonth === 11 && day <= currentDay) { // Kontrollera att det är december
      console.log(`Lucka ${day} öppnas!`);
      clickedDoor.classList.add('open');
    } else {
      alert("Det är inte dags för denna lucka än!"); // Meddelande om man försöker öppna en lucka för en framtida dag
    }
  }
});

  grid.appendChild(door);
}
