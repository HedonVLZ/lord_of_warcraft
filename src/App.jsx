import React from 'react';
import "./App.css"
import Input from './input'
import BTNNecromancer from './pictures/BTNNecromancer-Reforged.webp';
import BTNPriestImg from './pictures/BTNPriest-Reforged.webp';
import BTNHeroBloodElfPrince from './pictures/BTNHeroBloodElfPrince-Reforged.webp';
import BTNHeroArchMage from './pictures/BTNHeroArchMage-Reforged.webp';
import BTNPeasant from './pictures/BTNPeasant.webp';
import BTNMilitia from './pictures/BTNMilitia.webp';
import BTNGatherGold from './pictures/BTNGatherGold.webp';
import BTNBacktoWork from './pictures/BTNBacktoWork.webp';
import BTNDevotion from './pictures/BTNDevotion.webp';
import BTNStun from './pictures/BTNStun.webp';
import BTNAlbatross from './pictures/BTNAlbatross.webp';
import BTNCallToArms from './pictures/BTNCallToArms.webp';
import PASBTNPlagueCloud from './pictures/PASBTNPlagueCloud.webp';
import BTNWeb from './pictures/BTNWeb.webp';
import BTNCryptFiendUnBurrow from './pictures/BTNCryptFiendUnBurrow.webp';
import BTNCryptFiendBurrow from './pictures/BTNCryptFiendBurrow.webp';
import BTNFrost from './pictures/BTNFrost.webp';
import BTNSheep from './pictures/BTNSheep.webp';
import BTNSlow from './pictures/BTNSlow.webp';
import BTNEnsnare from './pictures/BTNEnsnare.webp';
import BTNPoisonArrow from './pictures/BTNPoisonArrow.webp';
import PASBTNDrum from './pictures/PASBTNDrum.webp';
import NaturalOrder from './pictures/Natural_Order.jpg';
import Stygian_Desolator from './pictures/Stygian_Desolator.png';
import BTNUnholyAura from './pictures/BTNUnholyAura.webp';
import { Magic } from './magic'
import { Unit } from './unit'
import { Cell } from './cell'
import { defaultFenix, defaultBoneFletcher, defaultSkeletonWarrior, defaultSkeletonKing, defaultPeasant } from './unitCards'
import { defaultMilitia, defaultFootman, defaultGryphonRider, defaultTower, defaultKnight, defaultPaladin, } from './unitCards'
import { defaultGhoul, defaultZombi, defaultTraxa, defaultButcher, defaultWyrm, defaultDreadLord, defaultFiend, } from './unitCards'
import { defaultNerub, defaultDK, defaultElfWorker, defaultHighElvenArcher, defaultPriest, defaultSorceress, } from './unitCards'
import { defaultSpellBreaker, defaultWindRunner, defaultPeon, defaultRaider, defaultWyvernRider, } from './unitCards'
import { defaultGrunt, defaultKodo, defaultTaurenChieftain, defaultBladeMaster, defaultDragonHawk, defaultAcolyte } from './unitCards'
import { raiseSkeleton, raiseBoneFletcher, raiseSkeletonKing, deathCoil, sacrifice, reincarnation, suddenDeath } from './magicCards'
import { orbOfCorroption, antiMagicShell, unholyFrenzy, heal, holyAttackMagic, innerFire, resurrection, } from './magicCards'
import { purifyingFlames, fireBolt, fireArrows, wallOfFire, fireBall, fenix } from './magicCards'
import Moment_of_Courage from './pictures/Moment_of_Courage.jpg';
import { playErrorSound } from './sounds'
import { playReadySound } from './sounds'
import { playConvertSound } from './sounds'
import {reduceAbilityTime} from './mainMechFunc'
import {findTargetCoordinates} from './mainMechFunc'

let unitsOfRaces = {
    human: [defaultPeasant, defaultMilitia, defaultTower, defaultFootman, defaultGryphonRider, defaultKnight, defaultPaladin,],
    scourge: [defaultAcolyte, defaultGhoul, defaultFiend, defaultButcher, defaultWyrm, defaultNerub, defaultDK],
    highElves: [defaultElfWorker, defaultPriest, defaultSorceress, defaultHighElvenArcher, defaultDragonHawk, defaultSpellBreaker, defaultWindRunner],
    orcs: [defaultPeon, defaultWyvernRider, defaultRaider, defaultGrunt, defaultKodo, defaultTaurenChieftain, defaultBladeMaster],
}

let magicsOfMage = {
    necromancer: [raiseSkeleton, deathCoil, sacrifice, reincarnation, suddenDeath, unholyFrenzy],
    cleric: [heal, holyAttackMagic, innerFire, resurrection, purifyingFlames],
    mageOfFire: [fireBolt, fireArrows, wallOfFire, fireBall, fenix]
}

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
    necromancer: 100,
    cleric: 100,
    mageOfFire: 50,
    mageOfWater: 130,
}

let icon = {
    necromancer: BTNNecromancer,
    cleric: BTNPriestImg,
    mageOfFire: BTNHeroBloodElfPrince,
    mageOfWater: BTNHeroArchMage,
}

let armor = {
    necromancer: 0,
    cleric: 0,
    mageOfFire: 0,
    mageOfWater: 0,
}

let defaultPlayer1 = Object.freeze({
    nameOfHero: "noname",
    classOfHero: "necromancer",
    race1: "human",
    race2: "human",
    magic: "death",
    gold: 1000,
    lvl: 0,
    intelligence: 3,
    hp: 50,
    mp: 100,
    maxMP: 100,
    xp: 0,
    abilityPoint: 0,
    magicPoint: 0,
    armor: 0,
})

let defaultPlayer2 = {
    nameOfHero: "noname",
    classOfHero: "necromancer",
    race1: "human",
    race2: "human",
    magic: "death",
    gold: 1000,
    lvl: 0,
    intelligence: 3,
    hp: 50,
    mp: 100,
    maxMP: 100,
    xp: 0,
    abilityPoint: 0,
    magicPoint: 0,
    armor: 0,
}

class PlayerUnit {
    cl = null
    player = 0
    raceNumber = 0
    constructor(cl, player, raceNumber) {
        this.cl = cl
        this.player = player
        this.raceNumber = raceNumber
    }

    get id() {
        return `${this.cl.name}__${this.player}__${this.raceNumber}`
    }
}
class PlayerMagic {
    cl = null
    player = 0
    magicNumber = 0
    constructor(cl, player) {
        this.cl = cl
        this.player = player
    }

    get id() {
        return `${this.cl.name}__${this.player}`
    }
}

function calculateDamage(attack, armor, bonusDamage) {
    if (attack * bonusDamage > armor) {return attack * bonusDamage - armor} else {return 1}
}

function makeAttack(target, enemy) {
    if (enemy.cl.attackAbility === false) {return target}
    let damage = 0
    let bonusDamage = calculateBonusDamage(enemy, target, enemy.cl.attack)
    if (enemy.cl.attack > target.cl.armor) {damage = Math.ceil((enemy.cl.attack - target.cl.armor) * bonusDamage)} else {damage = bonusDamage}
    console.log(damage)
    return {
        ...target,
        cl: {
            ...target.cl,
            hp: target.cl.hp - damage
        }
    }
}

function refreshCurrentEffect(unit) {
    if (unit) {
        unit.cl.attackAbility = true
        unit.cl.attack = unit.cl.attack
        unit.cl.attackSpeed = unit.cl.defaultAttackSpeed
        unit.cl.armor = unit.cl.defaultArmor
        if (unit.cl.ability.indexOf("bashedForTheNextTurn") > -1) {unit.cl.attackAbility = false}
        if (unit.cl.ability.indexOf("MomentOfCourageActivatedForNextTurn") > -1) {unit.cl.attackSpeed = unit.cl.attackSpeed + 1}
        if (unit.cl.ability.indexOf("underPoison") > -1) {unit.cl.hp = unit.cl.hp - 1}
        if (unit.cl.ability.indexOf("underPlague") > -1 && unit.cl.kind.indexOf("undead") === -1) {unit.cl.hp = unit.cl.hp - 1}
        if (unit.cl.ability.indexOf("underDevotionAura") > -1) {unit.cl.armor = unit.cl.armor + 1}
        if (unit.cl.ability.indexOf("underDrum") > -1) {unit.cl.attack = unit.cl.attack + 1}
        if (unit.cl.ability.indexOf("underUnholyAura") > -1) {unit.cl.hp = unit.cl.hp - 1}
        if (unit.cl.ability.indexOf("underNaturalOrder") > -1) {unit.cl.armor = 0}
    }
    return unit
}

function calculateLineDamage(unit, target) {
    let damage = 0
    let bonusDamage = calculateBonusDamage(unit, target)
    if (unit && target) {
        if (unit.cl.ability.indexOf("dragonAbilities") > -1) {
            damage = damage + calculateDamage(unit.cl.attack, target.cl.armor, bonusDamage)
        }
        if (unit.cl.ability.indexOf("PowerShot") > -1) {
            damage = damage + calculateDamage(unit.cl.attack, target.cl.armor, bonusDamage)
        }
    }
    return damage
}

function removeDeadUnit(unit) {
    if (unit) {
        if (unit.cl.hp <= 0) {
            return null
        } else {
            return unit
        }
    } else {
        return null
    }
}

// function calculateMainTakenDamageOfUnit(target, defender, attacker1, attacker2, ASofAttacker1, ASofAttacker2) {
//     let bonusDamage1 = calculateBonusDamage(attack1, target)
//     let bonusDamage2 = calculateBonusDamage(attack2, target)
//     let attack1 = 0
//     let attack2 = 0
//     if (!target) {
//         return 0
//     }
//     if (attacker1) {
//         attack1 = attacker1.cl.attack
//     }
//     if (attacker2) {
//         attack2 = attacker2.cl.attack
//     }
//     if (defender && defender.cl.invisible === true) {
//         defender = null
//     }
//     if (defender && defender.cl.flying === true && target.cl.flying === false) {
//         defender = null
//     }
//     if (!defender && target.cl.invisible === false) {
//         return Math.ceil(calculateDamage(attack1, target.cl.armor, bonusDamage1)  + calculateDamage(attack2, target.cl.armor, bonusDamage2))
//     } else {
//         return 0
//     }
// }

function calculateAOEEffect(newCells) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("plagueCloud") > -1) {
                if (newCells[i - 1][j] && newCells[i - 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i - 1][j].cl.abilityImg = newCells[i - 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                    newCells[i - 1][j].cl.ability = newCells[i - 1][j].cl.ability.concat("underPlague")
                    newCells[i - 1][j].cl.abilityTime = newCells[i - 1][j].cl.abilityTime.concat("inf")
                }
                if (newCells[i + 1][j] && newCells[i + 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i + 1][j].cl.abilityImg = newCells[i + 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                    newCells[i + 1][j].cl.ability = newCells[i + 1][j].cl.ability.concat("underPlague")
                    newCells[i + 1][j].cl.abilityTime = newCells[i + 1][j].cl.abilityTime.concat("inf")
                }
                if (newCells[i][j + 1] && newCells[i][j + 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j + 1].cl.abilityImg = newCells[i][j + 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                    newCells[i][j + 1].cl.ability = newCells[i][j + 1].cl.ability.concat("underPlague")
                    newCells[i][j + 1].cl.abilityTime = newCells[i][j + 1].cl.abilityTime.concat("inf")
                }
                if (newCells[i][j - 1] && newCells[i][j - 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j - 1].cl.abilityImg = newCells[i][j - 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                    newCells[i][j - 1].cl.ability = newCells[i][j - 1].cl.ability.concat("underPlague")
                    newCells[i][j - 1].cl.abilityTime = newCells[i][j - 1].cl.abilityTime.concat("inf")
                }
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("ShackleShot") > -1 && newCells[i][j].cl.ability.indexOf("bashed") === -1) {
                if (i < 2) {
                    if (newCells[2][j] && newCells[3][j] && Math.round(Math.random() * 0.625 + 0.375) === 0) {
                        alert("ShackleShot!")
                        newCells[2][j].cl.ability = newCells[2][j].cl.ability.concat("bashedForTheNextTurn")
                        newCells[2][j].cl.abilityImg = newCells[2][j].cl.abilityImg.concat(BTNStun)
                        newCells[2][j].cl.abilityTime = newCells[2][j].cl.abilityTime.concat(1)
                        newCells[3][j].cl.ability = newCells[3][j].cl.ability.concat("bashedForTheNextTurn")
                        newCells[3][j].cl.abilityImg = newCells[3][j].cl.abilityImg.concat(BTNStun)
                        newCells[3][j].cl.abilityTime = newCells[3][j].cl.abilityTime.concat(1)
                    }
                } else {
                    if (newCells[0][j] && newCells[1][j] && Math.round(Math.random() * 0.625 + 0.375) === 0) {
                        alert("ShackleShot!")
                        newCells[0][j].cl.ability = newCells[0][j].cl.ability.concat("bashedForTheNextTurn")
                        newCells[0][j].cl.abilityImg = newCells[0][j].cl.abilityImg.concat(BTNStun)
                        newCells[0][j].cl.abilityTime = newCells[0][j].cl.abilityTime.concat(1)
                        newCells[0][j].cl.attackAbility = false
                        newCells[1][j].cl.ability = newCells[1][j].cl.ability.concat("bashedForTheNextTurn")
                        newCells[1][j].cl.abilityImg = newCells[1][j].cl.abilityImg.concat(BTNStun)
                        newCells[1][j].cl.abilityTime = newCells[1][j].cl.abilityTime.concat(1)
                        newCells[1][j].cl.attackAbility = false
                    }
                }
            }
        }
    }
    return newCells
}

function calculateOfTheUnitsState(currentCells) {
    let ASofThe1thEnemy = 0
    let ASofThe2thEnemy = 0
    let supporter = null
    let defender = null
    let the1thEnemy = null
    let the2thEnemy = null
    let massDamage = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    for (let i = 0; i < 6; i++) {
        currentCells[0][i] = refreshCurrentEffect(calculateRegeneration(removeDeadUnit(currentCells[0][i])))
        currentCells[1][i] = refreshCurrentEffect(calculateRegeneration(removeDeadUnit(currentCells[1][i])))
        currentCells[2][i] = refreshCurrentEffect(calculateRegeneration(removeDeadUnit(currentCells[2][i])))
        currentCells[3][i] = refreshCurrentEffect(calculateRegeneration(removeDeadUnit(currentCells[3][i])))
    }
    currentCells[0] = currentCells[0].map((unit, i) => {
        supporter = null
        defender = currentCells[1][i]
        the1thEnemy = currentCells[2][i]
        the2thEnemy = currentCells[3][i]
        unit = convertTheUnit(unit, the1thEnemy, the2thEnemy)
        ASofThe1thEnemy = calculateNumberOfAttack(the1thEnemy, unit, defender)
        ASofThe2thEnemy = calculateNumberOfAttack(the2thEnemy, unit, defender)
        unit = calculateDeBuff(the1thEnemy, unit, ASofThe1thEnemy)
        unit = calculateDeBuff(the2thEnemy, unit, ASofThe2thEnemy)
        if (unit) {
            if (the1thEnemy) {
                let currentAttack = 0
                while (ASofThe1thEnemy > currentAttack) {
                    unit = makeAttack(unit, the1thEnemy)
                    currentCells[2][i] = returnDamage(unit, currentCells[2][i])
                    currentAttack++
                }
            }
            if (the2thEnemy) {
                let currentAttack = 0
                while (ASofThe2thEnemy > currentAttack) {
                    unit = makeAttack(unit, the2thEnemy)
                    currentAttack++
                }
            }
        }
        return unit
    })
    currentCells[1] = currentCells[1].map((unit, i) => {
        supporter = currentCells[0][i]
        defender = null
        the1thEnemy = currentCells[2][i]
        the2thEnemy = currentCells[3][i]
        unit = convertTheUnit(unit, the1thEnemy, the2thEnemy)
        unit = calculateBuff(supporter, unit)
        ASofThe1thEnemy = calculateNumberOfAttack(the1thEnemy, unit, defender)
        ASofThe2thEnemy = calculateNumberOfAttack(the2thEnemy, unit, defender)
        unit = calculateDeBuff(the1thEnemy, unit, ASofThe1thEnemy)
        unit = calculateDeBuff(the2thEnemy, unit, ASofThe2thEnemy)
        massDamage[0][i] = massDamage[0][i] + calculateLineDamage(the1thEnemy, unit, ASofThe1thEnemy) + calculateLineDamage(the2thEnemy, unit, ASofThe2thEnemy)
        if (unit) {
            if (the1thEnemy) {
                let currentAttack = 0
                while (ASofThe1thEnemy > currentAttack) {
                    unit = makeAttack(unit, the1thEnemy)
                    currentCells[2][i] = returnDamage(unit, currentCells[2][i])
                    currentAttack++
                }
            }
            if (the2thEnemy) {
                let currentAttack = 0
                while (ASofThe2thEnemy > currentAttack) {
                    unit = makeAttack(unit, the2thEnemy)
                    currentAttack++
                }
            }
        }
        return unit
    })
    currentCells[2] = currentCells[2].map((unit, i) => {
        supporter = currentCells[3][i]
        defender = null
        the1thEnemy = currentCells[1][i]
        the2thEnemy = currentCells[0][i]
        unit = convertTheUnit(unit, the1thEnemy, the2thEnemy)
        unit = calculateBuff(supporter, unit)
        ASofThe1thEnemy = calculateNumberOfAttack(the1thEnemy, unit, defender)
        ASofThe2thEnemy = calculateNumberOfAttack(the2thEnemy, unit, defender)
        unit = calculateDeBuff(the1thEnemy, unit, ASofThe1thEnemy)
        unit = calculateDeBuff(the2thEnemy, unit, ASofThe2thEnemy)
        massDamage[3][i] = massDamage[3][i] + calculateLineDamage(the1thEnemy, unit, ASofThe1thEnemy) + calculateLineDamage(the2thEnemy, unit, ASofThe2thEnemy)
        if (unit) {
            if (the1thEnemy) {
                let currentAttack = 0
                while (ASofThe1thEnemy > currentAttack) {
                    unit = makeAttack(unit, the1thEnemy)
                    currentCells[1][i] = returnDamage(unit, currentCells[1][i])
                    currentAttack++
                }
            }
            if (the2thEnemy) {
                let currentAttack = 0
                while (ASofThe2thEnemy > currentAttack) {
                    unit = makeAttack(unit, the2thEnemy)
                    currentAttack++
                }
            }
        }
        return unit
    })
    currentCells[3] = currentCells[3].map((unit, i) => {
        supporter = null
        defender = currentCells[2][i]
        the1thEnemy = currentCells[1][i]
        the2thEnemy = currentCells[0][i]
        unit = convertTheUnit(unit, the1thEnemy, the2thEnemy)
        ASofThe1thEnemy = calculateNumberOfAttack(the1thEnemy, unit, defender)
        ASofThe2thEnemy = calculateNumberOfAttack(the2thEnemy, unit, defender)
        unit = calculateDeBuff(the1thEnemy, unit, ASofThe1thEnemy)
        unit = calculateDeBuff(the2thEnemy, unit, ASofThe2thEnemy)
        if (unit) {
            if (the1thEnemy) {
                let currentAttack = 0
                while (ASofThe1thEnemy > currentAttack) {
                    unit = makeAttack(unit, the1thEnemy)
                    currentCells[1][i] = returnDamage(unit, currentCells[1][i])
                    currentAttack++
                }
            }
            if (the2thEnemy) {
                let currentAttack = 0
                while (ASofThe2thEnemy > currentAttack) {
                    unit = makeAttack(unit, the2thEnemy)
                    currentAttack++
                }
            }
        }
        return unit
    })
    let newCells = []
    newCells[0] = currentCells[0].map((unit, i) => {
        if (unit) {
            return {
                ...unit,
                cl: {
                    ...unit.cl,
                    hp: unit.cl.hp - massDamage[0][i]
                }
            }
        }
    })
    newCells[1] = currentCells[1].map((unit, i) => {
        if (unit) {
            return {
                ...unit,
                cl: {
                    ...unit.cl,
                    hp: unit.cl.hp - massDamage[1][i]
                }
            }
        }
    })
    newCells[2] = currentCells[2].map((unit, i) => {
        if (unit) {
            return {
                ...unit,
                cl: {
                    ...unit.cl,
                    hp: unit.cl.hp - massDamage[2][i]
                }
            }
        }
    })
    newCells[3] = currentCells[3].map((unit, i) => {
        if (unit) {
            return {
                ...unit,
                cl: {
                    ...unit.cl,
                    hp: unit.cl.hp - massDamage[3][i]
                }
            }
        }
    })
    newCells[1] = newCells[1].map((unit, i) => calculateCannibalize(unit, newCells[2][i], newCells[3][i]))
    newCells[2] = newCells[2].map((unit, i) => calculateCannibalize(unit, newCells[1][i], newCells[0][i]))
    newCells = calculateAOEEffect(newCells)
    return newCells
}

function refreshAuraEffects(item2, effects) {
    let newItem = item2
    if (newItem && newItem.cl.kind.indexOf("building") === -1) {
        if (effects.indexOf("devotionAura") > -1 && newItem.cl.abilityImg.indexOf(BTNDevotion) === -1 && newItem.cl.ability.indexOf("devotionAura") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    abilityImg: newItem.cl.abilityImg.concat(BTNDevotion),
                    ability: newItem.cl.ability.concat("underDevotionAura"),
                    abilityTime: newItem.cl.abilityTime.concat("inf"),
                }
            }
        }
        if (newItem.cl.abilityImg.indexOf(BTNDevotion) > -1 && effects.indexOf("devotionAura") === -1) {
            let indexOfEffect = newItem.cl.abilityImg.indexOf(BTNDevotion)
            newItem.cl.abilityImg.splice(indexOfEffect, 1)
            newItem.cl.ability.splice(indexOfEffect, 1)
            newItem.cl.abilityTime.splice(indexOfEffect, 1)
        }
        if (effects.indexOf("NaturalOrder") > -1 && newItem.cl.abilityImg.indexOf(NaturalOrder) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    abilityImg: newItem.cl.abilityImg.concat(NaturalOrder),
                    ability: newItem.cl.ability.concat("underNaturalOrder"),
                    abilityTime: newItem.cl.abilityTime.concat("inf"),
                }
            }
        }
        if (newItem.cl.abilityImg.indexOf(NaturalOrder) > -1 && effects.indexOf("NaturalOrder") === -1 && newItem.cl.name !== "TaurenChieftain") {
            let indexOfEffect = newItem.cl.abilityImg.indexOf(NaturalOrder)
            newItem.cl.abilityImg.splice(indexOfEffect, 1)
            newItem.cl.ability.splice(indexOfEffect, 1)
            newItem.cl.abilityTime.splice(indexOfEffect, 1)
        }
        if (effects.indexOf("Drum") > -1 && newItem.cl.abilityImg.indexOf(PASBTNDrum) === -1 && newItem.cl.ability.indexOf("Drum") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    abilityImg: newItem.cl.abilityImg.concat(PASBTNDrum),
                    ability: newItem.cl.ability.concat("underDrum"),
                    abilityTime: newItem.cl.abilityTime.concat("inf"),
                }
            }
        }
        if (newItem.cl.abilityImg.indexOf(PASBTNDrum) > -1 && effects.indexOf("Drum") === -1) {
            let indexOfEffect = newItem.cl.abilityImg.indexOf(PASBTNDrum)
            newItem.cl.abilityImg.splice(indexOfEffect, 1)
            newItem.cl.ability.splice(indexOfEffect, 1)
            newItem.cl.abilityTime.splice(indexOfEffect, 1)
        }
        if (newItem.cl.kind.indexOf("undead") === -1  && effects.indexOf("UnholyAura") > -1 && newItem.cl.abilityImg.indexOf(BTNUnholyAura) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    abilityImg: newItem.cl.abilityImg.concat(BTNUnholyAura),
                    ability: newItem.cl.ability.concat("underUnholyAura"),
                    abilityTime: newItem.cl.abilityTime.concat("inf"),
                }
            }
        }
        if (newItem.cl.abilityImg.indexOf(BTNUnholyAura) > -1 && effects.indexOf("UnholyAura") === -1 && newItem.cl.ability.indexOf("UnholyAura") === -1) {
            let indexOfEffect = newItem.cl.abilityImg.indexOf(BTNUnholyAura)
            newItem.cl.abilityImg.splice(indexOfEffect, 1)
            newItem.cl.ability.splice(indexOfEffect, 1)
            newItem.cl.abilityTime.splice(indexOfEffect, 1)
        }
    }
    return newItem
}

function calculateAuraEffect(currentCells) {
    let newCells = currentCells
    let effects1 = []
    let effects2 = []
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 6; j++) {
            if (newCells[i][j]) {
                if (newCells[i][j].cl.ability.indexOf("devotionAura") > -1) {
                    effects1 = effects1.concat("devotionAura")
                }
                if (newCells[i][j].cl.ability.indexOf("Drum") > -1) {
                    effects1 = effects1.concat("Drum")
                }
                if (newCells[i][j].cl.ability.indexOf("UnholyAura") > -1) {
                    effects2 = effects2.concat("UnholyAura")
                }
                if (newCells[i][j].cl.ability.indexOf("NaturalOrder") > -1) {
                    effects2 = effects2.concat("NaturalOrder")
                }
                if (newCells[i][j].cl.ability.indexOf("dragonAbilities") > -1 || newCells[i][j].cl.ability.indexOf("trueSeen") > -1) {
                    effects1 = effects1.concat("trueSeen")
                }
            }
        }
    }
    for (let i = 2; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("devotionAura") > -1) {
                effects2 = effects2.concat("devotionAura")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("Drum") > -1) {
                effects2 = effects2.concat("Drum")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("UnholyAura") > -1) {
                effects1 = effects1.concat("UnholyAura")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("NaturalOrder") > -1) {
                effects1 = effects1.concat("NaturalOrder")
            }
            if (newCells[i][j] && (newCells[i][j].cl.ability.indexOf("dragonAbilities") > -1 || newCells[i][j].cl.ability.indexOf("trueSeen") > -1)) {
                effects2 = effects2.concat("trueSeen")
            }

        }
    }
    newCells[0] = newCells[0].map((item2) => refreshAuraEffects(item2, effects1))
    newCells[1] = newCells[1].map((item2) => refreshAuraEffects(item2, effects1))
    newCells[2] = newCells[2].map((item2) => refreshAuraEffects(item2, effects2))
    newCells[3] = newCells[3].map((item2) => refreshAuraEffects(item2, effects2))
    return newCells
}

function calculateBuff(unit, target) {
    let currentTarget = target
    if (unit && target) {
        if (target.cl.kind.indexOf("building") === -1 && target.cl.ability.indexOf("MagicImmunity") === -1 && target.cl.ability.indexOf("dragonAbilities") === -1) {
            if (unit.cl.ability.indexOf("Heal") > -1 && currentTarget.cl.hp < currentTarget.cl.hpMax) {
                currentTarget.cl.hp = target.cl.hp + 1
            }
        }
    }
    return currentTarget
}

function calculateNumberOfAttack(unit, enemy, defender) {
    if (!unit) {return 0}
    if (unit.cl.attackAbility === false) {return 0}
    if (defender && defender.cl.ability.indexOf("invisible") > -1) {
        defender = null
    }
    if (unit && enemy && !defender) {
        let result = unit.cl.attackSpeed
        if (result < 1) {
            return 0
        }
        if (unit.cl.ability.indexOf("bashed") > -1) {
            return 0
        }
        if ((enemy.cl.flying === true || enemy.cl.ability.indexOf("dragonAbilities") > -1) && unit.cl.rangeOfAttack === "melee") {
            return 0
        }
        if (enemy.cl.ability.indexOf("reflect") > -1) {
            if (unit.cl.rangeOfAttack === "range" && unit.cl.attackSpeed > 0) {
                for (let i = 0; i < unit.cl.attackSpeed; i++) {
                    if (Math.round(Math.random()) === 1) {
                        alert("defender have reflected damage!")
                        result = result - 1
                    }
                }
            }
        }
        if (unit.cl.ability.indexOf("trueSeen") === -1 && unit.cl.ability.indexOf("dragonAbilities") === -1 && enemy.cl.ability.indexOf("invisible") > -1) {
            return 0
        }
        return result
    } else {
        return 0
    }
}

function convertTheUnit(unit, enemy1, enemy2) {
    let currentUnit = unit
    if (currentUnit && currentUnit.cl.ability.indexOf("invisible") === -1) {
        if (enemy1 && enemy1.cl.ability.indexOf("Devour") > -1 && currentUnit.cl.hpMax < 11) {
            currentUnit.cl.hp = -100
        }
        if (currentUnit.cl.ability.indexOf("militia") > -1) {
            if (enemy1 || enemy2) {
                currentUnit.cl.img = BTNMilitia
                currentUnit.cl.name = "Militia"
                currentUnit.cl.attack = currentUnit.cl.attack + 1
                currentUnit.cl.armor = currentUnit.cl.armor + 1
                currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNCallToArms).filter(a => a !== BTNGatherGold).concat(BTNBacktoWork)
                currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "militia").filter(a => a !== "worker").concat("backToWork")
            }
        }
        if (currentUnit.cl.ability.indexOf("backToWork") > -1) {
            if (!enemy1 && !enemy2) {
                currentUnit.cl.img = BTNPeasant
                currentUnit.cl.name = "Peasant"
                currentUnit.cl.attack = currentUnit.cl.attack - 1
                currentUnit.cl.armor = currentUnit.cl.armor - 1
                currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNBacktoWork).concat(BTNGatherGold, BTNCallToArms)
                currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "backToWork").concat("worker", "militia")
            }
        }
        if (currentUnit.cl.ability.indexOf("marksman") > -1 && !enemy1) {
            currentUnit.cl.attack = currentUnit.cl.attack + 1
            currentUnit.cl.attackSpeed = currentUnit.cl.attackSpeed + 1
            currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "marksman").concat("marksmanActive")
        }
        if (currentUnit.cl.ability.indexOf("flying") > -1 && ((enemy1 && enemy1.cl.ability.indexOf("web") > -1) || (enemy2 && enemy2.cl.ability.indexOf("web") > -1))) {
            currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "flying").concat("underWeb")
            currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNAlbatross).concat(BTNWeb)
        }
        if (currentUnit.cl.ability.indexOf("flying") > -1 && ((enemy1 && enemy1.cl.ability.indexOf("Ensnare") > -1) || (enemy2 && enemy2.cl.ability.indexOf("Ensnare") > -1))) {
            currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "flying").concat("underWeb")
            currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNAlbatross).concat(BTNEnsnare)
        }
        if (currentUnit.cl.ability.indexOf("UnBurrow") > -1 && currentUnit.cl.hp > 0 && currentUnit.cl.hp < 5) {
            currentUnit.cl.attack = 0
            currentUnit.cl.attackSpeed = 0
            currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "UnBurrow").concat(["burrow", "invisible"])
            currentUnit.cl.abilityImg = currentUnit.cl.abilityImg.filter(a => a !== BTNCryptFiendUnBurrow).concat(BTNCryptFiendBurrow)
        }
        if (currentUnit.cl.ability.indexOf("BorrowedTime") > -1 && currentUnit.cl.hp < 4) {
            currentUnit.cl.ability = currentUnit.cl.ability.filter(a => a !== "BorrowedTime").concat("BorrowedTimeActive")
        }
    }
    return currentUnit
}

function calculateCannibalize(currentUnit, enemy1, enemy2) {
    if (!currentUnit) {
        return null
    }
    if (currentUnit.cl.ability.indexOf("cannibalize") > -1) {
        if (enemy1 && enemy1.cl.hp <= 0 && enemy1.cl.kind.indexOf("building") === -1) {
            currentUnit.cl.hp = currentUnit.cl.hpMax
        }
        if (!enemy1 && enemy2 && enemy2.cl.hp <= 0 && enemy2.cl.kind.indexOf("building") === -1) {
            currentUnit.cl.hp = currentUnit.cl.hpMax
        }
    }
    return currentUnit
}

function calculateRegeneration(unit) {
    if (unit) {
        let regeneration = 0
        if (unit.cl.ability.indexOf("underPoison") > -1) {
            regeneration = regeneration - 1
        }
        if (unit.cl.ability.indexOf("burrow") > -1 && unit.cl.hp < unit.cl.hpMax) {
            regeneration = regeneration + 1
        }
        if (unit.cl.ability.indexOf("innerFireEffect") > -1 && unit.cl.hp < unit.cl.hpMax) {
            regeneration = regeneration + 1
        }
        if (unit.cl.ability.indexOf("purifyingFlamesEffect") > -1 && unit.cl.hp < unit.cl.hpMax) {
            regeneration = regeneration + 1
        }
        if (unit.cl.kind.indexOf("undead") === -1 && unit.cl.abilityImg.indexOf(PASBTNPlagueCloud) > -1) {
            regeneration = regeneration - 1
        }
        return {
            ...unit,
            cl: {
                ...unit.cl,
                hp: unit.cl.hp + regeneration,
            }
        }
    } else {
        return null
    }
}

function calculateBonusDamage(unit, enemy, numberOfAttack) {
    let bonus = 1
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.cl.ability.indexOf("holyAttack") > -1 && enemy.cl.kind.indexOf("undead") > -1) {
                bonus = bonus * 1.5
            }
            if (enemy.cl.ability.indexOf("BorrowedTimeActive") > -1) {
                bonus = bonus * (-1)
            }
            if (unit.cl.ability.indexOf("CriticalStrike15X4") > -1 && (Math.random() <= 0.15)) {
                alert("x4 criticalStrike!!!")
                bonus = bonus * 4
            }
            if (unit.cl.ability.indexOf("CriticalStrike15X3") > -1 && (Math.random() <= 0.15)) {
                alert("x3 criticalStrike!!!")
                bonus = bonus * 3
            }
        }
    }
    return bonus
}

function returnDamage(unit, enemy) {
    if (unit && enemy) {
        let bonusDamage = calculateBonusDamage(enemy, unit)
        if (unit.cl.ability.indexOf("thornShield") > -1 && enemy.cl.rangeOfAttack === "melee") {
            return {
                ...enemy,
                cl: {
                    ...enemy.cl,
                    hp: enemy.cl.hp - Math.ceil(calculateDamage(enemy.cl.attack, unit.cl.armor, bonusDamage) * 0.5)
                }
            }
        }
    }
    return enemy
}

function calculateDeBuff(unit, enemy, numberOfAttack) {
    let effect = 1
    if (!enemy) {
        return null
    }
    let currentEnemy = enemy
    if (unit) {
        if (numberOfAttack > 0) {
            if (unit.cl.ability.indexOf("Hex") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.name !== "Sheep" && currentEnemy.cl.ability.indexOf("MagicImmunity") === -1 && currentEnemy.cl.ability.indexOf("dragonAbilities") === -1) {
                if (Math.round((enemy.cl.cost / 50) * Math.random() * 0.625 + 0.375) === 0) {
                    alert("Hex!")
                    currentEnemy.cl.img = BTNSheep
                    currentEnemy.cl.name = "Sheep"
                    currentEnemy.cl.attack = 0
                    currentEnemy.cl.rangeOfAttack = "range"
                    currentEnemy.cl.typeOfAttack = "physic"
                    currentEnemy.cl.attackSpeed = 0
                    currentEnemy.cl.hp = 5
                    currentEnemy.cl.armor = 0
                    currentEnemy.cl.abilityImg = []
                    currentEnemy.cl.ability = []
                    currentEnemy.cl.cost = 3
                }
            }
            if (unit.cl.ability.indexOf("bash") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.ability.indexOf("bashedForTheNextTurn") === -1) {
                for (let i = 0; i < numberOfAttack; i++) {
                    effect = Math.round(Math.random() * 0.625 + 0.375)
                    if (effect === 0) {
                        alert(unit.cl.name + " have bashed " + currentEnemy.cl.name + "!")
                        currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(BTNStun)
                        currentEnemy.cl.ability = currentEnemy.cl.ability.concat("bashedForTheNextTurn")
                        currentEnemy.cl.abilityTime = currentEnemy.cl.abilityTime.concat(1)
                    }
                }
            }
            if (unit.cl.ability.indexOf("EnvenomedSpear") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.ability.indexOf("underPoison") === -1) {
                currentEnemy.cl.ability = currentEnemy.cl.ability.concat("underPoison")
                currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(BTNPoisonArrow)
                currentEnemy.cl.abilityTime = currentEnemy.cl.abilityTime.concat(3)
            }
            if (unit.cl.ability.indexOf("BreathOfFrost") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.ability.indexOf("cooling") === -1 && currentEnemy.cl.attackSpeed > 1) {
                currentEnemy.cl.attackSpeed = currentEnemy.cl.attackSpeed - 1
                currentEnemy.cl.ability = currentEnemy.cl.ability.concat("cooling")
                currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(BTNFrost)
            }
            if (currentEnemy.cl.ability.indexOf("MomentOfCourage") > -1 && currentEnemy.cl.ability.indexOf("MomentOfCourageActivatedForNextTurn") === -1) {
                for (let i = 0; i < numberOfAttack; i++) {
                    effect = Math.round(Math.random() * 0.625 + 0.375)
                    if (effect === 0) {
                        alert("MomentOfCourage!")
                        currentEnemy.cl.ability = currentEnemy.cl.ability.concat("MomentOfCourageActivatedForNextTurn")
                        currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(Moment_of_Courage)
                        currentEnemy.cl.abilityTime = currentEnemy.cl.abilityTime.concat(1)
                    }
                }
            }
            if (unit.cl.ability.indexOf("Slow") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.ability.indexOf("MagicImmunity") === -1 && currentEnemy.cl.ability.indexOf("dragonAbilities") === -1 && currentEnemy.cl.ability.indexOf("Slowed") === -1 && currentEnemy.cl.attackSpeed > 1) {
                currentEnemy.cl.attackSpeed = currentEnemy.cl.attackSpeed - 1
                currentEnemy.cl.ability = currentEnemy.cl.ability.concat("Slowed")
                currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(BTNSlow)
            }

            if (unit.cl.ability.indexOf("corruptAttack") > -1 && currentEnemy.cl.kind.indexOf("building") === -1 && currentEnemy.cl.ability.indexOf("underCorruptAttack") === -1) {
                currentEnemy.cl.armor = currentEnemy.cl.armor - 2
                currentEnemy.cl.abilityImg = currentEnemy.cl.abilityImg.concat(Stygian_Desolator)
                currentEnemy.cl.ability = currentEnemy.cl.ability.concat("underCorruptAttack")
            }
        }
    }
    return currentEnemy
}

function App() {
    const [player1, setPlayer1] = React.useState(defaultPlayer1)
    const [player2, setPlayer2] = React.useState(defaultPlayer2)
    const [selectedPlu, setSelectedPlu] = React.useState(null)
    const [turn, setTurn] = React.useState(0)
    const [time, setTime] = React.useState("day")
    const [cells, setSelectedCells] = React.useState([
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
    ])
    console.log(cells)
    function timeOfDay(turn) {
        if ((Math.floor(turn / 2)) % 2 === 0) {
            return setTime("day")
        } else {
            return setTime("night")
        }
    }
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
    const magic1 = magicsOfMage[player1.classOfHero].map(cl => {
        const plm = new PlayerMagic(cl, 1)
        return (
            <Magic
                key={plm.id}
                cl={plm.cl}
                selected={selectedPlu ? selectedPlu.id === plm.id : false}
                onSelect={() => {
                    if (turn % 2 !== 0) {
                        return
                    }
                    setSelectedPlu(plm)
                }}
            />
        )
    })
    const magic2 = magicsOfMage[player2.classOfHero].map(cl => {
        const plm = new PlayerMagic(cl, 2)
        return (
            <Magic
                key={plm.id}
                cl={plm.cl}
                selected={selectedPlu ? selectedPlu.id === plm.id : false}
                onSelect={() => {
                    if (turn % 2 === 0) {
                        return
                    }
                    setSelectedPlu(plm)
                }}
            />
        )
    })
    const calculateStatsOfHeroes = () => {
        let incomeOfTheFirstPlayer = 10
        let incomeOfTheSecondPlayer = 10
        let manaBurnOf1thPlayer = -Math.round(player1.maxMP / 10)
        let manaBurnOf2thPlayer = -Math.round(player2.maxMP / 10)
        let damageTo1thPlayer = 0
        let damageTo2thPlayer = 0
        let experience1 = 0
        let experience2 = 0
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                if (cells[i][j] && cells[i][j].cl.hp < 1) {
                    experience2 = experience2 + cells[i][j].cl.cost
                }
            }
        }
        for (let i = 2; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                if (cells[i][j] && cells[i][j].cl.hp < 1) {
                    experience1 = experience1 + cells[i][j].cl.cost
                }
            }
        }
        for (let i = 0; i < 6; i++) {
            if ((!cells[0][i] && !cells[1][i]) || (cells[0][i] && (cells[0][i].cl.ability.indexOf("invisible") > -1 || cells[0][i].cl.hp <= 0) && !cells[1][i]) || (cells[1][i] && (cells[1][i].cl.ability.indexOf("invisible") > -1 || cells[1][i].cl.hp <= 0) && !cells[0][i]) || (cells[0][i] && (cells[0][i].cl.ability.indexOf("invisible") > -1 || cells[0][i].cl.hp <= 0) && cells[0][i] && (cells[1][i].cl.ability.indexOf("invisible") > -1 || cells[1][i].cl.hp <= 0))) {
                if (cells[2][i]) {
                    damageTo1thPlayer = damageTo1thPlayer + calculateDamage(cells[2][i].cl.attack, 0, 1) * cells[2][i].cl.attackSpeed
                    if (cells[2][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurnOf1thPlayer = manaBurnOf1thPlayer + 10
                    }
                    if (cells[2][i].cl.ability.indexOf("Pillage") > -1) {
                        incomeOfTheSecondPlayer = incomeOfTheSecondPlayer + 1
                        incomeOfTheFirstPlayer = incomeOfTheFirstPlayer - 1
                    }
                }
                if (cells[3][i]) {
                    damageTo1thPlayer = damageTo1thPlayer + calculateDamage(cells[3][i].cl.attack, 0, 1) * cells[3][i].cl.attackSpeed
                    if (cells[3][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurnOf1thPlayer = manaBurnOf1thPlayer + 10
                    }
                }
            }
            if (!cells[2][i] && !cells[3][i]) {
                if (cells[0][i]) {
                    damageTo2thPlayer = damageTo2thPlayer + calculateDamage(cells[0][i].cl.attack, 0, 1) * cells[0][i].cl.attackSpeed
                    if (cells[0][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurnOf2thPlayer = manaBurnOf2thPlayer + 10
                    }
                }
                if (cells[1][i]) {
                    damageTo2thPlayer = damageTo2thPlayer + calculateDamage(cells[1][i].cl.attack, 0, 1) * cells[1][i].cl.attackSpeed
                    if (cells[1][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurnOf2thPlayer = manaBurnOf2thPlayer + 10
                    }
                    if (cells[1][i].cl.ability.indexOf("Pillage") > -1) {
                        incomeOfTheFirstPlayer = incomeOfTheFirstPlayer + 1
                        incomeOfTheSecondPlayer = incomeOfTheSecondPlayer - 1
                    }
                }
            }
        }
        if (player1.mp - manaBurnOf1thPlayer < 0) {
            manaBurnOf1thPlayer = player1.mp
        }
        if (player1.mp - manaBurnOf1thPlayer > player1.maxMP) {
            manaBurnOf1thPlayer = player1.mp - player1.maxMP
        }
        if (player2.mp - manaBurnOf2thPlayer < 0) {
            manaBurnOf2thPlayer = player2.mp
        }
        if (player2.mp - manaBurnOf2thPlayer > player2.maxMP) {
            manaBurnOf2thPlayer = player2.mp - player2.maxMP
        }
        for (let i = 0; i < 6; i++) {
            if (cells[1][i] && cells[1][i].cl.ability.indexOf("worker") > -1) {
                incomeOfTheFirstPlayer = incomeOfTheFirstPlayer + 3
            }
            if (cells[2][i] && cells[2][i].cl.ability.indexOf("worker") > -1) {
                incomeOfTheSecondPlayer = incomeOfTheSecondPlayer + 3
            }
        }
        let point1 = 0
        let point2 = 0
        if (Math.round(0.1 * (player1.xp + experience1) ** 0.5) - player1.lvl > 0) {
            point1 = Math.round(0.1 * (player1.xp + experience1) ** 0.5) - player1.lvl
        }
        if (Math.round(0.1 * (player2.xp + experience2) ** 0.5) - player2.lvl > 0) {
            point2 = Math.round(0.1 * (player2.xp + experience2) ** 0.5) - player2.lvl
        }
        setPlayer1({
            ...player1,
            hp: player1.hp - damageTo1thPlayer,
            gold: player1.gold + incomeOfTheFirstPlayer,
            mp: player1.mp - manaBurnOf1thPlayer,
            xp: player1.xp + experience1,
            abilityPoint: player1.abilityPoint + point1,
            magicPoint: player1.magicPoint + point1,
            lvl: Math.round(0.1 * (player1.xp + experience1) ** 0.5)
        })
        setPlayer2({
            ...player2,
            hp: player2.hp - damageTo2thPlayer,
            gold: player2.gold + incomeOfTheSecondPlayer,
            mp: player2.mp - manaBurnOf2thPlayer,
            xp: player2.xp + experience2,
            abilityPoint: player2.abilityPoint + point2,
            magicPoint: player2.magicPoint + point2,
            lvl: Math.round(0.1 * (player2.xp + experience2) ** 0.5)
        })
        if (player1.hp <= 0 && player2.hp > 0) {
            alert("the second player are winner")
        }
        if (player1.hp <= 0 && player2.hp <= 0) {
            alert("there is draw")
        }
        if (player1.hp <= 0 && player1.hp > 0) {
            alert("the first player are winner")
        }
    }
    return (
        <div className="App">
            <Input player={player1} onPlayerChanged={setPlayer1} />
            <Input player={player2} onPlayerChanged={setPlayer2} />
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div>Player 1</div>
            <div className="NameOfHero1"> Name: {JSON.stringify(player1.NameOfHero)}</div>
            <div className="classOfHero1">Class: {JSON.stringify(player1.classOfHero)}</div>
            <img src={icon[player1.classOfHero]} className="App-logo" alt="logo" />
            <div className="races1">Races: {JSON.stringify(player1.race1)}, {JSON.stringify(player1.race2)}</div>
            <div className="magic1">Magic: {JSON.stringify(player1.magic)}</div>
            <div className='gold1'>Gold: {JSON.stringify(player1.gold)}</div>
            <div className='LVL1'>LVL: {JSON.stringify(player1.lvl)}</div>
            <div className='int1'>Intelligence: {JSON.stringify(player1.intelligence)} <button onClick={() => {
                if (player1.abilityPoint > 0) {
                    setPlayer1({
                        ...player1,
                        intelligence: player1.intelligence + 1,
                        abilityPoint: player1.abilityPoint - 1,
                    })
                } else {
                    playErrorSound()
                    alert("need more abilityPoints")
                }
            }}>+</button></div>
            <div className='hp1'>HP: {JSON.stringify(player1.hp)}</div>
            <div className='mp1'>MP: {JSON.stringify(player1.mp)}</div>
            <div className='mp1'>maxMP: {JSON.stringify(player1.maxMP)} <button onClick={() => {
                if (player1.abilityPoint > 0) {
                    setPlayer1({
                        ...player1,
                        maxMP: player1.maxMP + 50,
                        mp: player1.mp + 50,
                        abilityPoint: player1.abilityPoint - 1,
                    })
                } else {
                    playErrorSound()
                    alert("need more abilityPoints")
                }
            }}>+</button></div>
            <div className='xp1'>XP: {JSON.stringify(player1.xp)}</div>
            <div className='xp1'>abilityPoint: {JSON.stringify(player1.abilityPoint)}</div>
            <div className='xp1'>magicPoint: {JSON.stringify(player1.magicPoint)}</div>
            <div className="units11">Race1: {classUnits11}</div>
            <div className="units12">Race2: {classUnits12}</div>
            <div className="magic">Magic: {magic1}</div>
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div>Player 2</div>
            <div className='NameOfHero2'>Name: {JSON.stringify(player2.NameOfHero)}</div>
            <div className="classOfHero2">Class: {JSON.stringify(player2.classOfHero)}</div>
            <img src={icon[player2.classOfHero]} className="App-logo" alt="logo" />
            <div className="race21">Races: {JSON.stringify(player2.race1)}, {JSON.stringify(player2.race2)}</div>
            <div className='gold2'>Gold: {JSON.stringify(player2.gold)}</div>
            <div className='LVL2'>LVL: {JSON.stringify(player2.lvl)}</div>
            <div className='int2'>Intelligence: {JSON.stringify(player2.intelligence)} <button onClick={() => {
                if (player2.abilityPoint > 0) {
                    setPlayer2({
                        ...player2,
                        intelligence: player2.intelligence + 1,
                        abilityPoint: player2.abilityPoint - 1,
                    })
                } else {
                    playErrorSound()
                    alert("need more abilityPoints")
                }
            }}>+</button></div>
            <div className='hp2'>HP: {JSON.stringify(player2.hp)}</div>
            <div className='mp2'>MP: {JSON.stringify(player2.mp)}</div>
            <div className='mp1'>maxMP: {JSON.stringify(player2.maxMP)} <button onClick={() => {
                if (player2.abilityPoint > 0) {
                    setPlayer2({
                        ...player2,
                        maxMP: player2.maxMP + 50,
                        mp: player2.mp + 50,
                        abilityPoint: player2.abilityPoint - 1,
                    })
                } else {
                    playErrorSound()
                    alert("need more abilityPoints")
                }
            }}>+</button></div>
            <div className='xp2'>XP: {JSON.stringify(player2.xp)}</div>
            <div className='xp2'>abilityPoint: {JSON.stringify(player2.abilityPoint)}</div>
            <div className='xp2'>magicPoint: {JSON.stringify(player2.magicPoint)}</div>
            <div className="units21">Race1: {classUnits21}</div>
            <div className="units22">Race2: {classUnits22}</div>
            <div className="magic">Magic: {magic2}</div>
            <div className="turn">Turn: {JSON.stringify(turn)}</div>
            <div className="time">Time: {JSON.stringify(time)}</div>
            <button className="endOfTurn" onClick={() => {
                setSelectedPlu(null)
                calculateStatsOfHeroes()
                setSelectedCells(calculateOfTheUnitsState(reduceAbilityTime(calculateAuraEffect(cells))))
                setTurn(turn + 1)
                timeOfDay(turn);
                (turn % 2 === 0) ? alert("turn of the second player") : alert("turn of the first player")
                console.log(cells)
            }}>EndOfTurn</button>
            <div>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div className="cells">
                {cells[0].map((item, i) => {
                    return (
                        <Cell
                            key={i}
                            plu={item}
                            onCellClick={() => {
                                let newRow = cells[0]
                                if (selectedPlu) {
                                    if (selectedPlu.cl.type === "unitCard") {
                                        if (!item) {
                                            if (turn % 2 !== 0 || selectedPlu.cl.rangeOfAttack === "melee") {
                                                return
                                            }
                                            if ((player1.gold - selectedPlu.cl.cost) < 0) {
                                                playErrorSound()
                                                alert("need more gold")
                                                return
                                            }
                                            newRow = cells[0].map((item2, i2) => {
                                                if (i2 === i) {
                                                    setPlayer1({
                                                        ...player1,
                                                        gold: player1.gold - selectedPlu.cl.cost
                                                    })
                                                    playReadySound(selectedPlu)
                                                    return {
                                                        ...selectedPlu,
                                                        onCell: true
                                                    }
                                                }
                                                return item2
                                            })
                                        }
                                    }
                                    if (selectedPlu.cl.type === "magicCard") {
                                        newRow = cells[0].map((item2, i2) => {
                                            if (i2 === i) {
                                                if (turn % 2 === 0) {
                                                    if ((player1.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer1({
                                                        ...player1,
                                                        mp: player1.mp - selectedPlu.cl.manacost,
                                                        xp: player1.xp + player1.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player1.intelligence)
                                                } else {
                                                    if ((player2.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer2({
                                                        ...player2,
                                                        mp: player2.mp - selectedPlu.cl.manacost,
                                                        xp: player2.xp + player2.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player2.intelligence)
                                                }
                                            }
                                            return item2
                                        })
                                    }
                                }
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
                                let newRow = cells[1]
                                if (selectedPlu) {
                                    if (selectedPlu.cl.type === "unitCard") {
                                        if (!item) {
                                            if (turn % 2 !== 0) {
                                                return
                                            }
                                            if ((player1.gold - selectedPlu.cl.cost) < 0) {
                                                playErrorSound()
                                                alert("need more gold")
                                                return
                                            }
                                            newRow = cells[1].map((item2, i2) => {
                                                if (i2 === i) {
                                                    setPlayer1({
                                                        ...player1,
                                                        gold: player1.gold - selectedPlu.cl.cost
                                                    })
                                                    playReadySound(selectedPlu)
                                                    return {
                                                        ...selectedPlu,
                                                        onCell: true
                                                    }
                                                }
                                                return item2
                                            })
                                        }
                                    }
                                    if (selectedPlu.cl.type === "magicCard") {
                                        newRow = cells[1].map((item2, i2) => {
                                            if (i2 === i) {
                                                if (turn % 2 === 0) {
                                                    if ((player1.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer1({
                                                        ...player1,
                                                        mp: player1.mp - selectedPlu.cl.manacost,
                                                        xp: player1.xp + player1.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player1.intelligence)
                                                } else {
                                                    if ((player2.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer2({
                                                        ...player2,
                                                        mp: player2.mp - selectedPlu.cl.manacost,
                                                        xp: player2.xp + player2.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player2.intelligence)
                                                }
                                            }
                                            return item2
                                        })
                                    }
                                }
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
                                let newRow = cells[2]
                                if (selectedPlu) {
                                    if (selectedPlu.cl.type === "unitCard") {
                                        if (!item) {
                                            if (turn % 2 === 0) {
                                                return
                                            }
                                            if ((player2.gold - selectedPlu.cl.cost) < 0) {
                                                playErrorSound()
                                                alert("need more gold")
                                                return
                                            }
                                            newRow = cells[2].map((item2, i2) => {
                                                if (i2 === i) {
                                                    setPlayer2({
                                                        ...player2,
                                                        gold: player2.gold - selectedPlu.cl.cost
                                                    })
                                                    playReadySound(selectedPlu)
                                                    return {
                                                        ...selectedPlu,
                                                        onCell: true
                                                    }
                                                }
                                                return item2
                                            })
                                        }
                                    }
                                    if (selectedPlu.cl.type === "magicCard") {
                                        newRow = cells[2].map((item2, i2) => {
                                            if (i2 === i) {
                                                if (turn % 2 === 0) {
                                                    if ((player1.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer1({
                                                        ...player1,
                                                        mp: player1.mp - selectedPlu.cl.manacost,
                                                        xp: player1.xp + player1.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player1.intelligence)
                                                } else {
                                                    if ((player2.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer2({
                                                        ...player2,
                                                        mp: player2.mp - selectedPlu.cl.manacost,
                                                        xp: player2.xp + player2.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player2.intelligence)
                                                }
                                            }
                                            return item2
                                        })
                                    }
                                }
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
                                let newRow = cells[3]
                                if (selectedPlu) {
                                    if (selectedPlu.cl.type === "unitCard") {
                                        if (!item) {
                                            if (turn % 2 === 0 || selectedPlu.cl.rangeOfAttack === "melee") {
                                                return
                                            }
                                            if ((player2.gold - selectedPlu.cl.cost) < 0) {
                                                playErrorSound()
                                                alert("need more gold")
                                                return
                                            }
                                            newRow = cells[3].map((item2, i2) => {
                                                if (i2 === i) {
                                                    setPlayer2({
                                                        ...player1,
                                                        gold: player2.gold - selectedPlu.cl.cost
                                                    })
                                                    playReadySound(selectedPlu)
                                                    return {
                                                        ...selectedPlu,
                                                        onCell: true
                                                    }
                                                }
                                                return item2
                                            })
                                        }
                                    }
                                    if (selectedPlu.cl.type === "magicCard") {
                                        newRow = cells[3].map((item2, i2) => {
                                            if (i2 === i) {
                                                if (turn % 2 === 0) {
                                                    if ((player2.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer2({
                                                        ...player2,
                                                        mp: player2.mp - selectedPlu.cl.manacost,
                                                        xp: player2.xp + player2.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player2.intelligence)
                                                } else {
                                                    if ((player1.mp - selectedPlu.cl.manacost) < 0) {
                                                        playErrorSound()
                                                        alert("need more mana")
                                                        return
                                                    }
                                                    setPlayer1({
                                                        ...player1,
                                                        mp: player1.mp - selectedPlu.cl.manacost,
                                                        xp: player1.xp + player1.intelligence * 10 * selectedPlu.cl.bonusXP
                                                    })
                                                    item2 = selectedPlu.cl.effect(item2, selectedPlu.player, player1.intelligence)
                                                }
                                            }
                                            return item2
                                        })
                                    }
                                }
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