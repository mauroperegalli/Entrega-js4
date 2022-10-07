const buscarPokemon = async () => {
    const input = document.getElementById("input");
    const pokemon = input.value
  
    if (pokemon === '') {
    // return alert ('Ingrese un número por favor');
    card.innerHTML = `<p class="error">Error. Ingrese un numero</p>`;
    } else if (pokemon >= '906') {
      card.innerHTML = `<p class="error">Error. Ingrese un numero entre 1 y 905</p>`;
    }
  
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();
  
  
      const html = `<div class="card-general"> 
      <h2> ${data.name}</h2>
      <img  src="${data.sprites.front_default}"/>
      <p class="tipo">${data.types
        .map((type) => {
          return `<span>${type.type.name}</span>`;
        })
        .join("")}</p>
              
       
      <p class="altura">Altura: ${data.height / 10}m</p>
      <p class="peso">Peso: ${data.weight / 10}Kg</p>
      <p class="id"> ID : ${data.id}</p>`;
      card.innerHTML = html;
    } catch (error) {
      console.log(error);
    }
  };
  
  const btn = document.getElementById("btn");
  btn.addEventListener("click", buscarPokemon);