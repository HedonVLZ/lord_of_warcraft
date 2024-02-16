import footmanImg from './pictures/BTNFootman.webp';
import Reflect from './pictures/BTNDefend.png';
import BTNPeasant from './pictures/BTNPeasant.webp';
import BTNHeroPaladin from './pictures/BTNHeroPaladin.webp';
import BTNGryphonRider from './pictures/BTNGryphonRider.webp';
import BTNMilitia from './pictures/BTNMilitia.webp';
import BTNDivineIntervention from './pictures/BTNDivineIntervention.webp';
import BTNGuardTower from './pictures/BTNGuardTower.webp';
import BTNGatherGold from './pictures/BTNGatherGold.webp';
import BTNBacktoWork from './pictures/BTNBacktoWork.webp';
import BTNArcaniteArchitecture from './pictures/BTNArcaniteArchitecture.webp';
import BTNDevotion from './pictures/BTNDevotion.webp';
import PASBTNBash from './pictures/PASBTNBash.webp';
import BTNAlbatross from './pictures/BTNAlbatross.webp';
import BTNGhoul from './pictures/BTNGhoul.webp';
import BTNSkeletalLongevity from './pictures/BTNSkeletalLongevity.webp';
import BTNCannibalize from './pictures/BTNCannibalize.webp';
import BTNAcolyte from './pictures/BTNAcolyte.webp';
import BTNCallToArms from './pictures/BTNCallToArms.webp';
import BTNDalaranMutant from './pictures/BTNDalaranMutant.webp';
import BTNBansheeRanger from './pictures/BTNBansheeRanger.webp';
import BTNMarksmanship from './pictures/BTNMarksmanship.webp';
import BTNAbomination from './pictures/BTNAbomination.webp';
import PASBTNPlagueCloud from './pictures/PASBTNPlagueCloud.webp';
import BTNFrostWyrm from './pictures/BTNFrostWyrm.webp';
import BTNBreathOfFrost from './pictures/BTNBreathOfFrost.webp';
import BTNHeroDreadLord from './pictures/BTNHeroDreadLord.webp';
import BTNVampiricAura from './pictures/BTNVampiricAura.webp';
import PASBTNMagicalSentry from './pictures/PASBTNMagicalSentry.webp';
import BTNGreenDragonRoost from './pictures/BTNGreenDragonRoost.webp';
import NightHunter from './pictures/bala-skill-4.png';
import BTNCryptFiend from './pictures/BTNCryptFiend.webp';
import BTNWebOff from './pictures/BTNWebOff.webp';
import BTNCryptFiendUnBurrow from './pictures/BTNCryptFiendUnBurrow.webp';
import anubarak from './pictures/anubarak.jpg';
import Wc3PASBTNThornShield from './pictures/Wc3PASBTNThornShield.png';
import BTNUnholyAura from './pictures/BTNUnholyAura.webp';
import BTNHeroDeathKnight from './pictures/BTNHeroDeathKnight.webp';
import BTNAnimateDead from './pictures/BTNAnimateDead.webp';
import BTNMagicImmunity from './pictures/BTNMagicImmunity.webp';
import BTNBloodElfPeasant from './pictures/BTNBloodElfPeasant.webp';
import BTNDragonHawk from './pictures/BTNDragonHawk.webp';
import BTNHighElvenArcher from './pictures/BTNHighElvenArcher.webp';
import BTNSpellBreaker from './pictures/BTNSpellBreaker.webp';
import BTNPriest from './pictures/BTNPriest.webp';
import Legion_Commander from './pictures/Legion_Commander.jpg';
import Moment_of_Courage from './pictures/Moment_of_Courage.jpg';
import BTNSlowOff from './pictures/BTNSlowOff.webp';
import BTNHealOff from './pictures/BTNHealOff.webp';
import BTNSorceress from './pictures/BTNSorceress.webp';
import BTNSheep from './pictures/BTNSheep.webp';
import Feedback from './pictures/Feedback.png';
import windRunner from './pictures/winda.png';
import ShackleShot from './pictures/vinda_1.jpg';
import PowerShot from './pictures/vinda_2.jpg';
import BTNPeon from './pictures/BTNPeon.webp';
import PASBTNPillage from './pictures/PASBTNPillage.webp';
import BTNRaider from './pictures/BTNRaider.webp';
import BTNEnsnare from './pictures/BTNEnsnare.webp';
import BTNWyvernRider from './pictures/BTNWyvernRider.webp';
import BTNEnvenomedSpear from './pictures/BTNEnvenomedSpear.webp';
import BTNGrunt from './pictures/BTNGrunt.webp';
import BTNKotoBeast from './pictures/BTNKotoBeast.webp';
import PASBTNDrum from './pictures/Wardrums.gif';
import BTNDevour from './pictures/BTNDevour.webp';
import NaturalOrder from './pictures/Natural_Order.jpg';
import BTNHeroTaurenChieftain from './pictures/BTNHeroTaurenChieftain.webp';
import BTNCriticalStrike from './pictures/BTNCriticalStrike.webp';
import BTNHeroBlademaster from './pictures/BTNHeroBlademaster.webp';
import BTNSkeletonWarrior from './pictures/BTNSkeletonWarrior.webp';
import BTNSkeletonMage from './pictures/BTNSkeletonMage.webp';
import SkeletonKing from './pictures/Skeleton_King.gif';
import CriticalStrike from './pictures/Critical_Strike.jpg';
import fenixImg from './pictures/fenix.jpg';
import { readySounds } from './sounds'
import { pickSounds } from './sounds'
import { deathSounds } from './sounds'

export let defaultFenix = {
    type: "summonUnitCard",
    kind: ["undead", "magicUnit"],
    img: fenixImg,
    name: "fenix",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    defaultArmor: 2,
    armor: 2,
    abilityImg: [CriticalStrike],
    ability: ["CriticalStrike15X3"],
    abilityTime: ["inf"],
    cost: 131,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: true,
}

export let defaultBoneFletcher = {
    type: "summonUnitCard",
    kind: ["undead", "magicUnit"],
    img: BTNSkeletonMage,
    name: "BoneFletcher",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 3,
    attackSpeed: 3,
    hp: 9,
    hpMax: 9,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [],
    ability: [],
    abilityTime: [],
    cost: 72,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null]
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultSkeletonWarrior = {
    type: "summonUnitCard",
    kind: ["undead", "magicUnit"],
    img: BTNSkeletonWarrior,
    name: "SkeletonWarrior",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 1,
    defaultArmor: 1,
    abilityImg: [],
    ability: [],
    abilityTime: [],
    cost: 23,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null]
    },
    attackAbility: true,
    flying: false,
}

export let defaultSkeletonKing = {
    type: "summonUnitCard",
    kind: ["undead", "magicUnit"],
    img: SkeletonKing,
    name: "SkeletonKing",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    defaultArmor: 2,
    armor: 2,
    abilityImg: [CriticalStrike],
    ability: ["CriticalStrike15X3"],
    abilityTime: ["inf"],
    cost: 131,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultPeasant = Object.freeze({
    type: "unitCard",
    kind: ["alive"],
    img: BTNPeasant,
    name: "Peasant",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNGatherGold, BTNCallToArms],
    ability: ["worker", "militia"],
    abilityTime: ["inf", "inf"],
    cost: 20,
    sounds: {
        ready: readySounds["peasant"],
        pick: pickSounds["peasant"],
        death: deathSounds["peasant"]
    },
    visible: true,
    attackAbility: true,
    flying: false,
})
export let defaultMilitia = Object.freeze({
    type: "unitCard",
    kind: ["alive"],
    img: BTNMilitia,
    name: "Militia",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [BTNBacktoWork],
    ability: ["backToWork"],
    abilityTime: ["inf"],
    cost: 20,
    sounds: {
        ready: readySounds["peasant"],
        pick: pickSounds["peasant"],
        death: deathSounds["peasant"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
})
export let defaultFootman = {
    type: "unitCard",
    kind: ["alive"],
    img: footmanImg,
    name: "Footman",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 10,
    hpMax: 10,
    defaultArmor: 3,
    armor: 3,
    abilityImg: [Reflect],
    ability: ["reflect"],
    abilityTime: ["inf"],
    cost: 82,
    sounds: {
        ready: readySounds["footman"],
        pick: pickSounds["footman"],
        death: deathSounds["footman"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultGryphonRider = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNGryphonRider,
    name: "GryphonRider",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 12,
    hpMax: 12,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [PASBTNBash],
    ability: ["bash"],
    abilityTime: ["inf"],
    cost: 133,
    sounds: {
        ready: readySounds["gryphonRider"],
        pick: pickSounds["gryphonRider"],
        death: deathSounds["gryphonRider"],
    },
    visible: true,
    attackAbility: true,
    flying: true,
}
export let defaultTower = {
    type: "unitCard",
    kind: ["building"],
    img: BTNGuardTower,
    name: "Tower",
    attack: 2,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 2,
    attackSpeed: 2,
    hp: 10,
    hpMax: 10,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [PASBTNMagicalSentry],
    ability: ["trueSeen"],
    abilityTime: ["inf"],
    cost: 76,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultKnight = {
    type: "unitCard",
    kind: ["alive"],
    img: Legion_Commander,
    name: "Knight",
    attack: 5,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    defaultArmor: 4,
    armor: 4,
    abilityImg: [Moment_of_Courage],
    ability: ["MomentOfCourage"],
    abilityTime: ["inf"],
    cost: 315,
    sounds: {
        ready: readySounds["knight"],
        pick: pickSounds["knight"],
        death: deathSounds["knight"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultPaladin = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNHeroPaladin,
    name: "Paladin",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 11,
    hpMax: 11,
    defaultArmor: 4,
    armor: 4,
    abilityImg: [BTNDivineIntervention, BTNDevotion, PASBTNBash],
    ability: ["holyAttack", "devotionAura", "bash"],
    abilityTime: ["inf", "inf", "inf"],
    cost: 349,
    sounds: {
        ready: readySounds["heroPaladin"],
        pick: pickSounds["heroPaladin"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}

export let defaultAcolyte = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNAcolyte,
    name: "Acolyte",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNGatherGold],
    ability: ["worker"],
    abilityTime: ["inf"],
    cost: 16,
    sounds: {
        ready: readySounds["acolyte"],
        pick: pickSounds["acolyte"],
        death: deathSounds["acolyte"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultGhoul = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNGhoul,
    name: "Ghoul",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 2,
    attackSpeed: 2,
    hp: 9,
    hpMax: 9,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNCannibalize],
    ability: ["cannibalize"],
    abilityTime: ["inf"],
    cost: 37,
    sounds: {
        ready: readySounds["ghoul"],
        pick: pickSounds["ghoul"],
        death: deathSounds["ghoul"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultZombi = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNDalaranMutant,
    name: "Zombi",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [],
    ability: [],
    abilityTime: [],
    cost: 61,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultTraxa = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNBansheeRanger,
    name: "Traxa",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 2,
    attackSpeed: 2,
    hp: 12,
    hpMax: 12,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [BTNMarksmanship],
    ability: ["marksman"],
    abilityTime: ["inf"],
    cost: 189,
    sounds: {
        ready: readySounds["WR"],
        pick: pickSounds["WR"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}

export let defaultButcher = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNAbomination,
    name: "Butcher",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 50,
    hpMax: 50,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [PASBTNPlagueCloud],
    ability: ["plagueCloud"],
    abilityTime: ["inf"],
    cost: 150,
    sounds: {
        ready: readySounds["abomination"],
        pick: pickSounds["abomination"],
        death: deathSounds["abomination"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}

export let defaultWyrm = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNFrostWyrm,
    name: "Wyrm",
    attack: 6,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNBreathOfFrost, BTNGreenDragonRoost],
    ability: ["BreathOfFrost", "dragonAbilities"],
    abilityTime: ["inf", "inf"],
    cost: 246,
    sounds: {
        ready: readySounds["frostWyrm"],
        pick: pickSounds["frostWyrm"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: true,
}
export let defaultDreadLord = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNHeroDreadLord,
    name: "DreadLord",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 2,
    attackSpeed: 2,
    hp: 11,
    hpMax: 11,
    defaultArmor: 2,
    armor: 2,
    abilityImg: [BTNVampiricAura, NightHunter],
    ability: ["vampire", "nightHunter"],
    abilityTime: ["inf", "inf"],
    cost: 280,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultFiend = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNCryptFiend,
    name: "CryptFiend",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 15,
    hpMax: 15,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNWebOff, BTNCryptFiendUnBurrow],
    ability: ["web", "UnBurrow"],
    abilityTime: ["inf", "inf"],
    cost: 72,
    sounds: {
        ready: readySounds["cryptFiend"],
        pick: pickSounds["cryptFiend"],
        death: deathSounds["cryptFiend"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultNerub = {
    type: "unitCard",
    kind: ["undead"],
    img: anubarak,
    name: "Nerub",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 20,
    hpMax: 20,
    defaultArmor: 5,
    armor: 5,
    abilityImg: [Wc3PASBTNThornShield],
    ability: ["thornShield"],
    abilityTime: ["inf"],
    cost: 331,
    sounds: {
        ready: readySounds["nerubianCryptLord"],
        pick: pickSounds["nerubianCryptLord"],
        death: deathSounds["nerubianCryptLord"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultDK = {
    type: "unitCard",
    kind: ["undead"],
    img: BTNHeroDeathKnight,
    name: "DeathKnight",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 15,
    hpMax: 15,
    defaultArmor: 3,
    armor: 3,
    abilityImg: [BTNUnholyAura, BTNAnimateDead],
    ability: ["UnholyAura", "BorrowedTime"],
    abilityTime: ["inf", "inf"],
    cost: 349,
    sounds: {
        ready: readySounds["arthas"],
        pick: pickSounds["arthas"],
        death: deathSounds["arthas"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultElfWorker = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNBloodElfPeasant,
    name: "ElfWorker",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 7,
    hpMax: 7,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNGatherGold],
    ability: ["worker"],
    abilityTime: ["inf"],
    cost: 7,
    sounds: {
        ready: readySounds[null],
        pick: pickSounds[null],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultHighElvenArcher = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNHighElvenArcher,
    name: "HighElvenArcher",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 2,
    attackSpeed: 2,
    hp: 9,
    hpMax: 9,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [],
    ability: [],
    abilityTime: [],
    cost: 89,
    sounds: {
        ready: readySounds["archer"],
        pick: pickSounds["archer"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultPriest = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNPriest,
    name: "Priest",
    attack: 2,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNHealOff],
    ability: ["Heal"],
    abilityTime: ["inf"],
    cost: 23,
    sounds: {
        ready: readySounds[["priest"]],
        pick: pickSounds["priest"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultSorceress = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNSorceress,
    name: "Sorceress",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNSlowOff, BTNSheep],
    ability: ["Slow", "Hex"],
    abilityTime: ["inf", "inf"],
    cost: 46,
    sounds: {
        ready: readySounds["sorceress"],
        pick: pickSounds["sorceress"],
        death: deathSounds["sorceress"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultDragonHawk = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNDragonHawk,
    name: "DragonHawk",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 11,
    hpMax: 11,
    defaultArmor: 3,
    armor: 3,
    abilityImg: [],
    ability: [],
    abilityTime: [],
    cost: 166,
    sounds: {
        ready: readySounds["dragonHawk"],
        pick: pickSounds["dragonHawk"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: true,
}
export let defaultSpellBreaker = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNSpellBreaker,
    name: "SpellBreaker",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    defaultArmor: 4,
    armor: 4,
    abilityImg: [Feedback, BTNMagicImmunity],
    ability: ["Feedback", "MagicImmunity"],
    abilityTime: ["inf", "inf"],
    cost: 217,
    sounds: {
        ready: readySounds["spellbreaker"],
        pick: pickSounds["spellbreaker"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultWindRunner = {
    type: "unitCard",
    kind: ["alive"],
    img: windRunner,
    name: "Windrunner",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 3,
    attackSpeed: 3,
    hp: 9,
    hpMax: 9,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [ShackleShot, PowerShot],
    ability: ["ShackleShot", "PowerShot"],
    abilityTime: ["inf", "inf"],
    cost: 314,
    sounds: {
        ready: readySounds["sylvanasWindrunner"],
        pick: pickSounds["sylvanasWindrunner"],
        death: deathSounds[null],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultPeon = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNPeon,
    name: "Peon",
    attack: 1,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNGatherGold, PASBTNPillage],
    ability: ["worker", "Pillage"],
    abilityTime: ["inf", "inf"],
    cost: 10,
    sounds: {
        ready: readySounds["peon"],
        pick: pickSounds["peon"],
        death: deathSounds["peon"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultRaider = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNRaider,
    name: "Raider",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [PASBTNPillage, BTNEnsnare],
    ability: ["Pillage", "Ensnare"],
    abilityTime: ["inf", "inf"],
    cost: 101,
    sounds: {
        ready: readySounds["rider"],
        pick: pickSounds["rider"],
        death: deathSounds["rider"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultWyvernRider = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNWyvernRider,
    name: "WyvernRider",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 25,
    hpMax: 25,
    defaultArmor: 0,
    armor: 0,
    abilityImg: [BTNEnvenomedSpear],
    ability: ["EnvenomedSpear"],
    abilityTime: ["inf"],
    cost: 88,
    sounds: {
        ready: readySounds["wyvernRider"],
        pick: pickSounds["wyvernRider"],
        death: deathSounds["wyvernRider"],
    },
    visible: true,
    attackAbility: true,
    flying: true,
}
export let defaultGrunt = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNGrunt,
    name: "grunt",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 30,
    hpMax: 30,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [PASBTNPillage],
    ability: ["Pillage"],
    abilityTime: ["inf"],
    cost: 130,
    sounds: {
        ready: readySounds["grunt"],
        pick: pickSounds["grunt"],
        death: deathSounds["grunt"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultKodo = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNKotoBeast,
    name: "Kodo",
    attack: 2,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 50,
    hpMax: 50,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [PASBTNDrum, BTNDevour],
    ability: ["Drum", "Devour"],
    abilityTime: ["inf", "inf"],
    cost: 204,
    sounds: {
        ready: readySounds["koto"],
        pick: pickSounds["koto"],
        death: deathSounds["koto"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultTaurenChieftain = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNHeroTaurenChieftain,
    name: "TaurenChieftain",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 1,
    attackSpeed: 1,
    hp: 40,
    hpMax: 40,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [NaturalOrder],
    ability: ["NaturalOrder"],
    abilityTime: ["inf"],
    cost: 278,
    sounds: {
        ready: readySounds["tauren"],
        pick: pickSounds["tauren"],
        death: deathSounds["tauren"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}
export let defaultBladeMaster = {
    type: "unitCard",
    kind: ["alive"],
    img: BTNHeroBlademaster,
    name: "BladeMaster",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    defaultAttackSpeed: 3,
    attackSpeed: 3,
    hp: 16,
    hpMax: 16,
    defaultArmor: 1,
    armor: 1,
    abilityImg: [BTNCriticalStrike],
    ability: ["CriticalStrike15X4"],
    abilityTime: ["inf"],
    cost: 318,
    sounds: {
        ready: readySounds["blademaster"],
        pick: pickSounds["blademaster"],
        death: deathSounds["blademaster"],
    },
    visible: true,
    attackAbility: true,
    flying: false,
}