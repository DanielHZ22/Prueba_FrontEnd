const fetchPokemon = () => {
/*-----Consulta del nombre ingresado con la api*/
    const pokeNombre = document.getElementById("pokeNombre");
    let inputName = pokeNombre.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${inputName}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            spritePoke("./Error_pikachu.jpg");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeHabilidades = data.types;
        let pokeStats = data.stats;
        console.log(pokeImg);
        verHabilidades(pokeHabilidades);
        verStats(pokeStats);
        spritePoke(pokeImg);
    })
}

/*-----Funcion que recibe objeto*/
const verHabilidades = (pokeHabilidades) => {
    var habilidad = document.querySelector('#pokeHabilidad');
    var resultado = '';
    for (let i of pokeHabilidades){
    resultado = resultado
    .concat ('<h4>').
    concat('Tipo: ')
    .concat(i.type.name)
    .concat('</h4>');
    console.log(i.type.name);
    }
    habilidad.innerHTML = resultado;
}

/*-----Funcion que recibe objeto*/
const verStats = (pokeStats) => {
    var stats = document.querySelector('#pokeStat');
    var tabla = document.querySelector('#pokeTabla');
    var resultado = '';
    for (let i of pokeStats){
        resultado = resultado
        .concat('<tr>')
        .concat('<td>')
        .concat(i.stat.name)
        .concat('</td>')
        .concat('<td>')
        .concat(i.base_stat)
        .concat('</td>')
        .concat('</tr>');
        console.log(i.stat.name);
        console.log(i.base_stat);
        }
        stats.innerHTML = resultado;
        tabla.style.display = "block";
}

const spritePoke = (url) => {
    const spritePoke = document.getElementById(ImgPoke);
    ImgPoke.src = url;
}


