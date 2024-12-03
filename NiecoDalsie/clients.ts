type Client = {
  id: number; // Jedinečný identifikátor
  bio: string; // Biografické údaje
  email: string; // Emailová adresa
  phone: string; // Telefónne číslo
  score: string; // Skóre (pravdepodobne ako reťazec)
  avatar: string; // URL obrázka avatara
  rating: string; // Hodnotenie (pravdepodobne ako reťazec)
  country: string; // Krajina
  has_pet: boolean; // Má domáce zviera
  latitude: string; // Geografická šírka (pravdepodobne ako reťazec)
  longitude: string; // Geografická dĺžka (pravdepodobne ako reťazec)
  last_name: string; // Priezvisko
  birth_date: string; // Dátum narodenia vo formáte YYYY-MM-DD
  first_name: string; // Krstné meno
  favorite_color: string; // Oblúbená farba vo formáte HEX
};

function renderCards(people: Client[]) {
  const container = document.getElementById("clients-container");
  if (!container) {
    console.error('Missing container element');
    return;
  }

  if (!people.length) {
    container.innerHTML = "<h2>Zoznam klientov je prázdny</h2>"
    return;
  }

  // clear current content
  container.innerHTML = "";

  people.forEach((person) => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = person.id.toString();

    card.innerHTML = `
        <img src="${person.avatar}" alt="${person.first_name} ${person.last_name}"
          width="120" height="120" class="avatar" loading="lazy"/>
        <div class="details" style="border-color: ${person.favorite_color};">
          <h2>${person.first_name} ${person.last_name}</h2>
          <p>${person.bio}</p>
          <p><strong>Birth Date:</strong> ${person.birth_date}</p>
          <p><strong>Has Pet:</strong> ${person.has_pet ? "Yes" : "No"}</p>
          <p><strong>Score:</strong> ${person.score}</p>
          <p><strong>Country:</strong> ${person.country}</p>
        </div>
      `;

    container.appendChild(card);
  });
}

async function loadData() {
  const response = await fetch("https://retoolapi.dev/Cvx3fW/api");
  const data: Client[] = await response.json();
  const result = applySearchFilterSort(data);
  renderCards(result);
}

function onClientFormSubmit(event: SubmitEvent) {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const client = Object.fromEntries(formData.entries()) as Partial<Client>;
  console.log('Submitted Client:', client);
}