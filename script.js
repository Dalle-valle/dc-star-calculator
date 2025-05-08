const heroes = [
  { name: "Superman", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Superman.png" },
  { name: "Joker", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Joker.png" },
  { name: "Scarecrow", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Scarecrow.png" },
  { name: "Deathstroke", rarity: "Mythic+", isInBleed: true, bleedDaysLeft: 15, img: "Deathstroke.png" },
  { name: "Sinestro", rarity: "Mythic+", isInBleed: true, bleedDaysLeft: 30, img: "Sinestro.png" },
  { name: "Zatanna", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Zatanna.png" },
  { name: "Constantine", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Constantine.png" },
  { name: "Hawkgirl", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Hawkgirl.png" },
  { name: "Nightwing", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Nightwing.png" },
  { name: "Martian Manhunter", rarity: "Mythic+", isInBleed: false, bleedDaysLeft: 0, img: "Martian_Manhunter.png" },

  { name: "Batman", rarity: "Mythic", isInBleed: false, img: "Batman.png" },
  { name: "Harley Quinn", rarity: "Mythic", isInBleed: false, img: "Harley_Quinn.png" },
  { name: "Dr. Fate", rarity: "Mythic", isInBleed: false, img: "Doctor_Fate.png" },
  { name: "Green Lantern", rarity: "Mythic", isInBleed: false, img: "Green_Lantern.png" },
  { name: "Aquaman", rarity: "Mythic", isInBleed: false, img: "Aquaman.png" },
  { name: "Raven", rarity: "Mythic", isInBleed: false, img: "Raven.png" },

  { name: "Wonder Woman", rarity: "Legendary", isInBleed: false, img: "Wonder_Woman.png" },
  { name: "Poison Ivy", rarity: "Legendary", isInBleed: false, img: "Poison_Ivy.png" },
  { name: "Mera", rarity: "Legendary", isInBleed: false, img: "Mera.png" },
  { name: "Green Arrow", rarity: "Legendary", isInBleed: false, img: "Green_Arrow.png" },
  { name: "Black Adam", rarity: "Legendary", isInBleed: false, img: "Black_Adam.png" },
  { name: "Two-Face", rarity: "Legendary", isInBleed: false, img: "Two-Face.png" },
  { name: "Cyborg", rarity: "Legendary", isInBleed: false, img: "Cyborg.png" },
  { name: "Shazam", rarity: "Legendary", isInBleed: false, img: "Shazam.png" },
  { name: "Robin", rarity: "Legendary", isInBleed: false, img: "Robin.png" },
  { name: "Red Hood", rarity: "Legendary", isInBleed: false, img: "Red_Hood.png" },
  { name: "Red Robin", rarity: "Legendary", isInBleed: false, img: "Red_Robin.png" },
  { name: "Lex Luthor", rarity: "Legendary", isInBleed: false, img: "Lex_Luthor.png" },
  { name: "Batgirl", rarity: "Legendary", isInBleed: false, img: "Batgirl.png" },
  { name: "The Flash", rarity: "Legendary", isInBleed: false, img: "The_Flash.png" },
  { name: "Vixen", rarity: "Legendary", isInBleed: false, img: "Vixen.png" },
  { name: "Penguin", rarity: "Legendary", isInBleed: false, img: "Penguin.png" },
  { name: "Killer Croc", rarity: "Legendary", isInBleed: false, img: "Killer_Croc.png" },
  { name: "Deadshot", rarity: "Legendary", isInBleed: false, img: "Deadshot.png" },
  { name: "Captain Cold", rarity: "Legendary", isInBleed: false, img: "Captain_Cold.png" },
  { name: "Black Canary", rarity: "Legendary", isInBleed: false, img: "Black_Canary.png" },
  { name: "Catwoman", rarity: "Legendary", isInBleed: false, img: "Catwoman.png" },
  { name: "Atom", rarity: "Legendary", isInBleed: false, img: "Atom.png" },
  { name: "Star Girl", rarity: "Legendary", isInBleed: false, img: "Stargirl.png" },
];

let selectedHeroIndex = null;
let selectedStarValue = 1;

const shardRequirements = [2, 3, 5, 10, 20, 20, 20, 20, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 60, 60, 80, 80, 80, 80, 80];
const starColors = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "purple",
  "purple",
  "purple",
  "purple",
  "purple",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "yellow",
  "red",
  "red",
  "red",
  "red",
  "red",
];

const grid = document.getElementById("heroGrid");
const dropdown = document.getElementById("dropdownOptions");
const selected = document.getElementById("selectedStar");

heroes.forEach((hero, i) => {
  const card = document.createElement("div");
  card.className = "hero-card";
  card.onclick = () => selectHero(i, card);

  const img = document.createElement("img");
  img.src = `images/${hero.img}`;
  img.alt = hero.name;
  img.className = "hero-img";
  img.title = `${hero.name} (${hero.rarity})`;

  card.appendChild(img);
  grid.appendChild(card);
});

function selectHero(index, cardElement) {
  selectedHeroIndex = index;
  document.querySelectorAll(".hero-card").forEach((c) => c.classList.remove("selected"));
  cardElement.classList.add("selected");

  const hero = heroes[index];
  const label = document.getElementById("selectedHeroLabel");

  label.className = "selected-hero-label";
  label.classList.add(hero.rarity.replace("+", "Plus"));
  label.textContent = `Selected Hero: ${hero.name} (${hero.rarity})`;
}

function createStarIcon(color) {
  const span = document.createElement("span");
  span.textContent = "★";
  span.className = `star-icon ${color}`;
  return span;
}

function buildStarDropdown() {
  dropdown.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const item = document.createElement("div");
    item.setAttribute("data-value", i + 1);

    const stars = document.createElement("span");
    stars.className = `star-icon ${starColors[i]}`;
    stars.textContent = "★".repeat((i % 5) + 1);

    item.appendChild(stars);

    item.addEventListener("click", () => {
      selected.innerHTML = stars.outerHTML;
      selected.className = `dropdown-selected ${starColors[i]}`;
      dropdown.style.display = "none";
      selectedStarValue = i + 1;
    });

    dropdown.appendChild(item);
  }
}

selected.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-dropdown")) {
    dropdown.style.display = "none";
  }
});

buildStarDropdown();

function calculate() {
  const shards = parseInt(document.getElementById("availableShards").value) || 0;
  const currentStar = selectedStarValue;

  const hero = heroes[selectedHeroIndex];

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!hero) {
    resultDiv.textContent = "Please select a hero from the grid.";
    return;
  }

  const shardsPerCopy = hero.rarity === "Mythic+" ? 40 : 10;
  let level = currentStar;
  let remainingShards = shards;

  if (hero.rarity === "Mythic+" && !hero.isInBleed) {
    resultDiv.innerHTML += `<strong>⚠️ Warning:</strong> ${hero.name} is not currently available in Bleed.<br><br>`;
  }

  for (let i = currentStar; i < shardRequirements.length + 1; i++) {
    const cost = shardRequirements[i];
    if (remainingShards >= cost) {
      remainingShards -= cost;
      level++;
    } else {
      break;
    }
  }

  const starCount = ((level - 1) % 5) + 1;
  const starColor = starColors[level - 1] || "red"; // fallback if max
  const starSpan = `<span class="star-icon ${starColor}">${"★".repeat(starCount)}</span>`;

  resultDiv.innerHTML += `
    <strong>Final Star:</strong> ${level > 25 ? '<span class="star-icon red">★★★★★</span>' : starSpan}<br>
    <strong>Remaining Shards:</strong> ${remainingShards}<br>
    <strong>Shards Per Copy:</strong> ${shardsPerCopy}
  `;

  if (hero.isInBleed) {
    resultDiv.innerHTML += `<br><strong>✅ Bleed Banner Active:</strong> ${hero.bleedDaysLeft} days left`;
  }
}
