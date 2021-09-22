const parole = [
    "ala", "albero", "acqua", "aceto", "abisso", "acaro", "alligatore", "anatra", "antilope", "aragosta", "avvoltoio",
    "amsterdam", "abbaco", "accappatoio", "accendino", "aereoplano", "almanacco", "ambulanza", "aquilone",
    "bar", "baco", "babbuino", "balena", "barracuda", "bradipo", "berlino", "baionetta", "bambola", "bambolotto",
    "bandiera", "baule", "banana", "bicicletta", "boomerang",
    "cane", "camaleonte", "cammello", "canarino", "canguro", "capodoglio", "cavallo", "cerbiatto", "chiocciola",
    "coccinella", "coccodrillo", "coniglio", "copenaghen", "calcolatrice", "calendario", "calzamaglia", "camomilla",
    "cannocchiale", "cappello", "cassaforte", "castello", "clavicembalo", "comodino", "colla", "computer", "congelatore",
    "cristallo", "cucchiaio", "chitarra",
    "dado", "dama", "dito", "daino", "delfino", "dinosauro", "dobermann", "drago", "damasco", "dublino", "dardo",
    "denaro", "dentifricio", "deodorante", "diaframma", "distintivo",
    "elefante", "ermellino", "edimburgo", "elicottero", "equalizzatore", "evidenziatore", "etichettatrice",
    "foglia", "facocero", "falco", "fenicottero", "formica", "furetto", "fantoccio", "fagotto", "farmacia", "fiaccola", "fiammifero", "filigrana",
    "finestra", "fisarmonica", "fioretto", "fischietto", "fuoco", "forchetta", "formaggio", "fotocamera", "fotocopiatrice", "francobollo", "frusta",
    "gioco", "gabbiano", "gallina", "gamberone", "gazzella", "ghepardo", "granchio", "gufo", "gorilla", "gavettone",
    "gemelli", "gigante", "giocattolo", "gioiello", "giroscopio", "gondola", "grammofono", "grappa",
    "hotel",
    "istrice", "iena", "iguana", "ippopotamo", "insetto", "idrovolante", "imbuto", "impermeabile", "inchiostro", "ingranaggio", "insalatiera",
    "koala",
    "lana", "labrador", "lamantino", "lucertola", "lussemburgo", "lacrimogeno", "lampadario", "lampadina", "lanciafiamme", "lavatrice", "legna", "locomotiva", "lubrificante",
    "mare", "maggiolino", "macaco", "maremmano", "martello", "merluzzo", "montecarlo", "macchina", "medaglia", "maglia", "magnete",
    "mangiacassette", "mappamondo", "matassa", "materasso", "mattarello", "metropolitana", "microprocessore", "mongolfiera", "mulinello",
    "naso", "nastro", "nave", "navigatore", "navicella", "negozio", "nebulizzatore", "neon", "noccioline",
    "orca", "ornitorinco", "orso", "obliteratrice", "occhiali", "ombrello", "ombrellone", "ossigeno", "osso",
    "pinguino", "panda", "pappagallo", "pastore", "pellicano", "pipistrello", "porcospino", "panama", "pechino", "parigi", "pianoforte", "pagliaccio", "paladino", "palla", "pallone",
    "pallottola", "pannolino", "pantaloni", "pennello", "paracadute", "parafulmine", "passaporto", "passamontagna", "patata", "penna", "piccone", "pneumatico", "portafogli", "puzzle",
    "quad", "quercia", "quaderno", "quadro",
    "rana", "rinoceronte", "roditore", "roma", "racchetta", "radio", "rastrello", "riflettore", "rimorchio", "rivoltella", "rompighiaccio", "rossetto",
    "serpente", "salamandra", "scarabeo", "scimmia", "squalo", "sirena", "singapore", "stoccolma", "sirena", "sarcofago", "sapone", "satellite", "scala", "scanner",
    "sciarpa", "scorpione", "schiaccianoci", "scolapasta", "scooter", "scudetto", "semaforo", "sfigmomanometro", "sigarette", "smeraldo",
    "soprammobile", "spaventapasseri", "spazzacamino",
    "tonno", "torta", "tacchino", "tarantola", "tartaruga", "talismano", "tamburo", "tappeto", "tassametro", "tastiera", "telegramma",
    "telecamera", "telecomando", "telefono", "televisore", "temperamatite", "termometro", "termosifone", "torpediniera", "tosaerba", "trampolino", "transatlantico",
    "uva",
    "uccello", "uragano", "umidificatore", "utilitaria",
    "vagone", "varano", "vespa", "vitello", "volpe", "vienna", "vapore", "vascello", "valanga", "vespa", "vetro", "videocamera", "violoncello", "vocabolario", "wireless",
    "xilofono",
    "yoga",
    "zanzara", "zaino", "zaffiro", "zebra", "zerbino", "zucchero"
]

/* let img = document.querySelector('#immagine'); */


let sceltaParola = () => parole[parseInt(Math.random() * (parole.length - 1))];

let divParola = document.querySelector('#parola');

let splitParola = sceltaParola().split('');

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < splitParola.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'classDiv')
        const newSpan = document.createElement('span');
        newSpan.setAttribute('id', `span_${i}`)
        newSpan.append(splitParola[i].toUpperCase());
        divParola.appendChild(newDiv);
        newDiv.appendChild(newSpan).style.visibility = 'hidden';
    }
});

let vite = 4;
document.querySelector('#vite').append(vite);
let lettereEsatte = [];

function lettera(value) {
    if (splitParola.includes(value)) {
        for (let i = 0; i < splitParola.length; i++) {
            if (splitParola[i].includes(value)) {
                document.querySelector(`#span_${i}`).style.visibility = 'visible';
                lettereEsatte.push(value);
            }
        }
    } else if (!splitParola.includes(value)) {
        vite--;
        document.querySelector('#vite').innerHTML = vite;
        if (vite === 0) {
            alert(`YOU LOSE!! THE WORD WAS =>  ${splitParola.join(' ').toUpperCase()} `);
            location.reload();
        }
    }
    if (splitParola.length === lettereEsatte.length) {
        alert(`GREAT, YOU WIN!!!
 THE WORD WAS => ${splitParola.join(' ').toUpperCase()}`);
        location.reload();
    }
}