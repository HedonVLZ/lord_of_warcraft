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
import PASBTNDrum from './pictures/PASBTNDrum.webp';
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

export let defaultFenix = {
    type: "summonUnitCard",
    img: fenixImg,
    name: "fenix",
    attack: 4,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    armor: 2,
    DefaultArmor: 2,
    abilityImg: [BTNSkeletalLongevity, CriticalStrike],
    ability: ["undead", "CriticalStrike15X3"],
    cost: 131,
}

export let defaultBoneFletcher = {
    type: "summonUnitCard",
    img: BTNSkeletonMage,
    name: "BoneFletcher",
    attack: 3,
    rangeOfAttack: "range",
    typeOfAttack: "physic",
    attackSpeed: 3,
    hp: 9,
    hpMax: 9,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNSkeletalLongevity],
    ability: ["undead"],
    cost: 72,
}
export let defaultSkeletonWarrior = {
    type: "summonUnitCard",
    img: BTNSkeletonWarrior,
    name: "SkeletonWarrior",
    attack: 3,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 9,
    hpMax: 9,
    armor: 1,
    DefaultArmor: 1,
    abilityImg: [BTNSkeletalLongevity],
    ability: ["undead"],
    cost: 23,
}

export let defaultSkeletonKing = {
    type: "summonUnitCard",
    img: SkeletonKing,
    name: "SkeletonKing",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 16,
    hpMax: 16,
    armor: 2,
    DefaultArmor: 2,
    abilityImg: [BTNSkeletalLongevity, CriticalStrike],
    ability: ["undead", "CriticalStrike15X3"],
    cost: 131,
}
export let defaultPeasant = Object.freeze({
    type: "unitCard",
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
export let defaultMilitia = Object.freeze({
    type: "unitCard",
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
export let defaultFootman = {
    type: "unitCard",
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
export let defaultGryphonRider = {
    type: "unitCard",
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
export let defaultTower = {
    type: "unitCard",
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
export let defaultKnight = {
    type: "unitCard",
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
export let defaultPaladin = {
    type: "unitCard",
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

export let defaultAcolyte = {
    type: "unitCard",
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
export let defaultGhoul = {
    type: "unitCard",
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
export let defaultZombi = {
    type: "unitCard",
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
export let defaultTraxa = {
    type: "unitCard",
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

export let defaultButcher = {
    type: "unitCard",
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

export let defaultWyrm = {
    type: "unitCard",
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
export let defaultDreadLord = {
    type: "unitCard",
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
export let defaultFiend = {
    type: "unitCard",
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
export let defaultNerub = {
    type: "unitCard",
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
export let defaultDK = {
    type: "unitCard",
    img: BTNHeroDeathKnight,
    name: "DeathKnight",
    attack: 4,
    rangeOfAttack: "melee",
    typeOfAttack: "physic",
    attackSpeed: 1,
    hp: 15,
    hpMax: 15,
    armor: 3,
    DefaultArmor: 4,
    abilityImg: [BTNSkeletalLongevity, BTNUnholyAura, BTNAnimateDead],
    ability: ["undead", "UnholyAura", "BorrowedTime"],
    cost: 349,
}
export let defaultElfWorker = {
    type: "unitCard",
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
export let defaultHighElvenArcher = {
    type: "unitCard",
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
export let defaultPriest = {
    type: "unitCard",
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
export let defaultSorceress = {
    type: "unitCard",
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
    abilityImg: [BTNSlowOff, BTNSheep],
    ability: ["Slow", "Hex"],
    cost: 46,
}
export let defaultDragonHawk = {
    type: "unitCard",
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
export let defaultSpellBreaker = {
    type: "unitCard",
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
export let defaultWindRunner = {
    type: "unitCard",
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
export let defaultPeon = {
    type: "unitCard",
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
export let defaultRaider = {
    type: "unitCard",
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
export let defaultWyvernRider = {
    type: "unitCard",
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
export let defaultGrunt = {
    type: "unitCard",
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
export let defaultKodo = {
    type: "unitCard",
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
export let defaultTaurenChieftain = {
    type: "unitCard",
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
export let defaultBladeMaster = {
    type: "unitCard",
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