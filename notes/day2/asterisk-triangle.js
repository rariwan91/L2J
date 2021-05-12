
function drawStars() {
    const height = process.argv[2]
    for (let i = 1; i <= height; i++) {
        console.log("* ".repeat(i))
    }
}

// drawStars();

function drawStarsTwo() {
    const height = process.argv[2]
    for (let i = height; i > 0; i--) {
        console.log("* ".repeat(i))
    }
}
/*
i = 4
Condition: i <= 0, Print stars

types of for loops:
    * increase to a number
        for(let i = 0; i < 10; i++)
        --->

    * decrease to a number
        for(let i = 10; i > 0; i--)
        <---
*/

// drawStarsTwo()

if(true) {

}
else if(true) {

}
// ...
else {
    
}

function hero() {
    const life = Number(process.argv[2])
    const damage = Number(process.argv[3])

    if (life == damage) {
        console.log("pika pika ded")
    } else if (life > damage) {
        console.log("KEEP ON FIGHTING PIKACHU")
    } else {
        console.log("he super ded")
    }
}

//hero()

function stateist() {
    let state = process.argv[2]
    let onesWeLike = ["CA", "TX"]
    let defDontLike = "OK"

    if (onesWeLike.indexOf(state) > -1) {
        console.log('we like yoouu')
    } else if (state == defDontLike) {
        console.log('we def dont like u')
    } else {
        console.log('youre alright I guess')
    }
}

//stateist()


function heroTwo() {
    const life = Number(process.argv[2])
    const damage1 = Number(process.argv[3])
    const damage2 = Number(process.argv[4])
    const damage3 = Number(process.argv[5])

    let damageTotal = damage1 + damage2 + damage3

    if (damageTotal > life) {
        console.log("The hero has lost his will to live...")
    } else if (damageTotal < life) {
        console.log("The hero keeps fighting onward")
    } else {
        console.log("The Hero suddenly falls in battle...now what...")
    }
}

heroTwo();
