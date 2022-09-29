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
import BTNAlbatross from './BTNAlbatross.webp';
import BTNGhoul from './BTNGhoul.webp';
import BTNSkeletalLongevity from './BTNSkeletalLongevity.webp';
import BTNCannibalize from './BTNCannibalize.webp';
import BTNAcolyte from './BTNAcolyte.webp';
import BTNCallToArms from './BTNCallToArms.webp';
import BTNDalaranMutant from './BTNDalaranMutant.webp';
import BTNBansheeRanger from './BTNBansheeRanger.webp';
import BTNMarksmanship from './BTNMarksmanship.webp';
import BTNAbomination from './BTNAbomination.webp';
import PASBTNPlagueCloud from './PASBTNPlagueCloud.webp';
import BTNFrostWyrm from './BTNFrostWyrm.webp';
import BTNBreathOfFrost from './BTNBreathOfFrost.webp';
import BTNBreathOfFire from './BTNBreathOfFire.webp';
import BTNHeroDreadLord from './BTNHeroDreadLord.webp';
import BTNVampiricAura from './BTNVampiricAura.webp';
import PASBTNMagicalSentry from './PASBTNMagicalSentry.webp';
import BTNGreenDragonRoost from './BTNGreenDragonRoost.webp';
import NightHunter from './bala-skill-4.png';
import BTNCryptFiend from './BTNCryptFiend.webp';
import BTNWebOff from './BTNWebOff.webp';
import BTNWeb from './BTNWeb.webp';
import BTNCryptFiendUnBurrow from './BTNCryptFiendUnBurrow.webp';
import BTNCryptFiendBurrow from './BTNCryptFiendBurrow.webp';
import anubarak from './anubarak.jpg';
import Wc3PASBTNThornShield from './Wc3PASBTNThornShield.png';
import BTNUnholyAura from './BTNUnholyAura.webp';
import BTNHeroDeathKnight from './BTNHeroDeathKnight.webp';
import BTNAnimateDead from './BTNAnimateDead.webp';
import BTNMagicImmunity from './BTNMagicImmunity.webp';
import BTNDestroyer from './BTNDestroyer.webp';
import BTNGhost from './BTNGhost.webp';
import BTNGargoyle from './BTNGargoyle.webp';
import BTNWisp from './BTNWisp.webp';
import BTNBloodElfPeasant from './BTNBloodElfPeasant.webp';
import BTNDragonHawk from './BTNDragonHawk.webp';
import BTNHighElvenArcher from './BTNHighElvenArcher.webp';
import BTNSpellBreaker from './BTNSpellBreaker.webp';
import BTNPriest from './BTNPriest.webp';
import BTNFrost from './BTNFrost.webp';
import Legion_Commander from './Legion_Commander.jpg';
import Moment_of_Courage from './Moment_of_Courage.jpg';
import BTNSlowOff from './BTNSlowOff.webp';
import BTNHealOff from './BTNHealOff.webp';
import BTNSorceress from './BTNSorceress.webp';
import BTNSheep from './BTNSheep.webp';
import Feedback from './Feedback.png';
import windRunner from './winda.png';
import ShackleShot from './vinda_1.jpg';
import PowerShot from './vinda_2.jpg';
import BTNSlow from './BTNSlow.webp';
import cloneDeep from 'lodash'
import BTNPeon from './BTNPeon.webp';
import PASBTNPillage from './PASBTNPillage.webp';
import BTNRaider from './BTNRaider.webp';
import BTNEnsnare from './BTNEnsnare.webp';
import BTNWyvernRider from './BTNWyvernRider.webp';
import BTNEnvenomedSpear from './BTNEnvenomedSpear.webp';
import BTNPoisonArrow from './BTNPoisonArrow.webp';
import BTNGrunt from './BTNGrunt.webp';
import BTNKotoBeast from './BTNKotoBeast.webp';
import BTNJanggo from './BTNJanggo.webp';
import PASBTNDrum from './PASBTNDrum.webp';
import BTNDevour from './BTNDevour.webp';
import NaturalOrder from './Natural_Order.jpg';
import BTNHeroTaurenChieftain from './BTNHeroTaurenChieftain.webp';
import BTNCriticalStrike from './BTNCriticalStrike.webp';
import BTNHeroBlademaster from './BTNHeroBlademaster.webp';

import { Unit } from './unit'
import { Cell } from './cell'
let defaultPeasant = Object.freeze({
    img: BTNPeasant,
    name: "Peasant",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNGatherGold, BTNCallToArms],
    ability: ["worker", "militia"],
    cost: 20,
})
let defaultMilitia = Object.freeze({
    img: BTNMilitia,
    name: "Militia",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNBacktoWork],
    ability: ["backToWork"],
    cost: 20,
})
let defaultFootman = {
    img: footmanImg,
    name: "Footman",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 10,
    hpMax: 10,
    armor: 3,
    DefaultArmor: 3,
    abilityImg: [Reflect],
    ability: ["reflect"],
    cost: 82,
}
let defaultGryphonRider = {
    img: BTNGryphonRider,
    name: "GryphonRider",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 12,
    hpMax: 12,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNAlbatross, PASBTNBash],
    ability: ["flying", "bash"],
    cost: 133,
}
let defaultTower = {
    img: BTNGuardTower,
    name: "Tower",
    attack: 2,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 10,
    hpMax: 10,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNArcaniteArchitecture, PASBTNMagicalSentry],
    ability: ["building", "trueSeen"],
    cost: 76,
}
let defaultKnight = {
    img: Legion_Commander,
    name: "Knight",
    attack: 5,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    armor: 4,
    DefaultArmor: 4,
    abilityImg: [Moment_of_Courage],
    ability: ["MomentOfCourage"],
    cost: 315,
}
let defaultPaladin = {
    img: BTNHeroPaladin,
    name: "Paladin",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 11,
    hpMax: 11,
    armor: 4,
    DefaultArmor: 4,
    abilityImg: [BTNDivineIntervention, BTNDevotion, PASBTNBash],
    ability: ["holyAttack", "devotionAura", "bash"],
    cost: 349,
}

let defaultAcolyte = {
    img: BTNAcolyte,
    name: "Acolyte",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity, BTNGatherGold],
    ability: ["undead", "worker"],
    cost: 16,
}
let defaultGhoul = {
    img: BTNGhoul,
    name: "Ghoul",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 9,
    hpMax: 9,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity, BTNCannibalize],
    ability: ["undead", "cannibalize"],
    cost: 37,
}
let defaultZombi = {
    img: BTNDalaranMutant,
    name: "Zombi",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity],
    ability: ["undead"],
    cost: 61,
}
let defaultTraxa = {
    img: BTNBansheeRanger,
    name: "Traxa",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 12,
    hpMax: 12,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNSkeletalLongevity, BTNMarksmanship],
    ability: ["undead", "marksman"],
    cost: 189,
}

let defaultButcher = {
    img: BTNAbomination,
    name: "Butcher",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 50,
    hpMax: 50,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity, PASBTNPlagueCloud],
    ability: ["undead", "plagueCloud"],
    cost: 150,
}

let defaultWyrm = {
    img: BTNFrostWyrm,
    name: "Wyrm",
    attack: 6,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity, BTNBreathOfFrost, BTNGreenDragonRoost],
    ability: ["undead", "BreathOfFrost", "dragonAbilities"],
    cost: 246,
}
let defaultDreadLord = {
    img: BTNHeroDreadLord,
    name: "DreadLord",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 11,
    hpMax: 11,
    armor: 2,
    DefaultArmor: 2,
    abilityImg: [BTNSkeletalLongevity, BTNVampiricAura, NightHunter],
    ability: ["undead", "vampire", "nightHunter"],
    cost: 280,
}
let defaultFiend = {
    img: BTNCryptFiend,
    name: "CryptFiend",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 15,
    hpMax: 15,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNSkeletalLongevity, BTNWebOff, BTNCryptFiendUnBurrow],
    ability: ["undead", "web", "UnBurrow"],
    cost: 72,
}
let defaultNerub = {
    img: anubarak,
    name: "Nerub",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 20,
    hpMax: 20,
    armor: 5,
    DefaultArmor: 5,
    abilityImg: [BTNSkeletalLongevity, Wc3PASBTNThornShield],
    ability: ["undead", "thornShield"],
    cost: 331,
}
let defaultDK = {
    img: BTNHeroDeathKnight,
    name: "DeathKnight",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 11,
    hpMax: 11,
    armor: 4,
    DefaultArmor: 4,
    abilityImg: [BTNSkeletalLongevity, BTNUnholyAura, BTNAnimateDead],
    ability: ["undead", "UnholyAura", "BorrowedTime"],
    cost: 349,
}
let defaultElfWorker = {
    img: BTNBloodElfPeasant,
    name: "ElfWorker",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNGatherGold],
    ability: ["worker"],
    cost: 7,
}
let defaultHighElvenArcher = {
    img: BTNHighElvenArcher,
    name: "HighElvenArcher",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 2,
    hp: 9,
    hpMax: 9,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [],
    ability: [],
    cost: 89,
}
let defaultPriest = {
    img: BTNPriest,
    name: "Priest",
    attack: 2,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNHealOff],
    ability: ["Heal"],
    cost: 23,
}
let defaultSorceress = {
    img: BTNSorceress,
    name: "Sorceress",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNHealOff, BTNSheep],
    ability: ["Slow", "Hex"],
    cost: 46,
}
let defaultDragonHawk = {
    img: BTNDragonHawk,
    name: "DragonHawk",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 11,
    hpMax: 11,
    armor: 3,
    DefaultArmor: 3,
    abilityImg: [BTNAlbatross],
    ability: ["flying"],
    cost: 166,
}
let defaultSpellBreaker = {
    img: BTNSpellBreaker,
    name: "SpellBreaker",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 4,
    DefaultArmor: 4,
    abilityImg: [Feedback, BTNMagicImmunity],
    ability: ["Feedback", "MagicImmunity"],
    cost: 217,
}
let defaultWindRunner = {
    img: windRunner,
    name: "Windrunner",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 3,
    hp: 9,
    hpMax: 9,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [ShackleShot, PowerShot],
    ability: ["ShackleShot", "PowerShot"],
    cost: 314,
}
let defaultPeon = {
    img: BTNPeon,
    name: "Peon",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNGatherGold, PASBTNPillage],
    ability: ["worker", "Pillage"],
    cost: 10,
}
let defaultRaider = {
    img: BTNRaider,
    name: "Raider",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [PASBTNPillage, BTNEnsnare],
    ability: ["Pillage", "Ensnare"],
    cost: 101,
}
let defaultWyvernRider = {
    img: BTNWyvernRider,
    name: "WyvernRider",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 25,
    hpMax: 25,
    armor: 0,
    DefaultArmor: 0,
    abilityImg: [BTNAlbatross, BTNEnvenomedSpear],
    ability: ["flying", "EnvenomedSpear"],
    cost: 88,
}
let defaultGrunt = {
    img: BTNGrunt,
    name: "Grunt",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [PASBTNPillage],
    ability: ["Pillage"],
    cost: 130,
}
let defaultKodo = {
    img: BTNKotoBeast,
    name: "Kodo",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 50,
    hpMax: 50,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [PASBTNDrum, BTNDevour],
    ability: ["Drum", "Devour"],
    cost: 204,
}
let defaultTaurenChieftain = {
    img: BTNHeroTaurenChieftain,
    name: "TaurenChieftain",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 40,
    hpMax: 40,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [NaturalOrder],
    ability: ["NaturalOrder"],
    cost: 278,
}
let defaultBladeMaster = {
    img: BTNHeroBlademaster,
    name: "BladeMaster",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 3,
    hp: 16,
    hpMax: 16,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNCriticalStrike],
    ability: ["CriticalStrike15X4"],
    cost: 318,
}

let unitsOfRaces = {
    human: [defaultPeasant, defaultMilitia, defaultTower, defaultFootman, defaultGryphonRider, defaultKnight, defaultPaladin,],
    scourge: [defaultAcolyte, defaultGhoul, defaultFiend, defaultButcher, defaultWyrm, defaultNerub, defaultDK],
    highElves: [defaultElfWorker, defaultPriest, defaultSorceress, defaultHighElvenArcher, defaultDragonHawk, defaultSpellBreaker, defaultWindRunner],
    orcs: [defaultPeon, defaultWyvernRider, defaultRaider, defaultGrunt, defaultKodo, defaultTaurenChieftain, defaultBladeMaster],
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
    gold: 1000,
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
    gold: 1000,
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
    constructor(cl, player, raceNumber) {
        this.cl = cl
        this.player = player
        this.raceNumber = raceNumber
    }

    get id() {
        return `${this.cl.name}__${this.player}__${this.raceNumber}`
    }
}
function clearCurrentEffect(unit) {
    if (unit) {
        if (unit.ability.indexOf("bashed") > -1) {
            return {
                ...unit,
                abilityImg: unit.abilityImg.filter(a => a !== BTNStun),
                ability: unit.ability.filter(a => a !== "bashed")
            }
        }
        if (unit.ability.indexOf("cooling") > -1) {
            return {
                ...unit,
                abilityImg: unit.abilityImg.filter(a => a !== BTNFrost),
                ability: unit.ability.filter(a => a !== "cooling")
            }
        }
        if (unit.ability.indexOf("MomentOfCourageActive") > -1) {
            return {
                ...unit,
                attackSpeed: unit.attackSpeed - 1,
                ability: unit.ability.filter(a => a !== "MomentOfCourageActive")
            }
        }
    }
    return unit
}

function calculateLineDamage(unit, target, AS) {
    let damage = 0
    if (unit && unit.cl.ability.indexOf("dragonAbilities") > -1 && target) {
        damage = forDamage(unit.cl.attack, target.cl.armor, AS) * calculateBonusDamage(unit.cl, target.cl, AS)
    }
    if (unit && unit.cl.ability.indexOf("PowerShot") > -1 && target) {
        damage = forDamage(unit.cl.attack, target.cl.armor, AS) * calculateBonusDamage(unit.cl, target.cl, AS)
    }
    return damage
}

function calculateHP(currentCells) {
    console.log(currentCells)
    let AS1 = 0
    let AS2 = 0
    let index1 = 0
    let index2 = 0
    let massDamage = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    const newRow1 = currentCells[1].map((item2, i2) => {
        index1 = 2
        index2 = 3
        if (item2 && item2.cl.ability.indexOf("invisible") === -1) {
            if (item2.cl.hp <= 0) {
                return item2 = null
            }
            item2.cl = doMeta(item2.cl, currentCells[index1][i2], currentCells[index2][i2])
            item2 = calculateBuff(currentCells[0][i2], item2)
            item2.cl = clearCurrentEffect(item2.cl)
            item2.cl = calculateRegeneration(item2.cl)
            if (currentCells[index1][i2]) {
                AS1 = checkOfAttack(currentCells[index1][i2].cl, item2.cl)
                item2.cl = calculateDeBuff(currentCells[index1][i2].cl, item2.cl, AS1)
                massDamage[0][i2] = massDamage[0][i2] + calculateLineDamage(currentCells[index1][i2], item2, AS1)
                if (currentCells[index2][i2]) {
                    AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                    massDamage[0][i2] = massDamage[0][i2] + calculateLineDamage(currentCells[index2][i2], item2, AS2)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1) - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                        }
                    }
                } else {
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1))
                        }
                    }
                }
            }
            if (currentCells[index2][i2]) {
                AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                    }
                }
            }
        }
        return item2
    })
    const newRow2 = currentCells[2].map((item2, i2) => {
        index1 = 1
        index2 = 0
        if (item2 && item2.cl.ability.indexOf("invisible") === -1) {
            item2.cl = doMeta(item2.cl, currentCells[index1][i2], currentCells[index2][i2])
            item2 = calculateBuff(currentCells[3][i2], item2)
            item2.cl = clearCurrentEffect(item2.cl)
            item2.cl = calculateRegeneration(item2.cl)
            if (item2.cl.hp <= 0) {
                return item2 = null
            }
            if (currentCells[index1][i2]) {
                AS1 = checkOfAttack(currentCells[index1][i2].cl, item2.cl)
                item2.cl = calculateDeBuff(currentCells[index1][i2].cl, item2.cl, AS1)
                massDamage[3][i2] = massDamage[3][i2] + calculateLineDamage(currentCells[index1][i2], item2, AS1)
                if (currentCells[index2][i2]) {
                    AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                    massDamage[3][i2] = massDamage[3][i2] + calculateLineDamage(currentCells[index2][i2], item2, AS2)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1) - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                        }
                    }
                } else {
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1))
                        }
                    }
                }
            }
            if (currentCells[index2][i2]) {
                AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                return {
                    ...item2,
                    cl: {
                        ...item2.cl,
                        hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                    }
                }
            }
        }
        return item2
    })
    const newRow0 = currentCells[0].map((item2, i2) => {
        index1 = 2
        index2 = 3
        if (item2 && item2.cl.ability.indexOf("invisible") === -1) {
            item2.cl = doMeta(item2.cl, currentCells[index1][i2], currentCells[index2][i2])
            item2.cl = clearCurrentEffect(item2.cl)
            item2.cl = calculateRegeneration(item2.cl)
            if (item2.cl.hp <= 0) {
                return item2 = null
            }
            if (!currentCells[1][i2] || (currentCells[1][i2] && currentCells[1][i2].cl.ability.indexOf("invisible") > -1)) {
                if (currentCells[index1][i2]) {
                    AS1 = checkOfAttack(currentCells[index1][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index1][i2].cl, item2.cl, AS1)
                    if (currentCells[index2][i2]) {
                        AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1) - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                            }
                        }
                    } else {
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1))
                            }
                        }
                    }
                }
                if (currentCells[index2][i2]) {
                    AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                        }
                    }
                }
            }

        }
        return item2
    })
    const newRow3 = currentCells[3].map((item2, i2) => {
        index1 = 1
        index2 = 0
        if (item2 && item2.cl.ability.indexOf("invisible") === -1) {
            item2.cl = doMeta(item2.cl, currentCells[index1][i2], currentCells[index2][i2])
            item2.cl = clearCurrentEffect(item2.cl)
            item2.cl = calculateRegeneration(item2.cl)
            if (item2.cl.hp <= 0) {
                return item2 = null
            }
            if (!currentCells[2][i2] || (currentCells[2][i2] && currentCells[2][i2].cl.ability.indexOf("invisible") > -1)) {
                if (currentCells[index1][i2]) {
                    AS1 = checkOfAttack(currentCells[index1][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index1][i2].cl, item2.cl, AS1)
                    if (currentCells[index2][i2]) {
                        AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                        item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1) - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                            }
                        }
                    } else {
                        return {
                            ...item2,
                            cl: {
                                ...item2.cl,
                                hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index1][i2].cl.attack, item2.cl.armor, AS1) * calculateBonusDamage(currentCells[index1][i2].cl, item2.cl, AS1))
                            }
                        }
                    }
                }
                if (currentCells[index2][i2]) {
                    AS2 = checkOfAttack(currentCells[index2][i2].cl, item2.cl)
                    item2.cl = calculateDeBuff(currentCells[index2][i2].cl, item2.cl, AS2)
                    return {
                        ...item2,
                        cl: {
                            ...item2.cl,
                            hp: Math.ceil(item2.cl.hp - forDamage(currentCells[index2][i2].cl.attack, item2.cl.armor, AS2) * calculateBonusDamage(currentCells[index2][i2].cl, item2.cl, AS2))
                        }
                    }
                }
            }

        }
        return item2
    })
    let newCells = []
    newCells[0] = newRow0
    newCells[1] = newRow1
    newCells[2] = newRow2
    newCells[3] = newRow3
    newCells[0] = newCells[0].map((item2, i2) => {
        if (item2) {
            return {
                ...item2,
                cl: {
                    ...item2.cl,
                    hp: item2.cl.hp - massDamage[0][i2]
                }
            }
        }
    })
    newCells[1] = newCells[1].map((item2, i2) => {
        if (item2) {
            return {
                ...item2,
                cl: {
                    ...item2.cl,
                    hp: item2.cl.hp - massDamage[1][i2]
                }
            }
        }
    })
    newCells[2] = newCells[2].map((item2, i2) => {
        if (item2) {
            return {
                ...item2,
                cl: {
                    ...item2.cl,
                    hp: item2.cl.hp - massDamage[2][i2]
                }
            }
        }
    })
    newCells[3] = newCells[3].map((item2, i2) => {
        if (item2) {
            return {
                ...item2,
                cl: {
                    ...item2.cl,
                    hp: item2.cl.hp - massDamage[3][i2]
                }
            }
        }
    })
    return newCells
}

function calculateMassEffect(currentCells) {
    let a = cloneDeep(currentCells)
    let newCells = a.__wrapped__
    console.log(newCells)
    let effects1 = []
    let effects2 = []
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 6; j++) {
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("devotionAura") > -1) {
                effects1 = effects1.concat("devotionAura")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("Drum") > -1) {
                effects1 = effects1.concat("Drum")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("UnholyAura") > -1) {
                effects2 = effects2.concat("UnholyAura")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("NaturalOrder") > -1) {
                effects2 = effects2.concat("NaturalOrder")
            }
            if (newCells[i][j] && (newCells[i][j].cl.ability.indexOf("dragonAbilities") > -1 || newCells[i][j].cl.ability.indexOf("trueSeen") > -1)) {
                effects1 = effects1.concat("trueSeen")
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("plagueCloud") > -1) {
                if (newCells[i - 1][j] && newCells[i - 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i - 1][j].cl.abilityImg = newCells[i - 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i + 1][j] && newCells[i + 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i + 1][j].cl.abilityImg = newCells[i + 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i][j + 1] && newCells[i][j + 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j + 1].cl.abilityImg = newCells[i][j + 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i][j - 1] && newCells[i][j - 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j - 1].cl.abilityImg = newCells[i][j - 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("ShackleShot") > -1) {
                if (newCells[2][j] && newCells[3][j]) {
                    newCells[2][j].cl.ability = newCells[2][j].cl.ability.concat("bashed")
                    newCells[2][j].cl.abilityImg = newCells[2][j].cl.abilityImg.concat(BTNStun)
                    newCells[3][j].cl.ability = newCells[3][j].cl.ability.concat("bashed")
                    newCells[3][j].cl.abilityImg = newCells[3][j].cl.abilityImg.concat(BTNStun)
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
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("plagueCloud") > -1) {
                if (newCells[i - 1][j] && newCells[i - 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i - 1][j].cl.abilityImg = newCells[i - 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i + 1][j] && newCells[i + 1][j].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i + 1][j].cl.abilityImg = newCells[i + 1][j].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i][j + 1] && newCells[i][j + 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j + 1].cl.abilityImg = newCells[i][j + 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
                if (newCells[i][j - 1] && newCells[i][j - 1].cl.abilityImg.indexOf(PASBTNPlagueCloud) === -1) {
                    newCells[i][j - 1].cl.abilityImg = newCells[i][j - 1].cl.abilityImg.concat(PASBTNPlagueCloud)
                }
            }
            if (newCells[i][j] && newCells[i][j].cl.ability.indexOf("ShackleShot") > -1) {
                if (newCells[0][j] && newCells[1][j]) {
                    newCells[0][j].cl.ability = newCells[0][j].cl.ability.concat("bashed")
                    newCells[0][j].cl.abilityImg = newCells[0][j].cl.abilityImg.concat(BTNStun)
                    newCells[1][j].cl.ability = newCells[1][j].cl.ability.concat("bashed")
                    newCells[1][j].cl.abilityImg = newCells[1][j].cl.abilityImg.concat(BTNStun)
                }
            }
        }
    }
    const newRow0 = newCells[0].map((item2, i2) => {
        let newItem = item2
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor + 1,
                    abilityImg: newItem.cl.abilityImg.concat(BTNDevotion)
                }
            }
        }
        
        if (item2 && item2.cl.abilityImg.indexOf(BTNDevotion) > -1 && effects1.indexOf("devotionAura") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor - 1,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("NaturalOrder") > -1 && item2.cl.abilityImg.indexOf(NaturalOrder) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: 0,
                    abilityImg: newItem.cl.abilityImg.concat(NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(NaturalOrder) > -1 && effects1.indexOf("NaturalOrder") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.DefaultArmor,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("Drum") > -1 && item2.cl.abilityImg.indexOf(PASBTNDrum) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    attack: newItem.cl.attack + 1,
                    abilityImg: newItem.cl.abilityImg.concat(PASBTNDrum)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(PASBTNDrum) > -1 && effects1.indexOf("Drum") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    attack: newItem.cl.attack - 1,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== PASBTNDrum)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && item2.cl.abilityImg.indexOf(PASBTNPlagueCloud) > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                    ability: newItem.cl.ability.concat("decease")
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && effects1.indexOf("UnholyAura") > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                }
            }
        }
        return newItem
    })
    const newRow1 = newCells[1].map((item2, i2) => {
        let newItem = item2
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor + 1,
                    abilityImg: newItem.cl.abilityImg.concat(BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(BTNDevotion) > -1 && effects1.indexOf("devotionAura") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor - 1,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("NaturalOrder") > -1 && item2.cl.abilityImg.indexOf(NaturalOrder) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: 0,
                    abilityImg: newItem.cl.abilityImg.concat(NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(NaturalOrder) > -1 && effects1.indexOf("NaturalOrder") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.DefaultArmor,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("Drum") > -1 && item2.cl.abilityImg.indexOf(PASBTNDrum) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    attack: newItem.cl.attack + 1,
                    abilityImg: newItem.cl.abilityImg.concat(PASBTNDrum)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && item2.cl.abilityImg.indexOf(PASBTNPlagueCloud) > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                    ability: newItem.cl.ability.concat("decease")
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && effects1.indexOf("UnholyAura") > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                }
            }
        }
        return newItem
    })
    const newRow2 = newCells[2].map((item2, i2) => {
        let newItem = item2
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects2.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor + 1,
                    abilityImg: newItem.cl.abilityImg.concat(BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(BTNDevotion) > -1 && effects1.indexOf("devotionAura") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor - 1,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects2.indexOf("NaturalOrder") > -1 && item2.cl.abilityImg.indexOf(NaturalOrder) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: 0,
                    abilityImg: newItem.cl.abilityImg.concat(NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(NaturalOrder) > -1 && effects2.indexOf("NaturalOrder") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.DefaultArmor,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("Drum") > -1 && item2.cl.abilityImg.indexOf(PASBTNDrum) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    attack: newItem.cl.attack + 1,
                    abilityImg: newItem.cl.abilityImg.concat(PASBTNDrum)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && item2.cl.abilityImg.indexOf(PASBTNPlagueCloud) > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                    ability: newItem.cl.ability.concat("decease")
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && effects2.indexOf("UnholyAura") > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                }
            }
        }
        return newItem
    })
    const newRow3 = newCells[3].map((item2, i2) => {
        let newItem = item2
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects2.indexOf("devotionAura") > -1 && item2.cl.abilityImg.indexOf(BTNDevotion) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor + 1,
                    abilityImg: newItem.cl.abilityImg.concat(BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(BTNDevotion) > -1 && effects1.indexOf("devotionAura") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.armor - 1,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== BTNDevotion)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects2.indexOf("NaturalOrder") > -1 && item2.cl.abilityImg.indexOf(NaturalOrder) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: 0,
                    abilityImg: newItem.cl.abilityImg.concat(NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.abilityImg.indexOf(NaturalOrder) > -1 && effects2.indexOf("NaturalOrder") === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    armor: newItem.cl.DefaultArmor,
                    abilityImg: newItem.cl.abilityImg.filter(a => a !== NaturalOrder)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && effects1.indexOf("Drum") > -1 && item2.cl.abilityImg.indexOf(PASBTNDrum) === -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    attack: newItem.cl.attack + 1,
                    abilityImg: newItem.cl.abilityImg.concat(PASBTNDrum)
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && item2.cl.abilityImg.indexOf(PASBTNPlagueCloud) > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                    ability: newItem.cl.ability.concat("decease")
                }
            }
        }
        if (item2 && item2.cl.ability.indexOf("building") === -1 && item2.cl.ability.indexOf("undead") === -1 && effects2.indexOf("UnholyAura") > -1) {
            newItem = {
                ...newItem,
                cl: {
                    ...newItem.cl,
                    hp: newItem.cl.hp - 1,
                }
            }
        }
        return newItem
    })
    newCells[0] = newRow0
    newCells[1] = newRow1
    newCells[2] = newRow2
    newCells[3] = newRow3
    return newCells
}

function calculateBuff(unit, target) {
    if (unit && target) {
        if (target.cl.ability.indexOf("building") === -1) {
            if (unit.cl.ability.indexOf("Heal") > -1 && target.cl.hp < target.cl.hpMax) {
                return {
                    ...target,
                    cl: {
                        ...target.cl,
                        hp: target.cl.hp + 1
                    }
                }
            }
        }
    }
    return target
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
        if (unit.attackSpeed < 1) {
            return 0
        }
        if (unit.ability.indexOf("bashed") > -1) {
            return result = 0
        }
        if ((enemy.ability.indexOf("flying") > -1 || enemy.ability.indexOf("dragonAbilities") > -1) && unit.rangeOfAttack === "melee") {
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
        if (unit.ability.indexOf("trueSeen") === -1 && enemy.ability.indexOf("invisible") > -1) {
            return result = 0
        }
    }
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
                abilityImg: unit.abilityImg.filter(a => a !== BTNCallToArms).filter(a => a !== BTNGatherGold).concat(BTNBacktoWork),
                ability: unit.ability.filter(a => a !== "militia").filter(a => a !== "worker").concat("backToWork")
            }
        }
    }
    if (enemy1 && enemy1.cl.ability.indexOf("Devour") > -1 && unit.hpMax < 11) {
        return {
            ...unit,
            hp: 0,
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
                abilityImg: unit.abilityImg.filter(a => a !== BTNBacktoWork).concat(BTNGatherGold, BTNCallToArms),
                ability: unit.ability.filter(a => a !== "backToWork").concat("worker", "militia")
            }
        }
    }
    if (unit.ability.indexOf("cannibalize") > -1) {
        if (enemy1 && enemy1.cl.hp <= 0 && enemy1.cl.ability.indexOf("building") === -1) {
            return {
                ...unit,
                hp: 9,
            }
        }
        if (!enemy1 && enemy2 && enemy2.cl.hp <= 0 && enemy2.cl.ability.indexOf("building") === -1) {
            return {
                ...unit,
                hp: 9,
            }
        }
    }
    if (unit.ability.indexOf("marksman") > -1 && !enemy1) {
        return {
            ...unit,
            attack: unit.attack + 1,
            attackSpeed: unit.attackSpeed + 1,
            ability: unit.ability.filter(a => a !== "marksman").concat("marksmanActive")
        }
    }
    if (unit.ability.indexOf("marksmanActive") > -1 && enemy1) {
        return {
            ...unit,
            attack: unit.attack - 1,
            attackSpeed: unit.attackSpeed - 1,
            ability: unit.ability.filter(a => a !== "marksmanActive").concat("marksman")
        }
    }
    if (unit.ability.indexOf("flying") > -1 && ((enemy1 && enemy1.cl.ability.indexOf("web") > -1) || (enemy2 && enemy2.cl.ability.indexOf("web") > -1))) {
        return {
            ...unit,
            ability: unit.ability.filter(a => a !== "flying").concat("underWeb"),
            abilityImg: unit.abilityImg.filter(a => a !== BTNAlbatross).concat(BTNWeb)
        }
    }
    if (unit.ability.indexOf("flying") > -1 && ((enemy1 && enemy1.cl.ability.indexOf("Ensnare") > -1) || (enemy2 && enemy2.cl.ability.indexOf("Ensnare") > -1))) {
        return {
            ...unit,
            ability: unit.ability.filter(a => a !== "flying").concat("underWeb"),
            abilityImg: unit.abilityImg.filter(a => a !== BTNAlbatross).concat(BTNEnsnare)
        }
    }
    if (unit.ability.indexOf("UnBurrow") > -1 && unit.hp < 5) {
        return {
            ...unit,
            attack: 0,
            attackSpeed: 0,
            ability: unit.ability.filter(a => a !== "UnBurrow").concat(["burrow", "invisible"]),
            abilityImg: unit.abilityImg.filter(a => a !== BTNCryptFiendUnBurrow).concat(BTNCryptFiendBurrow)
        }
    }
    if (unit.ability.indexOf("burrow") > -1 && unit.hp > 14) {
        return {
            ...unit,
            attackSpeed: 1,
            attack: 4,
            ability: unit.ability.filter(a => a !== ["burrow", "invisible"]).concat("UnBurrow"),
            abilityImg: unit.abilityImg.filter(a => a !== BTNCryptFiendBurrow).concat(BTNCryptFiendUnBurrow)
        }
    }
    if (unit.ability.indexOf("BorrowedTime") > -1 && unit.hp < 4) {
        return {
            ...unit,
            ability: unit.ability.filter(a => a !== "BorrowedTime").concat("BorrowedTimeActive"),
        }
    }
    if (unit.ability.indexOf("BorrowedTimeActive") > -1 && unit.hp > 3) {
        return {
            ...unit,
            ability: unit.ability.filter(a => a !== "BorrowedTimeActive").concat("BorrowedTime"),
        }
    }
    return unit
}
function calculateRegeneration(unit) {
    let regeneration = 0
    if (unit.ability.indexOf("underPoison") > -1) {
        regeneration = regeneration - 1
    }
    if (unit.ability.indexOf("burrow") > -1 && unit.hp < 15) {
        regeneration = regeneration + 1
    }
    return {
        ...unit,
        hp: unit.hp + regeneration,
    }
}
function calculateBonusDamage(unit, enemy, numberOfAttack) {
    let bonus = 1
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.ability.indexOf("holyAttack") > -1 && enemy.ability.indexOf("undead") > -1) {
                bonus = bonus * 1.5
            }
        }
    }
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (enemy.ability.indexOf("BorrowedTimeActive") > -1) {
                bonus = bonus * (-1)
            }
        }
    }
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.ability.indexOf("CriticalStrike15X4") > -1 && (Math.random() <= 0.15)) {
                alert("x4 criticalStrike!!!")
                bonus = bonus * 4
            }
        }
    }
    return bonus
}

function calculateDeBuff(unit, enemy, numberOfAttack) {
    let effect = 1
    if (unit && enemy) {
        if (numberOfAttack > 0) {
            if (unit.ability.indexOf("bash") > -1 && enemy.ability.indexOf("building") === -1) {
                for (let i = 0; i < numberOfAttack; i++) {
                    effect = Math.round(Math.random() * 0.625 + 0.375)
                    if (effect === 0) {
                        alert(unit.name + " have bashed " + enemy.name + "!")
                        return {
                            ...enemy,
                            abilityImg: enemy.abilityImg.concat(BTNStun),
                            ability: enemy.ability.concat("bashed")
                        }
                    }
                }
            }
            if (unit.ability.indexOf("EnvenomedSpear") > -1 && enemy.ability.indexOf("building") === -1 && enemy.ability.indexOf("underPoison") === -1) {
                return {
                    ...enemy,
                    abilityImg: enemy.abilityImg.concat(BTNPoisonArrow),
                    ability: enemy.ability.concat("underPoison")
                }
            }
            if (unit.ability.indexOf("BreathOfFrost") > -1 && enemy.ability.indexOf("building") === -1 && enemy.ability.indexOf("cooling") === -1) {
                if (enemy.attackSpeed > 1) {
                    return {
                        ...enemy,
                        attackSpeed: enemy.attackSpeed - 1,
                        ability: enemy.ability.concat("cooling"),
                        abilityImg: enemy.abilityImg.concat(BTNFrost)
                    }
                }
            }
            if (unit.ability.indexOf("thornShield") > -1 && enemy.rangeOfAttack === "melee") {
                return {
                    ...enemy,
                    hp: enemy.hp - Math.ceil((forDamage(enemy.attack, unit.armor, numberOfAttack) * calculateBonusDamage(enemy, unit, numberOfAttack)) * 0.5),
                }
            }
            if (enemy.ability.indexOf("MomentOfCourage") > -1) {
                for (let i = 0; i < numberOfAttack; i++) {
                    effect = Math.round(Math.random() * 0.625 + 0.375)
                    if (effect === 0) {
                        alert("MomentOfCourage!")
                        return {
                            ...enemy,
                            attackSpeed: enemy.attackSpeed + 1,
                            ability: enemy.ability.concat("MomentOfCourageActive")
                        }
                    }
                }
            }
            if (unit.ability.indexOf("Slow") > -1 && enemy.ability.indexOf("building") === -1 && enemy.ability.indexOf("Slowed") === -1 && enemy.attackSpeed > 1) {
                return {
                    ...enemy,
                    attackSpeed: enemy.attackSpeed - 1,
                    ability: enemy.ability.concat("Slowed"),
                    abilityImg: enemy.abilityImg.concat(BTNSlow)
                }
            }
            if (unit.ability.indexOf("Hex") > -1 && enemy.ability.indexOf("building") === -1 && enemy.name !== "Sheep") {
                if (Math.round((enemy.cost / 50) * Math.random() * 0.625 + 0.375) === 0) {
                    alert("Hex!")
                    return {
                        ...enemy,
                        img: BTNSheep,
                        name: "Sheep",
                        attack: 0,
                        rangeOfAttack: "range",
                        typeOfAttack: "physic",
                        attackSpeed: 0,
                        hp: 5,
                        armor: 0,
                        abilityImg: [],
                        ability: [],
                        cost: 3,
                    }
                }
            }
        }
    }
    return enemy
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
    const calculateStatsOfHeroes = () => {
        let manaBurn1 = 0;
        let manaBurn2 = 0;
        let income1 = 10;
        let income2 = 10;
        let damage1 = 0;
        let damage2 = 0;
        for (let i = 0; i < 6; i++) {
            if ((!cells[0][i] && !cells[1][i]) || (cells[0][i] && cells[0][i].cl.ability.indexOf("invisible") > -1 && !cells[1][i]) || (cells[1][i] && cells[1][i].cl.ability.indexOf("invisible") > -1 && !cells[0][i]) || (cells[0][i] && cells[0][i].cl.ability.indexOf("invisible") > -1 && cells[0][i] && cells[1][i].cl.ability.indexOf("invisible") > -1)) {
                if (cells[2][i]) {
                    damage1 = damage1 + forDamage(cells[2][i].cl.attack, 0, cells[2][i].cl.attackSpeed)
                    if (cells[2][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurn1 = manaBurn1 + 1
                    }
                    if (cells[2][i].cl.ability.indexOf("Pillage") > -1) {
                        income2 = income2 + 1
                        income1 = income1 - 1
                    }
                }
                if (cells[3][i]) {
                    damage1 = damage1 + forDamage(cells[3][i].cl.attack, 0, cells[3][i].cl.attackSpeed)
                    if (cells[3][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurn1 = manaBurn1 + 1
                    }
                }
            }
            if (!cells[2][i] && !cells[3][i]) {
                if (cells[0][i]) {
                    damage2 = damage2 + forDamage(cells[0][i].cl.attack, 0, cells[0][i].cl.attackSpeed)
                    if (cells[0][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurn2 = manaBurn2 + 1
                    }
                }
                if (cells[1][i]) {
                    damage2 = damage2 + forDamage(cells[1][i].cl.attack, 0, cells[1][i].cl.attackSpeed)
                    if (cells[1][i].cl.ability.indexOf("Feedback") > -1) {
                        manaBurn2 = manaBurn2 + 1
                    }
                    if (cells[1][i].cl.ability.indexOf("Pillage") > -1) {
                        income1 = income1 + 1
                        income2 = income2 - 1
                    }
                }
            }
        }
        if (player1.mp - manaBurn1 < 0) {
            manaBurn1 = player1.mp
        }
        if (player2.mp - manaBurn2 < 0) {
            manaBurn2 = player2.mp
        }
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
            hp: player1.hp - damage1,
            gold: player1.gold + income1,
            mp: player1.mp - manaBurn1
        })
        setPlayer2({
            ...player2,
            hp: player2.hp - damage2,
            gold: player2.gold + income2,
            mp: player1.mp - manaBurn2
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
            <div className="time">Time: {JSON.stringify(time)}</div>
            <button className="endOfTurn" onClick={() => {
                setSelectedPlu(null)
                setSelectedCells(calculateHP(calculateMassEffect(cells)))
                calculateStatsOfHeroes()
                setTurn(turn + 1)
                timeOfDay(turn);
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