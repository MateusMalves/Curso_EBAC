const gods = [
    {
      name: "Ebisu",
      description: "Deus da prosperidade e da pesca.",
      image: "assets/images/Ebisu.jpg",
    },
    {
      name: "Daikokuten",
      description: "Deus da riqueza e da colheita.",
      image: "assets/images/Daikokuten.jpg",
    },
    {
      name: "Bishamonten",
      description: "Deus da guerra e protetor da justiça.",
      image: "assets/images/Bishamonten.jpg",
    },
    {
      name: "Benzaiten",
      description: "Deusa da arte e do conhecimento.",
      image: "assets/images/Benzaiten.jpg",
    },
    {
      name: "Fukurokuju",
      description: "Deus da longevidade e da sabedoria.",
      image: "assets/images/Fukurokuju.jpg",
    },
    {
      name: "Hotei",
      description: "Deus da felicidade e da abundância.",
      image: "assets/images/Hotei.jpg",
    },
    {
      name: "Jurōjin",
      description: "Deus da longevidade e da saúde.",
      image: "assets/images/Jurojin.jpg",
    },
  ];
  
  document.getElementById("sortButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * gods.length);
    const chosenGod = gods[randomIndex];
  
    const img = new Image();
    img.src = chosenGod.image;
    img.onload = () => {
      document.getElementById("deityImage").src = chosenGod.image;
      document.getElementById("deityImage").hidden = false;
      document.getElementById("deityName").innerText = chosenGod.name;
      document.getElementById("deityDescription").innerText = chosenGod.description;
    };
    img.onerror = () => {
      console.error(`Erro ao carregar a imagem: ${chosenGod.image}`);
    };
  });