import React, {useState} from "react"

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

const Recipes = () => {

    const [ recipe, setRecipe] = useState({})

    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={ () => {setRecipe(prototypeRancourRecepie)}}>Prototype Rancour</button>
            <button onClick={ () => {setRecipe(amenomaKageuchiRecepie)}}>Amenoma Kageuchi</button>

            <ul>
                {
                    Object.keys(recipe).map((mats)=>{
                        console.log(mats,recipe[mats])

                        return (
                            <li key = {mats}>
                            {mats}: {recipe[mats]}
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )

}

export default Recipes