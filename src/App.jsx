import React from 'react';
import "./App.css"
import footmanImg from './BTNFootman.webp';
import Input from './input'
import BTNNecromancer from './BTNNecromancer-Reforged.webp';
import BTNPriestImg from './BTNPriest-Reforged.webp';
import BTNHeroBloodElfPrince from './BTNHeroBloodElfPrince-Reforged.webp';
import BTNHeroArchMage from './BTNHeroArchMage-Reforged.webp';
import Reflect from './BTNDefend.png';
import BTNPeasant from './BTNPeasant.webp';
import BTNHeroPaladin from './BTNHeroPaladin.webp';
import BTNGryphonRider from './BTNGryphonRider.webp';
import BTNMilitia from './BTNMilitia.webp';
import BTNKnight from './BTNKnight.webp';
import BTNDivineIntervention from './BTNDivineIntervention.webp';
import BTNGuardTower from './BTNGuardTower.webp';
import BTNGatherGold from './BTNGatherGold.webp';
import BTNBacktoWork from './BTNBacktoWork.webp';
import BTNArcaniteArchitecture from './BTNArcaniteArchitecture.webp';
import BTNDevotion from './BTNDevotion.webp';
import PASBTNBash from './PASBTNBash.webp';
import BTNStun from './BTNStun.webp';
import { Unit } from './unit'
import { Cell } from './cell'

let int = {
    necromancer: 3,
    cleric: 3,
    mageOfFire: 5,
    mageOfWater: 2,
}
let hp = {
    necromancer: 50,
    cleric: 50,
    mageOfFire: 40,
    mageOfWater: 54,
}
let mp = {
    necromancer: 10,
    cleric: 10,
    mageOfFire: 5,
    mageOfWater: 13,
}
let icon = {
    necromancer: BTNNecromancer,
    cleric: BTNPriestImg,
    mageOfFire: BTNHeroBloodElfPrince,
    mageOfWater: BTNHeroArchMage,
}
let defaultPlayer1 = Object.freeze({
    nameOfHero: "noname",
    classOfHero: "necromancer",
    race1: "human",
    race2: "human",
    gold: 100,
    lvl: 1,
    intelligence: 3,
    hp: 50,
    mp: 10,
    maxMP: 10,
    xp: 0,
});
let defaultPlayer2 = {
    nameOfHero: "noname",
    classOfHero: "necromancer",
    race1: "human",
    race2: "human",
    gold: 100,
    lvl: 1,
    intelligence: 3,
    hp: 50,
    mp: 10,
    maxMP: 10,
    xp: 0,
};

class PlayerUnit {
    cl = null
    player = 0
    raceNumber = 0
    // position = [1, 2]

    constructor(cl, player, raceNumber) {
        this.cl = cl
        this.player = player
        this.raceNumber = raceNumber
    }

    get id() {
        return `${this.cl.name}__${this.player}__${this.raceNumber}`
    }

    // getEnemyPositions() { // [[2, 2], [2, 3]]

    // }

    // attack(plu) {
    //     return plu
    // }
}

// const enemies = plu.getEnemyPositions().map(getPluByPosition)
// const newEnemies = enemies.forEach(enemy => plu.attack)

// function updateRow(pluList) { // [plu1, plu2]

// }

// getPluByPosition(postioin) { // [2, 2]
//     reeturn plu
// }
function clearCurrentEffect(unit) {
    let effect = 0
    if (unit.ability.indexOf("bashed") > -1) {
        effect = unit.ability.indexOf("bashed")
        return {
            ...unit,
            abilityImg: unit.abilityImg.filter(index => index !== effect),
            ability: unit.ability.filter((item, index) => index !== effect)
        }
    }
    return unit
}



function forDamage(attack, armor, attackSpeed) {
    if (attack > armor) {
        return (attack - armor) * (attackSpeed)
    } else {
        return 1 * attackSpeed
    }
}
function checkOfAttack(unit, enemy) {
    let result = unit.attackSpeed
    if (unit && enemy) {
        console.log(enemy)
        if (unit.attackSpeed < 1) {
            return 0
        }
        if (unit.ability.indexOf("bashed") > -1) {
            return result = 0
        }
        if (enemy.ability.indexOf("flying") > -1 && unit.rangeOfAttack === "melee") {
            return result = 0
        }
        if (enemy.ability.indexOf("reflect") > -1) {
            if (unit.rangeOfAttack === "range" && unit.attackSpeed > 0) {
                for (let i = 0; i < unit.attackSpeed; i++) {
                    if (Math.round(Math.random()) === 1) {
                        alert("defender have reflected damage!")
                        result = result - 1
                    }
                }
            }
        }
    }
    console.log(result)
    return result
}
function doMeta(unit, enemy1, enemy2) {
    if (unit.ability.indexOf("militia") > -1) {
        if (enemy1 || enemy2) {
            return {
                ...unit,
                img: BTNMilitia,
                name: "Militia",
                attack: unit.attack + 1,
                armor: unit.armor + 1,
                abilityImg: [BTNBacktoWork],
                ability: ["backToWork"]
            }
        }
    }
    if (unit.ability.indexOf("backToWork") > -1) {
        if (!enemy1 && !enemy2) {
            return {
                ...unit,
                img: BTNPeasant,
                name: "Peasant",
                attack: unit.attack - 1,
                armor: unit.armor - 1,
                abilityImg: [BTNGatherGold],
                ability: ["worker", "militia"]
            }
        }
    }
    return unit
}

function calculateBonusDamage(unit, enemy, numberOfAttack) {
    let bonus = 1
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.ability.indexOf("holyAttack") > -1 && enemy.ability.indexOf("undead") > -1) {
                bonus = 1.5
            }
        }
    }
    return bonus
}

function calculateDeBuff(unit, enemy, numberOfAttack) {
    let bash = 1
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.ability.indexOf("bash") > -1) {
                for (let i = 0; i < numberOfAttack; i++) {
                    bash = Math.round(Math.random() * 0.625 + 0.375)
                    if (bash === 0) {
                        alert(unit.name + " have bashed " + enemy.name + "!")
                        return {
                            ...enemy,
                            abilityImg: enemy.abilityImg.concat(BTNStun),
                            ability: enemy.ability.concat("bashed")
                        }
                    }
                }
            }
        }
    }
    return enemy
}
let defaultPeasant = Object.freeze({
    img: BTNPeasant,
    name: "Peasant",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    armor: 0,
    abilityImg: [BTNGatherGold],
    ability: ["worker", "militia"],
    cost: 23,
});
let defaultMilitia = Object.freeze({
    img: BTNMilitia,
    name: "Militia",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    armor: 1,
    abilityImg: [BTNBacktoWork],
    ability: ["backToWork"],
    cost: 23,
});
let defaultFootman = {
    img: footmanImg,
    name: "Footman",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 10,
    armor: 3,
    abilityImg: [Reflect],
    ability: ["reflect"],
    cost: 76,
};
let defaultGryphonRider = {
    img: BTNGryphonRider,
    name: "GryphonRider",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 12,
    armor: 1,
    abilityImg: [PASBTNBash],
    ability: ["flying", "bash"],
    cost: 105,
};
let defaultTower = {
    img: BTNGuardTower,
    name: "Tower",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 10,
    armor: 3,
    abilityImg: [BTNArcaniteArchitecture],
    ability: ["building"],
    cost: 113,
};
let defaultKnight = {
    img: BTNKnight,
    name: "Knight",
    attack: 5,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 16,
    armor: 5,
    abilityImg: [],
    ability: [],
    cost: 246,
};
let defaultPaladin = {
    img: BTNHeroPaladin,
    name: "Paladin",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 11,
    armor: 4,
    abilityImg: [BTNDivineIntervention, BTNDevotion, PASBTNBash],
    ability: ["holyAttack", "devotionAura", "bash"],
    cost: 327,
};

let unitsOfRaces = {
    human: [defaultPeasant, defaultMilitia, defaultFootman, defaultGryphonRider, defaultTower, defaultKnight, defaultPaladin,]
}

function App() {
    const [player1, setPlayer1] = React.useState(defaultPlayer1)
    const [player2, setPlayer2] = React.useState(defaultPlayer2)
    const [selectedPlu, setSelectedPlu] = React.useState(null)
    const [turn, setTurn] = React.useState(0)
    const [cells, setSelectedCells] = React.useState([
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ])

    const classUnits11 = unitsOfRaces[player1.race1].map(cl => {
        const plu = new PlayerUnit(cl, 1, 1)
        return (
            <Unit
                key={plu.id}
                cl={plu.cl}
                selected={selectedPlu ? selectedPlu.id === plu.id : false}
                onSelect={() => {
                    if (turn % 2 !== 0) {
                        return
                    }
                    setSelectedPlu(plu)
                }}
            />
        )
    })
    const classUnits12 = unitsOfRaces[player1.race2].map(cl => {
        const plu = new PlayerUnit(cl, 1, 2)
        return (
            <Unit
                key={plu.id}
                cl={plu.cl}
                selected={selectedPlu ? selectedPlu.id === plu.id : false}
                onSelect={() => {
                    if (turn % 2 !== 0) {
                        return
                    }
                    setSelectedPlu(plu)
                }}
            />
        )
    })
    const classUnits21 = unitsOfRaces[player2.race1].map(cl => {
        const plu = new PlayerUnit(cl, 2, 1)
        return (
            <Unit
                key={plu.id}
                cl={plu.cl}
                selected={selectedPlu ? selectedPlu.id === plu.id : false}
                onSelect={() => {
                    if (turn % 2 === 0) {
                        return
                    }
                    setSelectedPlu(plu)
                }}
            />
        )
    })
    const classUnits22 = unitsOfRaces[player2.race2].map(cl => {
        const plu = new PlayerUnit(cl, 2, 2)
        return (
            <Unit
                key={plu.id}
                cl={plu.cl}
                selected={selectedPlu ? selectedPlu.id === plu.id : false}
                onSelect={() => {
                    if (turn % 2 === 0) {
                        return
                    }
                    setSelectedPlu(plu)
                }}
            />
        )
    })
    function forIncome() {
        let income1 = 10;
        let income2 = 10;
        for (let i = 0; i < 6; i++) {
            if (cells[1][i] && cells[1][i].cl.ability.indexOf("worker") > -1) {
                income1 = income1 + 3;
            }
            if (cells[2][i] && cells[2][i].cl.ability.indexOf("worker") > -1) {
                income2 = income2 + 3;
            }
        }
        setPlayer1({
            ...player1,
            gold: player1.gold + income1
        })
        setPlayer2({
            ...player2,
            gold: player2.gold + income2
        })
    }
    function calculateMassEffect() {
        let effects1 = []
        let effects2 = []
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                if (cells[i][j] && cells[i][j].cl.ability.indexOf("devotionAura") > -1) {
                    effects1 = effects1.concat("devotionAura")
                }
            }
        }
        for (let i = 2; i < 3; i++) {
            for (let j = 0; j < 6; j++) {
                if (cells[i][j] && cells[i][j].cl.ability.indexOf("devotionAura") > -1) {
                    effects2 = effects2.concat("devotionAura")
                }
            }
        }
        const newRow0 = cells[0].map((item2, i2) => {
            if (item2 && effects1.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) < 0) {
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        armor: item2.cl.armor + 1,
                        abilityImg: item2.cl.abilityImg.concat(BTNDevotion)
                    }
                }
            }
            return item2
        })
        const newRow1 = cells[1].map((item2, i2) => {
            if (item2 && effects1.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) < 0) {
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        armor: item2.cl.armor + 1,
                        abilityImg: item2.cl.abilityImg.concat(BTNDevotion)
                    }
                }
            }
            return item2
        })
        const newRow2 = cells[2].map((item2, i2) => {
            if (item2 && effects2.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) < 0) {
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        armor: item2.cl.armor + 1,
                        abilityImg: item2.cl.abilityImg.concat(BTNDevotion)
                    }
                }
            }
            return item2
        })
        const newRow3 = cells[3].map((item2, i2) => {
            if (item2 && effects2.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) < 0) {
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        armor: item2.cl.armor + 1,
                        abilityImg: item2.cl.abilityImg.concat(BTNDevotion)
                    }
                }
            }
            return item2
        })
        setSelectedCells([
            newRow0,
            newRow1,
            newRow2,
            newRow3,
        ])
    }
    const calculateHPofHeroes = () => {
        let damage1 = 0;
        let damage2 = 0;
        for (let i = 0; i < 6; i++) {
            if (!cells[0][i] && !cells[1][i]) {
                if (cells[2][i]) {
                    damage1 = damage1 + forDamage(cells[2][i].cl.attack, 0, cells[2][i].cl.attackSpeed)
                }
                if (cells[3][i]) {
                    damage1 = damage1 + forDamage(cells[3][i].cl.attack, 0, cells[3][i].cl.attackSpeed)
                }
            }
            if (!cells[2][i] && !cells[3][i]) {
                if (cells[0][i]) {
                    damage2 = damage2 + forDamage(cells[0][i].cl.attack, 0, cells[0][i].cl.attackSpeed)
                }
                if (cells[1][i]) {
                    damage2 = damage2 + forDamage(cells[1][i].cl.attack, 0, cells[1][i].cl.attackSpeed)
                }
            }
        }

        const newPlayer1 = {
            ...player1,
            hp: player1.hp - damage1
        }

        console.log('newPlayer1', newPlayer1)

        setPlayer1(newPlayer1)
        setPlayer2({
            ...player2,
            hp: player2.hp - damage2
        })
        if (newPlayer1.hp <= 0 && player2.hp > 0) {
            alert("the second player are winner")
        }
        if (newPlayer1.hp <= 0 && player2.hp <= 0) {
            alert("there is draw")
        }
        if (newPlayer1.hp <= 0 && player1.hp > 0) {
            alert("the first player are winner")
        }
    }
    function calculateHP() {
        let AS0 = 0
        let AS1 = 0
        let AS2 = 0
        let AS3 = 0
        const newRow1 = cells[1].map((item2, i2) => {
            if (item2) {
                item2.cl = doMeta(item2.cl, cells[2][i2], cells[3][i2])
                item2.cl = clearCurrentEffect(item2.cl)
                if (item2.cl.hp <= 0) {
                    return item2 = null
                }
                if (cells[2][i2]) {
                    AS2 = checkOfAttack(cells[2][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(cells[2][i2].cl, item2.cl, AS2)
                    if (cells[3][i2]) {
                        AS3 = checkOfAttack(cells[3][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(cells[3][i2].cl, item2.cl, AS3)
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: item2.cl.hp - forDamage(cells[2][i2].cl.attack, item2.cl.armor, AS2) - forDamage(cells[3][i2].cl.attack, item2.cl.armor, AS3)
                            }
                        }
                    } else {
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: item2.cl.hp - forDamage(cells[2][i2].cl.attack, item2.cl.armor, AS2)
                            }
                        }
                    }
                }
                if (cells[3][i2]) {
                    AS3 = checkOfAttack(cells[3][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(cells[3][i2].cl, item2.cl, AS3)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: item2.cl.hp - forDamage(cells[3][i2].cl.attack, item2.cl.armor, AS3)
                        }
                    }
                }
            }
            return item2
        })
        const newRow2 = cells[2].map((item2, i2) => {
            if (item2) {
                item2.cl = doMeta(item2.cl, cells[0][i2], cells[1][i2])
                item2.cl = clearCurrentEffect(item2.cl)
                if (cells[1][i2]) {
                    AS1 = checkOfAttack(cells[1][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS1)
                    if (item2.cl.hp <= 0) {
                        return item2 = null
                    }
                    if (cells[0][i2]) {
                        AS0 = checkOfAttack(cells[0][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(cells[0][i2].cl, item2.cl, AS1)
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: item2.cl.hp - forDamage(cells[1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(cells[1][i2].cl, item2.cl, AS1) - forDamage(cells[0][i2].cl.attack, item2.cl.armor, AS0) * calculateBonusDamage(cells[1][i2].cl, item2.cl, AS0)
                            }
                        }
                    } else {
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: item2.cl.hp - forDamage(cells[1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(cells[1][i2].cl, item2.cl, AS1)
                            }
                        }
                    }
                }
                if (cells[0][i2]) {
                    AS0 = checkOfAttack(cells[0][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(cells[0][i2].cl, item2.cl, AS0)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: item2.cl.hp - forDamage(cells[0][i2].cl.attack, item2.cl.armor, AS0) * calculateBonusDamage(cells[0][i2].cl, item2.cl, AS0)
                        }
                    }
                }
            }
            return item2
        })
        const newRow0 = cells[0].map((item2, i2) => {
            if (item2) {
                item2.cl = doMeta(item2.cl, cells[2][i2], cells[3][i2])
                item2.cl = clearCurrentEffect(item2.cl)
                if (item2.cl.hp <= 0) {
                    return item2 = null
                }
                if (!cells[1][i2]) {
                    if (cells[2][i2]) {
                        AS2 = checkOfAttack(cells[2][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS2)
                        if (cells[3][i2]) {
                            AS3 = checkOfAttack(cells[3][i2].cl, item2.cl)
                            item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS3)
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(cells[2][i2].cl, item2.cl, AS2) - forDamage(cells[3][i2].cl.attack, item2.cl.armor, AS3) * calculateBonusDamage(cells[3][i2].cl, item2.cl, AS3)
                                }
                            }
                        } else {
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(cells[2][i2].cl, item2.cl, AS2)
                                }
                            }
                        }
                    } else {
                        if (cells[3][i2]) {
                            AS3 = checkOfAttack(cells[3][i2].cl, item2.cl)
                            item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS3)
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[3][i2].cl.attack, item2.cl.armor, AS3) * calculateBonusDamage(cells[3][i2].cl, item2.cl, AS3)
                                }
                            }
                        }
                    }
                }
            }
            return item2
        })
        const newRow3 = cells[3].map((item2, i2) => {
            if (item2) {
                item2.cl = doMeta(item2.cl, cells[0][i2], cells[1][i2])
                item2.cl = clearCurrentEffect(item2.cl)
                if (item2.cl.hp <= 0) {
                    return item2 = null
                }
                if (!cells[2][i2]) {
                    if (cells[1][i2]) {
                        AS1 = checkOfAttack(cells[1][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS1)
                        if (cells[0][i2]) {
                            AS0 = checkOfAttack(cells[0][i2].cl, item2.cl)
                            item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS0)
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(cells[1][i2].cl, item2.cl, AS1) - forDamage(cells[0][i2].cl.attack, item2.cl.armor, AS0) * calculateBonusDamage(cells[0][i2].cl, item2.cl, AS0)
                                }
                            }
                        } else {
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(cells[1][i2].cl, item2.cl, AS1)
                                }
                            }
                        }
                    } else {
                        if (cells[0][i2]) {
                            AS0 = checkOfAttack(cells[0][i2].cl, item2.cl)
                            item2.cl = calculateDeBuff(cells[1][i2].cl, item2.cl, AS0)
                            return {
                                ...item2,
                                cl: {
                                    ...item2.cl,
                                    hp: item2.cl.hp - forDamage(cells[0][i2].cl.attack, item2.cl.armor, AS0) * calculateBonusDamage(cells[0][i2].cl, item2.cl, AS0)
                                }
                            }
                        }
                    }
                }
            }
            return item2
        })
        setSelectedCells([
            newRow0,
            newRow1,
            newRow2,
            newRow3,
        ])
    }

    console.log('player1.hp', player1.hp)

    return (
        <div className="App">
            <Input player={player1} onPlayerChanged={setPlayer1} />
            <Input player={player2} onPlayerChanged={setPlayer2} />
            <button
                onClick={() => {
                    setPlayer1({
                        ...player1,
                        intelligence: int[player1.classOfHero],
                        hp: hp[player1.classOfHero],
                        mp: mp[player1.classOfHero],
                        maxMP: mp[player1.classOfHero],
                        xp: 0,
                    })
                    setPlayer2({
                        ...player2,
                        intelligence: int[player1.classOfHero],
                        hp: hp[player1.classOfHero],
                        mp: mp[player1.classOfHero],
                        maxMP: mp[player1.classOfHero],
                        xp: 0,
                    })
                }}>
                Accept
            </button>
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div>Player 1</div>
            <div className="NameOfHero1"> Name: {JSON.stringify(player1.NameOfHero)}</div>
            <div className="classOfHero1">Class: {JSON.stringify(player1.classOfHero)}</div>
            <img src={icon[player1.classOfHero]} className="App-logo" alt="logo" />
            <div className="races1">Races: {JSON.stringify(player1.race1)}, {JSON.stringify(player1.race2)}</div>
            <div className='gold1'>Gold: {JSON.stringify(player1.gold)}</div>
            <div className='LVL1'>LVL: {JSON.stringify(player1.lvl)}</div>
            <div className='int1'>Intelligence: {JSON.stringify(player1.intelligence)} </div>
            <div className='hp1'>HP: {JSON.stringify(player1.hp)}</div>
            <div className='mp1'>MP: {JSON.stringify(player1.mp)}</div>
            <div className='mp1'>maxMP: {JSON.stringify(player1.maxMP)}</div>
            <div className='xp1'>XP: {JSON.stringify(player1.xp)}</div>
            <div className="units11">Race1: {classUnits11}</div>
            <div className="units12">Race2: {classUnits12}</div>
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div>Player 2</div>
            <div className='NameOfHero2'>Name: {JSON.stringify(player2.NameOfHero)}</div>
            <div className="classOfHero2">Class: {JSON.stringify(player2.classOfHero)}</div>
            <img src={icon[player2.classOfHero]} className="App-logo" alt="logo" />
            <div className="race21">Races: {JSON.stringify(player2.race1)}, {JSON.stringify(player2.race2)}</div>
            <div className='gold2'>Gold: {JSON.stringify(player2.gold)}</div>
            <div className='LVL2'>LVL: {JSON.stringify(player2.lvl)}</div>
            <div className='int2'>Intelligence: {JSON.stringify(player2.intelligence)} </div>
            <div className='hp2'>HP: {JSON.stringify(player2.hp)}</div>
            <div className='mp2'>MP: {JSON.stringify(player2.mp)}</div>
            <div className='mp1'>maxMP: {JSON.stringify(player2.maxMP)}</div>
            <div className='xp2'>XP: {JSON.stringify(player2.xp)}</div>
            <div className="units21">Race1: {classUnits21}</div>
            <div className="units22">Race2: {classUnits22}</div>
            <div className="turn">Turn: {JSON.stringify(turn)}</div>
            <button className="endOfTurn" onClick={() => {
                setSelectedPlu(null)
                calculateMassEffect()
                calculateHP()
                calculateHPofHeroes()
                forIncome()
                setTurn(turn + 1);
                (turn % 2 === 0) ? alert("turn of the second player") : alert("turn of the first player")
            }}>EndOfTurn</button>
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div className="cells">
                {cells[0].map((item, i) => {
                    return (
                        <Cell
                            key={i}
                            plu={item}
                            onCellClick={() => {
                                if (!selectedPlu || turn % 2 !== 0 || selectedPlu.cl.rangeOfAttack === "melee") {
                                    return
                                }

                                if ((player1.gold - selectedPlu.cl.cost) < 0) {
                                    alert("need more gold")
                                    return
                                }
                                const newRow = cells[0].map((item2, i2) => {
                                    if (i2 === i) {
                                        setPlayer1({
                                            ...player1,
                                            gold: player1.gold - selectedPlu.cl.cost
                                        })
                                        return selectedPlu
                                    }
                                    return item2
                                })

                                setSelectedCells([
                                    newRow,
                                    cells[1],
                                    cells[2],
                                    cells[3],
                                ])
                            }}
                        />
                    )
                }
                )}
            </div>
            <div className="cells">
                {cells[1].map((item, i) => {
                    return (
                        <Cell
                            key={i}
                            plu={item}
                            onCellClick={() => {
                                if (!selectedPlu || turn % 2 !== 0) {
                                    return
                                }
                                if ((player1.gold - selectedPlu.cl.cost) < 0) {
                                    alert("need more gold")
                                    return
                                }
                                const newRow = cells[1].map((item2, i2) => {
                                    if (i2 === i) {
                                        setPlayer1({
                                            ...player1,
                                            gold: player1.gold - selectedPlu.cl.cost
                                        })
                                        return selectedPlu
                                    }
                                    return item2
                                })

                                setSelectedCells([
                                    cells[0],
                                    newRow,
                                    cells[2],
                                    cells[3],
                                ])
                            }}
                        />
                    )
                }
                )}
            </div>
            <div className="cells">
                {cells[2].map((item, i) => {
                    return (
                        <Cell
                            key={i}
                            plu={item}
                            onCellClick={() => {
                                if ((!selectedPlu) || (turn % 2 === 0)) {
                                    return
                                }
                                if ((player2.gold - selectedPlu.cl.cost) < 0) {
                                    alert("need more gold")
                                    return
                                }
                                const newRow = cells[2].map((item2, i2) => {
                                    if (i2 === i) {
                                        setPlayer2({
                                            ...player2,
                                            gold: player2.gold - selectedPlu.cl.cost
                                        })
                                        return selectedPlu
                                    }
                                    return item2
                                })

                                setSelectedCells([
                                    cells[0],
                                    cells[1],
                                    newRow,
                                    cells[3],
                                ])
                            }}
                        />
                    )
                }
                )}
            </div>
            <div className="cells">
                {cells[3].map((item, i) => {
                    return (
                        <Cell
                            key={i}
                            plu={item}
                            onCellClick={() => {
                                if ((!selectedPlu) || (turn % 2 === 0) || selectedPlu.cl.rangeOfAttack === "melee") {
                                    return
                                }
                                if ((player2.gold - selectedPlu.cl.cost) < 0) {
                                    alert("need more gold")
                                    return
                                }
                                const newRow = cells[3].map((item2, i2) => {
                                    if (i2 === i) {
                                        setPlayer2({
                                            ...player2,
                                            gold: player2.gold - selectedPlu.cl.cost
                                        })
                                        return selectedPlu
                                    }
                                    return item2
                                })

                                setSelectedCells([
                                    cells[0],
                                    cells[1],
                                    cells[2],
                                    newRow,
                                ])
                            }}
                        />
                    )
                }
                )}
            </div>
        </div>
    )
}

export default App;