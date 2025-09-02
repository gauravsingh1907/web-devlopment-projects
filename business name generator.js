/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
function adj() {
    let a = "crazy"
    let b = "amazing"
    let c = "Fire"

    let rand = Math.random()

    if (rand < 0.33) { return a }
    else if (rand >= 0.33 && rand < 0.66) { return b }
    else if (rand >= 0.66) { return c }



}
function shn() {
    let a = "engine"
    let b = "food"
    let c = "garments "

    let rand = Math.random()

    if (rand < 0.33) { return a }
    else if (rand >= 0.33 && rand < 0.66) { return b }
    else if (rand >= 0.66) { return c }



}
function anw() {
    let a = "bros"
    let b = "limited"
    let c = "hub"

    let rand = Math.random()
    console.log(rand)

    if (rand < 0.33) { return a }
    else if (rand >= 0.33 && rand < 0.66) { return b }
    else if (rand >= 0.66 && rand <1) { return c }


}
console.log("the business name is ", adj(), shn(), anw())