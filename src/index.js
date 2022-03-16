import "./styles/index.scss"

const prototypeRancourRecepie = {
    crystalChunk:50,
    whiteIron: 50,
    swordBillet:1,
}

const amenomaKageuchiRecepie = {
    amethystLump:50,
    ...prototypeRancourRecepie,

}



console.log(prototypeRancourRecepie);
console.log(amenomaKageuchiRecepie);